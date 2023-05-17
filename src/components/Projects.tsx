interface ProjectsProp {
  project: string;
}

const Projects: React.FC<ProjectsProp> = ({ project }) => {
  return (
    <div className="m-auto h-[95%] w-[95%] bg-lightest border-2 border-dark drop-shadow-md pb-3">
      <h1 className=" text-darkest text-center py-2 text-[1.3rem]">
        {project}
      </h1>
      {project === "NC Newz" ? (
        <div className="flex flex-col lg:flex-row lg:pt-[2rem] gap-4 md:gap-0">
          <img
            src="/nc-newz.png"
            alt="NC Newz"
            className="px-3 mx-auto max-h-[14rem] object-cover rounded-md pb-2"
          />
          <p className="text-darkest text-left text-sm px-3">
            This project is a news app that I built to ustilise a news api that
            I developed. This app is built with React and uses Tailwind CSS for
            styling. The app is hosted on Netlify and the api is hosted on
            Render. The api is built using postgreSQL, Express, and Node.js.
            <br />
            <br />
            <span>
              Link:{" "}
              <a
                href="https://newz-nc.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                press here!
              </a>
            </span>
          </p>
        </div>
      ) : project === "Anime Quotes" ? (
        <div className="flex flex-col lg:flex-row lg:pt-[2rem] gap-4 md:gap-0">
          <img
            src="/anime-app.png"
            alt="NC Newz"
            className="px-3 mx-auto max-h-[14rem] object-cover rounded-md pb-2"
          />
          <p className="text-darkest text-left text-sm px-3">
            This project is an anime quote app that I built to ustilise an anime
            quote api found online. This app is built with React, and can
            generate anime quotes at random, or by the search feature. The app
            is hosted on Cloudflare.
            <br />
            <br />
            <span>
              Link:{" "}
              <a
                href="https://anime-quote-app.pages.dev/"
                rel="noreferrer"
                target="_blank"
              >
                press here!
              </a>
            </span>
          </p>
        </div>
      ) : project === "ParkFind&Remind" ? (
        <div className="flex flex-col sm:flex-row max-h-[80%]">
          <img
            src="/parkfind.png"
            alt="NC Newz"
            className="px-3 mx-auto h-[14rem] sm:h-max max-w-[10rem] object-cover rounded-md pb-4"
          />
          <div className="flex justify-center items-center">
            <p className="text-darkest text-left text-sm px-3">
              This project is a parking finder app, it was built in a team of 5,
              and uses React Native Expo for the front end, and optimises
              firebase for the backend processes.
              <br />
              <br />
              <span>
                Link:{" "}
                <a
                  href="https://github.com/differently-wired/park-finder"
                  rel="noreferrer"
                  target="_blank"
                >
                  press here!
                </a>
              </span>
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Projects;
