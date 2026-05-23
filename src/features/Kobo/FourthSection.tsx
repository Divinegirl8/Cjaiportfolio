import laptopPicture from "../../assets/new-portfolio/kobo/fourth-section/Group (2).png";

const FourthSection: React.FC = () => {
    return (
        <>
             <div className="xl:border-b border-[#5A5A5A] flex xl:flex-row flex-col-reverse">
           <div className="xl:w-1/2 border-r border-[#5A5A5A] bg-[#007F5E] justify-center items-center flex px-10 py-20">
              <img src={laptopPicture} className=" w-[600px] " />
           </div>

           <div className="xl:w-1/2 xl:px-20 px-7 md:py-16 py-10 bg-[#FBFBFB]">
                <h1 className="text-[#000000]  md:text-center  text-[25px] md:text-[32px] font-[500] md:mb-6 max-lg:pt-5 max-lg:border-t max-lg:border-[#5A5A5A]">
                    Simple journey
                </h1>

               

                
                <div className="md:space-y-10 space-y-7">
                    <div>
                        <h2 className="text-[#000000] text-[16px] font-semibold md:mb-2">
                           Clarity Over Complexity
                        </h2>
                        
                        <p className="text-[#5A5A5A] text-[16px] leading-relaxed">
                        Financial apps often overwhelm users with features they don't
                        understand. I designed Kobo Vault around three core actions users
                        perform daily: Send Money, Create Cards, and Track Spending. Each
                        flow follows a progressive disclosure pattern—showing only essential
                        information at each step, reducing cognitive load while maintaining
                        powerful functionality beneath the surface. The result: users complete
                        transactions 60% faster than with traditional banking apps.                   
                       </p>
                    </div>

                   
                </div>
           </div>
        </div>
        </>
    );
};

export default FourthSection;