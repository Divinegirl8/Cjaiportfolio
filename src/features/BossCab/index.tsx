import EightSection from "./EightSection";
import FifthSection from "./FifthSection";
import FirstSection from "./FirstSection";
import FourthSection from "./FourthSection";
import LastSection from "./LastSection";
import SecondSection from "./SecondSection";
import SeventhSection from "./SeventhSection";
import SixthSection from "./SixthSection";
import ThirdSection from "./ThirdSection";

const BossCab : React.FC = () =>{
    return(
        <>
             <div className="flex flex-col md:items-center md:justify-center md:py-16 py-10 max-lg:px-7">
                  
                  <h2 className="text-[#000000] text-[50px] max-sm:text-[30px] xl:text-center  font-medium leading-tight md:mt-5">
                  <span className="block">Bosscab - Transforming Urban Mobility</span>
                  </h2>

                  <span className="text-[#626262] text-[18px] md:text-center  md:w-[50rem] font-normal mt-3">A comprehensive UX redesign focused on making ride-hailing more affordable, reliable, and efficient through group wallets, instant payments, and localized mapping.</span>
          </div>

          <FirstSection/>
          <SecondSection/>
          <ThirdSection/>
          <FourthSection/>
          <FifthSection/>
          <SixthSection/>
          <SeventhSection/>
          <EightSection/>
          <LastSection/>
        
        </>
    )
}

export default BossCab;