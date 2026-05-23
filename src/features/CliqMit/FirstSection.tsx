
import macPicture from "../../assets/new-portfolio/cliqmit/first-section/mac 2.png";
import manPicture from "../../assets/new-portfolio/cliqmit/first-section/2 (2).png";


const FirstSection: React.FC = () => {
    return (
        <>
            <div className="md:border-t md:border-b border-[#5A5A5A] flex flex-col xl:flex-row">
              
                <div className="xl:w-1/2 xl:border-r border-[#5A5A5A] flex flex-col">
                   
                <div className="xl:px-16 md:px-10 md:py-16 px-7  border-b border-[#5A5A5A] relative">
                        <h1 className="text-[#000000] text-[50px] font-normal leading-tight mb-8">
                            <span className="hidden md:block">Reimagining Event</span>
                            <span className="hidden md:block">Discovery</span>
                        </h1>
                        
                        <button className="absolute -bottom-[26px] max-lg:right-16  px-8 py-3 border border-[#5A5A5A] bg-white rounded-full text-base hover:bg-gray-50 transition-colors inline-flex items-center gap-2">
                            Visit Website 
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 6V8H14.59L5 17.59L6.41 19L16 9.41V18H18V6H6Z" fill="#1E1E1E"/>
                            </svg>
                        </button>
                    </div>

                    
                    <div className="xl:px-16 md:px-10 px-7 md:py-16 py-10 flex-1 ">
                        <h2 className="text-[#000000] md:text-[32px] text-[25px] md:text-center font-medium md:mb-6">
                            Project Brief
                        </h2>

                    
                        
                        <div className="space-y-4 text-[#5A5A5A] text-base leading-relaxed">
                            <p>Cliqmit is a new platform for discovering and booking events, created to offer a simpler and more intuitive alternative to existing solutions. Users often face cluttered interfaces and confusing booking flows, leading to frustration and missed opportunities.                            </p>
                            <p>To address this, I designed Cliqmit from scratch with a process grounded in business goals, user needs, and real behavior patterns—resulting in a clean, reliable, and easy-to-use experience across mobile and web.                            </p>
                        </div>
                    </div>
                </div>

             <div className="xl:w-1/2 relative flex items-stretch justify-center md:py-12">
                
                <div className="relative w-full h-full ">
                  
                    <div className="absolute top-0 right-0 text-[#000000] text-sm tracking-wider z-10 md:block hidden"
                        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', padding: '2rem 1rem' }}>
                        Date <span className="font-[600]">01.01.2025</span>
                    </div>
                    
                
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 text-[#000000] text-base font-medium tracking-wide z-10 md:block hidden"
                        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', padding: '2rem 1rem' }}>
                        Portfolio Design
                    </div>
                    
                    <div className="absolute bottom-0 right-0 font-medium text-[#000000] text-sm tracking-wider z-10 md:block hidden"
                        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', padding: '2rem 1rem' }}>
                        01
                    </div>
                   

                
                    <div className="md:px-16 px-7 md:mt-5">
                        <img 
                            src={manPicture} 
                            alt="man"
                            className="max-sm:px-4"
                       
                        />
                    </div>

                    <div className="">
                        <img 
                            src={macPicture} 
                            alt="picture"
                           
                        />
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};

export default FirstSection;