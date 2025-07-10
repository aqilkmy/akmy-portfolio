"use client";

import { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import BlurText from "../../components/BlurText/BlurText";
import ShinyText from "../../components/ShinyText/ShinyText";
import AnimatedContent from "../../components/AnimatedContent/AnimatedContent";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";
import CurvedLoop from "../../components/CurvedLoop/CurvedLoop";

import clsx from "clsx";
import { routeModule } from "next/dist/build/templates/pages";
import { div } from "framer-motion/client";
import Masonry from 'react-masonry-css';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb"

const TiltedCard = dynamic(() => import("../../components/TiltedCard/TiltedCard"), {
  ssr: false,
  loading: () => (
    <div className="w-[300px] h-[300px] bg-gray-800 animate-pulse rounded-xl" />
  ),
});

const Aurora = dynamic(() => import("../../components/Aurora/Aurora"), { ssr: false });
const Squares = dynamic(() => import("../../components/Squares/Squares"), { ssr: false });
const Crosshair = dynamic(() => import("../../components/Crosshair/Crosshair"), {
  ssr: false,
  loading: () => null,
});

export default function EyfPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const item = [
    {
      img: "/img/eyf/eyf-photo-2.webp",
      alt: "Photo - Reality Club",
      height: "250px",
      width: "400px"
    },
    {
      img: "/img/eyf/eyf-photo-3.webp",
      alt: "Photo - Reality Club",
      height: "250px",
      width: "400px"
    },
    {
      img: "/img/eyf/eyf-photo-4.webp",
      alt: "Photo - Reality Club",
      height: "250px",
      width: "400px"
    },
    {
      img: "/img/eyf/eyf-photo-5.webp",
      alt: "Photo - Reality Club",
      height: "250px",
      width: "400px"
    },
    {
      img: "/img/eyf/eyf-photo-7.webp",
      alt: "Photo - Sal Priadi",
      height: "524px",
      width: "400px"
    },
    {
      img: "/img/eyf/eyf-photo-6.webp",
      alt: "Photo - Sal Priadi",
      height: "250px",
      width: "400px"
    },
    {
      img: "/img/eyf/kaos-eyf-1.webp",
      alt: "Staff Event Crew Shirt",
      height: "250px",
      width: "400px"
    },
    {
      img: "/img/eyf/kaos-eyf-2.webp",
      alt: "Staff Event Crew Shirt",
      height: "250px",
      width: "400px"
    },
    {
      img: "/img/eyf/kaos-eyf-3.webp",
      alt: "Staff Event Crew Shirt",
      height: "250px",
      width: "400px"
    },
    {
      img: "/img/eyf/kaos-eyf-4.webp",
      alt: "Staff Event Crew Shirt",
      height: "250px",
      width: "400px"
    },
    {
      img: "/img/eyf/kaos-eyf-5.webp",
      alt: "Final Staff Event Crew Shirt",
      height: "250px",
      width: "400px"
    },
    {
      img: "/img/eyf/kaos-eyf-6.webp",
      alt: "Staff Event Crew Shirt",
      height: "250px",
      width: "400px"
    },
  ]

  const breakpointColumnsObj = {
    default: 3,
    1024: 2,
    640: 1
  };

  return (
    <div ref={containerRef} className="text-neutral-200 overflow-x-hidden">
      <div id="home" className="relative min-h-screen overflow-x-hidden">
        {/* Background Layers */}
        <div className="absolute inset-0 z-0">
          <Aurora
            colorStops={["#8CC6DD", "#384252", "#8CC6DD"]}
            blend={1}
            amplitude={1.5}
            speed={1}
          />
        </div>
        <div className="overflow-x-hidden fixed inset-0 z-0">
          <CurvedLoop 
                marqueeText="Engineering ✦ Youth ✦ Festival ✦"
                speed={3}
                curveAmount={500}
                direction="right"
                interactive={true}
                className=""
              />
        </div>
        <div className="absolute inset-0 z-0">
          <Squares
            speed={0.5}
            squareSize={30}
            direction="diagonal"
            borderColor="#616364"
            hoverFillColor="#eee"
          />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 p-10 text-neutral-200 text-justify mx-auto grid justify-center">
          <div className="flex justify-center max-w-7xl">
            <div className="gap-y-3 grid">
              {/* Back Button */}
              <div>
                <Link
                  href="/collection"
                  className=" relative inline-block text-neutral-200 rounded-full z-10 bg-white/5 backdrop-blur-xs border border-white/30 px-4 py-1 my-4 hover:bg-white/40 hover:drop-shadow-[0_0_40px_#38bdf8] transition-colors duration-300"
                >
                  Back
                </Link>
              </div>

              <div className="my-6">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/collection">Collection</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Eyf</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>

              {/* Text Content */}
              <div className="relative text-center grid gap-y-4 mx-auto max-w-7xl w-full">
                <BlurText
                  text="Engineering Youth Festival"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-4xl font-bold drop-shadow-[0_0_40px_#38bdf8] text-center"
                />
                <p className="italic font-semibold text-neutral-300">
                  Role: Graphic Designer & Photographer
                </p>

                <ScrollReveal
                  baseOpacity={0}
                  enableBlur={true}
                  baseRotation={5}
                  blurStrength={10}
                  textClassName="text-justify font-light my-6"
                >
                  Contributed as a graphic designer and event photographer for the Engineering Youth
                  Festival, an event showcasing creativity and innovation among engineering students.
                  Responsibilities included creating visual materials and capturing event documentation
                  for publication and official archives.
                </ScrollReveal>

                
              </div>
            </div>
          </div>

          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex w-full gap-6"
            columnClassName="space-y-6"
          >

            {item.map((item, index) => (
                  <div
                    key={index}
                    className="break-inside-avoid items-center justify-center whitespace-nowrap [grid-row-end:span_var(--row-span)]"
                    style={{
                      gridRowEnd: `span ${Math.ceil(parseInt(item.height) / 10)}`
                    }}
                  >
                    <TiltedCard
                      imageSrc={item.img}
                      altText={item.alt}
                      captionText= {item.alt}
                      containerHeight={item.height}
                      containerWidth={item.width}
                      imageHeight={item.height}
                      imageWidth={item.width}
                      rotateAmplitude={12}
                      scaleOnHover={1.1}
                      showMobileWarning={false}
                      showTooltip={true}
                      displayOverlayContent={true}
                      bottomRightText={item.alt}
                    />
                  </div>
                )
              )
            }
          </Masonry>

        </div>
      </div>
    </div>
  );
}