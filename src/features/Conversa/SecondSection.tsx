import procesImage from "../../assets/new-portfolio/cliqmit/second-section/2 (3).png";

const SecondSection : React.FC = () => {
     return(
        <>
        <div className="flex md:flex-row flex-col justify-between ">

         
            <div className="xl:px-16 md:px-10 px-7 md:mt-16 flex-1 bg-[#FBFBFB]">
                <h2 className="text-[#000000] text-[25px] md:text-[32px] md:text-center font-medium md:mb-6 max-lg:pt-5 max-sm:border-t max-sm:border-[#5A5A5A]">
                    Design Process
                </h2>
                
                <div className="space-y-10 text-[#5A5A5A] text-base leading-relaxed font-[400]">

                        <p > <span className="font-[500]">Reduce Operational Costs: </span>Healthcare facilities
                        needed to reduce the burden on front desk staff
                        who were overwhelmed with repetitive phone
                        inquiries.</p>

                       <p>  <span className="font-[500]">Improve Patient Access: </span>Enable 24/7 availability
                        for routine questions without hiring additional
                        staff.</p>

                      <p> <span className="font-[500]">Maintain Quality: </span>Ensure accuracy and empathy in
                        every interaction while staying HIPAA compliant. </p>

                       <p> <span className="font-[500]">Scalability: </span>Create a system that works for small
                        clinics and large hospital networks alike.</p>
                </div>
            </div>
      
            <div className="flex-1  items-center justify-center max-sm:mt-10">
                <img src={procesImage} className="w-full h-full object-cover"/>    
            </div>


            <div className="md:px-16 px-7 md:py-16 py-7 flex-1 bg-[#FBFBFB]">
                <h2 className="text-[#000000] text-[25px] md:text-[32px] md:text-center font-medium md:mb-6">
                    Business, Users, & Data
                </h2>
                
                <div className="space-y-4 text-[#5A5A5A] text-base leading-relaxed">







                    <p>  
                            I conducted research to ground the product in
                            real healthcare communication behaviour,
                            focusing on what currently breaks down between
                            clinics and patients, and where AI could genuinely
                            help.
                    </p>

                    <p>
                                <span className="font-semibold">Stakeholder interviews </span>with clinic administrators
                                and front desk staff to understand operational
                                pain points and workflow constraints.</p>

                    <p>  <span className="font-semibold">Competitive analysis</span> of existing voice AI platforms
                            -Synthflow, Bland AI, Autocalls — identifying gaps in
                            healthcare-specific design and conversation quality.</p>
                                                
                    <p>  <span className="font-semibold"> Secondary research</span> into healthcare communica-
tion patterns, patient behaviour on phone calls,
and AI adoption barriers in clinical settings. </p>


                </div>
            </div>

        </div>
        </>
     )
}

export default SecondSection;