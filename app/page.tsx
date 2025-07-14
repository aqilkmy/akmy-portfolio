"use client";

import { useRef, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import BlurText from "./components/BlurText/BlurText";
import ShinyText from "./components/ShinyText/ShinyText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import ScrollReveal from './components/ScrollReveal/ScrollReveal';


import Link from 'next/link';
import clsx from 'clsx';
import { routeModule } from 'next/dist/build/templates/pages';
import CurvedLoop from './components/CurvedLoop/CurvedLoop';
import ScrollFadeIn from './components/ScrollFadeIn';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./components/ui/breadcrumb"
import SkillBar from './components/SkillBar';
import GitHubStats from './components/GithubStats';
import CircularGallery from './components/CircularGallery/CircularGallery';
import { handleScrollTo } from "./components/Lenis";



const TiltedCard = dynamic(() => import('./components/TiltedCard/TiltedCard'), {
  ssr: false,
  loading: () => <div className="w-[300px] h-[300px] bg-gray-800 animate-pulse rounded-xl" />, 
});

const Aurora = dynamic(() => import("./components/Aurora/Aurora"), { ssr: false });
const Squares = dynamic(() => import("./components/Squares/Squares"), { ssr: false });
const Crosshair = dynamic(() => import('./components/Crosshair/Crosshair'), { ssr: false, loading: () => null });

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

        <header
          className={clsx(
            'fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out',
            scrolled ? 'w-8/12 py-4' : 'w-11/12 py-4'
          )}
        >
          <nav className="text-neutral-200 rounded-full relative z-10 bg-white/5 backdrop-blur-xs border border-white/30 hover:drop-shadow-[0_0_40px_#38bdf8] transition-all duration-500">
            <div className={clsx(
              'mx-auto flex items-center transition-all duration-300 px-6',
              scrolled ? 'max-w-6xl py-4 justify-center' : '  justify-between max-w-7xl py-4'
            )}>


              <div className={clsx(
                "text-xl font-bold transition-all duration-500 ease-in-out origin-left",
                scrolled
                  ? "opacity-0 scale-95 absolute -left-10 pointer-events-none"
                  : "opacity-100 scale-100 static"
              )}>
                <span className="text-neutral-200">Aqil</span>
                <span className="text-slate-400">Kmy</span>
              </div>

              <ul className={clsx('flex font-semibold text-sm text-neutral-300 transition-all duration-500 ease-in-out',
                scrolled ? 'gap-6' : 'gap-10')
              }>
                <li>
                  <button onClick={() => handleScrollTo("#home")} className="hover:text-white transition">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => handleScrollTo("#about")} className="hover:text-white transition">
                    About
                  </button>
                </li>
                <li>
                  <button onClick={() => handleScrollTo("#githubstat")} className="hover:text-white transition">
                    Github Stats
                  </button>
                </li>
                {/* 
                <li>
                  <button onClick={() => handleScrollTo("#certif")} className="hover:text-white transition">
                    Certificate
                  </button>
                </li> 
                */}
                <li>
                  <button onClick={() => handleScrollTo("#collection")} className="hover:text-white transition">
                    Collection
                  </button>
                </li>
                <li>
                  <button onClick={() => handleScrollTo("#contact")} className="hover:text-white transition">
                    Contact
                  </button>
                </li>

              </ul>
            </div>
          </nav>
        </header>


        <div className="relative justify-center mx-auto mt-44 max-w-100vdh z-10 pt-20">
          <div className="flex justify-between items-center px-20">
            <div className="flex flex-col justify-center">
              <div>
                <BlurText
                  text="Hello!"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-7xl font-bold my-2 drop-shadow-[0_0_40px_#38bdf8]"
                />
              </div>
              <div>
                <BlurText
                  text="I'm Muh. Aqil Karomy"
                  delay={500}
                  animateBy="words"
                  direction="bottom"
                  className="text-4xl font-semibold my-2 drop-shadow-[0_0_40px_#38bdf8]"
                />
              </div>
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
              <div className="bg-slate-400 w-1/3 h-[3px] rounded-full my-2"></div>
              </AnimatedContent>
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
                delay={0.5}
              >
                <div className='w-9/12 font-light my-2 drop-shadow-[0_0_40px_#38bdf8]'>
                  I'm a <span className="font-bold">graphic designer</span> and an undergraduate Informatics student at Jenderal Soedirman University.
                </div>
              </AnimatedContent>
            </div>
            
            <div className="relative w-[300px] h-[300px]">
              <div className={`w-[301px] h-[301px] rounded-full absolute bottom-0 left-0 z-0 bg-white/5 backdrop-blur-xs border border-white/20 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
              <div className="w-[300px] h-auto absolute bottom-0 left-0 z-10 hover:drop-shadow-[0_0_40px_#194D65] transition-all duration-500">
                <ScrollFadeIn delay={700}>
                  <img src="/img/foto-1.webp" alt="foto" className="w-full h-auto object-cover" />
                </ScrollFadeIn>
              </div>
            </div>
          </div>
        </div>
        
        <ScrollFadeIn delay={700}>
          <section id='about' className='scroll-m-24 relative z-10'>
            <div className="mt-40 ">
              <div className={`font-semibold text-xl text-center drop-shadow-[0_0_40px_#38bdf8] transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                About Me
              </div>

              <div className={`text-center bg-slate-400 w-5 h-[3px] rounded-full my-2 mx-auto transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>

              <div className="mt-20 mx-auto max-w-100vdh ">
                <div className='mx-20 flex gap-4'>
                  <div className='w-3/5 px-8 text-justify bg-white/5 backdrop-blur-xs border border-white/20 rounded-xl py-4 hover:drop-shadow-[0_0_40px_#38bdf8] transition-all duration-500'>
                    <div className='text-xl font-semibold text-neutral-200 mb-6'>
                      Introduce
                    </div>
                    <div>
                      I’m Muhammad Aqil Karomy, a passionate graphic designer with over 4 years of experience in the creative industry. I specialize in 2D design for both digital and print media, including posters, social media content, apparel graphics, and branding materials. My journey began in high school through organizational work and has grown into a deep commitment to delivering clear, impactful, and meaningful visuals. <br /> <br />
                      Currently, I’m also pursuing a degree in Informatics at Jenderal Soedirman University, where I continue to sharpen both my creative and technical skills. I enjoy turning ideas into visual stories and helping individuals, brands, and communities communicate their identity through design.
                    </div>
                  </div>
                  <div className='w-2/5 px-8 text-justify bg-white/5 backdrop-blur-xs border border-white/20 rounded-xl py-4 hover:drop-shadow-[0_0_40px_#38bdf8] transition-all duration-500'>
                    <h2 className="text-xl font-semibold text-neutral-200 mb-6">Skills</h2>
                    <SkillBar label="Adobe Photoshop" percent={80} />
                    <SkillBar label="Adobe Illustrator" percent={70} />
                    <SkillBar label="Figma" percent={45} />
                    <SkillBar label="Canva" percent={70} />
                    <SkillBar label="HTML CSS & Tailwind" percent={60} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollFadeIn>  


        <ScrollFadeIn delay={700}>
          <section id='githubstat' className='scroll-m-24 relative z-10 my-24'>
            <div className=''>
                <GitHubStats />
            </div>
          </section>
        </ScrollFadeIn>     

        <ScrollFadeIn delay={700}>
          <section id='collection' className='scroll-m-24 relative z-10 my-24'>
            <div className={`font-semibold text-xl text-center drop-shadow-[0_0_40px_#38bdf8] transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              Collection
            </div>

            <div className={`text-center bg-slate-400 w-5 h-[3px] rounded-full my-2 mx-auto transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>

            <div className='' style={{ height: '600px', position: 'relative' }}>
              <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
            </div>
            
            <div className='flex justify-center'>
              <Link href={"/collection"} className='text-center text-neutral-200 rounded-full z-10 bg-white/5 backdrop-blur-xs border border-white/30 px-6 py-1 my-4 hover:bg-white/40 hover:drop-shadow-[0_0_40px_#38bdf8] transition-colors duration-300'>
                Go to Collection Page
              </Link>
            </div>
          </section>
        </ScrollFadeIn>

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