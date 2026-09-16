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
            How We're Validating Before
            We Build
            </h1>
      


              <div className="md:space-y-8 space-y-3">
                <p className="text-[#5A5A5A] text-[16px] leading-relaxed ">
                  Sernio is currently in active development. Before committing to full
                  build, I led a structured concept validation process, grounding
                  every design decision in real stakeholder input, competitive
                  intelligence, and scenario walkthroughs.              
               </p>

                    
                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed flex flex-col ">
                          Rather than assume we understood the problem, we tested our
                          understanding of it. Each validation round refined the conversation
                          architecture, the admin dashboard, and the core scenarios we
                          prioritized for MVP.
                    </p>

                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed mt-5 flex flex-col ">
                            This approach, validate the concept before engineering it, is how we
                            ensured that when Conversa does launch, it solves the right problems
                            in the right way from day one.       
                    </p>

              

                      
                </div>
       </div>


    
    </div>

        </>
    )
}

export default RigorousSection;