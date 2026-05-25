import manImage from "../../assets/new-portfolio/portfolio/sync/1 (24).png";

const NinthSection : React.FC = () => {
    return(
        <>
        
        <div className="flex xl:flex-row flex-col-reverse xl:border-t xl:border-b xl:border-[#5A5A5A]">
           <div className="xl:w-1/2 xl:border-r xl:border-[#5A5A5A]">
              <img src={manImage} className="w-full h-full object-cover"/>
           </div>

           <div className="xl:w-1/2 xl:px-20 px-7 xl:py-16 py-10 ">
                <h1 className="text-[#000000]  text-[25px] md:text-[32px] md:text-center font-[500] md:mb-6 max-lg:pt-5 max-lg:border-t max-lg:border-[#5A5A5A] ">
                Impact & Outcomes
                </h1>
            


                <div className="md:space-y-10 space-y-7">
                    <div>
                    <span className="font-semibold">What Syncventory Delivered for Retailers</span>
                        <p className="text-[#5A5A5A] text-[16px] leading-relaxed">
                        The platform launched and was featured at London Tech Week 2023 —
                        recognised as a benchmark for accessible inventory management. For
                        the retailers using it, the impact was measurable and immediate.                      </p>
                    </div>


                 <div>

                    <div className="grid md:grid-cols-2 grid-cols-1 gap-5 md:gap-30 md:items-center md:mt-16 mt-5">
                    <div className="flex items-center gap-8">
                        {/* Left stat */}
                        <div className="relative pr-8">
                            <h4 className="font-[800] md:text-[30px] text-[20px]">500+</h4>
                            <p className="font-normal md:text-[16px] text-[14px] text-[#626262] md:w-[14rem]">
                            Businesses managing inventory on the platform
                            </p>

                            {/* Divider */}
                            <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[1px] h-[40px] bg-[#D4D4D4] md:block hidden" />
                        </div>
                        

                    {/* Right stat */}
                    <div>
                        <h4 className="font-[800] md:text-[30px] text-[20px]">60%</h4>
                        <p className="font-normal md:text-[16px] text-[14px] text-[#626262] md:w-[14rem]">
                        Reduction in time spent on inventory management
                        </p>
                    </div>
                    </div>

             
                   </div>

                   <div className="grid md:grid-cols-2 grid-cols-1 gap-5 md:gap-30 md:items-center md:mt-10 mt-5">
                    <div className="flex items-center gap-8">
                        {/* Left stat */}
                        <div className="relative pr-8">
                            <h4 className="font-[800] md:text-[30px] text-[20px]">35%</h4>
                            <p className="font-normal md:text-[16px] text-[14px] text-[#626262] md:w-[14rem]">
                               Decrease in stockouts and overselling incidents
                            </p>

                            {/* Divider */}
                            <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[1px] h-[40px] bg-[#D4D4D4] md:block hidden" />
                        </div>
                        

                    {/* Right stat */}
                    <div>
                        <h4 className="font-[800] md:text-[30px] text-[20px]">₦2B+</h4>
                        <p className="font-normal md:text-[16px] text-[14px] text-[#626262] md:w-[14rem]">
                        Worth of inventory managed across the platform
                        </p>
                    </div>
                    </div>

             
                   </div>

                    </div>

                    <div>
                
                     <p className="text-[#5A5A5A] text-[16px] leading-relaxed">
                        Beyond the numbers, the qualitative shift was significant. Retailers
                        described feeling in control of their business for the first time.
                        Decisions that used to require hours of reconciliation across multiple
                        systems were now available in seconds. Stock transfers that required
                        phone calls and manual logging happened with a few taps.
                    </p>

                    </div>

                 

                </div>
           </div>
        </div>
        
        </>
    )
}

export default NinthSection;