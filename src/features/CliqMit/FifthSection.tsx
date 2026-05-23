import paperImage from "../../assets/new-portfolio/cliqmit/fifth-section/1 (2).png";
import stickyNoteImage from "../../assets/new-portfolio/cliqmit/fifth-section/3 (2).png";


const FifthSection : React.FC = () => {
     return(
        <>
        <div className="flex xl:border-t  border-[#5A5A5A] xl:flex-row flex-col xl:justify-between">

         
      
            <div className="flex-1 border-r border-[#5A5A5A] hidden xl:block">
                <img src={paperImage} className=""/>    
            </div>


            <div className="md:px-10 px-7 md:py-16 py-10 flex-1 bg-[#FBFBFB] border-r  border-[#5A5A5A]">
                <h2 className="text-[#000000] text-[25px] md:text-[32px] md:text-center font-medium md:mb-6 max-lg:pt-5 max-lg:border-t max-lg:border-[#5A5A5A]">
                     Iconography
                </h2>

                <div className="space-y-4 text-[#5A5A5A] text-base leading-relaxed md:hidden">
                    <p>
                        I created custom icons to support clarity and
                        give users quick visual cues as they navigate the
                        platform. Because event browsing, booking, and
                        organizer tools each involve different actions,
                        the interface needed icons that were both
                        recognizable and tailored to these unique tasks.
                        My goal was to keep the style consistent with
                        Cliqmit’s visual identity—simple, modern, and
                        easy to scan—while ensuring each icon added
                        meaning and supported a smoother overall
                        experience.
                    </p>
                </div>


                
                <div className="space-y-4 text-[#5A5A5A] text-base leading-relaxed hidden md:block">
                    <p>  
                        I created custom icons to support clarity and
                        give users quick visual cues as they navigate
                        the platform. Because event browsing, booking,
                        and organizer tools each involve different
                        actions, the interface needed icons that were
                        both recognizable and tailored to these unique
                        tasks.
                    </p>
           

                    <p>  
                        My goal was to keep the style consistent with
                        Cliqmit’s visual identity—simple, modern, and
                        easy to scan—while ensuring each icon added
                        meaning and supported a smoother overall
                        experience.
                    </p>
                </div>
            </div>

            <div className="flex-1 ">
                <img src={stickyNoteImage} className=""/>    
            </div>

        </div>
        </>
     )
}

export default FifthSection;