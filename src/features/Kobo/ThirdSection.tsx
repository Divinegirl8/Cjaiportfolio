import ideateImage from "../../assets/new-portfolio/kobo/third-section/Group.png";
import mobIdeateImage from "../../assets/new-portfolio/kobo/third-section/2i 1.png";

const ThirdSection : React.FC = () => {
    return(
        <>
        
        <div className=" flex xl:flex-row flex-col">
       

           <div className="xl:w-1/2  border-[#5A5A5A] border-r xl:px-20 px-7 md:py-16 py-10 bg-[#FBFBFB]">
                <h1 className="text-[#000000] md:text-center  text-[25px] md:text-[32px] font-[500] md:mb-6 max-lg:pt-5 max-lg:border-t max-lg:border-[#5A5A5A]">
                    Design process
                </h1>
                
                <div className="md:space-y-10 space-y-7">
                    <div>
                        <h2 className="text-[#000000] text-[16px] font-semibold md:mb-2">
                        User Research
                        </h2>
                        
                        <p className="text-[#5A5A5A] text-[16px] leading-relaxed">
                        Through interviews and testing with 40+ users across Nigeria, Kenya,
                        and Ghana, I identified critical pain points: users feared security
                        breaches when managing money online, found existing apps cluttered
                        with confusing features, and struggled to track spending across
                        multiple platforms. Most users abandoned fintech apps within 2 weeks
                        due to trust issues or overwhelming interfaces. The research revealed
                        users wanted security visibility, instant feedback on transactions, and
                        a clean interface that didn't require financial expertise.                        
                        </p>
                    </div>

                    <div>
                        <h2 className="text-[#000000] text-[16px] font-semibold md:mb-2">
                        Security-First Design
                        </h2>
                        
                        <p className="text-[#5A5A5A] text-[16px] leading-relaxed">

                        Users need to feel safe before they engage. I prioritized visible
                        security cues throughout the experience—biometric authentication,
                        transaction notifications, card freeze options, and transparent privacy
                        controls. Every interaction reinforces trust: immediate payment
                        confirmations, clear authorization requests, and one-tap security
                        toggles that put users in control.                       
                         </p>
                    </div>
                </div>
           </div>


           <div className="xl:w-1/2  xl:justify-center xl:items-center xl:flex xl:px-10 xl:bg-[#F2F2F2] hidden">
              <img src={ideateImage} className=""/>
           </div>
           <div className="xl:hidden">
              <img src={mobIdeateImage} className=""/>
           </div>
        </div>
        
        </>
    )
}

export default ThirdSection;