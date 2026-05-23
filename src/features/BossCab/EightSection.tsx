import brainStormingPicture from "../../assets/new-portfolio/boss-cab/eight-section/1 (6).png";

const EightSection: React.FC = () => {
    return (
        <>
             <div className="border-t border-[#5A5A5A] flex xl:flex-row flex-col">
          

           <div className="xl:w-1/2 xl:px-20 lg:px-10 px-7 md:py-16 py-10 bg-[#FBFBFB]">
                <h1 className="text-[#000000] md:text-[32px] text-[25px] md:text-center font-medium md:mb-6 max-lg:pt-5 max-lg:border-t max-lg:border-[#5A5A5A]">
                Final Product
                </h1>

               
                
                <div className="md:space-y-10">
                    <div>
                        
                        <p className="text-[#5A5A5A] text-[16px] leading-relaxed">
                            The redesigned Bosscab platform successfully addressed all three critical pain points identified through user research. Understanding
                            that 80% of riders complained about price surges while drivers
                            struggled with low earnings, I developed solutions benefiting both
                            groups.
                        </p>
                    </div>


                    <div>
                   
                        
                        <p className="text-[#5A5A5A] text-[16px] leading-relaxed">The final product introduced three key features: an in-app wallet

                        eliminating transaction delays and payment failures, a group wallet
                        allowing users to pool funds and share ride costs—making rides
                        affordable without compromising driver income—and Bosscab Map
                        Localization resolving routing discrepancies for accurate navigation
                        and on-time arrivals.
                       </p>
                    </div>


                    <div>
                   
                        
                   <p className="text-[#5A5A5A] text-[16px] leading-relaxed">The final product introduced three key features: an in-app wallet

                   Riders can now manage payments seamlessly, create group wallets to
                    reduce costs, and trust optimal routing. Drivers benefit from reliable
                    payments and precise navigation saving fuel and time. These
                    improvements positioned Bosscab as the friendlier, fairer rideshare
                    option, supporting growth goals ahead of going public.
                  </p>
               </div>

                   
                </div>
           </div>

           <div className="xl:w-1/2 border-l border-[#5A5A5A]">
              <img src={brainStormingPicture} className="w-full h-full object-cover" />
           </div>
        </div>
        </>
    );
};

export default EightSection;