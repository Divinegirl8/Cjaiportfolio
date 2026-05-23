import ProjectCard from "../../component/ProjectCard";
import cliq from "../../assets/new-portfolio/portfolio/cliqmit.png";
import kobo from "../../assets/new-portfolio/portfolio/ks.png";
import conversa from "../../assets/new-portfolio/portfolio/2 (10).png"
import bosscab from "../../assets/new-portfolio/portfolio/bc.png";

const Portfolio:React.FC = () =>{

    return(
        <>

        <div id="portfolio" className="py-3 pt-[5rem] max-md:pt-[4rem] scroll-mt-[90px] max-md:scroll-mt-[60px] bg-[#F3F3F3] ">


        
            <div className="flex flex-col items-center justify-center">
                    <span className="text-[#626262] text-[18px] font-medium">PORTFOLIO</span>
                    <h2 className="text-[#000000] text-[50px] max-md:text-[35px] text-center font-medium leading-tight mt-5">
                    <span className="block">Strategic Designs for</span>
                    <span className="block"> Real-World Impact</span>
                    </h2>
            </div>


            <div className="max-md:mt-5 mt-16">
            <ProjectCard
                title="CliqMit"
                description="Building an event discovery platform that turns user frustration into business opportunity. Cluttered interfaces and complex booking flows were causing abandonment and revenue loss. I designed CliqMit from scratch, focusing on simplicity and conversion to reduce friction, increase completion rates, and establish competitive market positioning."
                tags={["USER INTERVIEWS", "DESIGN THINKING", "UI DESIGN", "UX DESIGN", "PROTOTYPING"]}
                imageSrc={cliq}
                imageAlt="Cliq Mit app"
                imageOnLeft={true}
                projectUrl="case-study/cliqmit"
                />

                <ProjectCard
                title="Kobo Connect"
                description="I designed Kobo Vault as a financial technology combining instant virtual cards, real-time monitoring, seamless transfers, and smart budgeting in a secure, intuitive interface. The solution reduces cognitive load, builds trust through transparency, and positions Kobo Vault to capture underserved market segments seeking both simplicity and robust financial control."
                tags={["USER INTERVIEWS", "DESIGN THINKING", "UI DESIGN", "UX DESIGN", "PROTOTYPING"]}
                imageSrc={kobo}
                imageAlt="Kobo Connect app"
                imageOnLeft={false}
                  projectUrl="case-study/kobo"
                />
               <ProjectCard
                title="Bosscab Ride"
                description="A strategic redesign addressing user pain points and business growth. Through research uncovering affordability barriers, payment friction, and navigation issues, I designed group wallets, seamless transactions, and precise routing—solutions that reduce costs, improve retention, and drive sustainable growth."
                tags={["USER INTERVIEWS", "DESIGN THINKING", "UI DESIGN", "UX DESIGN", "PROTOTYPING"]}
                imageSrc={bosscab}
                imageAlt="Bosscab Ride app"
                imageOnLeft={true}
                  projectUrl="case-study/bosscab"
                />

                <ProjectCard
                title="Conversa"
                description="Conversa is a healthcare-focused AI voice and chat
                              platform built to streamline patient communication.
                              Designed with clinical workflows in mind, it enables
                              compliant automation for scheduling, follow-ups,
                              and patient support—reducing admin load and
                              improving care experiences."
                tags={["USER INTERVIEWS", "DESIGN THINKING", "UI DESIGN", "UX DESIGN", "PROTOTYPING"]}
                imageSrc={conversa}
                imageAlt="Conversa app"
                imageOnLeft={false}
                  projectUrl="case-study/conversa"
                />

               
            </div>



       </div>
        
        
        </>
    )
}

export default Portfolio;