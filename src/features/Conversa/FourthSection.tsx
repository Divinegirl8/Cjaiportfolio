import sketchImage from "../../assets/new-portfolio/conversa/third-section/2 (19).svg";
import tagImage from "../../assets/new-portfolio/conversa/third-section/Group (10).svg"

const FourthSection : React.FC = () => {
    return(
        <>
        
        <div className="xl:border-t  border-[#5A5A5A] flex flex-col xl:flex-row">
       

       <div className="xl:w-1/2  border-[#5A5A5A] xl:border-r xl:px-20 md:px-10 px-7 md:py-20 py-10 bg-[#FBFBFB]">
            <h1 className="text-[#000000] text-[25px] w-100 md:text-[32px] font-medium md:mb-6 max-lg:pt-5 max-lg:border-t max-lg:border-[#5A5A5A]">
               What Success Looks Like: Defined by Clinic Staff
            </h1>




            
            <div >
                <div className="md:space-y-10 space-y-4">
                <p className="text-[#5A5A5A] text-[16px] leading-relaxed ">
                    Before designing a single screen, I interviewed clinic administrators and front desk staff to understand what a good AI phone assistant would look like from their perspective. Rather than imposing technical metrics, I asked them to describe success in their own terms. Their answers became the design brief for every conversation flow, escalation trigger and dashboard feature.    
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