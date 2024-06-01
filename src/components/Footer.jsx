import { chicago_creative_logo } from "../assets/images";
import { NavLinks } from "../constants";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex justify-between bg-transparent items-center py-10 max-md:px-5 px-20 max-lg:bg-opacity-0 text-white w-full bg-gradient-to-b from-brand-blue-800 to-brand-blue-400 max-w-[1920px] mx-auto">
      <div className="max-container relative flex flex-col gap-10 items-center w-full max-md:px-5">
        <a href="/">
          <img
            src={chicago_creative_logo}
            alt="Chicago Creative Logo"
            width={300}
          />
        </a>
        <div className="flex items-center w-full">
          <div
            style={{
              height: "1px",
              backgroundColor: "#FFFFFF",
              flex: 1,
              opacity: 0.5,
            }}
          ></div>
        </div>
        <ul className="flex justify-center items-center max-xl:gap-10 gap-20 font-bold max-md:flex-col max-md:mr-auto max-md:gap-5">
          {NavLinks.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.href}
                className="font-okine leading-normal text-lg text-white hover:text-brand-blue-800 transition duration-300 ease-in-out"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-center gap-5">
          <p className="text-md font-jakarta">ccwdinfo@gmail.com</p>
          <p className="text-xs">
            All Rights Reserved Copyright &copy; Chicago Creative Web Designs
            2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
