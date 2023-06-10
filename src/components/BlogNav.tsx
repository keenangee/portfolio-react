import { RiReplyLine } from "react-icons/ri";

const Nav: React.FC = () => {
  return (
    <div
      className={
        "top-0 fixed w-screen flex row justify-between p-5 bg-darkest z-10"
      }
    >
      <a href="/">
        <RiReplyLine size={60} className=" cursor-pointer" color="white" />
      </a>
      <a href="/">
        <img src="/kg.png" alt="KG" className="w-15 h-14" />
      </a>
      <div>
        <RiReplyLine size={60} color="#201a44" />
      </div>
    </div>
  );
};

export default Nav;
