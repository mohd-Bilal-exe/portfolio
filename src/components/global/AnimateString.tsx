import { motion } from 'framer-motion';

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

  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-3 last:mr-0" // inline-block keeps them on the same line
          initial={{ opacity: 0, y: 15, filter: 'blur(5px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: delayOffset + i * 0.05,
            ease: [0.2, 0.65, 0.3, 0.9],
          }}
        >
          {`${word}`}
        </motion.span>
      ))}
    </span>
  );
};
export default AnimateString;
