const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex col flex-wrap justify-center gap-4 content-center"
    >
      <div className="max-w-[45vw]">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ223PvEtvdBXCzrmD0npI4d5kUAWR5abxhHQ&usqp=CAU"
          alt=""
        />
      </div>
      <div className="max-w-[45vw]">
        <p className="text-primary leading-normal text-[20px] pb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          quasi suscipit reprehenderit eius explicabo quidem! Fuga eius porro
          doloribus fugit tempora, unde praesentium, quis suscipit non
          dignissimos accusantium iusto repudiandae.
        </p>
      </div>
    </section>
  );
};

export default About;
