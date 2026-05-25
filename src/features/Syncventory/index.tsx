import FifthSection from "./FifthSection";
import FirstSection from "./FirstSection";
import LastSection from "./LastSection";
import NinthSection from "./NinthSection";
import SecondSection from "./SecondSection";
import SeventhSection from "./SeventhSection";
import SixthSection from "./SixthSection";
import ThirdSection from "./ThirdSection";

const Syncventory = () => {
    return(
        <div>

            <div className="flex flex-col items-center justify-center md:py-16 py-10 max-md:px-7">
            <h2 className="text-[#000000] text-[50px] max-sm:text-[30px] md:text-center font-medium leading-tight md:mt-5">
                Syncventory — Easy inventory management
            </h2>

            <span className="text-[#626262] text-[18px] font-normal mt-3 md:text-center max-w-[60rem]">
                A unified platform designed to help retailers manage all their physical and online stores from one place.
                Simplifying stock control, sales channels, and POS integration for businesses of any size.
            </span>
            </div>

            <FirstSection/>
            <SecondSection/>
            <ThirdSection/>

            <FifthSection/>
            <SixthSection/>
            <SeventhSection/>

            <NinthSection/>
            <LastSection/>

        </div>
    )
}

export default Syncventory;