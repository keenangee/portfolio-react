import React, { useState } from "react";

const Nav: React.FC = () => {
  return (
    <div
      className={
        "top-0 fixed w-screen flex row justify-center p-5 bg-darkest z-10"
      }
    >
      <a href="/">
        <img src="/kg.png" alt="KG" className="w-15 h-14" />
      </a>
    </div>
  );
};

export default Nav;
