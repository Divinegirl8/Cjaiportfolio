import syncImage from "../../assets/new-portfolio/portfolio/sync/Image (12).png";
import syncMobImage from "../../assets/new-portfolio/portfolio/sync/Image (13).png";

const FirstSection: React.FC = () => {
    return (
        <>
            <div className="md:border-t border-[#5A5A5A] flex flex-col xl:flex-row ">
              
                <div className="xl:w-1/2  border-r border-[#5A5A5A] flex flex-col">
                   
                <div className="border-b max-lg:px-7 lg:px-10 md:py-10 border-[#5A5A5A] relative ">
                      
                <div className="hidden md:flex flex-col gap-4 lg:gap-8 lg:py-14 xl:px-10">
                            <div className="flex flex-row justify-between ">

                                <div className="flex flex-col gap-2">
                                    <h4 className="text-[#626262]">ROLE</h4>

                                    <h4 className="text-black font-semibold">Product Designer</h4>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <h4 className="text-[#626262]">COMPANY</h4>

                                    <h4 className="text-black font-semibold">Nugi Technologies</h4>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <h4 className="text-[#626262]">YEAR</h4>

                                    <h4 className="text-black font-semibold">2020 – 2023</h4>
                                </div>
                            </div>

                            <div className="flex flex-row gap-22">

                            <div className="flex flex-col gap-2">
                                    <h4 className="text-[#626262]">PLATFORM</h4>

                                    <h4 className="text-black font-semibold">Web · POS · Mobile</h4>
                            
                            </div>


                            <div className="flex flex-col gap-2">
                                    <h4 className="text-[#626262]">EXHIBITION</h4>

                                    <h4 className="text-black font-semibold">London Tech Week 2025</h4>
                                </div>



                            </div>


                        </div>
                        
                        <button className="absolute -bottom-[26px] right-16 px-8 py-3 border border-[#5A5A5A] bg-white rounded-full text-base hover:bg-gray-50 transition-colors inline-flex items-center gap-2 cursor-pointer"  onClick={() => window.open('http://syncventory.co/', '_blank')}>
                     
                            Visit Website 
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 6V8H14.59L5 17.59L6.41 19L16 9.41V18H18V6H6Z" fill="#1E1E1E"/>
                            </svg>
                        </button>
                    </div>

                    
                    <div className="xl:px-16  px-7 md:py-16 py-10 flex-1">
                        <h2 className="text-[#000000] md:text-[32px] text-[25px] md:text-center font-[500] md:mb-6">
                            Project Brief
                        </h2>


                        
                        <div className="space-y-4 text-[#5A5A5A] text-base leading-relaxed">
                            <p>
                            When I joined Nugi Technologies, multi-channel retailers in Africa were stuck
                            in a fragmented nightmare. A fashion boutique with three Lagos locations
                            and a Shopify store would be managing four completely separate systems —
                            none of them talking to each other. A sale online didn't update the warehouse.
                            A transfer between stores meant a phone call and a spreadsheet. Returns?
                            A manual correction across every platform, one by one.                           
                            </p>
                            
                            <p>
                            The existing solutions were either too simple or too expensive. My goal was
                            to design Syncventory as the benchmark for accessible inventory
                            management — powerful enough for multi-location retailers, simple enough
                            for a first-time software user.                           
                            </p>
                        </div>
                    </div>
                </div>

                <div className="xl:w-1/2 my-auto md:py-10">
            <div className="flex flex-row justify-evenly items-stretch gap-8 md:px-14   ">
                <div className="hidden md:block">
                    <img 
                        src={syncImage} 
                        alt="Kobo App Interface"
                    />
                </div>

                <div className="md:hidden">
                    <img 
                        src={syncMobImage} 
                        alt="Kobo App Interface"
                    />
                </div>

        <div className="md:flex flex-col justify-between hidden">
            <div className="text-[#000000] text-sm tracking-wider z-10"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)'}}>
                Date <span className="font-[600]">01.01.2022</span>
            </div>
        
            
            <div className="text-[#000000] text-base font-medium tracking-wide z-10"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)'}}>
                Portfolio Design
            </div>
            
            <div className="text-[#000000] text-sm tracking-wider z-10 font-medium"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)'}}>
                02
            </div>
        </div>
    </div>
</div>



            </div>
        </>
    );
};

export default FirstSection;