import sketchImage from "../../assets/new-portfolio/portfolio/sync/image 377.png";

const ThirdSection : React.FC = () => {
    return(
        <>
        
        <div className=" flex flex-col xl:flex-row">
       

       <div className="xl:w-1/2  border-[#5A5A5A] xl:border-r xl:px-20 md:px-10 px-7 md:py-20 py-10 bg-[#FBFBFB]">
            <h1 className="text-[#000000] text-[25px] md:text-[32px] md:text-center font-medium md:mb-6 max-lg:pt-5 max-lg:border-t max-lg:border-[#5A5A5A]">
            Synthesising Research
            </h1>

            <div className="space-y-10">
                <div>
                    <p className="text-black font-semibold text-[16px]">Turning Interviews Into a Design Framework</p>

                <p className="text-[#5A5A5A] text-[16px] leading-relaxed ">
                After the interviews, I ran an affinity mapping session to cluster insights
                and identify themes. I created user personas, HMW statements, and user
                stories to keep the design anchored to real behaviour — not assumptions.
                The persona I kept returning to was Amara — a fashion boutique owner with
                three physical locations and a Shopify store, managing everything alone.
                Amara knew her business intimately, but she didn't know her inventory. The
                tools that were supposed to help her were taking more from her than they
                gave.                    </p>

                    
                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed mt-5 ">
                    "I don't need more software. I need one system that just works."              
                    </p>

                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed mt-5  ">
                    That line became the north star for every design decision on Syncventory.
                    Every feature, every flow, every screen had to answer one question: does
                    this make things simpler, or does it add to the cognitive load?        
                    </p>

                </div>

            </div>
       </div>


       <div className="xl:w-1/2 bg-[#F3F4F7] flex items-center justify-center">
  <img src={sketchImage} className="w-full object-contain" />
</div>
    </div>

        </>
    )
}

export default ThirdSection;