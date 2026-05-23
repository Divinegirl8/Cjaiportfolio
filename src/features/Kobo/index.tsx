import FifthSection from "./FifthSection";
import FirstSection from "./FirstSection";
import FourthSection from "./FourthSection";
import SecondSection from "./SecondSection";
import SixthSection from "./SixthSection";
import ThirdSection from "./ThirdSection";

const KoboCaseStudy : React.FC = () => {
    return(
        <>
         <div className="flex flex-col md:items-center md:justify-center md:py-16 py-10 max-md:px-7  ">
                  
                    <h2 className="text-[#000000] text-[50px] max-sm:text-[30px] xl:text-center  font-medium leading-tight md:mt-5">
                    <span className="block font-[500]">Kobo Vault - A fintech Platform</span>
                    </h2>

                    <span className="text-[#626262] text-[18px] font-normal mt-3">Your secure financial hub for seamless money management across Africa.</span>
            </div>
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <FourthSection/>
        <FifthSection/>
        <SixthSection/>


        </>
    )
}


export default KoboCaseStudy;