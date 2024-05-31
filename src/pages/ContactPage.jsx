import { plane } from "../assets/icons";
import { contact_background, contact_image } from "../assets/images";
import { motion, useAnimationControls } from "framer-motion";

const ContactPage = () => {
  const controls = useAnimationControls();

  const handleHover = () => {
    controls.start("translate");
  };

  const handleHoverEnd = () => {
    controls.start("initial");
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
          backgroundImage: `url(${contact_background})`,
          backgroundPosition: "0% 50%",
          backgroundSize: "cover",
        }}
      >
        <h1 className="font-poppins text-4xl font-bold text-white mt-20 tracking-wider">
          Contact
        </h1>
      </div>

      <div className="max-container px-5 py-20 flex max-lg:flex-col gap-10">
        <img
          src={contact_image}
          alt="man sending message"
          className="w-1/2 max-lg:w-full rounded-3xl"
        />

        <div className="flex flex-col gap-5 w-1/2 max-lg:w-full">
          <div className="flex flex-col gap-5">
            <h2 className="font-poppins text-3xl font-bold text-black">
              Contact Me
            </h2>
            <p className="font-jakarta text-md text-slate-600">
              Fill out this form with your full name, company name , email, and
              super small description of your desired project. I will get back
              to you ASAP to set up a meeting so that we can discuss further!
            </p>
          </div>
          <form className="flex flex-col gap-5">
            {/* name */}
            <label className="block w-full">
              <span className="font-jakarta text-black text-sm font-medium transition-transform peer-focus:scale-0">
                Full Name
              </span>
              <input
                name="full_name"
                className="w-full rounded border border-slate-300 p-2 text-sm focus:border-brand-blue-400 focus:outline-none bg-transparent peer"
                required
              />
            </label>
            {/* company */}
            <label className="block w-full">
              <span className="font-jakarta text-black text-sm font-medium transition-transform peer-focus:scale-0">
                Company Name
              </span>
              <input
                name="company_name"
                className="w-full rounded border border-slate-300 p-2 text-sm focus:border-brand-blue-400 focus:outline-none bg-transparent peer"
                required
              />
            </label>
            {/* Email */}
            <label className="block w-full">
              <span className="font-jakarta text-black text-sm font-medium transition-transform peer-focus:scale-0">
                Email
              </span>
              <input
                name="email"
                className="w-full rounded border border-slate-300 p-2 text-sm focus:border-brand-blue-400 focus:outline-none bg-transparent peer"
                required
              />
            </label>

            {/* message */}
            <label className="relative block w-full col-span-2">
              <span className="font-jakarta text-black text-sm font-medium transition-transform peer-focus:scale-0">
                Message
              </span>
              <textarea
                name="message"
                className="w-full h-32 rounded border border-slate-300   p-2 text-sm focus:border-brand-blue-400 focus:outline-none bg-transparent peer"
                required
              />
            </label>

            {/* button */}

            <div className="">
              <div className="">
                <motion.button
                  type="submit"
                  className="font-jakarta px-6 py-4 text-sm font-bold focus:border-brand-blue-600 focus:outline-none bg-brand-blue-800 cursor-pointer text-white w-full rounded-lg flex items-center justify-center gap-2"
                  whileHover={handleHover}
                  onHoverEnd={handleHoverEnd}
                >
                  Send Message
                  <motion.img
                    src={plane}
                    alt="plane Icon"
                    className="w-4 h-4"
                    variants={arrowTranslate}
                    initial="initial"
                    animate={controls}
                  />
                </motion.button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
