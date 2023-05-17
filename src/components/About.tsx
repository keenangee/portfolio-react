const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row sm:flex-row items-center justify-center gap-6 px-10"
    >
      <div className="sm:max-w-[45vw]">
        <img
          src="/me.jpeg"
          alt="Keenan and 2 others"
          className="max-w-[65vw] sm:max-w-[45vw] md:max-w-[30vw] rounded-2xl"
        />
      </div>
      <div className="sm:max-w-[45vw]">
        <p className="text-lightest leading-normal pb-4">
          I am driven to develop efficient solutions to complex problems, with a
          sharp eye for detail. I take pride in my code and enjoy fast-paced
          collaborative settings, and I’m happy to take on new challenges to
          expand my skills and knowledge as a developer. I am eager to
          collaborate with a team of like-minded individuals who share my
          passion to solve complex problems and create innovative solutions.
        </p>
      </div>
    </section>
  );
};

export default About;
