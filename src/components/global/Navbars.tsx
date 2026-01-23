import { AnimatePresence, easeInOut, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const SideNav = ({
  activePageIndex,
  pages,
  scrollToPage,
}: {
  activePageIndex: number;
  pages: { title: string }[];
  scrollToPage: (index: number) => void;
}) => {
  const totalPages = pages.length;
  const isFirst = activePageIndex === 0;
  const isLast = activePageIndex === totalPages - 1;
  // Calculate percentage for the vertical line height
  const progressPercent = (activePageIndex / (totalPages - 1)) * 100;
  return (
    <div className="top-1/2 left-1.5 md:left-6 z-50 fixed flex flex-col items-center gap-6 -translate-y-1/2 pointer-events-auto">
      {/* --- UP / PREV BUTTON --- */}
      <div className="group relative">
        <button
          onClick={() => {
            console.log(
              'SideNav UP clicked, current index:',
              activePageIndex,
              'target:',
              activePageIndex - 1
            );
            !isFirst && scrollToPage(activePageIndex - 1);
          }}
          disabled={isFirst}
          className={`
            p-2 rounded-full border border-white/10 bg-black/20 backdrop-blur-sm
            transition-all duration-300
            ${
              isFirst
                ? 'opacity-30 cursor-not-allowed text-white'
                : 'opacity-100 hover:bg-white/10 hover:border-amber-400/50 text-white hover:text-amber-400 cursor-pointer'
            }
          `}
        >
          <ChevronUp className="size-3 md:size-5" />
        </button>

        {/* Tooltip for Prev Page Name */}
        {!isFirst && (
          <span className="top-1/2 left-full absolute bg-black/15 opacity-0 group-hover:opacity-100 backdrop-blur-sm ml-4 px-4 py-2 border border-white/5 rounded-full font-bold text-white text-xs uppercase tracking-wider whitespace-nowrap transition-all -translate-x-2 -translate-y-1/2 group-hover:translate-x-0 duration-300">
            {pages[activePageIndex - 1]?.title}
          </span>
        )}
      </div>

      {/* --- VERTICAL PROGRESS TRACK --- */}
      {/* h-32: Sets a fixed height (small portion of screen)
         w-px: Thin line
      */}
      <div className="relative bg-white/10 rounded-full w-px h-32 overflow-hidden">
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: `${progressPercent}%` }}
          transition={{ type: 'spring', damping: 30, stiffness: 100 }}
          className="top-0 left-0 absolute bg-linear-to-b from-amber-200 to-amber-500 rounded-full w-full"
        />
      </div>

      {/* --- DOWN / NEXT BUTTON --- */}
      <div className="group relative">
        <button
          onClick={() => {
            console.log(
              'SideNav DOWN clicked, current index:',
              activePageIndex,
              'target:',
              activePageIndex + 1
            );
            !isLast && scrollToPage(activePageIndex + 1);
          }}
          disabled={isLast}
          className={`
            p-2 rounded-full border border-white/10 bg-black/20 backdrop-blur-sm
            transition-all duration-300
            ${
              isLast
                ? 'opacity-30 cursor-not-allowed text-white'
                : 'opacity-100 hover:bg-white/10 hover:border-amber-400/50 text-white hover:text-amber-400 cursor-pointer'
            }
          `}
        >
          <ChevronDown className="size-3 md:size-5" />
        </button>

        {/* Tooltip for Next Page Name */}
        {!isLast && (
          <span className="top-1/2 left-full absolute bg-black/15 opacity-0 group-hover:opacity-100 backdrop-blur-sm ml-4 px-4 py-2 border border-white/5 rounded-full font-bold text-white text-xs uppercase tracking-wider whitespace-nowrap transition-all -translate-x-2 -translate-y-1/2 group-hover:translate-x-0 duration-300">
            {pages[activePageIndex + 1]?.title}
          </span>
        )}
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
          className="group top-6 right-6 z-100 fixed flex items-center gap-2 bg-platinum-300/10 hover:opacity-75 backdrop-blur-md px-4 py-2 rounded-full font-medium text-platinum-900/40 text-lg tracking-wide hover:scale-[105%] active:scale-100 transition-opacity ease-in-out cursor-pointer"
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
            className="z-100 fixed inset-0 flex flex-col justify-center bg-twilight-indigo-500/20 backdrop-blur-2xl px-8 md:px-20 w-full h-full origin-top-right cursor-default"
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
                          setTimeout(() => scrollToPage(index), 1000);
                        }}
                        className={`font-bold  ${activePageIndex === index ? 'text-violet-300' : 'text-white'} hover:text-violet-200 text-6xl md:text-8xl tracking-tighter transition-colors cursor-pointer z-100`}
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
export { SideNav, NavBar };
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
