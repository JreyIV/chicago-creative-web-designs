// import { NavLinks } from "../constants";

// const Nav = () => {
//   return (
//     <nav className="max-container flex justify-between bg-slate-500 p-10">
//       <div>
//         <a href="/">
//           <h1>Logo</h1>
//         </a>
//       </div>
//       <div>
//         <ul className="flex gap-10">
//           {NavLinks.map((link) => (
//             <li key={link.href}>
//               <a href={link.href}>{link.label}</a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Nav;

import { useState, useEffect } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { NavLinks } from "../constants";
import { hamburger } from "../assets/icons";
import { chicago_creative_logo } from "../assets/images";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isNavHidden, setIsNavHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setIsNavHidden(true);
    } else {
      setIsNavHidden(false);
    }
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
      if (!isSmallScreen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSmallScreen]);

  return (
    <motion.nav
      className=" absolute flex justify-between bg-transparent items-center py-10 max-md:px-5 px-20 max-lg:bg-opacity-0 text-white w-full bg-red-300"
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      transition={{
        type: "easeInOut",
        duration: 0.35,
      }}
      animate={isSmallScreen ? "visible" : isNavHidden ? "hidden" : "visible"}
    >
      <div className="max-container relative flex justify-between items-center w-full max-md:px-5">
        <a href="/">
          <img
            src={chicago_creative_logo}
            alt="Chicago Creative Logo"
            width={isSmallScreen ? 200 : 300}
          />
        </a>
        <ul className="flex justify-center items-center max-xl:gap-10 gap-20 max-lg:hidden font-bold ml-auto">
          {NavLinks.map((link) => (
            <li key={link.label}>
              <motion.a
                href={link.href}
                className="font-okine leading-normal text-lg text-white"
                whileHover={{ color: "#5e60ce" }}
              >
                {link.label}
              </motion.a>
            </li>
          ))}
        </ul>
        <motion.div
          whileHover={{ scale: 1.25 }}
          whileTap={{ scale: 0.95 }}
          className="hidden max-lg:block cursor-pointer absolute right-0 pr-5"
          onClick={toggleMenu}
        >
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </motion.div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed left-0 top-0 w-full h-screen origin-top bg-brand-green p-10 z-50"
            >
              <div className="flex h-full flex-col">
                <div className="flex justify-between">
                  <h1 className="text-okine text-lg text-off-white">Joseph.</h1>
                  <motion.p
                    className="cursor-pointer text-md text-off-white"
                    whileHover={{ scale: 1.3, color: "#14746F" }}
                    onClick={toggleMenu}
                  >
                    Close
                  </motion.p>
                </div>
                <div className="flex flex-col h-full justify-center items-center gap-4">
                  <ul>
                    {NavLinks.map((link) => (
                      <div key={link.label}>
                        <motion.li
                          key={link.label}
                          whileHover={{ scale: 1.25 }}
                        >
                          <motion.a
                            href={link.href}
                            className="font-okine text-6xl leading-normal text-off-white uppercase"
                            whileHover={{ color: "#14746F" }}
                            onClick={closeMenu}
                          >
                            {link.label}
                          </motion.a>
                        </motion.li>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Nav;
