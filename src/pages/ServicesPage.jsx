import {
  services_background,
  design_service,
  development_service,
  code_service,
  branding,
  process_background,
  cube,
} from "../assets/images";
import { arrow, check, check2 } from "../assets/icons";
import {
  designCard,
  developmentCard,
  seoCards,
  logoFeatures,
  processSteps,
  prices,
} from "../constants";
import PriceCards from "../components/PriceCards";
import { motion } from "framer-motion";

const ServicesPage = () => {
  const staggerCardsUpVars = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.1 * index,
        ease: [0.12, 0, 0.39, 0],
      },
    }),
  };
  const staggerCardsLeftVars = {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.1 * index,
        ease: [0.12, 0, 0.39, 0],
      },
    }),
  };
  const staggerCardsRightVars = {
    initial: {
      opacity: 0,
      x: -50,
    },
    animate: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        delay: 0.3 * index,
        ease: [0.12, 0, 0.39, 0],
      },
    }),
  };

  return (
    <main className="bg-[#f8f7ff] min-h-lvh max-w-[1920px] mx-auto overflow-x-hidden">
      <div
        className="h-[25rem] max-md:h-[15rem] overlay flex justify-center items-center"
        style={{
          backgroundImage: `url(${services_background})`,
          backgroundPosition: "0% 80%",
          backgroundSize: "cover",
        }}
      >
        <h1 className="font-poppins text-4xl font-bold text-white mt-20 tracking-wider">
          Services
        </h1>
      </div>
      <div className="max-container px-5 py-20">
        <div className="pb-20">
          <div className="flex flex-col gap-5 text-center items-center justify-center pb-20 text-black">
            <h2 className="font-poppins text-3xl font-bold lg:w-3/4">
              Comprehensive Web Design and Development for Seamless Online
              Experiences
            </h2>
            <p className="font-jakarta text-lg lg:w-3/4 text-slate-400">
              Create custom, high-performance websites that ensure smooth and
              engaging user experiences.
            </p>
          </div>
          <div className="flex max-lg:flex-col gap-5 max-lg:gap-20 text-center items-center justify-center text-black">
            <div className="bg-[#e9e7ff69] max-lg:w-full w-1/2 h-[35rem] xl:h-[32rem] max-lg:h-[40rem] max-w-[35rem] p-5 py-20 rounded-xl shadow-xl relative">
              <img
                src={design_service}
                alt="design icon"
                width={80}
                className="absolute top-[-30px] left-[50%] translate-x-[-50%]"
              />
              <h3 className="font-poppins text-xl">Innovative Web Design</h3>
              <div className="flex flex-col gap-5 mt-10 text-start">
                {designCard.map((card, index) => (
                  <motion.div
                    key={index}
                    variants={staggerCardsLeftVars}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={index}
                  >
                    <div className="flex gap-2">
                      <img src={check} alt="check icon" width={20} />
                      <p className="font-jakarta text-md">{card.title}</p>
                    </div>
                    <p className="font-jakarta text-sm text-slate-600">
                      {card.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
            <span className="font-jakarta text-3xl">+</span>
            <div className="bg-[#e9e7ff69] max-lg:w-full w-1/2 h-[35rem] xl:h-[32rem] max-lg:h-[40rem] max-w-[35rem] p-5 py-20 rounded-xl shadow-xl relative">
              <img
                src={development_service}
                alt="design icon"
                width={80}
                className="absolute top-[-30px] left-[50%] translate-x-[-50%]"
              />
              <h3 className="font-poppins text-xl">Advanced Web Development</h3>
              <div className="flex flex-col gap-5 mt-10 text-start">
                {developmentCard.map((card, index) => (
                  <motion.div
                    key={index}
                    variants={staggerCardsLeftVars}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={index}
                  >
                    <div className="flex gap-2">
                      <img src={check} alt="check icon" width={20} />
                      <p className="font-jakarta text-md">{card.title}</p>
                    </div>
                    <p className="font-jakarta text-sm text-slate-600">
                      {card.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* code vs no code */}
        <div className="flex max-lg:flex-col-reverse gap-5 pb-20 mt-20 text-black items-center">
          <div className="flex flex-col gap-5 text-start ">
            <h2 className="font-poppins font-bold text-3xl">
              Why <span className="text-brand-blue-600">Custom Code</span>{" "}
              Outperforms Website Builders
            </h2>
            <p className="font-jakarta text-lg text-slate-600">
              Too often I see business owners overpaying for websites that were
              made with templates or website builders like Wix, Squarespace,
              Wordpress and others. This is a problem because these platforms
              often provide limited functionality, generic designs, and subpar
              performance compared to custom-coded solutions.
            </p>
            <p className="font-jakarta text-lg text-slate-600">
              Unlike generic website builders, custom-coded websites are
              tailored to your specific needs, ensuring optimal functionality
              and a better user experience. They offer superior performance,
              enhanced security, and better SEO optimization, which can
              significantly boost your search engine rankings. Additionally,
              custom code allows for greater scalability and future-proofing,
              enabling your website to grow and adapt alongside your business.
            </p>
            <p className="font-jakarta text-lg text-slate-600">
              Stop overpaying for subpar websites that don&apos;t meet your
              business needs. Your business is worth so much more than a drag
              and drop art project.
            </p>
          </div>
          <img src={code_service} alt="coder image" width={500} />
        </div>

        {/* SEO 2024 */}
        <div className="mt-20 pb-20">
          <div className="flex flex-col gap-5 text-center items-center">
            <h2 className="font-poppins text-3xl font-bold lg:w-3/4 text-black">
              Modern Search Engine Optimization Practices for 2024
            </h2>
            <p className="font-jakarta text-lg lg:w-3/4 text-slate-400">
              SEO strategies can change and the techniques used to stay on top
              of the rankings evolve over time. I am constantly staying ahead of
              the curve and updating my strategies to make sure my websites stay
              in the top of the search results. I offer a number of the latest
              search engine optimization techniques for 2024:
            </p>
          </div>
          <div className="grid grid-cols-4 max-md:grid-cols-2 gap-10 max-md:gap-2 mt-20">
            {seoCards.map((card, index) => (
              <motion.div
                key={index}
                variants={staggerCardsUpVars}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
                className="flex flex-col gap-5  rounded-2xl p-5 shadow-lg border-t-4 border-brand-blue-800"
              >
                <div>
                  <div className="p-3 bg-blue-200 rounded-full inline-block mb-2">
                    <img src={card.src} alt="seo strategy icon" width={20} />
                  </div>
                  <p className="font-poppins text-md text-black ">
                    {card.title}
                  </p>
                </div>
                <p className="font-jakarta text-sm text-slate-600">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* logos */}
        <div className="mt-20 pb-20 flex max-lg:flex-col-reverse gap-10 items-center">
          <div className="flex flex-col gap-5 text-start ">
            <h2 className="font-poppins font-bold text-3xl text-black">
              Custom <span className="text-brand-blue-600">Logos</span> and Logo
              Redesigns
            </h2>
            <p className="font-jakarta text-lg leading-relaxed text-slate-600">
              Got an existing logo that you want touched up or redesigned? I can
              help with that too. I offer custom logo designs and reworks. All I
              need from you is an idea and perhaps some reference photos.
            </p>
            <ul className="font-jakarta text-lg leading-relaxed text-black font-bold">
              {logoFeatures.map((feature, index) => (
                <motion.li
                  className="my-2 flex items-center gap-2"
                  key={index}
                  variants={staggerCardsLeftVars}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={index}
                >
                  <img src={check2} alt="checkmark icon" width={25} />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>
          <img src={branding} alt="designer image" width={500} />
        </div>
      </div>

      {/* my process */}
      <div
        className="mt-10 mb-10 w-lvw blue-overlay bg-fixed relative "
        style={{
          backgroundImage: `url(${process_background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <img
          src={cube}
          alt="cube"
          className="absolute top-[-60px] left-20 w-[150px] max-lg:w-[100px]"
        />
        <img
          src={cube}
          alt="cube"
          className="absolute top-[-80px] left-12 w-[50px] max-lg:w-[40px]"
        />
        <img
          src={cube}
          alt="cube"
          className="absolute bottom-[-40px] right-12 w-[100px]"
        />
        <div className="max-container px-5 py-20">
          <div className="flex flex-col gap-5 text-center items-center">
            <h2 className="font-poppins font-bold text-3xl text-white">
              My <span className="text-brand-blue-400">Straightforward</span>{" "}
              Process
            </h2>
            <p className="font-jakarta text-lg text-slate-300">
              My simple and effective process will take you from concept to
              launch with ease. No hassle, no wasting time.
            </p>
          </div>
          <div className="flex max-lg:flex-col gap-5 mt-20 text-white">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={staggerCardsRightVars}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
                className="flex max-lg:flex-col items-center gap-5 w-1/4 max-lg:w-full"
              >
                <div className="flex flex-col gap-2 text-center items-center max-w-[20rem]">
                  <span className="font-poppins text-4xl font-bold  w-fit relative">
                    <div className="bg-blue-300 inline-block w-fit h-fit absolute top-[5px] left-[-18px] rounded-full p-1">
                      <img src={step.icon} alt="check" width={20} />
                    </div>
                    {step.step}
                  </span>
                  <h3 className="font-poppins text-lg font-bold ">
                    {step.title}
                  </h3>
                  <p className="font-jakarta text-sm">{step.description}</p>
                </div>
                {index !== 3 ? (
                  <img
                    src={arrow}
                    alt="arrow icon"
                    width={40}
                    className="transform -scale-y-100 rotate-45 max-lg:rotate-90"
                  />
                ) : (
                  <div></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* prices */}

      <div className="max-container px-5 py-20 overflow-hidden">
        <div className="w-full flex max-lg:flex-col gap-5 mt-10 px-5 z-10 text-black">
          {prices.map((price) => (
            <PriceCards
              key={price.title}
              index={price.index}
              title={price.title}
              price={price.price}
              features={price.features}
              color={price.color}
              gradient={price.gradient}
              textColor={price.textColor}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ServicesPage;
