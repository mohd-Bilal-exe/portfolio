import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import AnimateString from '../../global/AnimateString';
import {
    contentHeading,
    contentIndex,
    contentSubHeading,
    mainContent,
    pageHeading,
    pageName,
} from '../../../lib/fontClassNames';
import useMediaQuery from '../../../hooks/useMediaQuery';

const Experience = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <section
            id="mohammad-bilal-experience"
            className="relative flex flex-col justify-center py-[10svh] w-full min-h-svh overflow-hidden font-space-grotesk font-bold"
        >
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mx-[7dvw] md:mx-[10dvw] py-[5svh] md:py-10"
            >
                <div className="bg-zinc-700 w-12 h-px" />
                <span
                    className={twMerge(pageName, 'font-medium text-text-secondary uppercase tracking-widest')}
                >
                    My Professional Journey.
                </span>
            </motion.div>

            <div className="flex flex-col gap-1 md:gap-10 px-[10dvw] w-full">
                <span
                    className={twMerge(
                        pageHeading,
                        'mb-6 font-bold text-text-primary/85 leading-[1.1]'
                    )}
                >
                    <AnimateString isMobile={isMobile} delayOffset={0.05}>
                        Professional Experience
                    </AnimateString>
                    <br />
                    <AnimateString isMobile={isMobile} delayOffset={0.12} className="text-text-muted">
                        From Intern to Developer.
                    </AnimateString>
                </span>

                <p
                    className={twMerge(
                        mainContent,
                        'mb-16 max-w-3xl text-text-secondary leading-relaxed'
                    )}
                >
                    <AnimateString isMobile={isMobile} delayOffset={0.18}>
                        My time at RealtyPlus has been a masterclass in building scalable, real-world applications.
                        I've navigated the full lifecycle of software development—from initial internship tasks
                        to leading frontend architecture in my full-time role.
                    </AnimateString>
                </p>

                {/* Experience Cards */}
                <div className="gap-8 grid grid-cols-1 md:grid-cols-2 mb-20">
                    <StoryCard
                        isMobile={isMobile}
                        index={0}
                        number="// Apr 2025 – Present"
                        title="Software Developer"
                        desc="RealtyPlus, Zambia (Remote) — Developing CMS, dashboards, and internal tools from scratch. Refactored legacy code, reduced API response time by 35%, and led frontend architecture decisions for new modules."
                        tech={['React', 'Firebase', 'Zustand', 'Tailwind CSS', 'Next.js', 'TypeScript', 'Node.js', 'genAI']}
                    />

                    <StoryCard
                        isMobile={isMobile}
                        index={1}
                        number="// Nov 2024 – Mar 2025"
                        title="Software Developer Intern"
                        desc="RealtyPlus, Zambia (Remote) — Built and maintained property listing systems. Integrated Firebase Auth for secure agent uploads. Improved deliveries speed by 25% and optimized production UI performance."
                        tech={['React', 'Firebase', 'Redux', 'Tailwind CSS']}
                    />
                </div>
            </div>
        </section>
    );
};

const StoryCard = ({
    isMobile,
    number,
    title,
    desc,
    index,
    tech = [],
}: {
    number: string;
    isMobile: boolean;
    title: string;
    desc: string;
    index: number;
    tech?: string[];
}) => {
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
                delay: index * 0.12,
            }}
            viewport={{ once: true }}
            className="py-4 pl-6 border-text-primary/15 border-l"
        >
            <div className={twMerge(contentIndex, 'mb-4 font-mono text-zinc-500 tracking-tighter')}>
                {number}
            </div>
            <h3 className={twMerge(contentHeading, 'mb-3 font-bold text-text-primary/95')}>
                <AnimateString isMobile={isMobile} delayOffset={index * 0.12}>{title}</AnimateString>
            </h3>
            <p className={twMerge(contentSubHeading, 'max-w-md text-text-primary/65 leading-relaxed mb-6')}>
                <AnimateString isMobile={isMobile} delayOffset={index * 0.12}>{desc}</AnimateString>
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
                {tech.map((t, i) => (
                    <motion.span
                        key={t}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.12 + i * 0.05 + 0.3 }}
                        viewport={{ once: true }}
                        className="bg-background-overlay/60 px-3 py-1 rounded-full font-mono text-text-secondary text-[10px] md:text-xs border border-text-primary/5"
                    >
                        {t}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    );
};

export default Experience;
