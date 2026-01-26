import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, ExternalLink } from 'lucide-react';
import AnimateString from '../../global/AnimateString';

// --- DATA ---
const projects = [
  {
    key: 'ResumeIQ',
    title: 'ResumeIQ',
    imgScr: '../src/assets/images/resumeIQ.png',
    link: 'https://resumeiq-mohdb.vercel.app/',
    description: 'AI resume reviewer with real-time LaTeX preview and PDF export.',
    tech: ['Next js', 'Firebase', 'Gemini API'],
    isEmphasized: true, // Grid logic: Span 2 columns
  },
  {
    key: 'debatrix',
    title: 'deBatrix',
    imgScr: '../src/assets/images/debatrix.png',
    link: 'https://de-batrix.vercel.app/',
    description: 'AI-powered app for grammar correction and language translation.',
    tech: ['React js', 'Redux js', 'Framer-motion'],
    isEmphasized: false,
  },
  {
    key: 'ToDo Nest',
    title: 'ToDo Nest',
    imgScr: '../src/assets/images/TODOnest.png',
    link: 'https://todo-nest.netlify.app/',
    description: 'A task manager with custom colors, powered by Redux.',
    tech: ['React js', 'TailwindCSS'],
    isEmphasized: false,
  },
  {
    key: 'PreviousPortfolio',
    title: 'Oldfolio',
    imgScr: '../src/assets/images/portfolio.webp',
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
    <div className="relative flex flex-col justify-center py-[15dvh] w-full min-h-dvh overflow-hidden font-space-grotesk font-bold">
      {/* Label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mx-[7dvw] md:mx-[10dvw] py-6 md:py-10"
      >
        <div className="bg-border-strong w-12 h-px" />
        <span className="font-medium text-text-heading text-xs md:text-sm uppercase tracking-widest">
          latest Works
        </span>
      </motion.div>

      <motion.div
        className="flex w-[200dvw]"
        animate={{ x: showVault ? '-100vw' : '0vw' }}
        transition={{ type: 'spring', stiffness: 80, damping: 20 }}
      >
        {/* === PAGE 1: FEATURED STORY === */}
        <div className="flex flex-col justify-center items-center px-[10dvw] w-dvw">
          <div className="w-full">
            <h2 className="mb-12 font-bold text-primary/80 text-4xl md:text-7xl leading-tight -white">
              <AnimateString>Crafting digital products</AnimateString>
              <br />
              <span className="text-primary/50">
                <AnimateString delayOffset={0.5}>with intent and precision.</AnimateString>
              </span>
            </h2>

            {/* Horizontal Cards (Halo Aesthetic) */}
            <div className="gap-6 grid grid-cols-1 md:grid-cols-3 mb-16">
              {projects.slice(0, 3).map((project, i) => (
                <FeaturedCard key={project.key} project={project} index={i} />
              ))}
            </div>

            <button
              onClick={() => {
                setShowVault(true);
                scrollToPage(3);
              }}
              className="group flex items-center gap-4 font-light text-primary/30 text-xs md:text-lg cursor-pointer"
            >
              <div className="bg-background-overlay w-6 md:w-12 group-hover:w-24 h-px transition-all duration-300" />
              Explore project Vault
              <span className="bg-background-surface p-2 rounded-full text-primary transition-transform group-hover:translate-x-2 duration-300">
                <ArrowRight size={20} />
              </span>
            </button>
          </div>
        </div>

        {/* === PAGE 2: BENTO VAULT === */}
        <div className="flex flex-col justify-center px-[10dvw] w-dvw">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h3 className="font-bold text-white text-4xl">The Vault</h3>
              <p className="mt-2 font-mono text-zinc-600 text-sm">
                SELECTED WORKS // 2024-{date.getFullYear()}
              </p>
            </div>
            <button
              onClick={() => {
                setShowVault(false);
                scrollToPage(3);
              }}
              className="flex items-center gap-2 hover:bg-zinc-900 px-6 py-3 border border-zinc-800 rounded-full text-zinc-400 transition-colors"
            >
              <ArrowLeft size={18} /> Back to Featured
            </button>
          </div>

          <div className="gap-6 grid grid-cols-1 md:grid-cols-3">
            {projects.map(project => (
              <BentoCard key={project.key} project={project} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// --- SUBCOMPONENTS ---

const FeaturedCard = ({ project, index }: { project: any; index: number }) => (
  <motion.a
    href={project.link}
    target="_blank"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="group cursor-pointer"
  >
    <div className="relative grayscale group-hover:grayscale-0 mb-6 rounded-[2rem] aspect-4/3 overflow-hidden transition-all duration-800">
      <img
        src={project.imgScr}
        alt={project.title}
        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 flex justify-center items-center bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="bg-primary/20 p-5 rounded-full text-primary">
          <ArrowRight className="-rotate-45" size={28} />
        </div>
      </div>
    </div>
    <div className="flex justify-between items-start px-2">
      <div>
        <h4 className="mb-1 font-bold text-primary/70 text-2xl">{project.title}</h4>
        <p className="text-primary/50 text-sm">
          <AnimateString delayOffset={index * 0.2 + 0.5}>{project.description}</AnimateString>
        </p>
      </div>
    </div>
  </motion.a>
);

const BentoCard = ({ project }: { project: any }) => (
  <a
    href={project.link}
    target="_blank"
    className={`
    relative group p-8 rounded-[2rem] border border-border bg-background-surface/10 
    hover:border-border-strong cursor-pointer  duration-500 flex flex-col justify-between hover:scale-[102%] transition-all
    ${project.isEmphasized ? 'md:col-span-2' : 'col-span-1'}
  `}
  >
    <div>
      <div className="flex justify-between items-start mb-6">
        <h4 className="font-bold text-white text-3xl">{project.title}</h4>
        <a className="bg-zinc-900 p-2 rounded-full text-zinc-500 hover:text-white transition-colors">
          <ExternalLink size={20} />
        </a>
      </div>
      <p className="mb-8 text-zinc-400 leading-relaxed">
        <AnimateString>{project.description}</AnimateString>
      </p>
    </div>
    <div className="flex flex-wrap gap-2">
      {project.tech.map((t: string) => (
        <span
          key={t}
          className="bg-zinc-900/50 px-3 py-1 rounded-md font-mono text-zinc-500 text-xs"
        >
          {t}
        </span>
      ))}
    </div>
  </a>
);
