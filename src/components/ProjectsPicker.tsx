import { useState } from "react";
import Projects from "./Projects";

const ProjectsPicker: React.FC = () => {
  const [project, setProject] = useState<string>("NC Newz");

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col md:flex-row content-center items-center justify-center px-6"
    >
      <ul className="flex flex-row md:flex-col gap-4 mb-[-4px] md:mb-0 md:mr-[-3px]">
        <li>
          <button
            className={
              project === "NC Newz"
                ? "bg-primary text-lightest rounded-md px-4 py-2 min-w-full"
                : "bg-lightest text-primary rounded-md px-4 py-2 min-w-full"
            }
            onClick={() => setProject("NC Newz")}
          >
            <span className="hidden md:block">NC Newz</span>
            <span className="md:hidden">1</span>
          </button>
        </li>
        <li>
          <button
            className={
              project === "Anime Quotes"
                ? "bg-primary text-lightest rounded-md px-4 py-2 min-w-full"
                : "bg-lightest text-primary rounded-md px-4 py-2 min-w-full"
            }
            onClick={() => setProject("Anime Quotes")}
          >
            <span className="hidden md:block">Anime Quotes</span>
            <span className="md:hidden">2</span>
          </button>
        </li>
        <li>
          <button
            className={
              project === "ParkFind&Remind"
                ? "bg-primary text-lightest rounded-md px-4 py-2 min-w-full"
                : "bg-lightest text-primary rounded-md px-4 py-2 min-w-full"
            }
            onClick={() => setProject("ParkFind&Remind")}
          >
            <span className="hidden md:block">ParkFind&Remind</span>
            <span className="md:hidden">3</span>
          </button>
        </li>
      </ul>
      <div className="flex w-full md:w-[60vw] h-[30rem] md:h-[27rem] md:py-4 bg-primary rounded-lg">
        <Projects project={project} />
      </div>
    </section>
  );
};

export default ProjectsPicker;
