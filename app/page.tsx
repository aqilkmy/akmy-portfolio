"use client";

import { useRef, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import BlurText from "./components/BlurText/BlurText";
import ShinyText from "./components/ShinyText/ShinyText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import ScrollReveal from './components/ScrollReveal/ScrollReveal';

import Link from 'next/link';
import clsx from 'clsx';

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
      tag: ["Graphic Design", "Photography"]
    },
    {
      img: "/img/bem/Kabinet.png",
      title: "BEM Unsoed 2025's Logo",
      desc: "Make a 4 different logo of organization",
      year: "2025",
      height: "300px",
      tag: ["Graphic Design", "Photography"]
    },
    {
      img: "/img/silverqueen-comp/feed1.webp",
      title: "Silver Queen Competition",
      desc: "Silver Queen Competition",
      year: "2022",
      height: "300px",
      tag: ["Graphic Design", "Photography"]
    },
    {
      img: "/img/gimjam-asset/cover.png",
      title: "SGDC on GimJam ITB 2D Artist",
      desc: "SGDC on GimJam ITB 2D Artist",
      year: "2025",
      height: "300px",
      tag: ["Graphic Design", "Photography"]
    },
    {
      img: "/img/poster/PosterJDU.webp",
      title: "Posters",
      desc: "Posters",
      year: "All Time",
      height: "300px",
      tag: ["Graphic Design", "Photography"]
    },
    {
      img: "/img/shirt/shirt-2.webp",
      title: "T-Shirt",
      desc: "T-Shirt",
      year: "All Time",
      height: "300px",
      tag: ["Graphic Design", "Photography"]
    },
    {
      img: "/img/other-design/other-1.webp",
      title: "Other Design",
      desc: "Other Design",
      year: "All Time",
      height: "300px",
      tag: ["Graphic Design", "Photography"]
    },
    {
      img: "/img/jeans/jeans-1.webp",
      title: "Savora Jeans",
      desc: "Savora Jeans",
      year: "2025",
      height: "300px",
      tag: ["Graphic Design", "Photography"]
    },
    
  ]


  return (
    <div ref={containerRef} className="text-neutral-200 overflow-x-hidden">
      

      <div id='home' className="relative min-h-screen overflow-x-hidden">
        <div className="absolute inset-0 z-0">
          <Aurora 
          colorStops={["#8CC6DD", "#384252", "#8CC6DD"]} 
          blend={1} 
          amplitude={1.5} 
          speed={1} 
          />
        </div>

        <div className="absolute inset-0 z-0">
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
            scrolled ? 'w-8/12 py-4 shadow-lg' : 'w-11/12 py-4'
          )}
        >
          <nav className="text-neutral-200 rounded-full relative z-10 bg-white/5 backdrop-blur-xs border border-white/30">
            <div className={clsx(
              'mx-auto flex justify-between items-center transition-all duration-300 px-6',
              scrolled ? 'max-w-6xl py-4' : 'max-w-7xl py-4'
            )}>
              <div className="text-xl font-bold transition-all">
                <span className="text-neutral-200">Aqil</span>
                <span className="text-slate-400">Kmy</span>
              </div>
              <ul className="flex gap-10 font-semibold text-sm text-neutral-300">
                <li><Link href="#home" className="hover:text-white transition">Home</Link></li>
                <li><Link href="#about" className="hover:text-white transition">About</Link></li>
                <li><Link href="#porto" className="hover:text-white transition">Collection</Link></li>
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
                <img src="/img/foto-1.webp" alt="foto" className="w-full h-auto object-cover" />
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

        <section id='porto' className='scroll-m-16 relative z-10'>     
          <div className=' my-40 max-w-6xl mx-auto grid overflow-y-visible  '>
            <div className='flex w-2/5 justify-between'>
              <div>
                <BlurText
                  text="Design & Photo"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-slate-400 text-2xl font-semibold"
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
                  <div className='bg-slate-400 w-44 h-[4px] rounded-full'></div>  
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
            
            
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 mt-16 space-y-6">
              {projects.map((item, index) => (
                <button
                  key={index}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    setHoverPos({
                      x: e.clientX - rect.left,
                      y: e.clientY - rect.top,
                    });
                    setHoverIndex(index);
                  }}
                  onMouseLeave={() => setHoverIndex(null)}
                  className="break-inside-avoid items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground block p-0 h-auto hover:bg-transparent w-full"
                >
                  <div className="relative rounded-3xl border border-neutral-800 bg-neutral-900 overflow-hidden p-8 group h-full w-full flex flex-col">

                    <div
                      className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out"
                      style={{
                        opacity: hoverIndex === index ? 1 : 0,
                        background: `radial-gradient(circle at ${hoverPos.x}px ${hoverPos.y}px, rgba(56, 189, 248, 0.10), transparent 80%)`,
                      }}
                    />
                    <div className="relative overflow-hidden rounded-xl mb-4 bg-gradient-to-br from-background/50 to-background/80 shadow-lg hover:border-primary/20 hover:border-1 transition-all duration-300">
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                      <div className="overflow-hidden object-cover w-full h-full transition-transform duration-300" style={{ height: `${item.height || 300}px` }}>
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
                    <div className="px-4 text-left flex flex-col h-full">
                      <h3 className="text-xl font-black mb-2 flex items-center gap-2 group-hover:text-primary transition-colors text-wrap">
                        {item.title}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <path d="M15 3h6v6"></path>
                          <path d="M10 14L21 3"></path>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        </svg>
                      </h3>
                      <p className="text-muted-foreground mb-4 text-sm md:text-base text-left text-wrap font-extralight text-neutral-300">{item.desc}</p>
                      <div className="flex gap-2 flex-wrap mt-auto">
                        {item.tag.map((tag, i) => (
                          <span
                            key={i}
                            className="mb-2 bg-secondary px-3 py-1 bg-neutral-800 rounded-full text-xs hover:bg-neutral-700 hover:text-primary-foreground transition-colors duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          

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