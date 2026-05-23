import firstImage from "../../assets/new-portfolio/conversa/insight/1 (12).png";
import secondImage from "../../assets/new-portfolio/conversa/insight/2 (14).png";
import thirdImage from "../../assets/new-portfolio/conversa/insight/3 (8).png";
import fourthImage from "../../assets/new-portfolio/conversa/insight/4 (3).png";
import fifthImage from "../../assets/new-portfolio/conversa/insight/5(13).png";
import sixthImage from "../../assets/new-portfolio/conversa/insight/6 (15).png";


const InsightSection : React.FC = () => {
    return(
        <>

        <div className="py-20 max-lg:px-10">
              <h1 className="text-[#000000] md:text-[32px] text-[25px] md:text-center sm:px-10 font-medium md:mb-6 max-lg:pt-5 max-lg:border-t max-lg:border-[#5A5A5A]">Key Testing Insights</h1>

              <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 sm:px-10 xl:px-20 py-10">
                <img src={firstImage} className="w-[344px] h-[183.6px]"/>
                  <img src={secondImage}  className="w-[344px] h-[183.6px]"/>
                    <img src={thirdImage}  className="w-[344px] h-[183.6px]"/>
                      <img src={fourthImage}  className="w-[344px] h-[183.6px]"/>
                        <img src={fifthImage}  className="w-[344px] h-[183.6px]"/>
                          <img src={sixthImage}  className="w-[344px] h-[183.6px]"/>
              </div>
        </div>
        
        </>
    )
}

export default InsightSection;