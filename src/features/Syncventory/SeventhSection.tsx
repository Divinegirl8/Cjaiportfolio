import manImage from "../../assets/new-portfolio/portfolio/sync/Mask group (36).png";

const SeventhSection : React.FC = () => {
    return(
        <>
        
        <div className="xl:border-t xl:border-b xl:border-[#5A5A5A] flex xl:flex-row flex-col-reverse">
         

           <div className="xl:w-1/2 xl:px-20 px-7 xl:py-16 py-10 xl:border-r xl:border-[#5A5A5A] ">
                <h1 className="text-[#000000]  text-[25px] md:text-[32px] md:text-center font-[500] md:mb-6 max-lg:pt-5 max-lg:border-t max-lg:border-[#5A5A5A] ">
                Settings & Configuration
                </h1>


                <div className="md:space-y-10 space-y-7">
                    <div>
                    <span className="font-semibold"> Designing For The Long Tail of Business Needs</span>
                        <p className="text-[#5A5A5A] text-[16px] leading-relaxed">
                        Settings is where products quietly live or die. Most designers treat it as an
                        afterthought — a dumping ground for everything that didn't fit elsewhere.
                        On Syncventory, I treated configuration as a first-class design surface.               
                        </p>
                    </div>

                    <div>
                
                     <p className="text-[#5A5A5A] text-[16px] leading-relaxed">
                        Retailers have deeply specific needs. A fashion boutique has different tax
                        requirements than a food business needing batch tracking and expiry
                        management. Settings had to be flexible enough for all of these, without
                        becoming an overwhelming wall of options.
                    </p>

                    </div>


                    <div>
                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed">
                    I organised settings into contextual groups matching how retailers think:
                    their stores, team, channels, payments, and notifications. Progressive
                    disclosure kept complexity hidden until needed. Every option had inline
                    context. Dangerous actions required explicit confirmation with clear
                    consequences stated.
                    </p>
                    </div>

                  
                </div>
           </div>

           <div className="xl:w-1/2 ">
              <img src={manImage} className="w-full h-full object-cover"/>
           </div>
        </div>
        
        </>
    )
}

export default SeventhSection;