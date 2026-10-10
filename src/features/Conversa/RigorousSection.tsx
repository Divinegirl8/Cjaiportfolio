import firstImage from "../../assets/new-portfolio/conversa/rigorous/1 (25).svg";
import secondImage from "../../assets/new-portfolio/conversa/rigorous/2 (23).svg";
import thirdImage from "../../assets/new-portfolio/conversa/rigorous/3 (19).svg";
import fourthImage from "../../assets/new-portfolio/conversa/rigorous/4 (10).svg";


const RigorousSection : React.FC = () => {
    return(
        <>
        
        <div className="xl:border-t xl:border-b border-[#5A5A5A] flex xl:flex-row flex-col-reverse">
       
        <div className=" max-sm:justify-center max-sm:items-center max-sm:flex max-sm:flex-col sm:py-14 sm:px-14 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <img src={firstImage} />
            <img src={secondImage} />
              <img src={thirdImage}/>
                <img src={fourthImage} />
       </div>

       <div className="xl:w-1/2  border-[#5A5A5A] xl:border-l xl:px-20 px-7 xl:py-20 py-10 bg-[#FBFBFB]">
           

            <h1 className="text-[#000000] md:text-[32px] w-80 text-[25px]  font-medium md:mb-6 max-lg:pt-5 max-lg:border-t max-lg:border-[#5A5A5A]">
            How I'm Testing Before We Build
            </h1>
      


              <div className="md:space-y-8 space-y-3">
                <p className="text-[#5A5A5A] text-[16px] leading-relaxed ">
                  Sernio is currently in development. Before committing to a full build,
                  I tested the concept through conversations with clinic administrators
                  and front desk staff, research into existing voice AI platforms, and
                  walkthroughs of the core call scenarios.              
               </p>

                    
                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed flex flex-col ">
                          Each round helped refine three things. The conversation architecture
                          changed as I mapped how calls move from intent detection to booking,
                          rescheduling, prescription refills and emergency routing. The admin
                          dashboard was shaped around what clinic staff need to see about their
                          calls. And the MVP scope came from deciding which scenarios to build
                          first and which to plan for later, such as insurance verification and
                          general clinic information.
                    </p>

                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed mt-5 flex flex-col ">
                            The aim is to confirm that Sernio solves the right problems for clinics and
                            patients before it is engineered.       
                    </p>

              

                      
                </div>
       </div>


    
    </div>

        </>
    )
}

export default RigorousSection;