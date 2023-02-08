import Logo from "../assets/logo.svg";
import Facebook from "../assets/icon-facebook.svg";
import Pinterest from "../assets/icon-pinterest.svg";
import Twitter from "../assets/icon-twitter.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center px-6 py-[66px] gap-6 bg-dark-green">
      <div className="flex flex-col gap-6 w-[107px]">
        <img className="w-24 self-center" src={Logo} alt="" />
        <ul className="flex justify-between text-body-2">
          <li>
            <Link to="/">
              home
            </Link>
          </li>
          <li>
            <Link to="/about">
              about
            </Link>
          </li>
        </ul>
      </div>

      <div className="text-center text-white text-body-2 font-semibold">
        <p>987 Hillcrest Lane</p>
        <p>Irvine, CA</p>
        <p>California, 92714</p>
        <p>Call Us: 949-833-7432</p>
      </div>

      <div className="flex flex-col items-center gap-4">
        <ul className="flex items-center gap-4">
          <li>
            <img src={Facebook} alt="" />
          </li>
          <li>
            <img src={Pinterest} alt="" />
          </li>
          <li>
            <img src={Twitter} alt="" />
          </li>
        </ul>
        <p>Copyright 2020. All Rights Reserved</p>
      </div>
    </footer>
  );
}
