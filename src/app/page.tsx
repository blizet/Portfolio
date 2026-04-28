"use client";

import { useEffect, useState } from "react";
import NameLoader from "@/components/loader/NameLoader";
import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Creative from "@/components/sections/Creative";
import Awards from "@/components/sections/Awards";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import StickerPeel from "@/components/StickerPeel";
import { basePath } from "@/lib/basePath";

export default function Home() {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [loaderMounted, setLoaderMounted] = useState(true);

  useEffect(() => {
    const imageUrls = [
      `${basePath}/images/fate_1.png`,
      `${basePath}/images/prosper_1.png`,
      `${basePath}/images/clowder_1.png`,
      `${basePath}/images/aossie_1.png`,
      `${basePath}/images/kridin_1.png`,
      `${basePath}/images/ext_1.png`,
      `${basePath}/images/rnt_1.png`,
    ];

    let loadedCount = 0;
    const totalImages = imageUrls.length;

    const checkAllLoaded = () => {
      loadedCount++;
      if (loadedCount === totalImages) {
        setImagesLoaded(true);
      }
    };

    imageUrls.forEach((url) => {
      const img = new window.Image();
      img.onload = checkAllLoaded;
      img.onerror = checkAllLoaded;
      img.src = url;
    });

    const timeout = setTimeout(() => setImagesLoaded(true), 5500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (loaderMounted) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
  }, [loaderMounted]);

  const handleAnimationDone = () => {
    setTransitioning(true);
    setTimeout(() => setLoaderMounted(false), 750);
  };

  return (
    <>
      {loaderMounted && (
        <NameLoader imagesReady={imagesLoaded} onAnimationDone={handleAnimationDone} />
      )}
      {!loaderMounted && <SmoothScroll />}
      {!loaderMounted && <StickerPeel />}
      <main className={`transition-opacity duration-1000 ${transitioning ? "opacity-100" : "opacity-0"}`}>
        <Nav />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Awards />
        <Creative />
        <Faq />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
