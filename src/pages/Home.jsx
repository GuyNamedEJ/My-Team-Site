import Person from "../assets/icon-person.svg";
import Gear from "../assets/icon-cog.svg";
import Chart from "../assets/icon-chart.svg";
import Pattern1 from "../assets/bg-pattern-home-4-about-3.svg";
import Pattern2 from "../assets/bg-pattern-home-5.svg";
import Kady from "../assets/avatar-kady.jpg";
import Aiysha from "../assets/avatar-aiysha.jpg";
import Arthur from "../assets/avatar-arthur.jpg";
import Quotes from "../assets/icon-quotes.svg";
import GetStarted from "../components/GetStarted";
import HeroPattern from "../assets/bg-pattern-home-1.svg";

export default function Home() {
  return (
    <div className="text-white">
      <section className="relative flex flex-col gap-[18px] text-center font-bold px-6 pt-20 pb-[197px] bg-home-pattern-2 bg-no-repeat bg-bottom justify-center  bg-midnight-green items-center md:pb-[250px] md:pt-[112px] md:gap-6 md:px-[155px] lg:flex-row lg:items-center lg:justify-between lg:pt-[129px] lg:pb-[250px] lg:bg-[bottom_right_165px] lg:gap-8 lg:text-left lg:px-[165px]">
        <h1 className="text-mobile-h1 md:text-h1-sm lg:text-h1-lg">
          Find the <br /> best <span className="text-light-coral">talent</span>
        </h1>
        <div className="h-[195px] flex flex-col justify-between">
          <hr className="hidden lg:block w-12 border-none h-1 bg-light-coral mb-8" />
          <p className="text-body-2 font-semibold lg:mb-0 lg:self-end lg:text-body-1 lg:w-[445px]">
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </p>
        </div>

        <img
          className="hidden lg:block lg:absolute lg:left-[-100px]"
          src={HeroPattern}
          alt=""
        />
      </section>

      <section className="bg-sac-state-green bg-home-pattern-3 bg-no-repeat bg-[top_right_-100px] px-6 py-16 md:px-24 md:py-24 lg:flex lg:gap-[125px] lg:pr-[187px] lg:pl-143px lg:pb-[136px] lg:pl-[165px] lg:pt-[144px] lg:bg-[bottom_right_-100px]">
        <div className="mb-14 lg:h-[202px]">
          <hr className="w-12 border-none h-1 bg-light-coral mb-8" />
          <h2 className="font-bold text-mobile-h2 w-[240px] lg:w-[445px]  lg:text-h2">
            Build & manage distributed teams like no one else.
          </h2>
        </div>

        <div className="flex flex-col items-center text-center gap-12 md:text-left lg:text-left lg:items-start">
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-start">
            <img src={Person} alt="" />
            <div>
              <p className="text-body-1 text-light-coral">
                Experienced Individuals
              </p>
              <p className="text-body-2">
                Our network is made up of highly experienced professionals who
                are passionate about what they do.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 lg:flex-row ">
            <img src={Gear} alt="" />
            <div>
              <p className="text-body-1 text-light-coral">Easy to Implement</p>
              <p className="text-body-2">
                Our processes have been refined over years of implementation
                meaning our teams always deliver.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-start">
            <img src={Chart} alt="" />
            <div>
              <p className="text-body-1 text-light-coral">
                Enhanced Productivity
              </p>
              <p className="text-body-2">
                Our customized platform with in-built analytics helps you manage
                your distributed teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex flex-col items-center bg-deep-jungle-green text-center bg-no-repeat px-6 pt-[140px] py-[164px] md:p-24">
        <img className="absolute top-0 left-0" src={Pattern1} alt="" />
        <h2 className="text-mobile-h2 font-bold mb-12 lg:text-h2 lg:w-[932px]">
          Delivering real results for top companies. Some of our{" "}
          <span className="text-rapture-blue">success stories.</span>
        </h2>

        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="flex flex-col gap-4 items-center">
            <div className="bg-quotes bg-no-repeat bg-[center_top] pt-9">
              <p className="font-semibold text-body-2">
                “The team perfectly fit the specialized skill set required. They
                focused on the most essential features helping us launch the
                platform eight months faster than planned.”
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div>
                <p className="text-rapture-blue">Kady Baker</p>
                <p className="italic text-[13px] font-medium">
                  Product Manager at Bookmark
                </p>
              </div>

              <img
                className="border-2 border-rapture-blue rounded-full w-[62px]"
                src={Kady}
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center">
            <div className="bg-quotes bg-no-repeat bg-[center_top] pt-9">
              <p className="font-semibold text-body-2">
                “We needed to automate our entire onboarding process. The team
                came in and built out the whole journey. Since going live, user
                retention has gone through the roof!”
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div>
                <p className="text-rapture-blue">Aiysha Reese</p>
                <p className="italic text-[13px] font-medium">
                  Founder of Manage
                </p>
              </div>

              <img
                className="border-2 border-rapture-blue rounded-full w-[62px]"
                src={Aiysha}
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center">
            <div className="bg-quotes bg-no-repeat bg-[center_top] pt-9">
              <p className="font-semibold text-body-2">
                “Amazing. Our team helped us build an app that delivered a new
                experience for hiring a physio. The launch was an instant
                success with 100k downloads in the first month.”
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div>
                <p className="text-rapture-blue">Arthur Clarke</p>
                <p className="italic text-[13px] font-medium">
                  Co-founder of MyPhysio
                </p>
              </div>

              <img
                className="border-2 border-rapture-blue rounded-full w-[62px]"
                src={Arthur}
                alt=""
              />
            </div>
          </div>
        </div>

        <img className="absolute bottom-0 right-0" src={Pattern2} alt="" />
      </section>
      <GetStarted />
    </div>
  );
}
