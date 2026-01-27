import { motion, useReducedMotion } from 'framer-motion';

const AnimateString = ({
  children,
  className,
  delayOffset = 0,
}: {
  children: string;
  className?: string;
  delayOffset?: number;
}) => {
  if (!children) return null;
  const words = children.split(' ').filter(Boolean);
  const shouldReduce = useReducedMotion();
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-3 last:mr-0 transform-gpu" // inline-block keeps them on the same line
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={
            shouldReduce
              ? { duration: 0 } // or skip motion entirely
              : { duration: 0.5, delay: delayOffset + i * 0.02 }
          }
        >
          {`${word}`}
        </motion.span>
      ))}
    </span>
  );
};
export default AnimateString;
