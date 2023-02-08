import { useState } from "react";
import Aden from "../assets/avatar-aden.jpg";
import Cross from "../assets/icon-cross.svg";
import Close from "../assets/icon-close.svg";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function ProfileCard({ name, headshot, position, quote }) {
  const [display, setDisplay] = useState(false);

  const toggleDisplay = () => {
    setDisplay(!display);
  };

  return (
    <div className="relative h-[281px] flex flex-col items-center gap-4  ">
      <div className="flex flex-col items-center gap-4 bg-dark-green w-[327px] h-[253px] px-6 py-8">
        <img
          className={`rounded-full w-24 border-2 border-rapture-blue ${
            display ? "hidden" : "block"
          }`}
          src={headshot}
          alt=""
        />
        <div className="flex flex-col gap-2">
          <div>
            <p className="text-body-1 text-rapture-blue">{name}</p>
            <p className={`text-body-2 italic ${display ? "hidden" : "block"}`}>
              {position}
            </p>
          </div>

          <div className={`text-body-2 ${display ? "block" : "hidden"}`}>
            {quote}
            <div className="mt-6 flex items-center justify-center gap-4 ">
              <FaTwitter size={"24px"} className="hover:text-light-coral" />
              <FaLinkedin size={"24px"} className="hover:text-light-coral" />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`absolute bottom-0 flex items-center justify-center rounded-full bg-light-coral w-[56px] h-[56px] p-5 hover:bg-rapture-blue ${display ? 'bg-rapture-blue' : 'bg-light-coral'}`}
        onClick={toggleDisplay}
      >
        {display ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17">
            <path
              fill="#012F34"
              fillRule="evenodd"
              d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"
            />
          </svg>
          
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
            <path
              fill="#012F34"
              fillRule="evenodd"
              d="M10 0v5.999L16 6v4h-6v6H6v-6H0V6h6V0h4z"
            />
          </svg>
        )}
      </div>
    </div>
  );
}
