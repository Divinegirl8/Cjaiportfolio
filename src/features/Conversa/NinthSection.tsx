import sketchImage from "../../assets/new-portfolio/conversa/Mask group (17).svg";

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
                What We're Building </p>
            </div>

 
            <div className="space-y-10 ">
                <div>

                    <p className="font-[500] mt-3">For Healthcare Providers:</p>
                    
                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed mt-2">
                    Sernio is designed to give clinics a complete AI voice platform that handles
                    routine calls automatically, from appointment bookings to prescription
                    refills, without additional staffing. The admin dashboard gives staff real-
                    time visibility into every call, with live transcriptions, call pattern analytics,
                    and seamless calendar and EHR integrations. The infrastructure is being
                    built to HIPAA-compliant standards from day one, with encrypted call
                    storage and full audit trails.      
                    </p>

                        <div className="space-y-1">
                    <p className="font-[500] mt-9">For Patients:</p>

                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed mt-2">
                    The patient experience is designed around one principle: no patient should
                    wait on hold for something a well-designed AI can handle instantly. Sernio
                    conducts natural, empathetic conversations; no robotic menus, no hold
                    music, and books appointments, answers questions, and provides accurate
                    clinic information 24/7. When a situation requires human judgment, the
                    transfer is seamless — staff receive full conversation context so patients
                    never have to repeat themselves.         
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