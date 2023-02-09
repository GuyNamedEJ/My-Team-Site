import GetStarted from "../components/GetStarted";
import Nikita from "../assets/avatar-nikita.jpg";
import Christian from "../assets/avatar-christian.jpg";
import Cruz from "../assets/avatar-cruz.jpg";
import Drake from "../assets/avatar-drake.jpg";
import Griffin from "../assets/avatar-griffin.jpg";
import Aden from "../assets/avatar-aden.jpg";
import Cross from "../assets/icon-cross.svg";
import Verge from "../assets/logo-the-verge.png";
import Jakarta from "../assets/logo-jakarta-post.png";
import Guardian from "../assets/logo-the-guardian.png";
import Techradar from "../assets/logo-tech-radar.png";
import Gadgets from "../assets/logo-gadgets-now.png";
import Pattern1 from "../assets/bg-pattern-home-4-about-3.svg";
import ProfileCard from "../components/ProfileCard";

export default function About() {
  return (
    <div className="text-white">
      <section className="flex flex-col items-center text-center px-6 pt-20 py-24 bg-mobile-nav bg-no-repeat bg-[bottom_-100px_right_-100px] md:py-[112px] md:bg-[bottom_0px_right_-100px] ">
        <h1 className="text-mobile-h1 font-bold mb-4 md:text-h1-sm">About</h1>
        <p className="text-body-2 font-semibold md:w-[457px]">
          We help companies build dynamic teams made up of top global talent.
          Using our network of passionate professionals we drive innovation and
          deliver incredible outcomes. Talented, diverse teams shape the best
          products and experiences. We’ll bring those teams to you.
        </p>
      </section>

      <section className="relative bg-deep-jungle-green bg-contact-pattern bg-no-repeat bg-[top_-100px_left_-100px] text-center px-6 py-24 md:bg-[top_0px_left_-100px]">
        <h2 className="text-mobile-h2 mb-16">Meet the directors</h2>
        <div className="flex flex-col gap-14 md:flex-row md:flex-wrap md:justify-center md:gap-4 md:items-center">
          <ProfileCard
            name="Nikita Marks"
            headshot={Nikita}
            position="Founder & CEO"
            quote="“It always amazes me how much talent there is in every corner of the globe.”"
          />

          <ProfileCard
            name="Christian Duncan"
            headshot={Christian}
            position="Co-founder & COO"
            quote="“Distributed teams required unique processes. You need to approach work in a new way.”"
          />

          <ProfileCard
            name="Cruz Hamer"
            headshot={Cruz}
            position="Co-founder & CTO"
            quote="“Technology is at the forefront of enabling distributed teams. That's where we come in.”"
          />

          <ProfileCard
            name="Drake Heaton"
            headshot={Drake}
            position="Business Development Lead"
            quote="“Hiring similar people from similar backgrounds is a surefire way to stunt innovation.” "
          />

          <ProfileCard
            name="Griffin Wise"
            headshot={Griffin}
            position="Lead Marketing"
            quote="“Unique perspectives shape unique products, which is what you need to survive these days.”"
          />

          <ProfileCard
            name="Aden Allan"
            headshot={Aden}
            position="Head of Talent"
            quote="“Empowered teams create truly amazing products. Set the north star and let them follow it.”"
          />

          <img className="absolute bottom-0 right-0" src={Pattern1} alt="" />
        </div>
      </section>

      <section className="bg-sac-state-green text-center px-6 py-24 flex flex-col items-center gap-16 bg-home-pattern-3 bg-no-repeat bg-[top_-150px_left_-100px] md:bg-[top_-150px_left_0px]">
        <h2 className="text-mobile-h2 font-bold">Some of our clients</h2>
        <div className="flex flex-col items-center justify-center gap-12 w-[162px] md:flex-row md:px-9">
          <img className="w-32" src={Verge} alt="" />
          <img className="w-32" src={Jakarta} alt="" />
          <img className="w-32" src={Guardian} alt="" />
          <img className="w-32" src={Techradar} alt="" />
          <img className="w-20" src={Gadgets} alt="" />
        </div>
      </section>
      <GetStarted />
    </div>
  );
}
