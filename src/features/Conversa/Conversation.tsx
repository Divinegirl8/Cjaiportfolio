import diagramImage from "../../assets/new-portfolio/conversa/conversation/Group (6).png";
import firstImage from "../../assets/new-portfolio/conversa/conversation/1 (22).svg";
import secondImage from "../../assets/new-portfolio/conversa/conversation/2 (20).svg";
import thirdImage from "../../assets/new-portfolio/conversa/conversation/3 (16).svg";
import fourthImage from "../../assets/new-portfolio/conversa/conversation/4 (7).svg";
import fifthImage from "../../assets/new-portfolio/conversa/conversation/1 (23).svg";
import sixthImage from "../../assets/new-portfolio/conversa/conversation/2 (21).svg";
import seventhImage from "../../assets/new-portfolio/conversa/conversation/3 (17).svg";
import eightImage from "../../assets/new-portfolio/conversa/conversation/4 (8).svg";
import ninthImage from "../../assets/new-portfolio/conversa/conversation/1 (24).svg";
import tenthImage from "../../assets/new-portfolio/conversa/conversation/2 (22).svg";
import eleventhImage from "../../assets/new-portfolio/conversa/conversation/3 (18).svg";
import twelvethImage from "../../assets/new-portfolio/conversa/conversation/4 (9).svg";
import diagramMobImage from "../../assets/new-portfolio/conversa/conversation/Group (9).png";

const Conversation:React.FC = () => {
    return(
        <>
            <div className="flex  flex-col xl:items-center xl:justify-center md:py-16 py-10 max-sm:px-7 px-10 xl:px-0  xl:border-t xl:border-[#5A5A5A] ">
                  
                  <h2 className="text-[#000000] text-[38px] max-sm:text-[25px] xl:text-center  font-medium leading-tight md:mt-5 max-lg:border-t max-lg:border-[#5A5A5A] max-lg:pt-5">
                  <span className="block">Conversation Architecture</span>
                  </h2>

                  <span className="text-[#626262] text-[18px] font-normal mt-3 md:text-center max-w-[45rem]">The heart of the system was designing dialogue flows that handle real-world complexity.
                    Each scenario required careful mapping of conversation paths, edge cases,and graceful error recovery.</span>
          </div>

          <div className="flex justify-center">
            <img src={diagramImage} className="w-[350px] h-[418px] hidden md:block"/>
            <img src={diagramMobImage} className="px-10 md:hidden"/>
          </div>


          <div className="md:flex md:justify-center mt-20 px-10">
                <h2 className="text-[#000000] text-[38px] max-sm:text-[25px] xl:text-center  font-medium leading-tight md:mt-5">
                  <span className="block">Designed Scenario Coverage</span>
                  </h2>
          </div>

          <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 md:px-20 px-10 md:py-20 py-5">
            <img src={firstImage} />
             <img src={secondImage}/>
              <img src={thirdImage} />
               <img src={fourthImage} />
               <img src={fifthImage} />
               <img src={sixthImage} />
                <img src={seventhImage} />
               <img src={eightImage} />
                <img src={ninthImage} />
               <img src={tenthImage} />
               <img src={eleventhImage} />
                <img src={twelvethImage}/>
          </div>
        </>
    )
}


export default Conversation;