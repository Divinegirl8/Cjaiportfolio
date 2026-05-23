import manImage from "../../assets/new-portfolio/kobo/second-section/1.png"

const SecondSection : React.FC = () => {
    return(
        <>
        
        <div className="xl:border-t xl:border-b xl:border-[#5A5A5A] flex xl:flex-row flex-col-reverse">
           <div className="xl:w-1/2 xl:border-r xl:border-[#5A5A5A]">
              <img src={manImage} className="w-full h-full object-cover"/>
           </div>

           <div className="xl:w-1/2 xl:px-20 px-7 xl:py-16 py-10 ">
                <h1 className="text-[#000000]  text-[25px] md:text-[32px] md:text-center font-[500] md:mb-6 max-lg:pt-5 max-lg:border-t max-lg:border-[#5A5A5A] ">
                    Challenge
                </h1>
                
                <div className="md:space-y-10 space-y-7">
                    <div>
                        <h2 className="text-[#000000] text-[16px] font-semibold md:mb-2">
                            Problem
                        </h2>
                        
                        <p className="text-[#5A5A5A] text-[16px] leading-relaxed">
                            Many Africans struggle with fragmented financial services—juggling multiple apps for payments, savings, and cards. Traditional banking feels complex and inaccessible, while existing fintech solutions lack the security and comprehensive features users need to confidently manage their finances in one place.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-[#000000] text-[16px] font-semibold  md:mb-2">
                            Solution
                        </h2>
                        
                        <p className="text-[#5A5A5A] text-[16px] leading-relaxed">
                            Create Kobo Vault as a unified financial hub that combines security with simplicity. Deliver instant virtual cards, real-time transaction monitoring, seamless peer-to-peer transfers, and smart budgeting tools—empowering users to take control of their financial lives without complexity or compromise.
                        </p>
                    </div>
                </div>
           </div>
        </div>
        
        </>
    )
}

export default SecondSection;