/* eslint-disable react/prop-types */
import { right_arrow } from "../assets/icons";
import { motion } from "framer-motion";

const ProjectsCard = ({ image, title, description, link }) => {
  const scaleVars = {
    initial: {
      scale: 0,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 0.2,
        ease: [0.12, 0, 0.39, 0],
      },
    },
  };
  return (
    <motion.div
      variants={scaleVars}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className=" max-md:w-full h-[20rem] rounded-lg shadow-2xl z-10"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative flex flex-col gap-5 rounded-lg text-white p-10 bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-300 h-full ">
        <h3 className="font-poppins text-3xl font-bold">{title}</h3>
        <p className="font-jakarta text-2xl max-lg:text-lg">{description}</p>
        <a
          href={link}
          className="font-jakarta text-2xl max-lg:text-lg absolute bottom-10 flex items-center gap-2"
          target="_blank"
        >
          Visit <img src={right_arrow} alt="right arrow" width={30} />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectsCard;
