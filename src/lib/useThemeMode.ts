"use client";

import { useSyncExternalStore } from "react";

export type ThemeMode = "light" | "dark";

function getSnapshot(): ThemeMode {
  if (typeof document === "undefined") return "dark";
  const v = document.documentElement.getAttribute("data-theme");
  return v === "light" ? "light" : "dark";
}

// Server snapshot — must be stable. We default to "dark", which matches the
// initial CSS. The inline <script> in layout.tsx flips the document attribute
// before hydration, and React reconciles to the real snapshot via getSnapshot
// so there's no flash of wrong theme on properly-themed components.
function getServerSnapshot(): ThemeMode {
  return "dark";
}

function subscribe(callback: () => void) {
  if (typeof document === "undefined") return () => {};
  const root = document.documentElement;
  const obs = new MutationObserver(callback);
  obs.observe(root, { attributes: true, attributeFilter: ["data-theme"] });

  const onStorage = (e: StorageEvent) => {
    if (e.key === "theme") callback();
  };
  window.addEventListener("storage", onStorage);

  return () => {
    obs.disconnect();
    window.removeEventListener("storage", onStorage);
  };
}

export function useThemeMode(): ThemeMode {
  // useSyncExternalStore reads the live document attribute on every render and
  // re-runs whenever data-theme changes — so client-only theme reads never
  // lag behind a toggle.
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
