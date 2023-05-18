const About: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <div className="flex flex-col md:flex-row sm:flex-row items-center justify-center gap-6 px-10">
        <div className="sm:max-w-[45vw]">
          <img
            src="/me.JPG"
            alt="Keenan and 2 others"
            className="max-w-[65vw] sm:max-w-[45vw] md:max-w-[20vw] rounded-2xl"
          />
        </div>
        <div className="sm:max-w-[45vw]">
          <p className="text-lightest leading-normal pb-4 text-md md:text-lg">
            I am driven to develop efficient solutions to complex problems, with
            a sharp eye for detail. I take pride in my code and enjoy fast-paced
            collaborative settings, and I’m happy to take on new challenges to
            expand my skills and knowledge as a developer. I am eager to
            collaborate with a team of like-minded individuals who share my
            passion to solve complex problems and create innovative solutions.
          </p>
        </div>
      </div>
      <div>
        <ul className="flex flex-row flex-wrap gap-4 px-10 pt-5 justify-center">
          <li>👉 JavaScript</li>
          <li>👉 TypeScript</li>
          <li>👉 React</li>
          <li>👉 HTML</li>
          <li>👉 CSS</li>
          <li>👉 Tailwind</li>
          <li>👉 Node.js</li>
          <li>👉 SQL</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
