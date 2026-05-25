import manImage from "../../assets/new-portfolio/portfolio/sync/1 (22).png";

const SecondSection : React.FC = () => {
    return(
        <>
        
        <div className="xl:border-t xl:border-b xl:border-[#5A5A5A] flex xl:flex-row flex-col-reverse">
           <div className="xl:w-1/2 xl:border-r xl:border-[#5A5A5A]">
              <img src={manImage} className="w-full h-full object-cover"/>
           </div>

           <div className="xl:w-1/2 xl:px-20 px-7 xl:py-16 py-10 ">
                <h1 className="text-[#000000]  text-[25px] md:text-[32px] md:text-center font-[500] md:mb-6 max-lg:pt-5 max-lg:border-t max-lg:border-[#5A5A5A] ">
                Research & Discovery
                </h1>

                
                <div className="md:space-y-10 space-y-7">
                    <div>
                    <span className="font-semibold"> What I Found When I Talked to Real Retailers</span>
                        <p className="text-[#5A5A5A] text-[16px] leading-relaxed">
                        I conducted in-depth interviews with over 30 multi-channel retailers
                        across fashion, electronics, and home goods — going in with open
                        questions, not assumptions.                        </p>
                    </div>

                    <div>
                
                     <p className="text-[#5A5A5A] text-[16px] leading-relaxed">
                        Business owners spent three to four hours daily on manual inventory
                        updates. Store managers described the embarrassment of overselling
                        online. Everyone was guessing — and that guessing was costing them
                        real money in dead stock, missed reorders, and lost customer trust.                       
                    </p>

                    </div>

                    <div>
                        <span className="text-[#5A5A5A]">
                        Three core problems emerged:
                        </span>
                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed">
                        <span className="font-semibold text-black">Fragmentation </span>— No unified view. Every system existed in its own silo.
                    </p>

                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed"> 
                   <span className="font-semibold text-black">Inaccessibility </span>— Enterprise tools were priced out of reach for growing
                    SMEs.
                    </p>

                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed"> 
                        <span className="font-semibold text-black">Context mismatch </span>— Existing tools were built for Western retail. Mobile
                        money, intermittent internet, and informal supplier relationships weren't
                        considered.</p>

                    </div>
                </div>
           </div>
        </div>
        
        </>
    )
}

export default SecondSection;