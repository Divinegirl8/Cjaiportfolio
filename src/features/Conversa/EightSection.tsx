import sketchImage from "../../assets/new-portfolio/conversa/2 (12).png";
import sketchImageMob from "../../assets/new-portfolio/conversa/Group (8).png";

const EightSection : React.FC = () => {
    return(
        <>
        
        <div className="xl:border-t  border-[#5A5A5A] flex flex-col xl:flex-row">
       
        <div className="xl:w-1/2  border-[#5A5A5A] xl:border-r xl:px-20 md:px-10 px-7 md:py-20 py-10 bg-[#FBFBFB]">
            <h1 className="text-[#000000] md:text-[32px] text-[25px] md:text-center font-medium md:mb-6 max-lg:pt-5 max-lg:border-t max-lg:border-[#5A5A5A]">
              Design System & Iconography
            </h1>

          <div className="md:space-y-10 space-y-4">
                <p className="text-[#5A5A5A] text-[16px] leading-relaxed ">
                        I established core design principles to guide all design decisions throughout
                         the project:                  
               </p>

                    
                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed flex flex-col ">
                       <span className="font-[500] text-black">Clarity Over Complexity</span> 
                            Every interface element serves a clear purpose. Healthcare staff need to
                            configure assistants quickly without extensive training.
                    </p>

                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed mt-5 flex flex-col ">
                      <span className="font-[500] text-black">Trust Through Transparency</span> 
                            All AI actions are visible and auditable. Call transcripts, decision-making
                            logic, and escalation reasons are always accessible.            
                    </p>

                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed mt-5 flex flex-col  ">
                            <span className="font-[500] text-black">Speed Without Sacrifice</span> 
                                    Fast, efficient workflows that never compromise on accuracy or patient
                                    safety.           
                    </p>

                       <p className="text-[#5A5A5A] text-[16px] leading-relaxed mt-5 flex flex-col ">
                           <span className="font-[500] text-black">Accessibility First</span> 
                                WCAG 2.1 AA compliant, keyboard navigation, screen reader support,
                                and high contrast modes built in from the start.      
                      </p>

                      
                </div>
       </div>
      


       <div className="xl:w-1/2">
          <img src={sketchImage} className="md:block hidden"/>
          <img src={sketchImageMob} className="md:hidden"/>
       </div>
    </div>

        </>
    )
}

export default EightSection;