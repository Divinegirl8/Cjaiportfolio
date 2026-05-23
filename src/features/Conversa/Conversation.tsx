import diagramImage from "../../assets/new-portfolio/conversa/conversation/Group (6).png";
import firstImage from "../../assets/new-portfolio/conversa/conversation/1 (14).png";
import secondImage from "../../assets/new-portfolio/conversa/conversation/2 (16).png";
import thirdImage from "../../assets/new-portfolio/conversa/conversation/3 (9).png";
import fourthImage from "../../assets/new-portfolio/conversa/conversation/4 (4).png";
import fifthImage from "../../assets/new-portfolio/conversa/conversation/5 (15).png";
import sixthImage from "../../assets/new-portfolio/conversa/conversation/6 (17).png";
import seventhImage from "../../assets/new-portfolio/conversa/conversation/7 (10).png";
import eightImage from "../../assets/new-portfolio/conversa/conversation/8 (5).png";
import ninthImage from "../../assets/new-portfolio/conversa/conversation/9 (16).png";
import tenthImage from "../../assets/new-portfolio/conversa/conversation/10 (18).png";
import eleventhImage from "../../assets/new-portfolio/conversa/conversation/11 (11).png";
import twelvethImage from "../../assets/new-portfolio/conversa/conversation/12 (6).png";
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
                  <span className="block">Handled Scenarios</span>
                  </h2>
          </div>

          <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 md:px-20 px-10 md:py-20 py-5">
            <img src={firstImage} className="w-[360px] h-[160px]"/>
             <img src={secondImage} className="w-[360px] h-[160px]"/>
              <img src={thirdImage} className="w-[360px] h-[160px]"/>
               <img src={fourthImage} className="w-[360px] h-[160px]"/>
               <img src={fifthImage} className="w-[360px] h-[160px]"/>
               <img src={sixthImage} className="w-[360px] h-[160px]"/>
                <img src={seventhImage} className="w-[360px] h-[160px]"/>
               <img src={eightImage} className="w-[360px] h-[160px]"/>
                <img src={ninthImage} className="w-[360px] h-[160px]"/>
               <img src={tenthImage} className="w-[360px] h-[160px]"/>
               <img src={eleventhImage} className="w-[360px] h-[160px]"/>
                <img src={twelvethImage} className="w-[360px] h-[160px]"/>
          </div>
        </>
    )
}


export default Conversation;