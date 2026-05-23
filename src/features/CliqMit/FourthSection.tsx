import sketchImage from "../../assets/new-portfolio/cliqmit/fourth-section/2 (4).png";

const FourthSection : React.FC = () => {
    return(
        <>
        
        <div className="xl:border-t  border-[#5A5A5A] flex flex-col xl:flex-row">
       

       <div className="xl:w-1/2  border-[#5A5A5A] xl:border-r xl:px-20 md:px-10 px-7 md:py-20 py-10 bg-[#FBFBFB]">
            <h1 className="text-[#000000] text-[25px] md:text-[32px] md:text-center font-medium md:mb-6 max-lg:pt-5 max-lg:border-t max-lg:border-[#5A5A5A]">
            Prototyping
            </h1>

            
            <div className="space-y-10">
                <div>
                <p className="text-[#5A5A5A] text-[16px] leading-relaxed md:hidden ">
                    After aligning requirements with users and stakeholders, I moved the tested wireframes into high-fidelity mockups and began working closely with the development team. My focus shifted to refining interactions, defining motion, and shaping a visual system that felt clear and responsive. Using Figma, I built consistent components, applied the brand’s typography, and created custom icons where needed. I introduced smooth micro-interactions to keep the experience engaging without impacting performance. Speed was a key priority, so I collaborated with the team to ensure users could search for events quickly and move through booking with minimal friction.
                    </p>

                    
                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed hidden md:block">
                    After aligning requirements with users and stakeholders, I moved the
                    tested wireframes into high-fidelity mockups and began working
                    closely with the development team. My focus shifted to refining
                    interactions, defining motion, and shaping a visual system that felt
                    clear and responsive. Using Figma, I built consistent components, applied the brand’s
                    typography, and created custom icons where needed. I introduced
                    smooth micro-interactions to keep the experience engaging without
                    impacting performance.               
                    </p>

                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed mt-5  hidden md:block">
                    Using Figma, I built consistent components, applied the brand’s
                    typography, and created custom icons where needed. I introduced
                    smooth micro-interactions to keep the experience engaging without
                    impacting performance.                
                    </p>

                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed mt-5  hidden md:block">
                    Speed was a key priority, so I collaborated with the team to ensure
                    users could search for events quickly and move through booking with
                    minimal friction.              
                    </p>
                </div>

            </div>
       </div>


       <div className="xl:w-1/2">
          <img src={sketchImage} className="w-full h-full object-cover"/>
       </div>
    </div>

        </>
    )
}

export default FourthSection;