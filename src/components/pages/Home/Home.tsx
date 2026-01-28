import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Home = ({ markAnimationComplete }: { markAnimationComplete: () => void }) => {
  const [animationState, setAnimationState] = useState({
    animateTitle: false,
    revealContent: false,
  });

  useEffect(() => {
    // Phase 1: Slide in from sides
    const t1 = setTimeout(() => {
      setAnimationState(prev => ({ ...prev, animateTitle: true }));
    }, 500);

    // Phase 2: Open drawers (Slide vertically apart)
    const t2 = setTimeout(() => {
      setAnimationState(prev => ({ ...prev, revealContent: true }));
    }, 2000);
    const t3 = setTimeout(() => {
      markAnimationComplete();
    }, 3000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <section
      id="mohammad-bilal"
      className="relative flex flex-col justify-between items-between w-dvw h-dvh overflow-hidden font-nunito"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: animationState.revealContent ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.6 }} // Fade in slightly after movement starts
        className="px-[5dvw] pt-[19dvh] md:pt-[15dvh] h-1/2"
      >
        <h2 className="inline-block mb-2 text-md text-zinc-500 md:text-lg tracking-widest">
          Hey There, I'm
        </h2>
        <h1 className="font-zeyada text-md text-text-heading md:text-xl lg:text-3xl tracking-wdide tracking-widest">
          MOHAMMAD BILAL
        </h1>
      </motion.div>
      <div className="top-0 left-0 z-10 absolute flex flex-col justify-between items-between w-full h-full">
        {/* BLOCK 1: "FULL STACK" 
            - Phase 1: Slide in from LEFT
            - Phase 2: Slide UP (negative Y) to reveal Name
        */}
        <motion.div
          initial={{ x: '-100dvw', y: 0 }}
          animate={{
            x: animationState.animateTitle ? 0 : '-100dvw',
            y: animationState.revealContent ? '30dvh' : 0,
          }}
          transition={{
            x: { duration: 1, ease: [0.22, 1, 0.36, 1] },
            y: { duration: 1.5, type: 'spring', ease: 'easeOut', damping: 50, stiffness: 100 },
          }}
          className="z-20 px-[4.5dvw]"
        >
          <h1 className="bg-clip-text bg-linear-to-br from-text-heading text-transparent to-text-muted lg:text-10xl text-4xl md:text-5xl text-center md:text-start leading-none tracking-wide space-mono-bold">
            FULLSTACK
          </h1>
        </motion.div>
        <motion.div
          initial={{ x: '100dvw', y: '-10dvh' }}
          animate={{
            x: animationState.animateTitle ? 0 : '100dvw',
            y: animationState.revealContent ? '-30dvh' : '-10dvh',
          }}
          transition={{
            x: { duration: 1, ease: [0.22, 1, 0.36, 1] },
            y: { duration: 1.5, type: 'spring', ease: 'easeOut', damping: 50, stiffness: 100 },
          }}
          className="z-20 md:px-[4.5dvw] pt-2 pb-4 text-center md:text-end translate-y-[-20dvh] md:translate-0 md:y-0"
        >
          <h1 className="bg-clip-text bg-linear-to-br from-text-primary text-transparent to-text-secondary lg:text-10xl text-4xl md:text-5xl leading-none tracking-wide space-mono-bold">
            DEVELOPER
          </h1>
        </motion.div>
      </div>
      {/* 2. THE DESCRIPTION (Revealed by DEVELOPER moving DOWN) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: animationState.revealContent ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex justify-end pt-[20dvh] pr-[5dvw] h-1/2"
      >
        <p className="max-w-xs md:max-w-2xl font-space-grotesk text-zinc-400 text-xs md:text-sm text-center leading-relaxed translate-y-[-20dvh] md:translate-0">
          Building scalable solutions with pixel-perfect frontend experiences.
        </p>
      </motion.div>
    </section>
  );
};

export default Home;
