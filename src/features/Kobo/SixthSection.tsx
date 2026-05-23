import koboPicture from "../../assets/new-portfolio/kobo/sixth-section/Phone mockup.png";

const SixthSection: React.FC = () => {
    return (
        <>
             <div className="border-b border-[#5A5A5A] flex xl:flex-row flex-col-reverse">
           <div className="xl:w-1/2 border-r border-[#5A5A5A] bg-[#00B48D] justify-center items-center flex px-10 py-20">
              <img src={koboPicture} className=" w-[600px] " />
           </div>

           <div className="xl:w-1/2 xl:px-20 px-7 md:py-16 py-10 bg-[#FBFBFB]">
                <h1 className="text-[#000000] text-[25px] md:text-[32px] font-[500] md:text-center  md:mb-6 max-lg:pt-5 max-lg:border-t max-lg:border-[#5A5A5A]">
                Lessons
                </h1>

               
                
                <div className="md:space-y-10 space-y-7">
                    <div>
                        <h2 className="text-[#000000] text-[16px] font-semibold md:mb-2">
                          Trust Through Transparency                
                        </h2>
                        
                        <p className="text-[#5A5A5A] text-[16px] leading-relaxed"> Building a financial product taught me that design alone doesn't create trust—transparency does. Every security decision, every transaction step, and every data point needs clear explanation. Users don't just want a beautiful app; they want to understand why they should trust it with their money.
                        </p>
                    </div>


                    <div>
                        <h2 className="text-[#000000] text-[16px] font-semibold  md:mb-2">
                        Progressive Complexity Initially
                        </h2> 
                        
                        <p className="text-[#5A5A5A] text-[16px] leading-relaxed"> I tried to showcase all of Kobo Vault's powerful features upfront. User testing revealed this intimidated new users. The breakthrough came from adopting progressive complexity—starting users with basic send/receive flows, then gradually introducing virtual cards, budgets, and analytics as they gain confidence. This approach increased activation rates by 45% and reduced early drop-off significantly.
                        </p>
                    </div>

                   
                </div>
           </div>
        </div>
        </>
    );
};

export default SixthSection;