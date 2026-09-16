import firstImage from "../../assets/new-portfolio/conversa/insight/1 (26).svg";
import secondImage from "../../assets/new-portfolio/conversa/insight/2 (24).svg"
import thirdImage from "../../assets/new-portfolio/conversa/insight/3 (20).svg";
import fourthImage from "../../assets/new-portfolio/conversa/insight/4 (11).svg";
import fifthImage from "../../assets/new-portfolio/conversa/insight/2 (25).svg";
import sixthImage from "../../assets/new-portfolio/conversa/insight/3 (21).svg";


const InsightSection : React.FC = () => {
    return(
        <>

        <div className="py-20 max-lg:px-10">
              <h1 className="text-[#000000] md:text-[32px] text-[25px] md:text-center sm:px-10 font-medium md:mb-6 max-lg:pt-5 max-lg:border-t max-lg:border-[#5A5A5A]">Key Design Principles</h1>

              <p className="text-[#5A5A5A] text-[16px] leading-relaxed max-w-[600px] mx-auto">
              These principles guided every conversation flow, every UI decision,
              and every feature prioritisation call made during the design of Sernio.
            </p>
              <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 sm:px-10 xl:px-20 py-10">
                <img src={firstImage} />
                  <img src={secondImage}  />
                    <img src={thirdImage} />
                      <img src={fourthImage} />
                        <img src={fifthImage}  />
                          <img src={sixthImage} />
              </div>
        </div>
        
        </>
    )
}

export default InsightSection;