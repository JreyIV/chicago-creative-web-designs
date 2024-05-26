/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const AboutCards = ({ image, title, description, index }) => {
  const staggerCardsVars = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2 * index,
        ease: [0.12, 0, 0.39, 0],
      },
    },
  };
  return (
    <motion.div
      variants={staggerCardsVars}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="flex flex-col items-center text-center gap-5 w-1/3 max-sm:w-full max-lg:w-3/4  "
    >
      <img src={image} alt={`${title} logo`} width={100} />
      <h3 className="font-poppins font-bold text-xl">{title}</h3>
      <p className="font-jakarta text-md leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default AboutCards;
