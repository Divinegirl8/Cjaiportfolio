import FifthSection from "./FifthSection"
import FirstSection from "./FirstSection"
import FourthSection from "./FourthSection"
import SecondSection from "./SecondSection"
import SeventhSection from "./SeventhSection"
import SixthSection from "./SixthSection"
import ThirdSection from "./ThirdSection"

const CliqMitCaseStudy : React.FC = () => {
    return(
        <>

         <div className="flex  flex-col xl:items-center xl:justify-center md:py-16 py-10 max-sm:px-7 px-10 xl:px-0 ">
                  
                  <h2 className="text-[#000000] text-[50px] max-sm:text-[30px] xl:text-center  font-medium leading-tight md:mt-5">
                  <span className="block">CliqMit - Discover, Book, and Manage Events</span>
                  </h2>

                  <span className="text-[#626262] text-[18px] font-normal mt-3">CliqMit is a smart platform that helps you easily discover, book, and manage events—all in one place.</span>
          </div>

          <FirstSection/>
          <SecondSection/>
          <ThirdSection/>
          <FourthSection/>
          <FifthSection/>
          <SixthSection/>
          <SeventhSection/>
        
        </>
    )
}

export default CliqMitCaseStudy