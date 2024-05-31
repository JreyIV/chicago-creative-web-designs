import { link_arrow, right_arrow } from "../assets/icons";
import { portfolio_background } from "../assets/images";
import { portfolioThumbnails } from "../constants";
import { motion, useAnimationControls } from "framer-motion";
import { Link } from "react-router-dom";

const PortfolioPage = () => {
  const controls = useAnimationControls();

  const handleHover = () => {
    controls.start("zoom");
    controls.start("translate");
  };

  const handleHoverEnd = () => {
    controls.start("initial");
    controls.start("initial");
  };

  const imageZoomin = {
    initial: {
      scale: 1,
    },
    zoom: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: [0.12, 0, 0.39, 0],
      },
    },
  };
  const arrowTranslate = {
    initial: {
      x: 0,
    },
    translate: {
      x: 4,
      transition: {
        duration: 0.2,
        ease: [0.12, 0, 0.39, 0],
      },
    },
  };

  return (
    <main className="bg-[#f8f7ff] min-h-lvh max-w-[1920px] mx-auto overflow-x-hidden">
      <div
        className="h-[25rem] max-md:h-[15rem] overlay flex justify-center items-center"
        style={{
          backgroundImage: `url(${portfolio_background})`,
          backgroundPosition: "0% 70%",
          backgroundSize: "cover",
        }}
      >
        <h1 className="font-poppins text-4xl font-bold text-white mt-20 tracking-wider">
          Portfolio
        </h1>
      </div>

      <div className="max-container px-5 py-20">
        <div className="pb-10">
          <div className="flex flex-col gap-5 text-center items-center justify-center pb-20 text-black">
            <h2 className="font-poppins text-3xl font-bold lg:w-3/4">
              The New Kid on the Block
            </h2>
            <p className="font-jakarta text-lg lg:w-3/4 text-slate-400">
              Chicago Creative Web Designs is a very new company so there
              aren&apos;t many projects to showcase at the moment. Allow me to
              become a part of your success story so that you can be a part of
              mine. I guarantee you won&apos;t regret it.
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap gap-5">
            {portfolioThumbnails.map((thumbnail, index) => (
              <motion.div
                key={index}
                className="w-1/2 max-lg:w-full"
                whileHover={handleHover}
                onHoverEnd={handleHoverEnd}
              >
                <a
                  href={thumbnail.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-lg"
                >
                  <motion.img
                    src={thumbnail.src}
                    alt={`${thumbnail.business} thumbnail`}
                    className="w-full h-full rounded-lg"
                    variants={imageZoomin}
                    initial="initial"
                    animate={controls}
                  />
                </a>
                <div className="flex gap-2 items-center p-2">
                  <a
                    href={thumbnail.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-poppins text-xl font-bold text-black"
                  >
                    {thumbnail.business}
                  </a>
                  <motion.img
                    src={link_arrow}
                    alt="right arrow link icon"
                    width={15}
                    variants={arrowTranslate}
                    initial="initial"
                    animate={controls}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-20 flex max-md:flex-col gap-10 items-center bg-[#03045e] p-20 max-lg:p-5 rounded-2xl shadow-2xl">
          <div className="flex flex-col gap-5 text-start items-start  text-white max-md:w-full w-1/2">
            <h2 className="font-poppins text-4xl max-md:text-3xl font-bold">
              Partner With Me
            </h2>
            <p className="font-jakarta text-lg ">
              I&apos;m excited to collaborate with small businesses, sharing in
              your journey, growth, and success. Together, we will do great
              things. Let&apos;s build something amazing!
            </p>
          </div>
          <div className="max-md:w-full w-1/2 items-end max-md:items-start flex flex-col">
            <Link to={"/contact"}>
              <button
                className="p-5 font-poppins font-bold text-white text-xl flex gap-2 items-center border-2 rounded-full hover:border-blue-500 hover:bg-blue-500 transition duration-500"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Contact Me
                <img src={right_arrow} alt="right arrow icon" width={15} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PortfolioPage;
