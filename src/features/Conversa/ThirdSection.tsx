import paperImage from "../../assets/new-portfolio/conversa/third-section/1 (9).png";
import stickyNoteImage from "../../assets/new-portfolio/conversa/third-section/Mask group (16).png";


const ThirdSection : React.FC = () => {
     return(
        <>
        <div className="flex xl:border-t  border-[#5A5A5A] flex-col xl:flex-row justify-between">

         
      
            <div className="flex-1 xl:border-r border-[#5A5A5A] hidden xl:block">
                <img src={paperImage} className=""/>    
            </div>


            <div className="md:px-10 px-7 space-y-4 md:py-16  flex-1 bg-[#FBFBFB] border-r  border-[#5A5A5A]">
                <h2 className="text-[#000000] text-[25px] md:text-[32px] md:text-center font-medium md:mb-6  max-lg:pt-5 max-lg:border-t max-lg:border-[#5A5A5A]">
                   Key User Insights
                </h2>
                <div className="space-y-6 text-[#5A5A5A] text-base leading-relaxed max-lg:mb-5  ">
                  <p><span className="font-[500]"> Trust Through Transparency:</span> Transparency builds trust when AI limitations exist</p>
                  <p><span className="font-[500]">Empathy Over Efficiency:</span> Speed alone wasn't enough —patients valued understanding and clear communication.</p>
                  <p><span className="font-[500]">60% Routine Inquiries:</span> Staff spent majority of time on repeatable questions (hours, appointments, refills).</p>
                  <p><span className="font-[500]">Emergency Escalation:</span> Critical situations required immediate human transfer within seconds.</p>
                  <p><span className="font-[500]">Context Matters:</span> Patients often ask multiple questions in one call—system needed memory.</p>



                </div>



                
               
            </div>

            <div className="flex-1 ">
                <img src={stickyNoteImage} className=""/>    
            </div>

        </div>
        </>
     )
}

export default ThirdSection;