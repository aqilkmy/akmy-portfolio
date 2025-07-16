"use client";

import { useRef, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import BlurText from "./components/BlurText/BlurText";
import ShinyText from "./components/ShinyText/ShinyText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import ScrollReveal from './components/ScrollReveal/ScrollReveal';
import Link from 'next/link';
import clsx from 'clsx';
import CurvedLoop from './components/CurvedLoop/CurvedLoop';
import ScrollFadeIn from './components/ScrollFadeIn';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./components/ui/breadcrumb";
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
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  // NAVBAR

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = () => {
    setIsOpen(false); // close menu on nav click (mobile)
  };


  return (
    <div ref={containerRef} className="flex flex-col min-h-screen text-neutral-200 max-w-screen overflow-x-hidden" style={{ scrollBehavior: 'smooth' }}>
      <div id='home' className="relative flex-grow overflow-x-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden bg-transparent">
          <Aurora colorStops={["#60BADE", "#293A55", "#60BADE"]} blend={1} amplitude={1.5} speed={1} />
        </div>

        <div className="absolute inset-0 z-0 overflow-hidden">
          <Squares speed={0.5} squareSize={30} direction='diagonal' borderColor='#dddddd33' hoverFillColor='#eee' />
        </div>
        
        <header className={clsx(
          'fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out',
          scrolled ? 'w-11/12 md:w-8/12 py-5' : 'w-11/12 py-5'
        )}>
          <nav className="text-neutral-200 rounded-full relative z-10 ">
            <div className={clsx(
              'mx-auto flex items-center lg:px-6 transition-all duration-300 rounded-full',
              scrolled
                ? 'max-w-6xl py-4 px-2 justify-between lg:justify-center border-transparent lg:bg-white/5 lg:backdrop-blur-xs lg:border lg:border-white/30 hover:drop-shadow-[0_0_40px_#38bdf8] lg:transition-all lg:duration-500'
                : 'max-w-7xl py-4 px-6 justify-between bg-white/5 backdrop-blur-xs border border-white/30 hover:drop-shadow-[0_0_40px_#38bdf8] lg:transition-all lg:duration-500'
            )}>

              {/* Logo Wrapper */}
              <div className="relative w-28 h-8"> {/* pastikan lebar tetap agar tidak loncat saat logo disembunyikan */}
                <div className={clsx(
                  "absolute inset-0 text-xl font-bold origin-center transition-all duration-500 ease-in-out",
                  scrolled ? "opacity-0 scale-90 pointer-events-none" : "opacity-100 scale-100"
                )}>
                  <span className="text-neutral-200">Aqil</span><span className="text-slate-400">Kmy</span>
                </div>
              </div>


              {/* Hamburger icon (mobile only) */}
              <div className="md:hidden ">
                <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    {isOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>

              {/* Menu (desktop) */}
              <ul className={clsx("hidden md:flex font-semibold text-sm text-neutral-300 gap-6 md:gap-10 transition-all duration-500 ease-in-out",
                
              )}>
                <li><button onClick={() => handleScrollTo("#home")} className="hover:text-white transition">Home</button></li>
                <li><button onClick={() => handleScrollTo("#about")} className="hover:text-white transition">About</button></li>
                <li><button onClick={() => handleScrollTo("#githubstat")} className="hover:text-white transition">Github Stats</button></li>
                <li><button onClick={() => handleScrollTo("#collection")} className="hover:text-white transition">Collection</button></li>
                <li><Link href={'/contact'} className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>

            {/* Menu (mobile dropdown) */}
            {isOpen && (
              <div className={clsx("md:hidden relative flex justify-end",
                scrolled ? "mt-0" : "mt-4"
              )}>
                <div className='w-3/5 px-6 pb-4 pt-2 bg-slate-900/70 backdrop-blur-xs border border-white/20 rounded-xl'>
                  <ul className="flex flex-col gap-4 font-semibold text-sm text-neutral-300  text-end">
                    <li><button onClick={() => { handleScrollTo("#home"); setIsOpen(false); }} className="hover:text-white transition">Home</button></li>
                    <li><button onClick={() => { handleScrollTo("#about"); setIsOpen(false); }} className="hover:text-white transition">About</button></li>
                    <li><button onClick={() => { handleScrollTo("#githubstat"); setIsOpen(false); }} className="hover:text-white transition">Github Stats</button></li>
                    <li><button onClick={() => { handleScrollTo("#collection"); setIsOpen(false); }} className="hover:text-white transition">Collection</button></li>
                    <li><Link href={'/contact'} className="hover:text-white transition" onClick={() => setIsOpen(false)}>Contact</Link></li>
                  </ul>
                </div>
              </div>
            )}
          </nav>
        </header>


        <div className='px-4 sm:px-6 md:px-8 pb-10'>
          <div className="relative justify-center mx-auto lg:mt-44 mt-12 max-w-7xl z-10 pt-20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="flex flex-col justify-center md:w-1/2">
                <BlurText text="Hello!" delay={150} animateBy="words" direction="top" className="text-5xl md:text-7xl font-bold my-2 drop-shadow-[0_0_40px_#38bdf8]" />
                <BlurText text="I'm Muh. Aqil Karomy" delay={500} animateBy="words" direction="bottom" className="text-2xl md:text-4xl font-semibold my-2 drop-shadow-[0_0_40px_#38bdf8]" />
                <AnimatedContent distance={150} direction="horizontal" reverse={true} duration={1.2} ease="power3.out" initialOpacity={0} animateOpacity scale={1.1} threshold={0.2} delay={0.3}>
                  <div className="bg-slate-400 w-1/3 h-[3px] rounded-full my-2"></div>
                </AnimatedContent>
                <AnimatedContent distance={150} direction="horizontal" reverse={true} duration={1.2} ease="power3.out" initialOpacity={0} animateOpacity scale={1.1} threshold={0.2} delay={0.5}>
                  <div className='w-full md:w-9/12 font-light my-2 drop-shadow-[0_0_40px_#38bdf8]'>
                    I'm a <span className="font-bold">graphic designer</span> and an undergraduate Informatics student at Jenderal Soedirman University.
                  </div>
                </AnimatedContent>
              </div>
              <div className="relative w-60 h-60 md:w-[300px] md:h-[300px] mt-6 lg:mt-0 ">
                <div className={`w-full h-full rounded-full absolute bottom-0 left-0 z-0 bg-white/5 backdrop-blur-xs border border-white/20 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
                <div className="absolute bottom-0 left-0 z-10 hover:drop-shadow-[0_0_40px_#194D65] transition-all duration-500">
                  <ScrollFadeIn delay={700}>
                    <img src="/img/foto-1.webp" alt="foto" className="w-full h-auto object-cover" />
                  </ScrollFadeIn>
                </div>
              </div>
            </div>
          </div>

          <ScrollFadeIn delay={700}>
            <section id='about' className='scroll-m-24 relative z-10 mt-40'>
              <div className="text-xl text-center drop-shadow-[0_0_40px_#38bdf8] font-semibold transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}">About Me</div>
              <div className="text-center bg-slate-400 w-5 h-[3px] rounded-full my-2 mx-auto transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}"></div>
              <div className="mt-20 mx-auto max-w-screen-xl">
                <div className='flex flex-col lg:flex-row gap-6 px-4'>
                  <div className='w-full lg:w-3/5 text-justify bg-white/5 backdrop-blur-xs border border-white/20 rounded-xl p-6 hover:drop-shadow-[0_0_40px_#38bdf8] transition-all duration-500'>
                    <div className='text-xl font-semibold mb-6'>Introduce</div>
                    <p>
                      I’m Muhammad Aqil Karomy, a passionate graphic designer with over 4 years of experience in the creative industry. I specialize in 2D design for both digital and print media, including posters, social media content, apparel graphics, and branding materials. My journey began in high school through organizational work and has grown into a deep commitment to delivering clear, impactful, and meaningful visuals. <br /> <br />
                      Currently, I’m also pursuing a degree in Informatics at Jenderal Soedirman University, where I continue to sharpen both my creative and technical skills. I enjoy turning ideas into visual stories and helping individuals, brands, and communities communicate their identity through design.
                    </p>
                  </div>
                  <div className='w-full lg:w-2/5 text-justify bg-white/5 backdrop-blur-xs border border-white/20 rounded-xl p-6 hover:drop-shadow-[0_0_40px_#38bdf8] transition-all duration-500'>
                    <h2 className="text-xl font-semibold mb-6">Skills</h2>
                    <SkillBar label="Adobe Photoshop" percent={85} />
                    <SkillBar label="Adobe Illustrator" percent={70} />
                    <SkillBar label="Figma" percent={55} />
                    <SkillBar label="Canva" percent={70} />
                    <SkillBar label="HTML CSS & Tailwind" percent={60} />
                    <SkillBar label="Javascript & React.js" percent={30} />
                  </div>
                </div>
              </div>
            </section>
          </ScrollFadeIn>

          <ScrollFadeIn delay={700}>
            <section id='githubstat' className='scroll-m-24 relative z-10 my-24'>
              <GitHubStats />
            </section>
          </ScrollFadeIn>

          <ScrollFadeIn delay={700}>
            <section id='collection' className='scroll-m-24 relative z-10 my-24  overflow-x-visible'>
              <div className="font-semibold text-xl text-center drop-shadow-[0_0_40px_#38bdf8] transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}">Collection</div>
              <div className="text-center bg-slate-400 w-5 h-[3px] rounded-full my-2 mx-auto transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}"></div>
              <div className='w-full h-[200px] lg:h-[600px] relative'>
                <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
              </div>

              <div className='flex justify-center'>
                <Link href="/collection" className='text-center text-neutral-200 rounded-full z-10 bg-white/5 backdrop-blur-xs border border-white/30 px-6 py-1 my-4 hover:bg-white/40 hover:drop-shadow-[0_0_40px_#38bdf8] transition-colors duration-300'>
                  Go to Collection Page
                </Link>
              </div>
            </section>
          </ScrollFadeIn>
        </div>

        <footer className="text-center text-xs font-light py-4 z-10 bg-transparent relative">
          © 2025 Designed By AqilKmy
        </footer>
      </div>
    </div>
  );
}