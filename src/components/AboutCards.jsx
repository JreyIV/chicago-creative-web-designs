/* eslint-disable react/prop-types */
const AboutCards = ({ image, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center gap-5 w-1/3 max-sm:w-full max-lg:w-3/4  ">
      <img src={image} alt={`${title} logo`} width={100} />
      <h3 className="font-poppins font-bold text-xl">{title}</h3>
      <p className="font-jakarta text-md leading-relaxed">{description}</p>
    </div>
  );
};

export default AboutCards;
