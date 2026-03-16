import ProjectSingle from "./ProjectSingle";
import { projectsData } from "../../data/projects";
import { useSelector } from "react-redux";

const ProjectsGrid = () => {
  const theme = useSelector((state) => state.theme.mode);
  return (
    <section className="w-full py-7 md:py-16 px-5 flex flex-col items-center">

      <h2 className={` mx-auto sm:text-4xl text-2xl font-bold ${theme === 'dark' ? ' text-slate-100' : ' text-slate-800'} mb-1  sm:mb-16`}>
Featured Projects
</h2>

      <div className="w-full flex flex-col gap-5 md:gap-16 items-center">
        {projectsData.map((project, index) => (
          <ProjectSingle
            key={project.id}
            title={project.title}
            category={project.category}
            image={project.img}
            github={project.github}
            tech={project.tech}
            demo={project.demo}
            index={index}
          />
        ))}
      </div>

    </section>
  );
};

export default ProjectsGrid;