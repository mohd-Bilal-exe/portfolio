import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import DotGrid from './components/global/DotGrid';
import { NavBar, BottomBar } from './components/global/Navbars';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Projects from './components/pages/Projects/Projects';
import Contact from './components/pages/Contact/Contact';
import useMediaQuery from './hooks/useMediaQuery';
import GradualBlurMemo from './components/global/GradientBlur';
import Lenis from 'lenis';

const PAGE_DATA = [
  { id: 'home', title: 'Home', color: '', Component: Home },
  { id: 'about', title: 'About', color: '', Component: About },
  { id: 'projects', title: 'Projects', color: '', Component: Projects },
  { id: 'contact', title: 'Contact', color: '', Component: Contact },
];

export default function App() {
  const targetRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const lenisRef = useRef<any>(null);

  // State to track which page is currently in view
  const [activePageIndex, setActivePageIndex] = useState(0);
  const scrollStopTimeoutRef = useRef<null | number>(null);
  const lastScrollProgressRef = useRef(0);
  const isScrollingRef = useRef(false);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });
  const getActiveColor = (activePageIndexValue: number) => {
    switch (activePageIndexValue) {
      case 0:
        return '#efc88b' as string;
      case 1:
        return '#7c7c7c' as string;
      case 2:
        return '#eee5e9' as string;
      case 3:
        return '#cf5c36' as string;
      default:
        return '#000000' as string;
    }
  };
  // Listener to update activePageIndex based on scroll position
  useMotionValueEvent(scrollYProgress, 'change', latest => {
    if (!isDesktop) return; // Only snap on desktop

    lastScrollProgressRef.current = latest;
    isScrollingRef.current = true;

    // Clear existing timeout
    if (scrollStopTimeoutRef.current) {
      clearTimeout(scrollStopTimeoutRef.current);
    }

    // Set new timeout to detect scroll stop
    scrollStopTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;

      // Calculate which page to snap to based on fractional progress
      const fractionalProgress = latest * (PAGE_DATA.length - 1);
      const currentPageIndex = Math.floor(fractionalProgress);
      const progressWithinPage = fractionalProgress - currentPageIndex;

      // If scrolled past 50% of current page, snap to next page
      const targetPageIndex =
        progressWithinPage > 0.5
          ? Math.min(currentPageIndex + 1, PAGE_DATA.length - 1)
          : currentPageIndex;

      if (
        targetPageIndex !== activePageIndex &&
        targetPageIndex >= 0 &&
        targetPageIndex < PAGE_DATA.length
      ) {
        setActivePageIndex(targetPageIndex);
        scrollToPage(targetPageIndex);
        console.log('Snapped to page:', targetPageIndex);
      }
    }, 500); // 500ms delay to detect scroll stop
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', `-${(PAGE_DATA.length - 1) * 100}%`]);

  // Smooth Scroll Function
  const scrollToPage = (index: number) => {
    // Clamp index to valid range
    if (index < 0 || index >= PAGE_DATA.length) return;

    const windowHeight = window.innerHeight;
    const targetScroll = index * windowHeight;

    // Use Lenis for smooth scrolling
    if (lenisRef.current) {
      lenisRef.current.scrollTo(targetScroll, {
        duration: 1,
        easing: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t), // easeInOutQuad
      });
    }
  };
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // Adjust for smoothness
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);
  return (
    <div className="bg-jet-black-100/95 font-nunito">
      <section
        ref={targetRef}
        className="relative"
        style={{ height: isDesktop ? `${PAGE_DATA.length * 100}vh` : 'auto' }}
      >
        <div
          className={`${isDesktop ? 'sticky top-0 h-screen overflow-hidden flex items-center justify-center' : 'relative flex flex-col'}`}
        >
          <div
            className={`
            bg-jet-black-200/50 
            ${isDesktop ? 'relative w-[96vw] h-[85dvh] rounded-3xl border  border-jet-black-300 shadow-2xl overflow-hidden' : 'w-full relative overflow-hidden'}
          `}
          >
            <NavBar
              activePageIndex={activePageIndex}
              pages={PAGE_DATA}
              scrollToPage={scrollToPage}
            />
            {!isDesktop && (
              <>
                <GradualBlurMemo
                  target={isDesktop ? 'parent' : 'page'}
                  position={isDesktop ? 'left' : 'top'}
                  width={isDesktop ? '2rem' : '100rem'}
                  height={isDesktop ? '3rem' : '0rem'}
                  strength={0.8}
                  divCount={5}
                  curve="bezier"
                  exponential
                  opacity={1}
                />
                <GradualBlurMemo
                  target={isDesktop ? 'parent' : 'page'}
                  position={isDesktop ? 'right' : 'bottom'}
                  width={isDesktop ? '2rem' : '100rem'}
                  height={isDesktop ? '3rem' : '5rem'}
                  strength={0.8}
                  divCount={5}
                  curve="bezier"
                  exponential
                  opacity={1}
                />
              </>
            )}

            <div className="z-0 absolute inset-0 opacity-50 pointer-events-none">
              <GridBackground
                baseColor={getActiveColor(activePageIndex)}
                activeColor={getActiveColor(activePageIndex)}
              />
            </div>

            {/* CONTENT SLIDER */}
            <motion.div
              style={{ x: isDesktop ? x : 0 }}
              className={`relative z-10 flex w-full h-full ${isDesktop ? 'flex-row' : 'flex-col'}`}
            >
              {PAGE_DATA.map((page, index) => (
                <PageCard key={index} page={page} isDesktop={isDesktop} />
              ))}
            </motion.div>
          </div>

          <BottomBar
            activePageIndex={activePageIndex}
            pages={PAGE_DATA}
            scrollToPage={scrollToPage}
            scrollYProgress={scrollYProgress}
          />
        </div>
      </section>

      {!isDesktop && <div className="p-10 text-white/50 text-center">End of content</div>}
    </div>
  );
}

const PageCard = ({ page, isDesktop = true }: { page: any; isDesktop?: boolean }) => {
  return (
    <div
      className={`relative shrink-0 flex items-center justify-center w-full  h-[85dvh] md:h-full ${page.color}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        viewport={{ amount: 0.3 }}
        className={`flex justify-center items-center ${isDesktop ? 'h-full  w-full' : 'w-full  h-auto'}`}
      >
        <page.Component />
      </motion.div>
    </div>
  );
};
const GridBackground = ({ baseColor, activeColor }: { baseColor: string; activeColor: string }) => {
  console.log('baseColor:', baseColor, 'activeColor:', activeColor);
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
