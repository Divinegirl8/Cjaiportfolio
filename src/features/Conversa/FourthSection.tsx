import sketchImage from "../../assets/new-portfolio/conversa/third-section/2 (11).png";

const FourthSection : React.FC = () => {
    return(
        <>
        
        <div className="xl:border-t  border-[#5A5A5A] flex flex-col xl:flex-row">
       

       <div className="xl:w-1/2  border-[#5A5A5A] xl:border-r xl:px-20 md:px-10 px-7 md:py-20 py-10 bg-[#FBFBFB]">
            <h1 className="text-[#000000] text-[25px] md:text-[32px] md:text-center font-medium md:mb-6 max-lg:pt-5 max-lg:border-t max-lg:border-[#5A5A5A]">
            Data & Metrics Focus
            </h1>


            
            <div >
                <div className="md:space-y-10 space-y-4">
                <p className="text-[#5A5A5A] text-[16px] leading-relaxed ">
                        I established key performance indicators to measure success:                   
               </p>

                    
                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed ">
                       <span className="font-[500]">Call Completion Rate:</span> Percentage of calls successfully resolved by AI.              
                    </p>

                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed mt-5  ">
                      <span className="font-[500]">Patient Satisfaction Score:</span> Post-call ratings and feedback.               
                    </p>

                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed mt-5  ">
                            <span className="font-[500]">Average Handle Time:</span> Duration from greeting to resolution.             
                    </p>

                       <p className="text-[#5A5A5A] text-[16px] leading-relaxed mt-5  ">
                           <span className="font-[500]">Escalation Rate:</span> How often AI transfers to human staff.            
                      </p>

                      <p className="text-[#5A5A5A] text-[16px] leading-relaxed mt-5  ">
                           <span className="font-[500]">Appointment Booking Accuracy:</span> Error rate in scheduled appointments.           
                      </p>

                      <p className="text-[#5A5A5A] text-[16px] leading-relaxed mt-5  ">
                          <span className="font-[500]">Staff Time Saved:</span> Hours freed up for complex patient care.           
                      </p>
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