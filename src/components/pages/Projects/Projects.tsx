import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, ExternalLink } from 'lucide-react';
import AnimateString from '../../global/AnimateString';
import { debatrix, MotionOnNative, portfolio, resumeIQ, TODONest } from '../../../lib/assets';
import { twMerge } from 'tailwind-merge';
import {
  contentHeading,
  contentIndex,
  contentSubHeading,
  pageHeading,
  pageName,
  caption,
} from '../../../lib/fontClassNames';

const projects = [
  {
    isFeatured: true,
    key: 'motion-on-native',
    title: 'Motion on Native',
    imgScr: MotionOnNative,
    link: 'https://motion-on-native.vercel.app/',
    description:
      'A Framer Motion-like open source animation library for React Native built on top of Reanimated 3.',
    tech: ['React Native', 'Reanimated', 'TypeScript'],
    isEmphasized: true,
  },

  {
    isFeatured: true,
    key: 'debatrix',
    title: 'deBatrix',
    imgScr: debatrix,
    link: 'https://de-batrix.vercel.app/',
    description:
      'AI debate simulation platform featuring AI vs AI debates with customizable personalities.',
    tech: ['Next.js', 'React Native', 'Prisma', 'Express', 'Gemini API'],
    isEmphasized: false,
  },
  {
    isFeatured: true,
    key: 'ResumeIQ',
    title: 'ResumeIQ',
    imgScr: resumeIQ,
    link: 'https://resumeiq-mohdb.vercel.app/',
    description:
      "AI resume reviewer with detail breakdown of the resume and it's different sections.",
    tech: ['Next.js', 'Firebase', 'Express', 'Node', 'Gemini API'],
    isEmphasized: true,
  },
  {
    isFeatured: false,
    key: 'Clarity',
    title: 'Clarity',
    imgScr: portfolio,
    link: '#',
    description:
      'AI-first mobile screenshot manager that uses local AI to organize and tag images with optional cloud processing',
    tech: ['React Native', 'SQLite', 'Gemini API', 'AWS Bedrock'],
    isEmphasized: true,
  },
  {
    isFeatured: false,
    key: 'ToDo Nest',
    title: 'ToDo Nest',
    imgScr: TODONest,
    link: 'https://todo-nest.netlify.app/',
    description: 'A task manager with custom colors and persistent storage powered by Redux.',
    tech: ['React js', 'Redux', 'TailwindCSS'],
    isEmphasized: false,
  },
  {
    isFeatured: false,
    key: 'PreviousPortfolio',
    title: 'Oldfolio',
    imgScr: portfolio,
    link: 'https://webweaver-personalportfolio.netlify.app/',
    description: 'My first React project featuring Framer Motion animations.',
    tech: ['React js', 'Framer-motion'],
    isEmphasized: false,
  },
];

export default function ProjectsSection({
  scrollToPage,
}: {
  scrollToPage: (page: number) => void;
}) {
  const [showVault, setShowVault] = useState(false);
  const date = new Date();
  return (
    <section
      id="mohammad-bilal-projects"
      className="relative flex flex-col justify-center pt-[5svh] w-full min-h-svh overflow-hidden font-space-grotesk font-bold"
    >
      {/* Label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mx-[7dvw] md:mx-[10dvw] py-6 md:py-10"
      >
        <div className="bg-zinc-700 w-12 h-px" />
        <span
          className={twMerge(
            pageName,
            'font-medium text-text-secondary  uppercase tracking-widest'
          )}
        >
          latest Works
        </span>
      </motion.div>

      <motion.div className={`flex`}>
        <AnimatePresence>
          {!showVault ? (
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex flex-col justify-start items-center px-[10dvw] w-dvw h-full"
            >
              <div className="w-full">
                <h2
                  className={twMerge(
                    pageHeading,
                    'mb-12 font-bold text-text-primary/80 leading-tight'
                  )}
                >
                  <AnimateString delayOffset={0.05}>Crafting digital products</AnimateString>
                  <br />
                  <span className="text-text-primary/50">
                    <AnimateString delayOffset={0.12}>with intent and precision.</AnimateString>
                  </span>
                </h2>

                {/* Horizontal Cards (Halo Aesthetic) */}
                <div className="gap-6 grid grid-cols-1 md:grid-cols-3 mb-16">
                  {projects
                    .filter(p => p.isFeatured)
                    .map((project, i) => (
                      <FeaturedCard key={project.key} project={project} index={i} />
                    ))}
                </div>

                <button
                  onClick={() => {
                    setShowVault(true);
                    scrollToPage(3);
                  }}
                  className="group flex items-center gap-4 font-light text-text-primary/90 text-xs md:text-lg underline underline-offset-3 underline-text-secondary cursor-pointer"
                >
                  <div className="w-6 md:w-12 group-hover:w-24 h-px bg-text-primary transition-all duration-300" />
                  Explore project Vault
                  <span className="bg-background-surface p-2 rounded-full text-text-primary transition-transform group-hover:translate-x-2 duration-300">
                    <ArrowRight size={20} />
                  </span>
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex flex-col justify-center px-[10dvw] pb-[5svh] w-dvw"
            >
              <div className="flex flex-col justify-between items-end mb-12">
                <div className="flex flex-row md:flex-col w-full">
                  <h3 className="font-bold text-text-primary text-2xl md:text-4xl">The Vault</h3>
                  <h4 className="mt-2 font-mono text-xxs text-zinc-600 md:text-sm">
                    SELECTED WORKS // 2024-{date.getFullYear()}
                  </h4>
                </div>
              </div>

              <div className="relative">
                <div className="z-20 relative flex flex-wrap gap-6">
                  {projects.map(project => (
                    <BentoCard key={project.key} project={project} />
                  ))}
                </div>
                <button
                  onClick={() => {
                    setShowVault(false);
                    scrollToPage(3);
                  }}
                  className="group flex items-center gap-2 hover:bg-background-overlay/40 mt-[5svh] px-6 py-3 border border-text-primary/15 rounded-full min-w-[15dvw] text-text-secondary text-xxs md:text-sm transition-colors"
                >
                  <ArrowLeft
                    size={18}
                    className="text-text-primary/20 group-hover:text-text-primary transition-all group-hover:-translate-x-1.5 ease-in-out"
                  />{' '}
                  Back to Featured
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

const FeaturedCard = ({ project, index }: { project: any; index: number }) => (
  <motion.a
    href={project.link}
    target="_blank"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: index * 0.12 }}
    viewport={{ once: true }}
    className="group cursor-pointer"
  >
    <div className="relative grayscale group-hover:grayscale-0 mb-6 rounded-[2rem] aspect-4/3 overflow-hidden transition-all duration-800">
      {project.imgScr ? (
        <img
          loading="lazy"
          src={project.imgScr}
          alt={project.title}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
        />
      ) : (
        <div
          className={
            'flex justify-center items-center w-full h-full text-text-primary bg-accent-muted/5'
          }
        >
          <h1>{project.title}</h1>
        </div>
      )}
      <div className="absolute inset-0 flex justify-center items-center bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="bg-primary/20 p-5 rounded-full text-text-primary">
          <ArrowRight className="-rotate-45" size={28} />
        </div>
      </div>
    </div>
    <div className="flex justify-between items-start px-2">
      <div>
        <h4 className={twMerge(contentHeading, 'mb-1 font-bold  text-text-primary/70 ')}>
          {project.title}
        </h4>
        <p className={twMerge(contentIndex, 'text-text-primary/50')}>
          <AnimateString delayOffset={index * 0.12 + 0.18}>{project.description}</AnimateString>
        </p>
      </div>
    </div>
  </motion.a>
);

const BentoCard = ({ project }: { project: any }) => (
  <a
    href={project.link}
    target="_blank"
    className="group/card relative bg-background-surface/20 p-8 border border-text-primary/15 rounded-[2rem] w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] transition-transform hover:-translate-y-2 duration-500"
  >
    {/* Emphasis Badge */}
    {project.isEmphasized && (
      <span className="right-4 bottom-4 absolute bg-primary/10 px-3 py-1 rounded-full font-mono text-primary text-xxs tracking-wide">
        My fav!
      </span>
    )}

    {/* Header */}
    <div className="flex justify-between items-start mb-4">
      <h4 className={twMerge(contentHeading, 'font-bold text-text-primary')}>{project.title}</h4>
      <span className="bg-background-overlay p-2 rounded-full text-text-muted">
        <ExternalLink size={18} />
      </span>
    </div>

    {/* Description */}
    <p className={twMerge(contentSubHeading, 'mb-6 text-text-primary/60')}>{project.description}</p>

    {/* Tech */}
    <div className="flex flex-wrap gap-2">
      {project.tech.map((t: string) => (
        <span
          key={t}
          className={twMerge(
            caption,
            'bg-background-overlay/60 px-3 py-1 rounded-full font-mono text-text-secondary'
          )}
        >
          {t}
        </span>
      ))}
    </div>
  </a>
);
