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
    <div>
      <section className="flex flex-col items-center text-center px-6 bg-mobile-nav bg-no-repeat bg-[bottom_-100px_right_-100px] h-[360px]">
        <h1 className="text-mobile-h1 font-bold mb-4">About</h1>
        <p className="text-body-2 font-semibold">
          We help companies build dynamic teams made up of top global talent.
          Using our network of passionate professionals we drive innovation and
          deliver incredible outcomes. Talented, diverse teams shape the best
          products and experiences. We’ll bring those teams to you.
        </p>
      </section>

      <section className="relative bg-deep-jungle-green bg-contact-pattern bg-no-repeat bg-[top_-100px_left_-100px] text-center px-6 py-24">
        <h2 className="text-mobile-h2 mb-16">Meet the directors</h2>
        <div className="flex flex-col gap-14">
          <ProfileCard
            name="Nikita Marks"
            headshot={Nikita}
            position="Founder & CEO"
            quote="“Distributed teams required unique processes. You need to approach work in a new way.”"
          />

          <ProfileCard
            name="Christian Duncan"
            headshot={Christian}
            position="Co-founder & COO"
            quote="“Technology is at the forefront of enabling distributed teams. That's where we come in.”"
          />

          <ProfileCard
            name="Cruz Hamer"
            headshot={Cruz}
            position="Co-founder & CTO"
            quote="“Hiring similar people from similar backgrounds is a surefire way to stunt innovation.”"
          />

          <ProfileCard
            name="Drake Heaton"
            headshot={Drake}
            position="Business Development Lead"
            quote="“Unique perspectives shape unique products, which is what you need to survive these days.” "
          />

          <ProfileCard
            name="Griffin Wise"
            headshot={Aden}
            position="Lead Marketing"
            quote="“Empowered teams create truly amazing products. Set the north star and let them follow it.”"
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

      <section className="bg-dark-green text-center px-6 py-24 flex flex-col items-center gap-16 bg-home-pattern-6 bg-no-repeat bg-[top_-150px_left_-100px]">
        <h2 className="text-mobile-h2 font-bold">Some of our clients</h2>
        <div className="flex flex-col items-center justify-center gap-12 w-[162px]">
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
