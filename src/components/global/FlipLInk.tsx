import { motion } from 'framer-motion';

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({
  children,
  onClick,
  className = '',
  disabled = false,
}: {
  children: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}) => {
  return (
    <motion.button
      type="button"
      initial="initial"
      animate="initial"
      whileHover={'hovered'}
      whileFocus={'hovered'}
      onClick={onClick}
      disabled={disabled}
      aria-label={children}
      className={` inline-block relative overflow-hidden  ${className}`}
    >
      <div>
        {children.split('').map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: '-100%',
              },
            }}
            transition={{
              duration: DURATION,
              ease: 'easeInOut',
              delay: STAGGER * i,
            }}
            className="inline-block font-space-grotesk"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split('').map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: '100%',
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: 'easeInOut',
              delay: STAGGER * i,
            }}
            className="inline-block font-space-grotesk"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.button>
  );
};
export default FlipLink;
