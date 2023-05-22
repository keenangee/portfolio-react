const About: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center pt-[10vh]"
    >
      <div className="flex flex-col md:flex-row sm:flex-row items-center justify-center gap-6 px-4 sm:px-10">
        <div className="sm:max-w-[45vw]">
          <img
            src="/me.JPG"
            alt="Keenan and 2 others"
            className="max-w-[60vw] sm:max-w-[40vw] md:max-w-[30vw] lg:max-w-[20vw] rounded-2xl"
          />
        </div>
        <div className="sm:max-w-[45vw]">
          <p className="text-lightest leading-normal pb-4 text-md sm:text-lg text-center sm:text-left">
            Hey, I'm a junior developer driven to develop efficient solutions to
            complex problems, with a sharp eye for detail. I take pride in my
            code and enjoy fast-paced collaborative settings, and I'm happy to
            take on new challenges to expand my skills and knowledge as a
            developer.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 px-10">
        <ul className="flex flex-row flex-wrap gap-4 px-10 pt-5 justify-center text-xs sm:text-lg">
          <li>👉 JavaScript</li>
          <li>👉 TypeScript</li>
          <li>👉 React</li>
          <li>👉 HTML</li>
          <li>👉 CSS</li>
          <li>👉 Tailwind</li>
          <li>👉 Node.js</li>
          <li>👉 SQL</li>
        </ul>
        <p className="text-primary italic leading-normal text-md md:text-xl max-w-[70vw] text-center">
          🔥 I'm currently looking for a junior developer role, so if you like
          what you see or would like to know anymore about me, please get in
          touch! 🔥
        </p>
      </div>
    </section>
  );
};

export default About;
