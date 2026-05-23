import procesImage from "../../assets/new-portfolio/boss-cab/second-section/2 (5).png";

const SecondSection : React.FC = () => {
     return(
        <>
        <div className="flex xl:flex-row flex-col xl:border-b xl:border-t justify-between">

         
            <div className="xl:px-16 md:px-10 px-7 md:py-16  py-10 flex-1 bg-[#FBFBFB] max-lg:bg-[#F3F3F3]">
                <h2 className="text-[#000000] md:text-[32px] text-[25px] md:text-center font-medium md:mb-6  max-lg:pt-5 max-lg:border-t max-lg:border-[#5A5A5A]">
                   Discover
                </h2>
                
                <div className="md:space-y-4 text-[#5A5A5A] text-base leading-relaxed">
                    <p className="font-semibold">Problem Exploration & User Research</p>
                    <p>Data shows that 80% of riders complain about
                    price surges on ride-hailing platforms. One
                    company tried letting users choose their own
                    fare, but drivers often reject these trips
                    because the rates don’t match their fuel costs
                    or the realities of traffic.
                    </p>
                    <p>There are also frequent issues with delayed or failed transactions.</p>
                    <p>To understand user experiences and improve
                        Bosscab, I interviewed 10 riders using an open-
                        ended interview guide to capture their real
                        frustrations and needs.</p>
                </div>
            </div>
      
            <div className="flex-1 flex ">
                <img src={procesImage} className=""/>    
            </div>


            <div className="xl:px-16 md:px-10 px-7 md:py-16  flex-1 bg-[#FBFBFB] max-lg:bg-[#F3F3F3]">
                <h2 className="text-[#000000] md:text-[32px] text-[25px] max-md:mt-8 md:text-center font-medium md:mb-6">
                       Define
                </h2>
                
                <div className="md:space-y-4 text-[#5A5A5A] text-base leading-relaxed">
                    <p className="font-semibold">Identifying User Pain Points</p>
                    <p>I analyzed the interview data using an affinity
                        map to uncover key themes around user
                        behavior, responses, and feature usage. From
                        this, I identified three major pain points: high
                        costs, a clunky payment process, and
                        inaccurate map syncing.</p>
                    <p>I then created a user persona—a social young
                        professional living in a large city—to represent
                        the primary audience and keep their needs
                        central throughout the design process.</p>
                </div>
            </div>

        </div>
        </>
     )
}

export default SecondSection;