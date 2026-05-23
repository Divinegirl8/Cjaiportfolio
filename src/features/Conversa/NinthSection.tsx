import sketchImage from "../../assets/new-portfolio/conversa/1 (10).png";

const NinthSection : React.FC = () => {
    return(
        <>
        
        <div className="xl:border-t xl:border-b border-[#5A5A5A] flex xl:flex-row flex-col-reverse">
       
        <div className="xl:w-1/2">
          <img src={sketchImage} className=""/>
       </div>

       <div className="xl:w-1/2  border-[#5A5A5A] xl:border-r xl:px-20 px-7 xl:py-20 py-10 bg-[#FBFBFB]">
            <h1 className="text-[#000000] text-[25px] md:text-[32px] md:text-center font-medium md: md:mb-6 max-lg:pt-5 max-lg:border-t max-lg:border-[#5A5A5A]">
                 Final Product
            </h1>

            <div className="space-y-10  ">
                <p className=" text-[16px] leading-relaxed font-[500]">
                         What We Delivered </p>
            </div>

 
            <div className="space-y-10 ">
                <div>

                    <p className="font-[500] mt-3">For Healthcare Providers:</p>
                    
                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed mt-2">
                        We delivered a comprehensive AI voice platform that handles over 100 call
                        types automatically, from routine appointments to prescription refills.
                        Healthcare staff gain access to a real-time monitoring dashboard with
                        live transcriptions, analytics showing call patterns and patient
                        satisfaction, and seamless integrations with existing calendar and
                        EHR systems. All calls are stored in HIPAA-compliant infrastructure with
                        encryption, while the AI provides genuine 24/7 patient support without
                        requiring additional staffing.         
                    </p>

                        <div className="space-y-1">
                    <p className="font-[500] mt-9">For Patients:</p>

                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed mt-2">
                        Patients experience instant connection with zero hold times, available every
                        hour of every day including nights, weekends, and holidays. The AI conducts
                        natural, empathetic conversations without robotic menu navigation, books
                        appointments immediately, and provides consistent accurate information.
                        When needed, patients can seamlessly transfer to human staff who receive
                        full context from the AI conversation.            
                    </p>

                    </div>

                    
                </div>

            </div>
       </div>


    
    </div>

        </>
    )
}

export default NinthSection;