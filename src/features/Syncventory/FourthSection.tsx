import numberThree from "../../assets/new-portfolio/portfolio/sync/03.svg"
import numberTwo from "../../assets/new-portfolio/portfolio/sync/02.svg"
import numberOne from "../../assets/new-portfolio/portfolio/sync/01.svg"
import numberFive from "../../assets/new-portfolio/portfolio/sync/icon.svg"
import numberFour from "../../assets/new-portfolio/portfolio/sync/04.svg"

const FourthSection = () => {
    return(
        <div className="xl:px-20 px-7 xl:py-16 py-10 xl:border-t xl:border-b xl:border-[#5A5A5A]">

        <h1 className="text-[#000000]  text-[25px] md:text-[32px] md:text-center font-[500] md:mb-6 max-lg:pt-5 max-lg:border-t max-lg:border-[#5A5A5A] ">
        Design Process
        </h1>

        

             <div>
                <span className="font-semibold">How I Approached The Information Architecture</span>
                     <p className="text-[#5A5A5A] text-[16px] leading-relaxed">
                     The core design challenge was building a system that handles enormous complexity — products, variants, locations, channels, suppliers, orders, transfers — without
                    making users feel that complexity. I started with information architecture before visual design. Getting the structure right was everything.

                    </p>
                    </div>

                    <div>
                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed mt-10">
                    I organised the platform into five modules, each mapped to a mental model retailers already understood. Products — what they sell. Inventory — where things are. Sales —
                    orders coming in. Purchases — stock from suppliers. Locations — their physical operations. Reports — understanding performance.
                    </p>
                    </div>

                    <div>
                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed mt-10">
                    By mapping the architecture to how retailers actually think rather than software conventions, onboarding became dramatically faster. Users navigated intuitively from
                    day one.
                    </p>
                    </div>

                    
                    <div className="mt-10">
              
                   
                    <div className="flex flex-col md:flex-row gap-6 mt-10">

                        {/* Card 1 */}
                        <div className="max-w-[560px] h-[350px] bg-white  p-8 ">
                        <div className="mb-8">
                        <div className="py-1.5  mb-4">
                             <img src={numberOne} alt="two"/>
                            </div>

                            <div>
                            <p className="font-semibold text-black">Progressive Onboarding</p>
                            <p className="text-base leading-relaxed text-[#626262] mt-3">
                                
                                Rather than overwhelming new users with a full
                                setup wizard, I designed a progressive onboarding
                                flow that got retailers to their first meaningful action
                                in under 10 minutes. Essential configuration first —
                                advanced settings revealed only when needed.
                            </p>
                            </div>
                        </div>
                      
                        </div>

                    {/* Card 2 */}
                    <div className="max-w-[560px] h-[350px] bg-white  p-8 ">
                        <div className="mb-8">
                        <div className="py-1.5  mb-4">
                             <img src={numberTwo} alt="two"/>
                            </div>

                            <div>
                            <p className="font-semibold text-black">Channel-Agnostic Product Management</p>
                            <p className="text-base leading-relaxed text-[#626262] mt-3">
                                
                                Products are created once and published everywhere.
                                The system handles the channel-specific formatting,
                                pricing rules, and inventory allocation automatically.
                                One source of truth for every product, regardless of
                                where it's sold.
                            </p>
                            </div>
                        </div>
                      
                        </div>


                        {/* Card 3 */}
                        <div className="max-w-[560px] h-[350px] bg-white p-8 ">
                        <div className="mb-8">
                            <div className="py-1.5  mb-4">
                             <img src={numberThree} alt="three"/>
                            </div>

                            <div>
                            <p className="font-semibold text-black">Real-Time Synchronisation</p>
                            <p className="text-base leading-relaxed text-[#626262] mt-3">
                                
                            Every inventory change — a sale, a return, a transfer,
                            a manual adjustment — propagates to all connected
                            channels instantly. I worked closely with engineers to
                            ensure this was a core technical foundation, not a
                            feature bolted on after the fact.
                            </p>
                            </div>
                        </div>
                      
                        </div>


                    </div>

                    <div className="flex flex-col md:flex-row gap-6 mt-5">

                {/* Card 4 */}
                <div className="max-w-[420px] h-[350px] bg-white  p-8 ">
                <div className="mb-8">
                <div className="py-1.5  mb-4">
                    <img src={numberFour} alt="two"/>
                    </div>

                    <div>
                    <p className="font-semibold text-black">Contextual Intelligence</p>
                    <p className="text-base leading-relaxed text-[#626262] mt-3">
                        Rather than surfacing raw data in reports, I designed
                        the intelligence layer to answer real business
                        questions in plain language. "Your best-selling product
                        needs restocking" is more actionable than a table of
                        numbers.
                    </p>
                    </div>
                </div>

                </div>

                {/* Card 5 */}
                <div className="max-w-[390px] h-[350px] bg-white  p-8 ">
                <div className="mb-8">
                <div className="py-1.5  mb-4">
                    <img src={numberFive} alt="two"/>
                    </div>

                    <div>
                    <p className="font-semibold text-black">Offline-First POS</p>
                    <p className="text-base leading-relaxed text-[#626262] mt-3">
                        
                      In the Nigerian context, internet reliability is not
                    guaranteed. The POS system was designed to
                    operate fully offline and sync when connection is
                    restored. Not a workaround — a primary design
                    requirement.
                                        </p>
                    </div>
                </div>

                </div>

                


              


                </div>

                    </div>


                    
        </div>
    )
}

export default FourthSection;