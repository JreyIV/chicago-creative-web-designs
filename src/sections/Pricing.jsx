import { pricing_transition, maintenance_package } from "../assets/images";
import { check2 } from "../assets/icons";
import PriceCards from "../components/PriceCards";
import { prices, maintenance_package_feautures } from "../constants";
import { motion } from "framer-motion";

const Pricing = () => {
  const staggerCardsVars = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.2 * index,
        ease: [0.12, 0, 0.39, 0],
      },
    }),
  };

  return (
    <section className="bg-[#f8f7ff] overflow-hidden">
      <div className="max-container py-20 flex flex-col text-center items-center justify-center gap-5 text-black">
        <div className="">
          <h2 className="font-poppins text-3xl font-bold uppercase">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F237EF] to-[#FC5252]">
              Affordable
            </span>{" "}
            Pricing.
          </h2>
        </div>
        <div className="flex items-center w-[10rem]">
          <div
            style={{ height: "1px", backgroundColor: "#4ea8de", flex: 1 }}
          ></div>
          <img src={pricing_transition} alt="phone icon" width={45} />
          <div
            style={{
              height: "1px",
              backgroundColor: "#4ea8de",
              flex: 1,
            }}
          ></div>
        </div>
        <p className="font-jakarta text-lg lg:px-20 px-5">
          Prices will vary depending on the unique needs of your business. These
          prices are estimates to help you guage the cost of your website.
          Contact me to get a quote.
        </p>
        <div className="w-full flex max-lg:flex-col gap-5 mt-20 px-5 z-10">
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
        <span className="font-poppins uppercase font-bold text-2xl mt-20">
          or
        </span>

        <div className="relative flex max-lg:flex-col-reverse max-lg:items-center gap-10 w-full mt-10">
          <div className="blob1 spacer max-md:w-[1000%] max-md:left-[-210%] max-sm:top-[-100rem] md:w-[200%] md:left-[-30%] md:top-[-65rem] lg:top-[-45rem] lg:left-[5%]"></div>
          <div className="flex flex-col gap-5 mt-10 px-5 text-start  w-1/2 max-md:w-full">
            <h3 className="font-poppins text-3.5xl font-bold tracking-wider text-brand-blue-800 z-10">
              Maintenance Package
            </h3>
            <p className="font-jakarta font-bold text-xl">
              <span className="text-brand-blue-600">50%</span> off ticketed
              price, <span className="text-brand-blue-600">$50</span> per month,
              6 month minimum contract
            </p>
            <p className="font-jakarta text-lg leading-relaxed">
              Keep your website running smoothly with our maintenance
              package—get 50% off the original design and development cost and
              pay $50 a month for ongoing updates, fixes, and support to ensure
              your site stays at its best.
            </p>
            <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-5 mt-10">
              {maintenance_package_feautures.map((feature, index) => (
                <motion.div
                  variants={staggerCardsVars}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={index}
                  key={index}
                  className="flex gap-5"
                >
                  <img
                    src={check2}
                    alt="check icon"
                    width={25}
                    className="mb-auto"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="font-jakarta text-lg font-bold">
                      {feature.title}
                    </p>
                    <p className="font-jakarta text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="z-10">
            <img
              src={maintenance_package}
              alt="maintanance package image"
              width={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
