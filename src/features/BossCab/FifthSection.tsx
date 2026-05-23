import brainStormingPicture from "../../assets/new-portfolio/boss-cab/fifth-section/2 (6).png";

const FifthSection: React.FC = () => {
    return (
        <>
             <div className="xl:border-b border-[#5A5A5A] flex xl:flex-row flex-col-reverse">
           <div className="xl:w-1/2 xl:border-r border-[#5A5A5A]">
              <img src={brainStormingPicture} className="w-full h-full object-fill" />
           </div>

           <div className="xl:w-1/2 xl:px-20 px-7 lg:px-10 md:py-16 py-10 bg-[#FBFBFB]">
                <h1 className="text-[#000000] md:text-[32px] text-[25px] md:text-center font-medium md:mb-6 max-lg:pt-5 max-lg:border-t max-lg:border-[#5A5A5A]">
                Brainstorming Solutions
                </h1>

               
                
                <div className="md:space-y-10">
                    <div>
                        <h2 className="text-[#000000] text-[16px] font-semibold md:mb-2">
                        CONCEPT EXPLORATION, MIND MAPPING, COMPETITIVE ANALYSIS              
                        </h2>
                        
                        <p className="text-[#5A5A5A] text-[16px] leading-relaxed"> To differentiate Bosscab in a crowded market, I conducted a competitive analysis to understand how other ride-hailing apps addressed similar challenges and identify opportunities for innovation. I brainstormed solutions through mind mapping, focusing on the user personas' key pain points. 
                        </p>
                    </div>


                    <div>
                   
                        
                        <p className="text-[#5A5A5A] text-[16px] leading-relaxed">Three feature concepts emerged as the most impactful solutions. First, an in-app wallet to eliminate transaction delays after rides. Second, a group wallet feature allowing friends, families, or organizations to pool funds and share ride costs—particularly valuable for budget-conscious riders and companies offering transportation incentives to employees. Third, Bosscab Map Localization that adapts to local city settings, ensuring drivers receive accurate directions and riders arrive on time. Since these proposed features would directly tackle all three pain points —cost concerns, payment friction, and navigation issues—they represented the most well-rounded and practical solution to move forward with.</p>
                    </div>

                   
                </div>
           </div>
        </div>
        </>
    );
};

export default FifthSection;