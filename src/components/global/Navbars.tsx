import { AnimatePresence, easeInOut, motion } from 'framer-motion';
import { ChevronRight, Menu, X } from 'lucide-react';
import FlipLink from './FlipLInk';
import { useState } from 'react';

const BottomBar = ({
  activePageIndex,
  pages,
  scrollToPage,
  scrollYProgress,
}: {
  activePageIndex: number;
  pages: { title: string }[];
  scrollToPage: (index: number) => void;
  scrollYProgress: any;
}) => {
  const totalPages = pages.length;
  const prevPage = pages[activePageIndex - 1];
  const nextPage = pages[activePageIndex + 1];

  const leftLabel = activePageIndex === 0 ? 'HOME' : prevPage?.title;
  const rightLabel = activePageIndex === totalPages - 1 ? 'END' : nextPage?.title;
  console.log('Scroll Progress:- ', scrollYProgress.current * 100);
  return (
    <div className="right-0 bottom-1 left-0 z-50 absolute px-8 md:px-12 w-full pointer-events-none">
      {/* Container: 
        - pointer-events-auto (so buttons are clickable)
        - flex: lays out children in a row
        - items-center: vertically centers the line and buttons
      */}
      <div className="flex items-center mx-auto w-full pointer-events-auto">
        {/* --- LEFT CONTROL --- */}
        <div
          className={`
            shrink-0 flex items-center gap-3 py-2 pr-2
            transition-opacity duration-300
            ${activePageIndex === 0 ? 'opacity-50 cursor-default' : 'hover:opacity-80 cursor-pointer'}
          `}
        >
          <div className="flex flex-row justify-center items-center gap-2 overflow-hidden cursor-pointer">
            {activePageIndex !== 0 && (
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-3 h-3 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </div>
            )}
            <AnimatePresence mode="wait">
              <FlipLink
                key={leftLabel}
                onClick={() => {
                  if (activePageIndex !== 0) scrollToPage(activePageIndex - 1);
                }}
                disabled={activePageIndex === 0}
                className="font-bold text-white text-sm md:text-base uppercase tracking-widest"
              >
                {leftLabel}
              </FlipLink>
            </AnimatePresence>
          </div>
        </div>
        <div className="flex-1 bg-periwinkle-700/20 mx-3 h-px">
          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: `${(activePageIndex / (pages.length - 1)) * 100}%`,
            }}
            transition={{ type: 'spring', damping: 30, stiffness: 100 }}
            className="bg-periwinkle-500/50 h-px"
          ></motion.div>
        </div>

        <div
          className={`
            shrink-0 flex items-center gap-3 py-2 pl-2
            transition-opacity duration-300
            ${activePageIndex === totalPages - 1 ? 'opacity-50 cursor-default' : 'hover:opacity-80 cursor-pointer'}
          `}
        >
          <div className="flex flex-row justify-center items-center gap-2 overflow-hidden cursor-pointer">
            <AnimatePresence mode="wait">
              <FlipLink
                key={rightLabel}
                onClick={() => {
                  if (activePageIndex !== totalPages - 1) scrollToPage(activePageIndex + 1);
                }}
                disabled={activePageIndex === totalPages - 1}
                className="font-bold text-white text-sm md:text-base uppercase tracking-widest"
              >
                {rightLabel}
              </FlipLink>
            </AnimatePresence>{' '}
            {activePageIndex !== totalPages - 1 && (
              <div className="">
                <ChevronRight className="size-3 text-amber-200" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const NavBar = ({
  activePageIndex,
  pages,
  scrollToPage,
}: {
  activePageIndex: number;
  pages: { title: string }[];
  scrollToPage: (index: number) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // 1. The Background Expansion from Top-Right Corner
  const menuVars = {
    initial: {
      clipPath: 'circle(0% at 100% 0%)', // Starts as a dot in the top-right corner
    },
    animate: {
      clipPath: 'circle(150% at 100% 0%)', // Expands to cover full screen
      transition: {
        duration: 0.7,
        ease: easeInOut, // Custom "Apple-like" ease
      },
    },
    exit: {
      clipPath: 'circle(0% at 100% 0%)',
      transition: {
        duration: 0.7,
        ease: easeInOut,
        delay: 0.3, // Wait for text to hide before shrinking
      },
    },
  };

  // 2. The Container for Links (Handles Staggering)
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3, // Wait for purple circle to grow a bit
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  // 3. Individual Link Items (Slide Up & Fade)
  const linkVars = {
    initial: {
      y: '30vh',
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: easeInOut,
      },
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: easeInOut,
      },
    },
  };

  return (
    <>
      {/* --- TRIGGER BUTTON (Top-Right Corner) --- */}
      {!isOpen && (
        <button
          onClick={() => setTimeout(() => setIsOpen(true), 100)}
          className="group top-6 right-6 z-100 absolute flex items-center gap-2 bg-platinum-300/10 hover:opacity-75 backdrop-blur-md px-4 py-2 rounded-full font-medium text-platinum-900/40 text-lg tracking-wide hover:scale-[105%] active:scale-100 transition-opacity ease-in-out cursor-pointer"
        >
          <Menu className="w-5 h-5" />
        </button>
      )}

      {/* --- FULL SCREEN OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="top-0 left-0 z-100 absolute flex flex-col justify-center bg-twilight-indigo-500/20 backdrop-blur-2xl px-8 md:px-20 w-full h-full origin-top-right cursor-default"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative flex flex-col justify-center mx-auto w-full max-w-7xl h-full">
              {/* HEADER ROW (Logo/Close placeholder) */}
              <div className="top-8 left-0 absolute flex justify-between items-center w-full font-semibold text-violet-200 text-sm uppercase tracking-widest">
                <span>Jump To a section!</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:text-white hover:scale-110 active:scale-95 transition-transform"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* LINKS CONTAINER */}
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col gap-2 font-kola"
              >
                {pages.map((page, index) => (
                  <div key={index} className="overflow-hidden">
                    <motion.div variants={linkVars}>
                      <span
                        onClick={() => {
                          setIsOpen(false);
                          scrollToPage(index);
                        }}
                        className={`font-bold  ${activePageIndex === index ? 'text-violet-300' : 'text-white'} hover:text-violet-200 text-6xl md:text-8xl tracking-tighter transition-colors cursor-pointer`}
                      >
                        {page.title}
                      </span>
                    </motion.div>
                  </div>
                ))}
              </motion.div>

              {/* BOTTOM FOOTER */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.5 } }}
                exit={{ opacity: 0 }}
                className="right-0 bottom-8 absolute"
              >
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full font-bold text-white text-sm uppercase tracking-wider transition-colors">
                  Contact
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export { BottomBar, NavBar };
/*const NavBarOld = ({
  activePageIndex,
  pages,
  scrollToPage,
}: {
  activePageIndex: number;
  pages: { title: string }[];
  scrollToPage: (index: number) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // --- DIMENSIONS ---
  const buttonSize = 32;
  const dotSize = 12;
  const menuWidth = 600;
  const menuHeight = 35;

  // --- POSITIONS ---
  const centerPos = 'calc(-31vw + 40px)';
  const rightPos = '0px';

  // --- COLORS ---
  // 1. Transparent (invisible box, just icon)
  const colorTransparent = 'rgba(255, 255, 255, 0)';
  // 2. Solid White (The "Energy Dot")
  const colorDot = 'rgba(255, 255, 255, 1)';
  // 3. Hazy Glass (The Menu Background) - Darker for contrast
  const colorMenu = 'rgba(20, 20, 20, 0.6)';

  const variants = {
    open: {
      width: [buttonSize, dotSize, dotSize, dotSize, dotSize, menuWidth],
      height: [buttonSize, dotSize, dotSize, dotSize, dotSize, menuHeight],
      borderRadius: ['12px', '50%', '50%', '50%', '50%', '24px'],

      // MOVEMENT: Stays Right (0-0.3) -> Moves (0.3-0.7) -> Stays Center (0.7-1)
      x: [rightPos, rightPos, rightPos, centerPos, centerPos, centerPos],
      y: [0, 0, 0, 0, 0, -7],
      // COLOR: Transparent -> Solid Dot -> Solid Dot -> Hazy Menu
      backgroundColor: [
        colorTransparent, // 0% (Start)
        colorDot, // 20% (Collapsed to Dot)
        colorDot, // 30% (Wait)
        colorDot, // 70% (Moved)
        colorDot, // 80% (Wait)
        colorMenu, // 100% (Expanded)
      ],

      transition: {
        duration: 1.5,
        ease: easeInOut,
        times: [0, 0.2, 0.3, 0.7, 0.8, 1],
      },
    },

    closed: {
      width: [menuWidth, dotSize, dotSize, dotSize, dotSize, buttonSize],
      height: [menuHeight, dotSize, dotSize, dotSize, dotSize, buttonSize],
      borderRadius: ['24px', '50%', '50%', '50%', '50%', '12px'],

      // MOVEMENT: Stays Center (0-0.3) -> Moves (0.3-0.7) -> Stays Right (0.7-1)
      x: [centerPos, centerPos, centerPos, rightPos, rightPos, rightPos],

      // COLOR: Hazy Menu -> Solid Dot -> Solid Dot -> Transparent
      backgroundColor: [
        colorMenu, // 0% (Start)
        colorDot, // 20% (Collapsed to Dot)
        colorDot, // 30% (Wait)
        colorDot, // 70% (Moved)
        colorDot, // 80% (Wait)
        colorTransparent, // 100% (Back to Hamburger)
      ],

      transition: {
        duration: 1.5,
        ease: easeInOut,
        times: [0, 0.2, 0.3, 0.7, 0.8, 1],
      },
    },
  };

  return (
    <motion.div
      initial={'closed'}
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      className={`
        fixed top-4 right-4 z-50 flex items-center justify-center overflow-hidden
        
        ${isOpen ? 'cursor-default backdrop-blur-md shadow-2xl border border-white/10' : 'cursor-pointer'}
      `}
    >
      <div className="relative flex justify-center items-center w-full h-full">
        
        <motion.button
          onClick={() => {
            toggle();
          }}
          className="absolute inset-0 flex justify-center items-center text-periwinkle-500/50 cursor-pointer"
          animate={{ opacity: isOpen ? 0 : 1, scale: isOpen ? 0 : 1 }}
          transition={{ duration: 0.2, delay: isOpen ? 0 : 1.3 }}
        >
          <Menu className="size-5" />
        </motion.button>

      
        <motion.div
          animate={{
            opacity: isOpen ? 1 : 0,
            scale: isOpen ? 1 : 0.9,
          }}
          transition={{ duration: 0.3, delay: isOpen ? 1.2 : 0 }} // Appears AFTER expansion
          className={`flex items-center justify-center gap-8 px-4 w-full ${!isOpen ? 'pointer-events-none' : ''}`}
        >
          {pages.map((page, i) => (
            <button
              key={i}
              onClick={e => {
                e.stopPropagation();
                toggle();
                setTimeout(() => scrollToPage(i), 1200);
              }}
              className="font-bold text-white hover:text-amber-400 text-sm uppercase tracking-wider whitespace-nowrap transition-colors"
            >
              {page.title}
            </button>
          ))}
        </motion.div>
        {isOpen && (
          <motion.div
            className="top-1.5 right-2 absolute rounded-full text-white cursor-pointer"
            animate={{
              opacity: isOpen ? 1 : 0,
              scale: isOpen ? 1 : 0.9,
            }}
            transition={{ duration: 0.3, delay: isOpen ? 1.2 : 0 }}
            onClick={() => {
              toggle();
            }}
          >
            <ChevronRight className="size-5" />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};*/
