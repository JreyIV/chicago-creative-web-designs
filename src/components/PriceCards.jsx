/* eslint-disable react/prop-types */
import { check, dollar } from "../assets/icons";
import { motion } from "framer-motion";

const PriceCards = ({
  price,
  title,
  features,
  color,
  gradient,
  textColor,
  index,
}) => {
  const cardStyle = {
    backgroundColor: color,
    backgroundImage: gradient,
    borderRadius: "1rem",
    padding: "2rem 1.25rem",
    height: "32rem",
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
  };
  const imageFilter = title === "Standard" ? "invert(1)" : "none";
  const buttonBackgroundColor = title === "Standard" ? "#FFFFFF" : "none";
  const titleTextColor = title === "Standard" ? "#FFFFFF" : "#6717CD";
  const borderType = title === "Standard" ? "none" : "solid";

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
        delay: 0.3 * index,
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
      className="shadow-2xl max-md:w-full max-lg:w-2/3 w-1/3 mx-auto"
      style={{ ...cardStyle }}
    >
      <div
        className="flex flex-col gap-2 text-start"
        style={{ color: textColor }}
      >
        <p className="font-poppins text-2xl flex items-center gap-2">
          <span>
            <img
              src={dollar}
              alt="dollar icon"
              width={12}
              style={{ filter: imageFilter }}
            />
          </span>
          {price}
        </p>
        <h2 className="font-poppins text-lg" style={{ color: titleTextColor }}>
          {title}
        </h2>
      </div>
      <div className="flex items-center w-[80px]">
        <div
          style={{
            height: "1px",
            backgroundColor: textColor,
            flex: 1,
          }}
        ></div>
      </div>
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col gap-2 text-start">
          <p
            className="font-jakarta flex items-center gap-3 text-md"
            style={{ color: textColor }}
          >
            <span>
              <img
                src={check}
                alt="check icon"
                width={20}
                style={{ filter: imageFilter }}
              />
            </span>
            {feature}
          </p>
        </div>
      ))}
      <a href="" className="mt-auto w-full ">
        <button
          className="w-full p-3 rounded-full font-jakarta text-sm font-bold hover:scale-105 transition-all duration-300 ease-in-out "
          style={{
            backgroundColor: buttonBackgroundColor,
            border: borderType,
          }}
        >
          Contact Me
        </button>
      </a>
    </motion.div>
  );
};

export default PriceCards;
