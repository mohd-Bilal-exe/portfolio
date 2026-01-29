import { AnimatePresence, easeInOut, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import FlipLink from './FlipLInk';

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
    <div className="top-1/2 left-1.5 md:left-6 z-100 fixed flex flex-col items-center gap-6 -translate-y-1/2 pointer-events-auto">
      {/* --- UP / PREV BUTTON --- */}
      <div className="group relative">
        <button
          onClick={() => {
            !isFirst && scrollToPage(activePageIndex - 1);
          }}
          name="page-up"
          id="page-up"
          disabled={isFirst}
          className={`
            p-2 rounded-full border
            bg-background-overlay/40
            border-border-subtle
            backdrop-blur-sm
            transition-all duration-300
            ${
              isFirst
                ? 'opacity-30 cursor-not-allowed text-text-muted'
                : `
                   text-text-primary
                    hover:text-text-muted
                    hover:bg-background-surface
                    hover:border-accent
                    cursor-pointer
                `
            }
          `}
        >
          <ChevronUp className="size-3 md:size-5" />
        </button>

        {/* Tooltip for Prev Page Name */}
        {!isFirst && (
          <span className="top-1/2 left-full absolute bg-background-overlay/60 opacity-0 group-hover:opacity-100 backdrop-blur-sm ml-4 px-4 py-2 border border-border-subtle rounded-full font-bold text-text-primary text-xs uppercase tracking-wider whitespace-nowrap transition-all -translate-x-2 -translate-y-1/2 group-hover:translate-x-0 duration-300">
            {pages[activePageIndex - 1]?.title}
          </span>
        )}
      </div>

      {/* --- VERTICAL PROGRESS TRACK --- */}
      {/* h-32: Sets a fixed height (small portion of screen)
         w-px: Thin line
      */}
      <div className="relative bg-border-subtle/60 rounded-full w-px h-32 overflow-hidden">
        <motion.div
          className="top-0 left-0 absolute bg-linear-to-b to-accent rounded-full w-full from-accent-soft"
          initial={{ height: 0 }}
          animate={{ height: `${progressPercent}%` }}
          transition={{ type: 'spring', damping: 30, stiffness: 100 }}
        />
      </div>

      {/* --- DOWN / NEXT BUTTON --- */}
      <div className="group relative">
        <button
          onClick={() => {
            !isLast && scrollToPage(activePageIndex + 1);
          }}
          name="page-down"
          id="page-down"
          disabled={isLast}
          className={`
              p-2 rounded-full border
              bg-background-overlay/40
              border-border-subtle
              backdrop-blur-sm
              transition-all duration-300
              ${
                isLast
                  ? 'opacity-30 cursor-not-allowed text-text-muted'
                  : `
                    text-text-primary
                    hover:text-text-muted
                    hover:bg-background-surface
                    hover:border-accent
                    cursor-pointer
                  `
              }
            `}
        >
          <ChevronDown className="size-3 md:size-5" />
        </button>

        {/* Tooltip for Next Page Name */}
        {!isLast && (
          <span className="top-1/2 left-full absolute bg-background-overlay/60 opacity-0 group-hover:opacity-100 backdrop-blur-sm ml-4 px-4 py-2 border border-border-subtle rounded-full font-bold text-text-primary text-xs uppercase tracking-wider whitespace-nowrap transition-all -translate-x-2 -translate-y-1/2 group-hover:translate-x-0 duration-300">
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
  setHasHomeAnimated,
  isDark,
  toggleDark,
}: {
  activePageIndex: number;
  pages: { title: string }[];
  scrollToPage: (index: number) => void;
  setHasHomeAnimated: (value: boolean) => void;
  isDark: boolean;
  toggleDark: (persist?: boolean) => void;
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
          name="navbar-open"
          id="navbar-open"
          onClick={() =>
            setTimeout(() => {
              setHasHomeAnimated(false);
              setIsOpen(true);
            }, 100)
          }
          className="top-6 right-6 z-100 fixed flex items-center gap-2 bg-background-secondary/60 hover:opacity-80 backdrop-blur-md px-4 py-2 rounded-full font-medium text-text-primary text-lg tracking-wide hover:scale-[1.05] active:scale-100 transition"
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
            className="top-0 z-30 fixed flex flex-col justify-center bg-accent/20 backdrop-blur-2xl px-8 md:px-20 w-dvw h-dvh cursor-default"
          >
            <div className="z-50 relative flex flex-col justify-center mx-auto w-full max-w-7xl h-full">
              {/* HEADER ROW (Logo/Close placeholder) */}
              <div className="top-16 left-0 z-50 absolute flex justify-between items-center w-full font-semibold text-text-primary text-sm uppercase tracking-widest">
                <span>Jump To a section!</span>
                <button
                  id="navbar-close"
                  name="navbar-close"
                  onClick={() => {
                    setIsOpen(false);
                    setTimeout(() => setHasHomeAnimated(true), 500);
                  }}
                  className="hover:text-text-primary/70 hover:scale-110 active:scale-95 transition-transform cursor-pointer"
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
                className="z-50 flex flex-col gap-2 font-kola"
              >
                {pages.map((page, index) => (
                  <div key={index} className="flex justify-start items-center overflow-hidden">
                    <motion.div variants={linkVars} className="group">
                      <span className="mx-3 font-space-grotesk text-text-primary/30 text-xs md:text-xl transition-colors group-hover:text-accent-hover/50">
                        {String(index + 1).padStart(2, '0')}.
                      </span>
                      <FlipLink
                        onClick={() => {
                          setIsOpen(false);
                          setTimeout(() => scrollToPage(index), 1000);
                        }}
                        className={`
                        font-bold tracking-tighter cursor-pointer
                        text-5xl md:text-7xl
                        transition-colors 
                        ${activePageIndex === index ? 'text-text-primary/90 tracking-tight' : 'text-text-primary/60'}
                        group-hover:text-accent-hover
                      `}
                      >
                        {page.title}
                      </FlipLink>
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
                <button className="">
                  <label className="bg-background-overlay/60 hover:bg-color-background-overlay backdrop-blur-sm ml-4 px-6 py-2 rounded-full font-bold text-text-heading text-sm uppercase tracking-wider transition-colors switch">
                    <input type="checkbox" checked={!isDark} onChange={() => toggleDark()} />
                    <span className="slider"></span>
                  </label>
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
