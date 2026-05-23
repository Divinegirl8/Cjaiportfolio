import sketchImage from "../../assets/new-portfolio/cliqmit/sixth-section/Mask group (4).png";

const SixthSection : React.FC = () => {
    return(
        <>
        
        <div className="xl:border-t  border-[#5A5A5A] flex flex-col xl:flex-row">
       
        <div className="xl:w-1/2  border-[#5A5A5A] xl:border-r xl:px-20 md:px-10 px-7 md:py-20 py-10 bg-[#FBFBFB]">
            <h1 className="text-[#000000] md:text-[32px] text-[25px] md:text-center font-medium md:mb-6 max-lg:pt-5 max-lg:border-t max-lg:border-[#5A5A5A]">
            Design System
            </h1>

            <div className="md:hidden">
            <p className="text-[#5A5A5A] text-[16px] leading-relaxed"> With the core visuals and interactions taking shape, I built a scalable design system to unify the entire Cliqmit experience across mobile and web. The goal was to create a consistent, flexible foundation that could support event discovery, ticketing, user accounts, and future features without redesigning elements from scratch. I defined the color palette, typography styles, spacing rules, grids, and component structures that shape the UI. Buttons, cards, inputs, navigation patterns, and states were standardized to ensure clarity and predictability in every interaction. This system not only streamlined collaboration with developers but also ensured that new screens could be created quickly while maintaining a cohesive look and feel. Building this design system early allowed Cliqmit to scale confidently, giving the product a clear visual identity and a solid framework for ongoing growth.</p>
            </div>

 
            <div className="space-y-10 hidden md:block">
                <div>
                    
                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed">
                        With the core visuals and interactions taking shape, I built a scalable
                        design system to unify the entire Cliqmit experience across mobile and
                        web. The goal was to create a consistent, flexible foundation that could
                        support event discovery, ticketing, user accounts, and future features
                        without redesigning elements from scratch.                 
                    </p>

                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed mt-5">
                        I defined the color palette, typography styles, spacing rules, grids, and
                        component structures that shape the UI. Buttons, cards, inputs,
                        navigation patterns, and states were standardized to ensure clarity
                        and predictability in every interaction. This system not only streamlined
                        collaboration with developers but also ensured that new screens could
                        be created quickly while maintaining a cohesive look and feel.               
                    </p>

                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed mt-5">
                        Building this design system early allowed Cliqmit to scale confidently,
                        giving the product a clear visual identity and a solid framework for
                        ongoing growth.            
                    </p>
                </div>

            </div>
       </div>
      


       <div className="xl:w-1/2">
          <img src={sketchImage} />
       </div>
    </div>

        </>
    )
}

export default SixthSection;