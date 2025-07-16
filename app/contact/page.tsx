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
import SkillBar from '../components/SkillBar';
import GitHubStats from '../components/GithubStats';
import CircularGallery from '../components/CircularGallery/CircularGallery';
import { handleScrollTo } from "../components/Lenis";



const TiltedCard = dynamic(() => import('../components/TiltedCard/TiltedCard'), {
  ssr: false,
  loading: () => <div className="w-[300px] h-[300px] bg-gray-800 animate-pulse rounded-xl" />, 
});

const Aurora = dynamic(() => import("../components/Aurora/Aurora"), { ssr: false });
const Squares = dynamic(() => import("../components/Squares/Squares"), { ssr: false });
const Crosshair = dynamic(() => import('../components/Crosshair/Crosshair'), { ssr: false, loading: () => null });

export default function contact() {
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
  
  return (
    <div ref={containerRef} className="text-neutral-200 max-w-screen overflow-x-hidden"
    style={{
      scrollBehavior: 'smooth',
    }}
    >
      

      <div id='home' className="relative min-h-screen overflow-x-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden bg-transparent">
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

        <div className="relative z-10 p-10 text-neutral-200 text-justify grid gap-10">
            <div className="max-w-7xl w-full mx-auto px-6 mt-12">
                <div className="flex items-center gap-4">
                    {/* Tombol Back */}
                    <Link
                    href="/"
                    className="text-neutral-200 rounded-full bg-white/5 backdrop-blur-xs border border-white/30 px-4 py-1 hover:bg-white/40 hover:drop-shadow-[0_0_40px_#38bdf8] transition-colors duration-300"
                    >
                    Back
                    </Link>

                    {/* Breadcrumb */}
                    <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator/>
                        <BreadcrumbItem>
                        <BreadcrumbPage>Contact</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                    </Breadcrumb>
                </div>
                
            </div>

            {/* bagian contact */}
          <div className="max-w-3xl w-full mx-auto px-6 mt-10">
            <h2 className="text-3xl font-bold text-center mb-6 drop-shadow-[0_0_40px_#38bdf8]">
              Get in Touch
            </h2>

            <div className=''>
              <div>
                <form
                  className="bg-white/5 backdrop-blur-xs border border-white/20 rounded-xl p-8 space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Message sent! (Belum terhubung ke backend)");
                  }}
                >
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-md font-light text-xs bg-neutral-900 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 font-light text-xs rounded-md bg-neutral-900 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 font-light text-xs rounded-md  bg-neutral-900 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-cyan-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-cyan-600 transition duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              <div>

              </div>

            </div>
          </div>


        </div>

        
        <div className="text-center relative z-10 text-xs m-5 font-light">
            © 2025 Designed By AqilKmy
        </div>
      </div>
    </div>
  );
}