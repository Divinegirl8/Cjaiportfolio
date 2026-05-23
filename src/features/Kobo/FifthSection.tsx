import koboPicture from "../../assets/new-portfolio/kobo/fifth-section/Group (3).png";

const FifthSection: React.FC = () => {
    return (
        <>
           <div className="xl:border-b xl:border-[#5A5A5A] flex xl:flex-row flex-col">
       

       <div className="xl:w-1/2  border-[#5A5A5A] border-r xl:px-20 px-7 md:py-16 py-10">
            <h1 className="text-[#000000]  md:text-center  text-[25px] md:text-[32px] font-[500] md:mb-6 max-lg:pt-5 max-lg:border-t max-lg:border-[#5A5A5A]">
            UI Kit
            </h1>

            
            <div className="space-y-10">
                <div>
                    <h2 className="text-[#000000] text-[16px] font-semibold md:mb-2">
                    Visual Language
                    </h2>
                    
                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed">
                    The design uses Kobo's signature teal as the primary action color,
                    paired with clean whites and strategic use of color-coded categories
                    (green for income, red for expenses, purple for savings). Typography
                    emphasizes hierarchy with clear CTAs and readable transaction details.
                    Card designs feel premium yet approachable—virtual cards display
                    with subtle gradients and real-time balance updates. Micro-
                    interactions provide satisfying feedback: smooth transitions, success
                    animations, and haptic responses that make digital transactions feel
                    tangible and secure.                       
                    </p>
                </div>

            </div>
       </div>


       <div className="xl:w-1/2  justify-center bg-[#F2F2F2] items-center flex px-10">
          <img src={koboPicture} className=""/>
       </div>
    </div>
        </>
    );
};

export default FifthSection;