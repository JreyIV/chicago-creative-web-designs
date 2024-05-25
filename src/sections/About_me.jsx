import { developer_transition, me } from "../assets/images";

const About_me = () => {
  return (
    <section className="bg-white relative overflow-hidden">
      <div className="max-container py-20 flex flex-col items-center justify-center gap-5 text-black ">
        <div>
          <h2 className="font-poppins text-3xl font-bold uppercase">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1EADF0] to-[#0AFB60]">
              About
            </span>{" "}
            Me.
          </h2>
        </div>
        <div className="flex items-center w-[10rem]">
          <div
            style={{ height: "1px", backgroundColor: "#4ea8de", flex: 1 }}
          ></div>
          <img src={developer_transition} alt="phone icon" width={50} />
          <div
            style={{
              height: "1px",
              backgroundColor: "#4ea8de",
              flex: 1,
            }}
          ></div>
        </div>
        <div className="flex max-lg:flex-col items-center gap-10 pt-10 lg:pl-10 xl:pl-0">
          <div className="image-container">
            <img src={me} alt="developer profile" width={300} />
          </div>
          <p className="font-jakarta text-lg max-w-[720px] text-center p-5">
            Now that you know a little about my business, let me tell you a
            little about myself. My name is Joseph Reyes, the creator of Chicago
            Creative Web Designs. I learned how to code at DePaul University. It
            was there that I found my passion and knack for web development and
            bringing ideas to a screen. I&apos;ve had the privilege of being
            surrounded by brilliant minds within tech so I understand the
            importance of a good website or app in today’s digital landscape. My
            ultimate goal is to transfer my creative vision and technical skills
            into building unique, responsive websites that help small businesses
            thrive online.
          </p>
        </div>
      </div>
      <div className="skyline_v2 spacer-2 absolute bottom-0 "></div>
    </section>
  );
};

export default About_me;
