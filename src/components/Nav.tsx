import React, { useState } from "react";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={
        isOpen
          ? "top-0 fixed w-screen flex row justify-between p-5 z-20"
          : "top-0 fixed w-screen flex row justify-between p-5 bg-darkest z-10"
      }
    >
      {!isOpen ? <img src="/kg.png" alt="KG" className="w-15 h-14" /> : null}
      {/* <h1 className="text-3xl">{!isOpen ? "KG" : ""}</h1> */}
      <nav className="hidden md:flex text-xl items-center">
        <ul className="flex row gap-3">
          <li>
            <a href="#welcome">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          {/* <li>
            <a href="#games">Games</a>
          </li> */}
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div
        className="z-10 block md:hidden items-center text-white"
        onClick={handleOpen}
      >
        {!isOpen ? (
          <AiOutlineMenu size={40} className=" cursor-pointer" />
        ) : (
          <>
            <AiOutlineCloseCircle
              size={40}
              className=" cursor-pointer fixed top-5 right-5"
            />
          </>
        )}
      </div>
      <div
        className={
          isOpen
            ? "fixed right-0 top-0 w-[85%] h-full border-l border-l-dark bg-light ease-in-out duration-300"
            : "fixed right-[-100%] top-0 w-[85%] h-full border-l border-l-dark bg-light ease-in-out duration-300"
        }
      >
        {/* <h1 className="text-3xl p-5">KG</h1> */}

        <nav className="">
          <ul className="underline underline-offset-8 h-screen items-center flex flex-col justify-around text-[1.5rem]">
            <img
              src="/kg.png"
              alt="KG"
              className="w-12 h-12 left-24 top-5 ease-in"
            />
            <li>
              <a href="#welcome" onClick={() => setIsOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setIsOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setIsOpen(false)}>
                Projects
              </a>
            </li>
            {/* <li>
              <a href="#games" onClick={() => setIsOpen(false)}>
                Games
              </a>
            </li> */}
            <li>
              <a href="#contact" onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </li>
            <li></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
