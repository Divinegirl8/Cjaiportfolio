import manImage from "../../assets/new-portfolio/portfolio/sync/Mask group (35).png";

const FifthSection : React.FC = () => {
    return(
        <>
        
        <div className="flex xl:flex-row flex-col xl:border-b xl:border-[#5A5A5A]">
         

           <div className="xl:w-1/2 xl:px-20 px-7 xl:py-16 py-10 xl:border-r xl:border-[#5A5A5A] ">
                <h1 className="text-[#000000]  text-[25px] md:text-[32px] md:text-center font-[500] md:mb-6 max-lg:pt-5 max-lg:border-t max-lg:border-[#5A5A5A] ">
                Orders & Sales Management
                </h1>



                <div className="md:space-y-10 space-y-7">
                    <div>
                    <span className="font-semibold">One Place For Every Order, Regardless of Where It Came From</span>
                        <p className="text-[#5A5A5A] text-[16px] leading-relaxed">
                        One of the most impactful design decisions on Syncventory was treating
                        all orders identically, regardless of origin. An order from Shopify, a walk-in
                        at the POS, a WhatsApp message converted to an order — they all land in
                        the same view, with the same status tracking and the same fulfilment
                        workflow.                    
                        </p>
                    </div>

                    <div>
                
                     <p className="text-[#5A5A5A] text-[16px] leading-relaxed">
                     It meant retailers no longer had to context-switch between systems.
                     Everything was visible, prioritised, and actionable from one screen.
                    </p>

                    </div>


                    <div>
                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed">
                    I designed the orders interface around three states retailers actually think
                    in: what needs to be packed, what's been dispatched, and what's been
                    completed. Bulk actions were critical — a retailer processing 50 orders on a
                    Monday morning needs to select, action, and move on fast.
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

export default FifthSection;