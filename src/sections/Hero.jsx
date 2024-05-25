import { hero_image } from "../assets/images";

const Hero = () => {
  return (
    <section className=" w-100% bg-gradient-to-b from-brand-blue-400 to-brand-blue-800 flex justify-center items-center gap-10 max-md:h-[75vh] max-h-[60vh]">
      <div className="max-container max-md:px-5  max-sm:mt-[35rem] max-md:mt-[45rem] max-lg:mt-[35%] max-xl:mt-[20rem] mt-[20rem] flex max-md:flex-col  text-white text-start max-sm:text-start  items-center justify-center">
        <div className="flex flex-col md:px-5 gap-10">
          <h1 className="text-4xl max-lg:text-3.5xl font-extrabold font-poppins ">
            Tailored{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-gradient-blue-400 to-gradient-blue-200">
              Web Design
            </span>{" "}
            +{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-gradient-blue-400 to-gradient-blue-200">
              Development
            </span>{" "}
            for Small Businesses
          </h1>
          <p className="text-lg font-jakarta pr-10">
            Make a powerful online impression with a website that is as unique
            and dynamic as your business.
          </p>
          <a href="">
            <button className="btn btn-md inline uppercase bg-white border-none text-black hover:bg-slate-100 ">
              Get in touch
            </button>
          </a>
        </div>
        <div className="">
          <img src={hero_image} alt="devices" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
