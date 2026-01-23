import { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import DotGrid from './components/global/DotGrid';
import { NavBar, SideNav } from './components/global/Navbars';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Projects from './components/pages/Projects/Projects';
import Contact from './components/pages/Contact/Contact';
import Skills from './components/pages/Skills/Skills';

const PAGE_DATA = [
  { id: 'home', title: 'Home', color: '', Component: Home },
  { id: 'about', title: 'About', color: '', Component: About },
  { id: 'skills', title: 'Skills', color: '', Component: Skills },
  { id: 'projects', title: 'Projects', color: '', Component: Projects },
  { id: 'contact', title: 'Contact', color: '', Component: Contact },
];

export default function App() {
  const [activePageIndex, setActivePageIndex] = useState(0);
  const lenisRef = useRef<Lenis | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  function easeInOutBack(x: number): number {
    const c1 = 1.70158;
    const c2 = c1 * 1.525;

    return x < 0.5
      ? (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
      : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
  }
  function easeOutQuart(x: number): number {
    return 1 - Math.pow(1 - x, 4);
  }
  const scrollToPage = (index: number) => {
    if (index < 0 || index >= PAGE_DATA.length || !sectionRefs.current[index]) {
      return;
    }

    const targetElement = sectionRefs.current[index];

    if (lenisRef.current) {
      lenisRef.current.scrollTo(targetElement, {
        duration: 1.6,
        easing: easeInOutBack,
      });
    } else {
      targetElement?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: easeOutQuart,
      orientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      // Find which section is currently in view
      let currentIndex = 0;
      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            currentIndex = index;
          }
        }
      });

      if (currentIndex !== activePageIndex) {
        console.log(`Scroll detected - New index: ${currentIndex}, Previous: ${activePageIndex}`);
        setActivePageIndex(currentIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activePageIndex]);

  const getActiveColor = (index: number) => {
    switch (index) {
      case 0:
        return '#efc88b';
      case 1:
        return '#7c7c7c';
      case 2:
        return '#eee5e9';
      case 3:
        return '#cf5c36';
      default:
        return '#000000';
    }
  };

  return (
    <div className="bg-jet-black-100/95 font-nunito">
      <NavBar activePageIndex={activePageIndex} pages={PAGE_DATA} scrollToPage={scrollToPage} />
      <div className="z-0 fixed inset-0 opacity-30 pointer-events-none">
        <GridBackground
          baseColor={getActiveColor(activePageIndex)}
          activeColor={getActiveColor(activePageIndex)}
        />
      </div>
      <div className="relative flex flex-col w-full">
        {PAGE_DATA.map(({ id, Component }, index) => (
          <div
            key={id}
            ref={el => {
              sectionRefs.current[index] = el;
            }}
            className="relative flex justify-center items-center w-full min-h-dvh"
          >
            <Component />
          </div>
        ))}
      </div>

      <SideNav activePageIndex={activePageIndex} pages={PAGE_DATA} scrollToPage={scrollToPage} />
    </div>
  );
}

const GridBackground = ({ baseColor, activeColor }: { baseColor: string; activeColor: string }) => {
  return (
    <DotGrid
      dotSize={2}
      gap={20}
      baseColor={baseColor}
      activeColor={activeColor}
      proximity={120}
      shockRadius={250}
      shockStrength={5}
      resistance={750}
      returnDuration={1.5}
      className="w-full h-full"
    />
  );
};
