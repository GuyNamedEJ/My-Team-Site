import Logo from "../assets/logo.svg";
import Hamburger from "../assets/icon-hamburger.svg";
import Close from "../assets/icon-close.svg";
import { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-white flex items-center justify-between px-6 ">
      <img className="w-32" src={Logo} alt="My Team Logo" />

      <img
        className="md:hidden"
        src={Hamburger}
        alt=""
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />

      <div className="items-center justify-between w-full ml-12 hidden md:flex">
        <ul className="flex gap-10">
          <li>
            <Link to="/">
              home
            </Link>
          </li>
          <li><Link to="/about">
              about
            </Link></li>
        </ul>
        <Button className="w-full text-body-1" primaryLight>
          contact us
        </Button>
      </div>

      {/**Mobile Menu */}
      <div
        className={`absolute bg-police-blue w-[255px] h-full right-0 top-0 pt-14 flex flex-col transition-all duration-300 ease-in-out bg-mobile-nav bg-no-repeat bg-[bottom_right_-100px] z-10 ${
          isOpen ? "block" : "hidden"
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
            <li>
              <Link onClick={toggleMenu} to="/">
                home
              </Link>
            </li>
            <li>
              <Link onClick={toggleMenu} to="/about">
                about
              </Link>
            </li>
          </ul>
          <Button
            onClick={toggleMenu}
            className="w-full text-body-1"
            primaryLight
          >
            contact us
          </Button>
        </div>
      </div>
    </nav>
  );
}
