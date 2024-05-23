import { portfolio_transition } from "../assets/images";
import ProjectsCard from "../components/ProjectsCard";
import { portfolio_projects } from "../constants";

const Portfolio = () => {
  return (
    <section className="bg-white">
      <div className="max-container py-20 flex flex-col items-center justify-center gap-5 text-black ">
        <div className="mt-10">
          <h2 className="font-poppins text-3xl font-bold uppercase">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-brand-blue-600">
              Featured
            </span>{" "}
            Works.
          </h2>
        </div>
        <div className="flex items-center w-[10rem]">
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
        <div className="flex max-md:flex-col gap-5 p-5">
          {portfolio_projects.map((project) => (
            <ProjectsCard
              key={project.title}
              image={project.src}
              title={project.title}
              description={project.description}
              link={project.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
