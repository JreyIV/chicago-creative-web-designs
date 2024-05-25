import { pricing_transition } from "../assets/images";
import PriceCards from "../components/PriceCards";
import { prices } from "../constants";

const Pricing = () => {
  return (
    <section className="bg-white">
      <div className="max-container py-20 flex flex-col text-center items-center justify-center gap-5 text-black">
        <div>
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
        <p className="font-jakarta text-lg lg:px-20">
          Prices will vary depending on the unique needs of your business. These
          prices are estimates to help you guage the cost of your website.
          Contact me to get a quote.
        </p>
        <div className="w-full flex max-lg:flex-col gap-5 mt-20 px-5">
          {prices.map((price) => (
            <PriceCards
              key={price.title}
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
    </section>
  );
};

export default Pricing;
