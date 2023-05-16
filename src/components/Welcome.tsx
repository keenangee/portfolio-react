const Welcome = () => {
  return (
    <section
      id="welcome"
      className="min-h-screen flex content-center items-center"
    >
      <div className=" text-left mx-5 md:mx-[15vw] mt-[20vh]">
        <p className="text-primary leading-normal text-[20px] pb-4">
          Hi, my name is
        </p>
        <h1 className="text-light text-[40px] md:text-[8vw] lg:text-[70px] leading-tight">
          Keenan
        </h1>
        <p className="text-[40px] md:text-[6vw] lg:text-[70px] leading-tight">
          I like to make things for the web.
        </p>
        <p className="text-[20px] pt-4">
          I'm a full stack software developer, specialising in JavaScript, I'm
          focused on building elegant and efficient code to solve complex
          problems.
        </p>
      </div>
    </section>
  );
};

export default Welcome;
