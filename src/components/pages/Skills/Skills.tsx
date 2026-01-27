import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layout,
  Code2,
  Server,
  Database,
  Smartphone,
  Cloud,
  PenTool,
  Cpu,
  Globe,
  Box,
  GitBranch,
  Layers,
  ChevronDown,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import AnimateString from '../../global/AnimateString';

// --- ANIMATION COMPONENT ---

const skillsData = [
  {
    category: 'Frontend',

    items: [
      { name: 'React.js', emphasized: true, icon: <Layout /> },

      { name: 'Next.js', emphasized: true, icon: <Globe /> },

      { name: 'Tailwind', emphasized: true, icon: <PenTool /> },

      { name: 'HTML', emphasized: true, icon: <Code2 /> },

      { name: 'CSS', emphasized: true, icon: <Layers /> },
    ],
  },

  {
    category: 'Backend',

    items: [
      { name: 'Node.js', emphasized: true, icon: <Server /> },

      { name: 'MongoDB', emphasized: false, icon: <Database /> },

      { name: 'Express.js', emphasized: true, icon: <Globe /> },

      { name: 'Firebase', emphasized: true, icon: <Cloud /> },
    ],
  },

  {
    category: 'Mobile',

    items: [
      { name: 'React Native', emphasized: true, icon: <Smartphone /> },

      { name: 'Expo', emphasized: true, icon: <Box /> },
    ],
  },

  {
    category: 'Languages',

    items: [
      { name: 'JavaScript', emphasized: true, icon: <Code2 /> },

      { name: 'TypeScript', emphasized: true, icon: <Code2 /> },

      { name: 'Java', emphasized: false, icon: <Cpu /> },
    ],
  },

  {
    category: 'Testing & Cloud',

    items: [
      { name: 'AWS', emphasized: true, icon: <Cloud /> },

      { name: 'Cloudinary', emphasized: false, icon: <Database /> },
    ],
  },

  {
    category: 'Tools',

    items: [
      { name: 'Docker', emphasized: false, icon: <Box /> },

      { name: 'Git', emphasized: true, icon: <GitBranch /> },

      { name: 'Postman', emphasized: true, icon: <Globe /> },

      { name: 'VSCode', emphasized: true, icon: <Code2 /> },
    ],
  },

  {
    category: 'CS Fundamentals',

    items: [
      { name: 'Data Structures', emphasized: true, icon: <Database /> },

      { name: 'OS', emphasized: false, icon: <Cpu /> },

      { name: 'DBMS', emphasized: true, icon: <Server /> },
    ],
  },

  {
    category: 'Interest Areas',

    items: [
      { name: 'System Design', emphasized: true, icon: <Layers /> },

      { name: 'UI/UX Design', emphasized: true, icon: <PenTool /> },

      { name: 'AI/ML', emphasized: false, icon: <Cpu /> },
    ],
  },
];

export default function SkillsSection({ scrollToPage }: { scrollToPage: (index: number) => void }) {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [openSection, setOpenSection] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setOpenSection(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="relative flex flex-col justify-center py-[10dvh] w-full min-h-dvh overflow-hidden font-space-grotesk font-bold">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mx-[7dvw] md:mx-[10dvw] py-6 md:py-10"
      >
        <div className="bg-zinc-700 w-12 h-px" />
        <span className="font-medium text-text-secondary text-sm uppercase tracking-widest">
          What I bring to the table.
        </span>
      </motion.div>

      <motion.div
        className="flex w-[200dvw] h-full"
        animate={{ x: showAllSkills ? '-100vw' : '0vw' }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      >
        {/* === PAGE 1: STORYTELLING === */}
        <div className="flex flex-col justify-center items-center w-dvw h-full">
          <div className="px-[10dvw] w-full">
            <h2 className="mb-6 font-bold text-text-primary/85 text-2xl md:text-6xl leading-[1.1]">
              <AnimateString delayOffset={0.05}>I don't just write code. </AnimateString>
              <br />
              <span className="text-text-muted">
                <AnimateString delayOffset={0.12}>I engineer solutions.</AnimateString>
              </span>
            </h2>

            <p className="mb-16 max-w-3xl text-text-secondary text-xs md:text-lg leading-relaxed">
              <AnimateString delayOffset={0.18}>
                My technical philosophy balances performance with aesthetics. I leverage modern
                frameworks to build applications that scale effortlessly.
              </AnimateString>
            </p>

            {/* The 3 Pillars - Numbered List */}
            <div className="gap-8 grid grid-cols-1 md:grid-cols-3 mb-20">
              <StoryCard
                index={0}
                number="// 01"
                title="Performance First"
                desc="Optimized rendering patterns and server-side strategies ensure instant interactions."
              />
              <StoryCard
                index={1}
                number="// 02"
                title="Type Safe & Secure"
                desc="Rigorous TypeScript implementation and secure authentication flows for robust apps."
              />
              <StoryCard
                index={2}
                number="// 03"
                title="Motion & Interaction"
                desc="Using Framer Motion to create meaningful micro-interactions that guide the users."
              />
            </div>

            <button
              onClick={() => {
                setShowAllSkills(true);
                scrollToPage(2);
              }}
              className="group flex items-center gap-4 font-light text-primary/30 text-xs md:text-lg cursor-pointer"
            >
              <div className="bg-background-overlay w-6 md:w-12 group-hover:w-24 h-px transition-all duration-300" />
              See Full Tech Stack
              <span className="bg-background-surface p-2 rounded-full text-primary transition-transform group-hover:translate-x-2 duration-300">
                <ArrowRight size={20} />
              </span>
            </button>
          </div>
        </div>

        {/* PAGE 2 (Detailed Stack) omitted for brevity - remains the same as your source */}
        <div className="px-[13dvw] md:px-[5dvw] w-dvw h-full overflow-y-auto">
          <div className="mx-auto max-w-5xl min-h-full">
            {/* Back Button Header */}

            <div className="flex items-center gap-6 mb-12">
              <div>
                <h3 className="font-bold text-white text-xl md:text-3xl">Technical Arsenal</h3>

                <p className="ml-2 font-mono text-zinc-500 text-sm">Full Breakdown</p>
              </div>
            </div>

            {/* Your Existing Grid */}

            <div className="gap-x-12 gap-y-8 grid grid-cols-1 md:grid-cols-2 pb-20">
              {skillsData.map((section, index) => (
                <CollapsibleSection
                  key={section.category}
                  index={index}
                  title={section.category}
                  isOpen={openSection.includes(index)}
                  onToggle={() => toggleSection(index)}
                >
                  <div className="flex flex-wrap justify-start items-between gap-3">
                    {section.items.map(skill => (
                      <SkillCard key={skill.name} skill={skill} />
                    ))}
                  </div>
                </CollapsibleSection>
              ))}
            </div>

            <button
              onClick={() => {
                setOpenSection([]);

                scrollToPage(2);

                setShowAllSkills(false);
              }}
              className="group flex justify-center items-center gap-2 hover:bg-background-secondary p-3 hover:border hover:border-background-surface rounded-full font-medium text-zinc-400 hover:text-white text-lg transition-colors cursor-pointer"
            >
              <ArrowLeft size={24} className="text-zinc-400 group-hover:text-white" />

              <span> Go back!</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
const CollapsibleSection = ({
  title,
  children,
  isOpen,
  onToggle,
  index,
}: {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) => {
  return (
    <div className="border-zinc-800 border-b">
      <button
        onClick={onToggle}
        className="group flex justify-between items-center py-5 w-full text-left"
      >
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-md text-text-secondary/50 group-hover:text-text-secondary md:text-3xl transition-colors duration-300">
            {String(index + 1).padStart(2, '0')}
          </span>

          <h3
            className={`text-lg md:text-2xl font-semibold transition-colors duration-300 ease-in-out ${isOpen ? 'text-primary' : 'text-text-secondary group-hover:text-zinc-300'}`}
          >
            {title}
          </h3>
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-zinc-500"
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ scaleY: 0, opacity: 0, height: 0 }}
            animate={{ scaleY: 1, opacity: 1, height: 'auto' }}
            exit={{ scaleY: 0, opacity: 0, height: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 280, damping: 28 }}
            style={{ transformOrigin: 'top' }}
            className="z-10 flex flex-wrap overflow-hidden origin-top"
          >
            <div className="pt-4 pb-8 w-full">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SkillCard = ({ skill }: { skill: any }) => {
  const isEmphasized = skill.emphasized;

  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-xl border
        flex flex-wrap items-center gap-3 px-4 py-3
         shadow-sm
        ${
          !isEmphasized
            ? 'bg-accent border-zinc-700 w-full md:w-auto'
            : 'bg-background-surface/90  border-zinc-800'
        }
      `}
    >
      <div className={`${isEmphasized ? 'text-primary/90' : 'text-primary/70'}`}>
        {React.cloneElement(skill.icon, { size: 18 })}
      </div>

      <span
        className={`font-medium text-xxs md:text-sm ${isEmphasized ? 'text-primary/90' : 'text-primary/70'}`}
      >
        {skill.name}
      </span>

      {isEmphasized && (
        <div className="top-0 right-0 absolute bg-linear-to-b from-transparent via-indigo-500/50 to-transparent opacity-50 w-px h-full" />
      )}
    </motion.div>
  );
};
const StoryCard = ({
  number,
  title,
  desc,
  index,
}: {
  number: string;
  title: string;
  desc: string;
  index: number;
}) => {
  // Staggered slide-in variants
  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      transition={{
        duration: 0.7,
        ease: [0.2, 0.65, 0.3, 0.9],
        delay: index * 0.12, // Stagger the cards themselves
      }}
      viewport={{ once: true }}
      className="py-4 pl-6 border-border-subtle border-l"
    >
      <div className="mb-4 font-mono text-xxs text-zinc-500 md:text-sm tracking-tighter">
        {number}
      </div>
      <h3 className="mb-3 font-bold text-md text-primary/85 md:text-2xl">
        <AnimateString delayOffset={index * 0.12}>{title}</AnimateString>
      </h3>
      <p className="max-w-xs text-text-secondary text-xxs md:text-sm leading-relaxed">
        <AnimateString delayOffset={index * 0.12}>{desc}</AnimateString>
      </p>
    </motion.div>
  );
};
