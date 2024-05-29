import { portfolio_background } from "../assets/images";

const PortfolioPage = () => {
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
    </main>
  );
};

export default PortfolioPage;
