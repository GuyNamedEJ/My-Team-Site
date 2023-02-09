import Button from "./Button"
export default function GetStarted()
{
    return(
        <div className="bg-light-coral bg-banner-pattern bg-no-repeat bg-[left_bottom_-25px] h-[302px] flex flex-col items-center justify-center px-6 gap-6 text-center md:flex-row md:gap-[84px] md:h-[200px]">
            <h2 className="text-mobile-h2 font-bold text-dark-green w-[327px] md:w-[336px] ">Ready to get started?</h2>
            <Button primaryDark>contact us</Button>
        </div>
    )
}