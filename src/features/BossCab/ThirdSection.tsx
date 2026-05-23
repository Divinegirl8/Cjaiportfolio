import paperImage from "../../assets/new-portfolio/boss-cab/third-section/1 (5).png";
import stickyNoteImage from "../../assets/new-portfolio/boss-cab/third-section/3 (3).png";


const ThirdSection : React.FC = () => {
     return(
        <>
        <div className="flex xl:flex-row flex-col justify-between  bg-[#5A5A5A]">

         
      
            <div className="flex-1 xl:border-r border-[#5A5A5A] max-lg:hidden ">
                <img src={paperImage} className=""/>    
            </div>


            <div className="md:px-10  px-7 md:py-16 py-10 flex-1 bg-[#FBFBFB] max-lg:bg-[#F3F3F3] xl:border-r  border-[#5A5A5A]">
                <h2 className="text-[#000000] md:text-[32px] text-[25px] md:text-center font-medium md:mb-6 max-lg:pt-5 max-lg:border-t max-lg:border-[#5A5A5A]">
                User Persona & Affinity Map
                </h2>

                
                <div className="md:space-y-4 text-[#5A5A5A] text-base leading-relaxed">
                    <p>  
                        To understand the real problems riders face,
                        I created a persona representing our core
                        audience—young professionals who rely on ride
                        -hailing to save time, avoid stress, and manage
                        costs. Interviews and an affinity map revealed
                        consistent issues: unpredictable pricing,
                        delayed or failed payments, inaccurate ETAs,
                        and long detours caused by traffic.
                    </p>

                    <p>  
                        These insights made our focus for Bosscab
                        clear: offer transparent pricing, faster and
                        more reliable payments, and smarter route
                        syncing. Grounding the product in real user
                        frustrations ensures Bosscab solves the
                        everyday problems riders deal with on
                        competing platforms.
                    </p>
                </div>
            </div>

            <div className="flex-1 ">
                <img src={stickyNoteImage} className=""/>    
            </div>

        </div>
        </>
     )
}

export default ThirdSection;