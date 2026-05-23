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
                         I conducted extensive research with both primary
                        user groups—healthcare providers and patients:
                    </p>

                    <p>15 in-depth interviews with front desk staff,
                        nurses, and practice managers.</p>

                    <p>Survey of 200+ patients about their phone
                        experience with medical offices.</p>
                    
                    <p>Shadowing sessions observing real call handling at 3 clinics.</p>

                    <p>Call recording analysis of 100+ actual patient calls.</p>

                    <p>Competitive analysis of existing healthcare communication tools.</p>

                </div>
            </div>

        </div>
        </>
     )
}

export default SecondSection;