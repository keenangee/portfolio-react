const { useState, useEffect } = require("react");

interface ProjectsProp {
  project: string;
}

const project1 = {
  name: "NC Newz",
  description:
    "This project encompasses a news application that I developed, leveraging a custom API. The application is constructed using React, accompanied by Tailwind CSS for seamless styling. Hosting-wise, the application is deployed on Netlify, while the API resides on Render. The API implementation incorporates postgreSQL, Express, and Node.js to facilitate robust functionality and efficient data management.",
  link: "https://newz-nc.netlify.app/",
  image: "/nc-newz.jpg",
};

const project2 = {
  name: "Anime Quotes",
  description:
    "This project entails the creation of an anime quote app designed to utilize an anime quote API obtained from an online source. Built upon the Next.js framework, the app offers the ability to generate anime quotes at random or through a comprehensive search feature. It is seamlessly hosted on the CloudFlare platform to ensure optimal performance and availability.",
  link: "https://anime-quote-app.pages.dev/",
  image: "/anime-app.jpg",
};

const project3 = {
  name: "ParkFind&Remind",
  description:
    "This project involved the development of a sophisticated parking finder application, crafted collaboratively by a team of five. The app harnesses the power of React Native for its robust front-end implementation, while leveraging the capabilities of Firebase to streamline and optimize the backend processes. This app allows users to seamlessly and efficiently locate their parked vehicle.",
  link: "https://github.com/differently-wired/park-finder",
  image: "/parkfind.jpg",
};

const project4 = {
  name: "Wite Label E-Commerce",
  description:
    "Here I developed a white label e-commerce app using React Native, aiming to enhance my skills and proficiency in various aspects of the framework. Throughout the project, I focused on implementing user-friendly navigation and creating dynamic content displays.",
  link: "https://github.com/keenangee/white-label-ecom",
  image: "/white-label-ecom.jpg",
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
    } else if (project === "White Label E-Commerce") {
      setCurrentProject(project4);
    }
  }, [project]);

  return (
    <div className="m-auto h-[95%] md:h-[100%] w-[95%] bg-lightest border-2 border-dark drop-shadow-md pb-3 text-sm lg:text-md xl:text-lg">
      <h1 className=" text-darkest text-center py-2 text-[1.3rem]">
        {project}
      </h1>
      <div
        className={
          project !== "ParkFind&Remind" && project !== "White Label E-Commerce"
            ? "flex flex-col lg:flex-row transition-all duration-200 h-[95%] xl:h-[91%] justify-around items-center"
            : "flex flex-col sm:flex-row transition-all duration-200 h-[95%] xl:h-[91%] justify-around items-center"
        }
      >
        {/* <img
          src={currentProject.image}
          alt={currentProject.name}
          className={
            project !== "ParkFind&Remind" &&
            project !== "White Label E-Commerce"
              ? "px-3 mx-auto max-h-[12rem] pb-2"
              : project === "ParkFind&Remind"
              ? "px-6 mx-auto max-h-[12rem] sm:max-h-[18rem] pb-2"
              : "px-6 mx-auto max-h-[14rem] sm:max-h-[18rem] pb-2"
          }
          loading="lazy"
        /> */}
        <img
          src="/nc-newz.jpg"
          alt="NC Newz"
          className={
            project === "NC Newz" ? "px-3 mx-auto max-h-[12rem] pb-2" : "hidden"
          }
          loading="lazy"
        />
        <img
          src="/anime-app.jpg"
          alt="Anime Quotes"
          className={
            project === "Anime Quotes"
              ? "px-3 mx-auto max-h-[12rem] pb-2"
              : "hidden"
          }
          loading="lazy"
        />
        <img
          src="/parkfind.jpg"
          alt="ParkFind&Remind"
          className={
            project === "ParkFind&Remind"
              ? "px-6 mx-auto max-h-[12rem] sm:max-h-[18rem] pb-2"
              : "hidden"
          }
          loading="lazy"
        />
        <img
          src="/white-label-ecom.jpg"
          alt="White Label E-Commerce"
          className={
            project === "White Label E-Commerce"
              ? "px-6 mx-auto max-h-[14rem] sm:max-h-[18rem] pb-2"
              : "hidden"
          }
          loading="lazy"
        />

        <p className="text-darkest text-left px-3 text-[80%] sm:text-[90%] lg:text-[100%]">
          {currentProject.description}
          <span className="hidden sm:flex gap-1 pt-2 text-darkest text-left text-[80%] sm:text-[100%] justify-left">
            Link:
            <a href={currentProject.link} rel="noreferrer" target="_blank">
              press here!
            </a>
          </span>
        </p>
        <span className=" text-darkest text-left px-3 text-[80%] sm:text-[100%] sm:hidden">
          Link:{" "}
          <a href={currentProject.link} rel="noreferrer" target="_blank">
            press here!
          </a>
        </span>
      </div>
    </div>
  );
};

export default Projects;
