import Person from "../assets/icon-person.svg";
import Gear from "../assets/icon-cog.svg";
import Chart from "../assets/icon-chart.svg";
import Contact1 from "../assets/bg-pattern-about-2-contact-1.svg";
import Contact2 from "../assets/bg-pattern-contact-2.svg";
import Button from "../components/Button";
import { useState } from "react";

export default function Contact() {
  const [isValid, setIsValid] = useState(false);

  const validateEmail = (event) => {
    const format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (event.target.value.match(format)) {
      setIsValid(true);
    } else setIsValid(false);
  };

  return (
    <div className="relative px-6 py-20 md:px-[127px] md:py-[112px] lg:flex lg:justify-between">
    
    <img className="absolute bottom-0 right-[-100px]"  src={Contact2} alt="" />
      <section className="relative text-white flex flex-col items-center text-center px-6 mb-10 lg:items-start lg:text-left">
      <img className="hidden md:block absolute left-[-250px]" src={Contact1} alt="" />
        <h1 className="text-mobile-h1 font-bold mb-4 md:text-h1-sm">Contact</h1>
        <h3 className="text-mobile-h3 font-bold text-light-coral">
          Ask us about
        </h3>
      

      <div className="flex flex-col gap-6 mb-14 mt-10 lg:mt-8">
        <div className="flex items-center gap-6 lg">
          <img src={Person} alt="" />
          <p className="text-white text-body-1">
            The quality of our talent network
          </p>
        </div>

        <div className="flex items-center gap-6">
          <img src={Gear} alt="" />
          <p className="text-white text-body-1">
            Usage & implementation of our software
          </p>
        </div>

        <div className="flex items-center gap-6 ">
          <img src={Chart} alt="" />
          <p className="text-white text-body-1">How we help drive innovation</p>
        </div>
      </div>
</section>
      <section className=" mb-[114px]">
      
        <form action="">
          <input
            type="text"
            placeholder="Name"
            className="w-full text-white bg-none bg-midnight-green border-b p-4 focus:outline-none"
          />

          <input
            onChange={validateEmail}
            type="email"
            placeholder="Email Address"
            className={`w-full text-white bg-none bg-midnight-green border-b p-4 focus:outline-none ${
              isValid
                ? "border-white"
                : "border-light-coral placeholder:text-light-coral"
            }`}
          />

          <label
            className={`font-bold italic text-[10px] text-light-coral p-2 ${
              isValid ? "hidden" : "block"
            }`}
          >
            This field is required
          </label>
          <input
            type="text"
            placeholder="Company Name"
            className="w-full text-white bg-none bg-midnight-green border-b p-4 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Title"
            className="w-full text-white bg-none bg-midnight-green border-b p-4 focus:outline-none"
          />
          <textarea
            type="text"
            placeholder="Message"
            className="w-full text-white bg-none bg-midnight-green border-b p-4 focus:outline-none"
          />
          <button
            className="bg-white text-dark-jungle-green px-8 py-3 rounded-full mt-6"
            type="submit"
          >
            submit
          </button>
        </form>
      </section>
    </div>
  );
}
