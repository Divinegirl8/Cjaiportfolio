import manImage from "../../assets/new-portfolio/portfolio/sync/1 (23).png";

const SixthSection : React.FC = () => {
    return(
        <>
        
        <div className="flex xl:flex-row flex-col-reverse">
           <div className="xl:w-1/2 xl:border-r xl:border-[#5A5A5A]">
              <img src={manImage} className="w-full h-full object-cover"/>
           </div>

           <div className="xl:w-1/2 xl:px-20 px-7 xl:py-16 py-10 ">
                <h1 className="text-[#000000]  text-[25px] md:text-[32px] md:text-center font-[500] md:mb-6 max-lg:pt-5 max-lg:border-t max-lg:border-[#5A5A5A] ">
                Business Intelligence
                </h1>

                







                <div className="md:space-y-10 space-y-7">
                    <div>
                    <span className="font-semibold"> Designing Data That Tells You What To Do Next</span>
                        <p className="text-[#5A5A5A] text-[16px] leading-relaxed">
                        Most inventory systems surface data. Syncventory was designed to
                        surface meaning. There's a significant difference between showing a
                        retailer they have 12 units left and telling them they'll be out of stock
                        in four days at their current sales velocity.                       </p>
                    </div>

                    <div>
                
                     <p className="text-[#5A5A5A] text-[16px] leading-relaxed">
                     I spent considerable time on what I called the "so what" design problem.
                    Every metric had to answer one question: what should I act on? If it didn't
                    drive a decision, it had no place on the screen.
                    </p>

                    </div>

                  <div>
                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed">
                    Slow-moving stock alerts were surfaced proactively. Low stock notifications
                    came with suggested reorder quantities. Performance comparisons
                    appeared by default — because context is what turns a number into insight.
                    </p>
                  </div>

                  <div>
                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed">
                    "Data without meaning is just noise. Every number on screen had to earn its place."
                    </p>
                  </div>
                </div>
           </div>
        </div>
        
        </>
    )
}

export default SixthSection;