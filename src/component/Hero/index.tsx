import luckyPicture from "../../assets/new-portfolio/hero/lucky.png";
import luckyMobPicture from "../../assets/new-portfolio/hero/Image (7).png";
import arrowIcon from "../../assets/new-portfolio/navbar/Arrow.svg";
import style from "./index.module.css"

const Hero : React.FC = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    return(
        <>
            <div 
                className="w-full h-screen relative overflow-hidden"
                id="home"
            >
                {/* Background image */}
                <img 
                    src={luckyPicture} 
                    alt="Lucky Ekezie"
                    className="w-full lg:h-auto md:h-full object-cover absolute top-0 left-0 hidden md:block"
                />
              
                 <img 
                    src={luckyMobPicture} 
                    alt="Lucky Ekezie"
                    className="w-full h-auto object-cover absolute top-0 left-0 md:hidden "
                />
              
                {/* Content overlay */}
                <div className="flex flex-col gap-2 items-center justify-center h-full pt-[18rem] xl:pt-[18rem] md:pt-[5rem]   relative z-10">
                    <h1 className="text-white xl:text-[70px] text-[60px] font-semibold max-sm:px-10 max-sm:text-center md:tracking-widest leading-[4rem]">
                        LUCKY EKEZIE
                    </h1>

                    <span className="text-[#DEDEDE] xl:text-[25px] text-[20px] font-medium">AI-Driven Product Design Leader</span>

                    <div className={`flex flex-col items-center xl:mt-14 mt-14 md:mt-5`}>
                        <div className={`${style.animateSlowBounce} cursor-pointer`} onClick={() => scrollToSection('nav')}><img src={arrowIcon} alt="Scroll down"/></div>
                    
                        <span className="text-[#DEDEDE] text-[14px] mt-2 cursor-pointer" onClick={() => scrollToSection('nav')}>SCROLL UP</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;