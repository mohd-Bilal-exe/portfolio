import { motion } from "framer-motion";


const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, onClick, className, disabled}: { children: string; onClick: ()=>void;className:string ; disabled:boolean}) => {

  return (
    <motion.button
      initial="initial"
      animate="hovered"
      whileHover={"hovered"}
      onClick={onClick}
      disabled={disabled}      
      className={`cursor-pointer block relative overflow-hidden uppercase whitespace-nowrap ${className}`}
     
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
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