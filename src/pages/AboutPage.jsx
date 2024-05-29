import { about_background, me, personal_developer } from "../assets/images";

const AboutPage = () => {
  return (
    <main className="bg-[#f8f7ff] min-h-lvh max-w-[1920px] mx-auto overflow-x-hidden">
      <div
        className="h-[25rem] max-md:h-[15rem] overlay flex justify-center items-center"
        style={{
          backgroundImage: `url(${about_background})`,
          backgroundPosition: "0% 25%",
          backgroundSize: "cover",
        }}
      >
        <h1 className="font-poppins text-4xl font-bold text-white mt-20 tracking-wider">
          About
        </h1>
      </div>
      <div className="max-container px-5 py-20">
        {/* about me */}
        <div className="flex max-lg:flex-col gap-10 items-center pb-20">
          <img
            src={me}
            alt="developer image"
            width={400}
            className="rounded-xl"
          />
          <div className="flex flex-col">
            <h2 className="font-poppins text-lg text-brand-blue-600">
              Chicago Creative Web Designs
            </h2>
            <p className="font-poppins text-2xl text-black font-bold italic">
              Creative designs, impactful results.
            </p>
            <p className="mt-5 font-jakarta text-lg text-black leading-relaxed">
              My name is Joseph Reyes and I am the founder and sole developer of
              Chicago Creative Web Designs. I studied Computer Science at DePaul
              University where I instantly fell in love with programming. While
              attending school, I worked at the DePaul ID Lab where I developed
              websites for companies big and small.
            </p>
            <p className="mt-5 font-jakarta text-lg text-black leading-relaxed">
              After graduating, I wanted to continue making websites but decided
              to focus on smaller businesses which is why I created Chicago
              Creative Web Designs. As a small business owner myself, I
              understand the dedication and commitment that goes into running a
              business. My goal is to ease your burden on the digital front for
              an extremely affordable cost. While Chicago Creative Web Designs
              is a small and new company, I am confident that I will bring you
              huge results with my websites. Let&apos;s grow together.
            </p>
          </div>
        </div>
        {/* my mission */}
        <div className=" mt-20 p-20 max-md:px-5 flex flex-col gap-5 items-center text-center max-md:text-start rounded-2xl shadow-2xl">
          <h2 className="font-poppins text-4xl max-md:text-3xl font-bold text-black ">
            <span className="text-brand-blue-600">My</span> Mission
          </h2>
          <p className="font-jakarta text-lg text-black leading-relaxed ">
            At Chicago Creative Web Designs, my mission is to empower small
            businesses by creating unique, high-performance websites that stand
            out in the digital landscape. I believe that every business deserves
            a website that reflects its individual personality and brand
            identity, which is why I hand-code each site from scratch—no
            templates, no boilerplates, no website builders. My commitment to
            affordability means that even the smallest businesses can benefit
            from a powerful online presence without breaking the bank. I strive
            to make the digital transformation accessible to all, helping your
            business grow and succeed online.
          </p>
        </div>

        {/* personal web developer */}
        <div className="mt-[10rem] flex max-lg:flex-col gap-20 items-center text-start">
          <img src={personal_developer} alt="personal developer" width={500} />
          <div className="flex flex-col gap-5 w-1/2 max-lg:w-full">
            <h2 className="font-poppins text-4xl max-md:text-3xl font-bold text-black ">
              <span className="text-brand-blue-600">Your Personal</span> <br />{" "}
              Web Developer
            </h2>
            <p className="font-jakarta text-lg text-black leading-relaxed">
              Having a dedicated web developer at your disposal offers
              unparalleled advantages. With a single point of contact, you
              ensure clear and consistent communication, enabling a deep
              understanding of your business needs and goals. This personalized
              approach allows for tailored solutions, faster turnaround times,
              and a cohesive vision throughout your project.
            </p>
            <p className="font-jakarta text-lg text-black leading-relaxed">
              Enjoy the peace of mind that comes with having a reliable, skilled
              professional managing your online presence.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
