import manImage from "../../assets/new-portfolio/portfolio/sync/1 (24).png";

const NinthSection : React.FC = () => {
    return(
        <>
        
        <div className="flex xl:flex-row flex-col-reverse xl:border-t xl:border-b xl:border-[#5A5A5A]">
           <div className="xl:w-1/2 xl:border-r xl:border-[#5A5A5A]">
              <img src={manImage} className="w-full h-full object-cover"/>
           </div>

           <div className="xl:w-1/2 xl:px-20 px-7 xl:py-16 py-10 ">
                <h1 className="text-[#000000]  text-[25px] md:text-[32px] md:text-center font-[500] md:mb-6 max-lg:pt-5 max-lg:border-t max-lg:border-[#5A5A5A] ">
                What Shipped
                </h1>
            


                <div className="md:space-y-10 space-y-7">
                    <div>
                    
                        <p className="text-[#5A5A5A] text-[16px] leading-relaxed">
                        Syncventory launched as a single platform for managing stock, orders
                        and point-of-sale across multiple stores and sales channels. It replaced
                        the separate systems, spreadsheets and phone calls that retailers I
                        interviewed relied on to keep their stock accurate.
                        </p>
                    </div>


                 

                    <div>
                
                     <p className="text-[#5A5A5A] text-[16px] leading-relaxed">
                        I designed the multi-store dashboard, stock transfers, purchase orders,
                        restock recommendations, a progressive onboarding flow and an offline-
                        capable POS, working with engineers through development. The
                        information architecture follows how retailers think about their business,
                        not how software is usually organised.
                    </p>

                    </div>


                    <div>
                
                     <p className="text-[#5A5A5A] text-[16px] leading-relaxed">
                        Testing with retailers shaped the final product. It led to a simpler
                        onboarding flow, clearer terminology ("locations" became "stores") and a
                        plain-language insight at the top of every report.
                    </p>

                    </div>

                 

                </div>
           </div>
        </div>
        
        </>
    )
}

export default NinthSection;