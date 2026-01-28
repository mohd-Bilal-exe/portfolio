import { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { NavBar, SideNav } from './components/global/Navbars';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Projects from './components/pages/Projects/Projects';
import Contact from './components/pages/Contact/Contact';
import Skills from './components/pages/Skills/Skills';
import GradualBlurMemo from './components/global/GradientBlur';
import Seo from './components/global/Seo';
import { twMerge } from 'tailwind-merge';

const PAGE_DATA = [
  { id: 'home', title: 'Home', color: '', Component: Home },
  { id: 'about', title: 'About', color: '', Component: About },
  { id: 'skills', title: 'Skills', color: '', Component: Skills },
  { id: 'projects', title: 'Projects', color: '', Component: Projects },
  { id: 'contact', title: 'Contact', color: '', Component: Contact },
];

export default function App() {
  // Simple, immediate theme state managed in App (replaces `useDarkMode` hook here)
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const s = localStorage.getItem('theme');
      if (s === 'dark') return true;
      if (s === 'light') return false;
    } catch (e) {}
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const toggleDark = (persist = true) => {
    setIsDark(prev => {
      const next = !prev;
      try {
        if (persist) localStorage.setItem('theme', next ? 'dark' : 'light');
        else localStorage.removeItem('theme');
      } catch (e) {}
      return next;
    });
  };

  const [activePageIndex, setActivePageIndex] = useState(0);
  const lenisRef = useRef<Lenis | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [hasHomeAnimated, setHasHomeAnimated] = useState(false);
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
    scrollToPage(0);
    const lenis = new Lenis({
      duration: 0.75,
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
        setActivePageIndex(currentIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activePageIndex]);
  return (
    <div
      className={twMerge(
        isDark ? 'dark' : '',
        ` bg-background/95 font-nunito transition-colors duration-300 ease-in-out selection:bg-accent selection:text-accent-muted w-dvw overflow-hidden max-w-dvw transform-cpu `
      )}
    >
      <Seo
        title="Mohammad Bilal — Personal Portfolio"
        description="I engineer software solutions with keen eye to detail and user first approach from Lucknow, India"
      />
      <SideNav activePageIndex={activePageIndex} pages={PAGE_DATA} scrollToPage={scrollToPage} />
      <NavBar
        activePageIndex={activePageIndex}
        pages={PAGE_DATA}
        scrollToPage={scrollToPage}
        setHasHomeAnimated={setHasHomeAnimated}
        isDark={isDark}
        toggleDark={toggleDark}
      />
      <div className="relative flex flex-col w-full">
        {PAGE_DATA.map(({ id, Component }, index) => (
          <div
            key={id}
            ref={el => {
              sectionRefs.current[index] = el;
            }}
            className="relative flex justify-center items-center w-full min-h-dvh"
          >
            <Component
              markAnimationComplete={() => setHasHomeAnimated(true)}
              scrollToPage={scrollToPage}
            />
          </div>
        ))}
      </div>
      {hasHomeAnimated && (
        <GradualBlurMemo
          target="page"
          position="bottom"
          height="6rem"
          strength={5}
          divCount={5}
          curve="bezier"
          exponential
          opacity={0.9}
          className="z-100"
        ></GradualBlurMemo>
      )}
    </div>
  );
}
