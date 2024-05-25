import { portfolio_transition } from "../assets/images";
import ProjectsCard from "../components/ProjectsCard";
import { portfolio_projects } from "../constants";

const Portfolio = () => {
  return (
    <section className="bg-white relative overflow-hidden">
      <div className="blob1 spacer max-lg:w-[400%] max-lg:right-[-75%] lg:w-[110%] lg:left-[-40%] top-10"></div>
      <div className="max-container py-20 flex flex-col items-center justify-center gap-5 text-black">
        <div className="mt-10 z-10">
          <h2 className="font-poppins text-3xl font-bold uppercase">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-brand-blue-600">
              Featured
            </span>{" "}
            Works.
          </h2>
        </div>
        <div className="flex items-center w-[10rem] z-10">
          <div
            style={{ height: "1px", backgroundColor: "#4ea8de", flex: 1 }}
          ></div>
          <img src={portfolio_transition} alt="phone icon" width={45} />
          <div
            style={{
              height: "1px",
              backgroundColor: "#4ea8de",
              flex: 1,
            }}
          ></div>
        </div>
        <div className="lg:project-grid flex flex-col gap-5 p-5">
          <div className="textsquare relative z-10">
            <div className="flex flex-col gap-10 max-lg:text-center mb-5">
              <h3 className="font-poppins font-bold text-2xl">
                Check out my favorite projects
              </h3>
              <p className="font-jakarta text-lg">
                Chicago Creative is dedicated to creating stunning websites for
                small businesses. Let us create a website that you can be proud
                to call your own!
              </p>
            </div>
            <p></p>
          </div>
          {portfolio_projects.map((project) => (
            <ProjectsCard
              key={project.title}
              image={project.src}
              title={project.title}
              description={project.description}
              link={project.url}
              className={`${project.className}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
