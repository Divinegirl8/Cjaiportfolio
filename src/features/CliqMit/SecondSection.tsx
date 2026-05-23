import procesImage from "../../assets/new-portfolio/cliqmit/second-section/2 (3).png";

const SecondSection : React.FC = () => {
     return(
        <>
        <div className="flex md:flex-row flex-col justify-between">

         
            <div className="xl:px-16 md:px-10 px-7 md:pt-16  flex-1 bg-[#FBFBFB]">
                <h2 className="text-[#000000] text-[25px] md:text-[32px] md:text-center font-medium md:mb-6 max-lg:pt-5 max-lg:border-t max-lg:border-[#5A5A5A]">
                    Design Process
                </h2>
                
                <div className="space-y-4 text-[#5A5A5A] text-base leading-relaxed">
                    <p>Cliqmit was designed entirely from scratch, with no previous UI or UX to build on. My goal was to create a clean, modern, and intuitive experience that makes discovering and booking events feel effortless. I established a strong visual identity, defined clear interaction patterns, and built a scalable design system that supports both mobile and web. While the landing page received a light visual refresh, the core of the work focused on designing the actual product experience— event browsing, ticket flows, user accounts, and creator tools. Every screen was crafted to balance usability, brand expression, and conversion, ensuring that new users can instantly understand the product and take action without friction.</p>
                </div>
            </div>
      
            <div className="flex-1 flex items-center justify-center">
                <img src={procesImage} className=""/>    
            </div>


            <div className="md:px-16 px-7 md:py-16 py-7 flex-1 bg-[#FBFBFB]">
                <h2 className="text-[#000000] text-[25px] md:text-[32px] md:text-center font-medium md:mb-6">
                    Business, Users, & Data
                </h2>
                
                <div className="space-y-4 text-[#5A5A5A] text-base leading-relaxed">
                    <p>  
                        I focused on aligning the product vision with
                        real user needs and practical business goals.
                        The business required a simple, trustworthy
                        way for people to discover and book events,
                        while user insights highlighted frustrations with
                        cluttered platforms and confusing booking
                        flows. By combining these findings with early
                        data on behavior patterns in the event space,
                        I identified the essentials that would shape a
                        clean, intuitive experience. This approach
                        helped streamline key interactions, reduce
                        friction, and ensure the product feels clear and
                        reliable from the first use.
                    </p>
                </div>
            </div>

        </div>
        </>
     )
}

export default SecondSection;