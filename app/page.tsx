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
  
  
  const projects = [
    {
      img: "/img/eyf/eyf-photo-1.webp",
      title: "Engineering Youth Festival",
      desc: "Contribute in graphic design staff on campuss event",
      year: "2024",
      height: "300px",
      tag: ["Graphic Design", "Photography"],
      route:"/eyfPage"
    },
    {
      img: "/img/bem/Kabinet.png",
      title: "BEM Unsoed 2025's Logo",
      desc: "Make a 4 different logo of organization",
      year: "2025",
      height: "300px",
      tag: ["Graphic Design", "Photography"],
      route:"/bemLogoPage"
    },
    {
      img: "/img/silverqueen-comp/feed1.webp",
      title: "Silver Queen Competition",
      desc: "Silver Queen Competition",
      year: "2022",
      height: "300px",
      tag: ["Graphic Design", "Photography"],
      route:"/SQcompPage"
    },
    {
      img: "/img/gimjam-asset/cover.png",
      title: "SGDC on GimJam ITB 2D Artist",
      desc: "SGDC on GimJam ITB 2D Artist",
      year: "2025",
      height: "300px",
      tag: ["Graphic Design", "Photography"],
      route:"/gimjamPage"
    },
    {
      img: "/img/poster/PosterJDU.webp",
      title: "Posters",
      desc: "Posters",
      year: "All Time",
      height: "300px",
      tag: ["Graphic Design", "Photography"],
      route:"/postersPage"
    },
    {
      img: "/img/shirt/shirt-2.webp",
      title: "T-Shirt",
      desc: "T-Shirt",
      year: "All Time",
      height: "300px",
      tag: ["Graphic Design", "Photography"],
      route:"/t-shirtPage"
    },
    {
      img: "/img/other-design/other-1.webp",
      title: "Other Design",
      desc: "Other Design",
      year: "All Time",
      height: "300px",
      tag: ["Graphic Design", "Photography"],
      route:"/otherPage"
    },
    {
      img: "/img/jeans/jeans-1.webp",
      title: "Savora Jeans",
      desc: "Savora Jeans",
      year: "2025",
      height: "300px",
      tag: ["Graphic Design", "Photography"],
      route:"/savoraPage"
    },
    
  ]


  return (
    <div ref={containerRef} className="text-neutral-200 max-w-screen overflow-x-hidden">
      

      <div id='home' className="relative min-h-screen overflow-x-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Aurora 
          colorStops={["#8CC6DD", "#384252", "#8CC6DD"]} 
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
          borderColor='#616364' 
          hoverFillColor='#eee' 
          />
        </div>

        <header
          className={clsx(
            'fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out',
            scrolled ? 'w-8/12 py-4' : 'w-11/12 py-4'
          )}
        >
          <nav className="text-neutral-200 rounded-full relative z-10 bg-white/5 backdrop-blur-xs border border-white/30">
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
                <li><Link href="#home" className="hover:text-white transition">Home</Link></li>
                <li><Link href="#about" className="hover:text-white transition">About</Link></li>
                <li><Link href="#skills" className="hover:text-white transition">Skills</Link></li>
                <li><Link href="#githubstat" className="hover:text-white transition">Github Stats</Link></li>
                <li><Link href="#certif" className="hover:text-white transition">Certificate</Link></li>
                <li><Link href="/collection" className="hover:text-white transition">Collection</Link></li>
                <li><Link href="#contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
          </nav>
        </header>


        <div className="relative justify-center mx-auto mt-44 max-w-7xl z-10 pt-20">
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
              <div className="w-[301px] h-[301px] rounded-full absolute bottom-0 left-0 z-0 bg-white/5 backdrop-blur-xs border border-white/20"></div>
              <div className="w-[300px] h-auto absolute bottom-0 left-0 z-10">
                <ScrollFadeIn>
                  <img src="/img/foto-1.webp" alt="foto" className="w-full h-auto object-cover" />
                </ScrollFadeIn>
              </div>
            </div>
          </div>
        </div>
        
        <section id='about' className='scroll-m-24 relative z-10'>
          <div className="mt-40 ">
            <div className={`font-semibold text-xl text-center drop-shadow-[0_0_40px_#38bdf8] transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              About
            </div>

            <div className={`text-center bg-slate-400 w-5 h-[3px] rounded-full my-2 mx-auto transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>

            <div className="mt-20 mx-auto max-w-5xl grid gap-y-6">
              <div className='w-3/5 px-8 text-justify bg-white/5 backdrop-blur-xs border border-white/20 rounded-4xl py-4'>
                I’m Muhammad Aqil Karomy, a passionate graphic designer with over 4 years of experience in the creative industry. I specialize in 2D design for both digital and print media, including posters, social media content, apparel graphics, and branding materials. My journey began in high school through organizational work and has grown into a deep commitment to delivering clear, impactful, and meaningful visuals.
              </div>
              <div className='w-3/5 px-8 text-justify bg-white/5 backdrop-blur-xs border border-white/20 rounded-4xl py-4 ml-auto'>
                Currently, I’m also pursuing a degree in Informatics at Jenderal Soedirman University, where I continue to sharpen both my creative and technical skills. I enjoy turning ideas into visual stories and helping individuals, brands, and communities communicate their identity through design.
              </div>
            </div>
          </div>
        </section>

        <section id='skills' className='scroll-m-24 relative z-10 my-24'>
          <div >
              
          </div>
        </section>

        <div className='overflow-x-visible'>
          <Crosshair 
          containerRef={containerRef} 
          color="#616364" 
          visible={true} 
          />
        </div>                  

      </div>
    </div>
  );
}