"use client";

import { useRef, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import BlurText from "../components/BlurText/BlurText";
import ShinyText from "../components/ShinyText/ShinyText";
import AnimatedContent from "../components/AnimatedContent/AnimatedContent";
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';


import Link from 'next/link';
import clsx from 'clsx';
import { routeModule } from 'next/dist/build/templates/pages';
import CurvedLoop from '../components/CurvedLoop/CurvedLoop';
import ScrollFadeIn from '../components/ScrollFadeIn';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb"


const TiltedCard = dynamic(() => import('../components/TiltedCard/TiltedCard'), {
  ssr: false,
  loading: () => <div className="w-[300px] h-[300px] bg-gray-800 animate-pulse rounded-xl" />, 
});

const Aurora = dynamic(() => import("../components/Aurora/Aurora"), { ssr: false });
const Squares = dynamic(() => import("../components/Squares/Squares"), { ssr: false });
const Crosshair = dynamic(() => import('../components/Crosshair/Crosshair'), { ssr: false, loading: () => null });

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);


  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  
  const projects = [
    {
      img: "/img/eyf/eyf-photo-1.webp",
      title: "Engineering Youth Festival",
      desc: "Contribute in graphic design staff on campuss event",
      year: "2024",
      height: "300px",
      tag: ["Graphic Design", "Photography"],
      route:"/collection/eyfPage"
    },
    {
      img: "/img/bem/Kabinet.png",
      title: "BEM Unsoed 2025's Logo",
      desc: "Make a 4 different logo of organization",
      year: "2025",
      height: "300px",
      tag: ["Graphic Design", "Photography"],
      route:"/collection/bemLogoPage"
    },
    {
      img: "/img/silverqueen-comp/feed1.webp",
      title: "Silver Queen Competition",
      desc: "Silver Queen Competition",
      year: "2022",
      height: "300px",
      tag: ["Graphic Design", "Photography"],
      route:"/collection/SQcompPage"
    },
    {
      img: "/img/gimjam-asset/cover.png",
      title: "SGDC on GimJam ITB 2D Artist",
      desc: "SGDC on GimJam ITB 2D Artist",
      year: "2025",
      height: "300px",
      tag: ["Graphic Design", "Photography"],
      route:"/collection/gimjamPage"
    },
    {
      img: "/img/poster/PosterJDU.webp",
      title: "Posters",
      desc: "Posters",
      year: "All Time",
      height: "300px",
      tag: ["Graphic Design", "Photography"],
      route:"/collection/postersPage"
    },
    {
      img: "/img/shirt/shirt-2.webp",
      title: "T-Shirt",
      desc: "T-Shirt",
      year: "All Time",
      height: "300px",
      tag: ["Graphic Design", "Photography"],
      route:"/collection/t-shirtPage"
    },
    {
      img: "/img/other-design/other-1.webp",
      title: "Other Design",
      desc: "Other Design",
      year: "All Time",
      height: "300px",
      tag: ["Graphic Design", "Photography"],
      route:"/collection/otherPage"
    },
    {
      img: "/img/jeans/jeans-1.webp",
      title: "Savora Jeans",
      desc: "Savora Jeans",
      year: "2025",
      height: "300px",
      tag: ["Graphic Design", "Photography"],
      route:"/collection/savoraPage"
    },
    
  ]


  return (
    <div ref={containerRef} className="text-neutral-200 max-w-screen overflow-x-hidden">
      

      <div id='home' className="relative min-h-screen overflow-x-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Aurora 
          colorStops={["#60BADE", "#293A55", "#60BADE"]} 
          blend={1} 
          amplitude={1.5} 
          speed={1} 
          />
        </div>

        <div className="absolute inset-0 z-0 overflow-hidden">
          <Squares 
          speed={0.5} 
          squareSize={30} 
          direction='diagonal' 
          borderColor='#dddddd33' 
          hoverFillColor='#eee' 
          />
        </div>

        <section id='porto' className='scroll-m-24 relative z-10 my-10 mx-4'>
          <div className='max-w-7xl mx-auto'>
            <div className='flex gap-5'>
              <div className='mb-4'>
                <Link
                  href="/"
                  className=" relative inline-block text-neutral-200 rounded-full z-10 bg-white/5 backdrop-blur-xs border border-white/30 px-4 py-1 my-4 hover:bg-white/40 hover:drop-shadow-[0_0_40px_#38bdf8] transition-colors duration-300"
                >
                  Back
                </Link>
              </div>

              <div className='my-6'>
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
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </div>
          </div>          
          <div className='max-w-6xl mx-auto grid overflow-y-visible  '>

            <div className='flex flex-col lg:flex-row lg:w-2/5 md:w-full justify-between gap-4'>
              <div>
                <BlurText
                  text="Design & Photo"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-slate-400 text-2xl font-semibold "
                />
              </div>
              <div className='mt-auto'>
                <AnimatedContent
                  distance={150}
                  direction="horizontal"
                  reverse={true}
                  duration={1.2}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  scale={1.1}
                  threshold={0.2}
                  delay={0.3}
                >
                  <div className='bg-slate-400 w-72 lg:w-44 h-[4px] rounded-full'></div>  
                </AnimatedContent>
              </div>
            </div>
            <div>
              <BlurText
                text="Collection"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-5xl text-neutral-200 mt-4 font-bold drop-shadow-[0_0_40px_#38bdf8]"
              />
            </div>
            
            
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 mt-16">
              {projects.map((item, index) => (
                <ScrollFadeIn key={index} delay={index * 100}>
                  <Link href={item.route} className="block w-full mb-6 break-inside-avoid">
                    <div
                      onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        setHoverPos({
                          x: e.clientX - rect.left,
                          y: e.clientY - rect.top,
                        });
                        setHoverIndex(index);
                      }}
                      onMouseLeave={() => setHoverIndex(null)}
                      className="drop-shadow-[0_0_80px_#21343D] rounded-3xl border border-neutral-800 bg-neutral-900 overflow-hidden p-6 md:p-8 group w-full h-full flex flex-col transition-all duration-300"
                    >
                      {/* Hover Light Effect */}
                      <div
                        className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out"
                        style={{
                          opacity: hoverIndex === index ? 1 : 0,
                          background: `radial-gradient(circle at ${hoverPos.x}px ${hoverPos.y}px, rgba(56, 189, 248, 0.10), transparent 80%)`,
                        }}
                      />

                      {/* Image Container */}
                      <div className="relative overflow-hidden rounded-xl mb-4 bg-gradient-to-br from-background/50 to-background/80 shadow-lg border border-transparent group-hover:border-white/30 transition-all duration-300">
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                        <div
                          className="overflow-hidden object-cover w-full h-full"
                          style={{ height: `${item.height || 300}px` }}
                        >
                          <img
                            src={item.img}
                            alt={item.title}
                            width="800"
                            height={item.height || 300}
                            loading="eager"
                            className="w-full h-full object-cover transition-transform duration-300"
                          />
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className="px-2 md:px-4 text-left flex flex-col h-full">
                        <h3 className="text-xl font-black mb-2 flex items-center gap-2 group-hover:text-primary transition-colors text-wrap">
                          {item.title}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-external-link h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <path d="M15 3h6v6" />
                            <path d="M10 14L21 3" />
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          </svg>
                        </h3>

                        <p className="text-muted-foreground mb-4 text-sm md:text-base font-extralight text-neutral-300">
                          {item.desc}
                        </p>

                        {/* Tags */}
                        <div className="flex gap-2 flex-wrap mt-auto">
                          {item.tag.map((tag, i) => (
                            <span
                              key={i}
                              className="mb-2 bg-neutral-800 px-3 py-1 rounded-full text-xs hover:bg-neutral-700 hover:text-primary-foreground transition-colors duration-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollFadeIn>
              ))}
            </div>

          

          </div>
        </section> 

        {/* <div className='overflow-x-visible'>
          <Crosshair 
          containerRef={containerRef} 
          color="#616364" 
          visible={true} 
          />
        </div>                   */}
        <div className="text-center relative z-10 text-xs m-5 font-light">
            © 2025 Designed By AqilKmy
        </div>

      </div>
    </div>
  );
}