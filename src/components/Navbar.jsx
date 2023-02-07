import Logo from "../assets/logo.svg";
import Hamburger from "../assets/icon-hamburger.svg";
import Close from "../assets/icon-close.svg";
import { useState } from "react";
import Button from "./Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="flex items-center w-[100%] justify-between mb-20 overflow-hidden">
      <img className="w-32" src={Logo} alt="My Team Logo" />
      <div>
        <img
          src={Hamburger}
          alt=""
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      </div>

      {/**Mobile Menu */}
      <div
        className={`absolute bg-police-blue w-[255px] h-[100vh] right-0 top-0 pt-14 flex flex-col transition-all duration-300 ease-in-out bg-mobile-nav bg-no-repeat bg-[bottom_right_-100px] z-10 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <img
          className="self-end mr-[25px] mb-[39px]"
          src={Close}
          alt=""
          onClick={toggleMenu}
        />
        <div className="px-12">
          <ul className="flex flex-col gap-6 mb-9 text-body-1 ">
            <li>home</li>
            <li>about</li>
          </ul>
          <Button className="w-full text-body-1" primaryLight>
            contact us
          </Button>
        </div>
      </div>
    </nav>
  );
}
