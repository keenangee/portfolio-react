const { useState, useEffect } = require("react");

interface ProjectsProp {
  project: string;
}

const project1 = {
  name: "NC Newz",
  description:
    "This project is a news app that I built to ustilise a news api that I developed. This app is built with React and uses Tailwind CSS for styling. The app is hosted on Netlify and the api is hosted on Render. The api is built using postgreSQL, Express, and Node.js.",
  link: "https://newz-nc.netlify.app/",
  image: "/nc-newz.png",
};

const project2 = {
  name: "Anime Quotes",
  description:
    "This project is an anime quote app that I built to ustilise an anime quote api found online. This app is built using Next.js in React, and can generate anime quotes at random, or by the search feature. The app is hosted on Netlify.",
  link: "https://anime-quote-app.pages.dev/",
  image: "/anime-app.png",
};

const project3 = {
  name: "ParkFind&Remind",
  description:
    "This project is a parking finder app, it was built in a team of 5, and uses React Native Expo for the front end, and optimises firebase for the backend processes.",
  link: "https://github.com/differently-wired/park-finder",
  image: "/parkfind.png",
};

const Projects: React.FC<ProjectsProp> = ({ project }) => {
  const [currentProject, setCurrentProject] = useState(project1);

  useEffect(() => {
    if (project === "NC Newz") {
      setCurrentProject(project1);
    } else if (project === "Anime Quotes") {
      setCurrentProject(project2);
    } else if (project === "ParkFind&Remind") {
      setCurrentProject(project3);
    }
  }, [project]);

  return (
    <div className="m-auto h-[95%] md:h-[100%] w-[95%] bg-lightest border-2 border-dark drop-shadow-md pb-3 text-sm lg:text-md xl:text-lg">
      <h1 className=" text-darkest text-center py-2 text-[1.3rem]">
        {project}
      </h1>
      <div
        className={
          project !== "ParkFind&Remind"
            ? "flex flex-col lg:flex-row lg:pt-[2rem] gap-4 md:gap-0 transition-all duration-200"
            : "flex flex-col md:flex-row lg:pt-[2rem] gap-4 md:gap-0 pt-0 sm:pt-4 transition-all duration-200"
        }
      >
        <img
          src={currentProject.image}
          alt={currentProject.name}
          className={
            project !== "ParkFind&Remind"
              ? "px-3 mx-auto max-h-[14rem] object-cover rounded-md pb-2 transition-all duration-200"
              : "px-6 mx-auto max-h-[15rem] md:max-h-[18rem] object-cover rounded-md pb-2 transition-all duration-200"
          }
          loading="lazy"
        />
        <p className="text-darkest text-left px-3">
          {currentProject.description}
          <br />
          <br />
          <span>
            Link:{" "}
            <a href={currentProject.link} rel="noreferrer" target="_blank">
              press here!
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Projects;
