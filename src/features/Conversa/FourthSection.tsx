import sketchImage from "../../assets/new-portfolio/conversa/third-section/2 (19).svg";
import tagImage from "../../assets/new-portfolio/conversa/third-section/Group (10).svg"

const FourthSection : React.FC = () => {
    return(
        <>
        
        <div className="xl:border-t  border-[#5A5A5A] flex flex-col xl:flex-row">
       

       <div className="xl:w-1/2  border-[#5A5A5A] xl:border-r xl:px-20 md:px-10 px-7 md:py-20 py-10 bg-[#FBFBFB]">
            <h1 className="text-[#000000] text-[25px] w-100 md:text-[32px] font-medium md:mb-6 max-lg:pt-5 max-lg:border-t max-lg:border-[#5A5A5A]">
               What Success Looks Like; Defined by Users
            </h1>




            
            <div >
                <div className="md:space-y-10 space-y-4">
                <p className="text-[#5A5A5A] text-[16px] leading-relaxed ">
                    Before designing a single screen, I conducted interviews with clinic
                    administrators, receptionists, and patients to understand what
                    "good" actually looked like from their perspective. Rather than
                    imposing technical metrics, I asked them to define success in their
                    own terms.        
                 </p>

                    
                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed ">
                       These six benchmarks emerged directly from that research,
                        the thresholds users said would determine whether they trusted and
                        adopted an AI voice system. They became the design brief for every
                        conversation flow, every escalation trigger, and every data point
                        surfaced in the business dashboard.            
                    </p>

                    <img src={tagImage} alt="tag"/>

                   
                </div>

            </div>
       </div>


       <div className="xl:w-1/2 bg-[#F7F6F9] ">
          <img src={sketchImage} className="w-full h-full object-contain"/>
       </div>
    </div>

        </>
    )
}

export default FourthSection;