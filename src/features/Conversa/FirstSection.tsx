import secondImage from "../../assets/new-portfolio/conversa/first-section/1 (8).png";
import orangeImage from "../../assets/new-portfolio/conversa/first-section/2 (9).png";
import ashImage from "../../assets/new-portfolio/conversa/first-section/3 (6).png";


const FirstSection: React.FC = () => {
    return (
        <>
          <div className="xl:border-t md:border-b  border-[#5A5A5A] flex flex-col xl:flex-row ">

             <div className="xl:hidden md:px-10 md:py-16 px-7  border-b border-[#5A5A5A] relative ">
                      
                        <button className="absolute -bottom-[26px] max-lg:right-16  px-8 py-3 border border-[#5A5A5A] bg-white rounded-full text-base hover:bg-gray-50 transition-colors inline-flex items-center gap-2">
                            Visit Website 
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 6V8H14.59L5 17.59L6.41 19L16 9.41V18H18V6H6Z" fill="#1E1E1E"/>
                            </svg>
                        </button>
                    </div>

              
              <div className="lg:xl:w-1/2  lg:border-r lg:border-[#5A5A5A] flex flex-col">
                 
              <div className="xl:px-16  px-7  flex-1">
                      <h2 className="text-[#000000] md:text-[32px] text-[25px] md:text-center font-[500] md:mb-6 pt-16">
                          Project Brief
                      </h2>

                    
                      
                      <div className="space-y-4 text-[#5A5A5A] text-base leading-relaxed">

                        <p className="font-bold">The Challenge</p>
                          <p>
                            Healthcare facilities struggle with high call volumes, long patient wait
                            times, and administrative staff burnout. Hospitals and clinics receive
                            hundreds of daily calls for appointment bookings, prescription refills,
                            general inquiries, and after-hours emergencies—but limited staff
                            capacity means missed calls, frustrated patients, and lost revenue.
                          </p>
                          
                          <p>
                            Traditional phone systems force patients into complex IVR menus
                            (press 1 for appointments, press 2 for...), creating friction and
                            abandonment. Even when calls connect, staff spend 60-70% of their
                            time on repetitive administrative tasks instead of patient care.
                          </p>
                      </div>
              </div>

              <div className="flex xl:flex-row flex-col lg:gap-10  justify-center max-md:items-center ">
                <div className="md:flex-row md:flex justify-center gap-10">
                    <img src={orangeImage} alt="picture one" className="w-[280px] h-[350px] rounded-2xl lg:mt-7 mt-8 object-cover"/>
              <img src={ashImage} alt="picture two" className="w-[280px] h-[430px] object-cover"/>    
                </div>
              <img src={secondImage} className=" xl:hidden -mt-9"/>
                   
            </div>

                  
                
              </div>

              <div className="xl:w-1/2 xl:block hidden">
                    <div className="flex flex-row justify-evenly items-stretch gap-8 ">
                    <div className=" lg:border-r border-[#5A5A5A] flex flex-col">
                 
                 <div className="border-b  max-lg:px-7 lg:px-10 md:py-10 border-[#5A5A5A] lg:relative ">
                         
                         <div className="lg:flex flex-col space-y-2 py-10 text-[21px] hidden">
                            <span><span className="font-bold">My Role:</span> Founder & Lead Product Designer</span>
                            <span><span className="font-bold">Timeline:</span> June 2025 - Present</span>
                            <span><span className="font-bold">Platform:</span> Web Dashboard, Voice API, Mobile (iOS/Android)</span>
                            <span><span className="font-bold">Tools:</span> Figma, Voiceflow, Cursor AI, Midjourney</span>
                         </div>
                         
                         <button className="lg:absolute lg:-bottom-[26px]  px-8 py-3 border border-[#5A5A5A] bg-white rounded-full text-base hover:bg-gray-50 transition-colors lg:inline-flex items-center gap-2 cursor-pointer  hidden">
                              For More Details
                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M6 6V8H14.59L5 17.59L6.41 19L16 9.41V18H18V6H6Z" fill="#1E1E1E"/>
                             </svg>
                         </button>
                     </div>
   
                     
                     <div className="py-10 lg:flex-1 hidden lg:block ">
                         
                         
                        <img src={secondImage} className="w-[695px] h-[519.5859375px]"/>
                     </div>
                 </div>

                <div className="md:flex flex-col justify-between hidden py-20 pr-2">
                    <div className="text-[#000000] text-sm tracking-wider z-10"
                        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)'}}>
                        Date <span className="font-[600]">01.01.2025</span>
                    </div>
                    
                    <div className="text-[#000000] text-base font-medium tracking-wide z-10"
                        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)'}}>
                        Portfolio Design
                    </div>
                    
                    <div className="text-[#000000] text-sm tracking-wider z-10 font-medium"
                        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)'}}>
                        04
                    </div>
                </div>
                    </div>
             </div>



          </div>
        </>
    );
};

export default FirstSection;