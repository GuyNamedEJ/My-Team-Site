import HeroPattern from "../assets/bg-pattern-home-2.svg"
export default function Hero()
{
    return(
        <section className="flex flex-col gap-[18px] text-center font-bold">
            <h1 className="text-mobile-h1">Find the <br/> best <span className="text-light-coral">talent</span></h1>
            <p className="text-body-2 font-semibold mb-24">Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>
            <img src={HeroPattern} alt="" />
        </section>
    )
}