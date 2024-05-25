import { about_transition } from "../assets/images";
import AboutCards from "../components/AboutCards";
import { aboutCards } from "../constants";

const About_home = () => {
  return (
    <section className="max-container flex flex-col gap-10 px-5 text-black">
      <div className="flex flex-col gap-5 items-center justify-center text-center  max-sm:mt-[30rem] max-md:mt-[40rem] max-lg:mt-[25rem] mt-[20rem] lg:px-20 ">
        <h2 className="font-poppins text-3xl font-bold uppercase">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFe031] to-[#F04579]">
            Crafting
          </span>{" "}
          Experiences.
        </h2>
        <div className="flex items-center w-[10rem]">
          <div
            style={{ height: "1px", backgroundColor: "#4ea8de", flex: 1 }}
          ></div>
          <img src={about_transition} alt="phone icon" width={40} />
          <div
            style={{
              height: "1px",
              backgroundColor: "#4ea8de",
              flex: 1,
            }}
          ></div>
        </div>
        <p className="font-jakarta text-lg">
          I specialize in crafting custom websites tailored to meet the unique
          needs of small businesses. All code is hand-written which ensures that
          your website is not only unique but also optimized for speed and
          performance. This meticulous approach guarantees a fast, responsive
          website that enhances user experience, attracts more visitors, and
          increases engagement. By focusing on high-quality, custom coding, I
          help your business stand out from the competition, leading to higher
          conversion rates and increased revenue.
        </p>
      </div>
      <div className="flex max-lg:flex-col items-center justify-center mt-10 gap-10">
        {aboutCards.map((card) => (
          <AboutCards
            key={card.title}
            image={card.src}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
};

export default About_home;
