const Nav = () => {
  return (
    <div className="top-0 fixed w-screen flex row justify-between p-5 bg-darkest">
      <h1 className="text-3xl">KG</h1>
      <nav>
        <a href="/">Home</a>
        <a href="#about">About</a>
        <a href="#Projects">Projects</a>
        <a href="#Games">Games</a>
        <a href="#Contact">Contact</a>
      </nav>
    </div>
  );
};

export default Nav;
