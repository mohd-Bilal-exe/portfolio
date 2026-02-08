import { motion, useReducedMotion } from 'framer-motion';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const AnimateString = ({
  children,
  className,
  direction = 'bottom',
  delayOffset = 0,
}: {
  children: string;
  className?: string;
  direction?: 'top' | 'bottom';
  delayOffset?: number;
}) => {
  if (!children) return null;

  const shouldReduce = useReducedMotion();
  const words = children.split(' ').filter(Boolean);

  if (shouldReduce) {
    return <span className={className}>{children}</span>;
  }
  const wordVariant = (direction: 'top' | 'bottom') => ({
    hidden: {
      opacity: 0,
      y: direction === 'top' ? -10 : 10,
      filter: 'blur(10px)',
    },
    visible: {
      opacity: [0, 0.5, 1],
      y: [direction === 'top' ? -10 : 10, direction === 'top' ? 5 : -5, 0],
      filter: ['blur(10px)', 'blur(5px)', 'blur(0px)'],
    },
  });

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-3 last:mr-0 transform-gpu"
          variants={wordVariant(direction)}
          transition={{
            duration: shouldReduce ? 0 : 0.5,
            ease: [0.22, 1, 0.36, 1],
            delay: shouldReduce ? 0 : delayOffset + i * 0.02,
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimateString;
