import firstImage from "../../assets/new-portfolio/conversa/rigorous/1 (11).png";
import secondImage from "../../assets/new-portfolio/conversa/rigorous/2 (13).png";
import thirdImage from "../../assets/new-portfolio/conversa/rigorous/3 (7).png";
import fourthImage from "../../assets/new-portfolio/conversa/rigorous/4 (2).png";


const RigorousSection : React.FC = () => {
    return(
        <>
        
        <div className="xl:border-t xl:border-b border-[#5A5A5A] flex xl:flex-row flex-col-reverse">
       
        <div className=" max-sm:justify-center max-sm:items-center max-sm:flex max-sm:flex-col sm:py-14 sm:px-14 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <img src={firstImage} className="w-[300px] h-[464px]"/>
            <img src={secondImage} className="w-[300px] h-[464px]"/>
              <img src={thirdImage} className="w-[300px] h-[464px]"/>
                <img src={fourthImage} className="w-[300px] h-[464px]"/>
       </div>

       <div className="xl:w-1/2  border-[#5A5A5A] xl:border-l xl:px-20 px-7 xl:py-20 py-10 bg-[#FBFBFB]">
           

            <h1 className="text-[#000000] md:text-[32px] text-[25px] md:text-center font-medium md:mb-6 max-lg:pt-5 max-lg:border-t max-lg:border-[#5A5A5A]">
                         Rigorous Testing Protocol
            </h1>
               

              <div className="md:space-y-10 space-y-4">
                <p className="text-[#5A5A5A] text-[16px] leading-relaxed ">
                       Before launch (MVP), we conducted extensive testing to validate the
                        conversation flows and UI design:                
               </p>

                    
                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed flex flex-col ">
                       <span className="font-[500] text-black">Real Call Testing (100+ Calls)</span> 
                            We recruited actual patients to make test calls and complete real scenarios.
                            This revealed critical insights about accent variation, background noise
                            handling, and emotional tone recognition.
                    </p>

                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed mt-5 flex flex-col ">
                      <span className="font-[500] text-black">A/B Testing Voice Variations</span> 
                            Tested 6 different voice personalities (warm/friendly, professional/clear,
                            calm/reassuring) across different demographic groups to find the optimal
                            voice for healthcare settings.         
                    </p>

                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed mt-5 flex flex-col  ">
                            <span className="font-[500] text-black">Edge Case Mapping</span> 
                                    Identified and designed for 47 edge cases including: multiple appointment
                                    requests in one call, mid-conversation topic changes, poor audio quality,
                                    and non-English speakers.          
                    </p>

                       <p className="text-[#5A5A5A] text-[16px] leading-relaxed mt-5 flex flex-col ">
                           <span className="font-[500] text-black">Staff Usability Testing</span> 
                               Conducted 8 usability sessions with clinic administrators to refine the
                                dashboard interface, ensuring they could easily configure assistants,
                                monitor calls, and access analytics.  
                      </p>

                      
                </div>
       </div>


    
    </div>

        </>
    )
}

export default RigorousSection;