import React, { useState} from "react";
import conservaIcon from "../../assets/new-portfolio/testimonial/Conversa.svg";
import disableArrowIcon from "../../assets/new-portfolio/testimonial/Arrow (2).svg";
import enableArrowIcon from "../../assets/new-portfolio/testimonial/blackarr.svg";
import disablerArrowIcon from "../../assets/new-portfolio/testimonial/Arrow (3).svg";
import enablerArrowIcon from "../../assets/new-portfolio/testimonial/rightarr.svg";
import uzorPicture from "../../assets/new-portfolio/testimonial/Mask group (14).png";
import ugi from "../../assets/new-portfolio/testimonial/Mask group (18).png";
import copyAllIcon from "../../assets/new-portfolio/testimonial/Copy All.svg";
import cliqmitIcon from "../../assets/new-portfolio/testimonial/Cliqmit.svg";
import koboIcon from "../../assets/new-portfolio/testimonial/Kobo.svg";
import bosscabIcon from "../../assets/new-portfolio/testimonial/Bosscab.svg";
import clxIcon from "../../assets/new-portfolio/testimonial/CLx.svg";
import syncventoryIcon from "../../assets/new-portfolio/testimonial/Syncventory.svg";
import nasImage from "../../assets/new-portfolio/testimonial/Mask group (19).png";
import style from "./index.module.css";

interface Testimonial {
    text: string;
    name: string;
    title: string;
    avatar?: string;
    
}

const Testimonial: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const minSwipeDistance = 50;

    const testimonials: Testimonial[] = [
        {
            text: "Lucky transformed our vision into reality. His strategic approach to design didn't just solve user problems—it positioned CliqMit competitively in the market. He's a true product thinker who understands both users and business.",
            name: "Joshua Uzor",
            title: "CEO, Cliqmit",
            avatar : uzorPicture
        },
        {
            text: "Lucky played a critical role in shaping Kobo into a scalable fintech product. He combines deep user insight with strong technical and business understanding, translating complexity into clear, effective design decisions that directly improved adoption and execution.",
            name: "Nasir",
            title: "CTO, Kobo Connect",
            avatar : nasImage
        },
        {
            text: "Lucky was instrumental in redefining Bosscab’s product experience. His ability to balance user needs, technical constraints, and business goals helped position the platform as a more accessible and scalable mobility solution.",
            name: "Ugi Augustine Ugi",
            title: "President, Nugi Group",
            avatar : ugi
        },
    ];

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
    };

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(0);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

 

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe && currentIndex < testimonials.length - 1) {
            handleNext();
        }
        if (isRightSwipe && currentIndex > 0) {
            handlePrevious();
        }
    };


    return (
        <>
            <div className="px-7 xl:px-20 lg:px-10  py-10 bg-[#F3F3F3]">
                <span className="text-[#626262] text-[18px] max-md:text-[14px] font-medium">
                    CLIENT TESTIMONIALS
                </span>

                <div className="mt-10 max-md:mt-6">
                  
                    <div 
                         className="relative w-full xl:h-[400px] max-lg:h-[450px] overflow-hidden"
                         
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            
                            <div className="max-md:mb-8">
                                <p className="text-black xl:text-[45px] text-[30px] max-md:text-[22px] leading-[1.4] max-md:leading-[1.5] font-normal">
                                    {testimonials[currentIndex].text}
                                </p>
                            </div>

                
                            <div className="flex items-center justify-between max-md:flex-row  max-md:gap-6">
                            
                                <div className="flex items-center gap-5 max-md:gap-3">
                                 
                                <div className="w-[70px] h-[70px] max-md:w-[50px] max-md:h-[50px] rounded-full bg-gray-300 overflow-hidden">
    {testimonials[currentIndex].avatar ? (
        <img 
            src={testimonials[currentIndex].avatar} 
            alt={testimonials[currentIndex].name}
            className="w-full h-full object-cover"
        />
    ) : (
        <div className="w-full h-full flex items-center justify-center text-gray-500 text-2xl">
            {testimonials[currentIndex].name.charAt(0)}
        </div>
    )}
</div>
                                   
                                    <div className="flex flex-col">
                                        <span className="text-black text-[20px] max-md:text-[16px] font-semibold">
                                            {testimonials[currentIndex].name}
                                        </span>
                                        <span className="text-[#666666] text-[16px] max-md:text-[14px] font-normal">
                                            {testimonials[currentIndex].title}
                                        </span>
                                    </div>
                                </div>

                           
                                <div className="flex items-center gap-8 max-md:hidden">
                                    <button 
                                        onClick={handlePrevious}
                                        disabled={currentIndex === 0}
                                        className="transition-colors disabled:cursor-not-allowed cursor-pointer"
                                        aria-label="Previous testimonial"
                                    >
                                        <img 
                                            src={currentIndex === 0 ? disableArrowIcon : enableArrowIcon} 
                                            alt={currentIndex === 0 ? "disabled arrow" : "previous"} 
                                        />
                                    </button>

                                    <span className="text-black text-[18px] font-medium">
                                        {currentIndex + 1} / {testimonials.length}
                                    </span>

                                    <button 
                                        onClick={handleNext}
                                        disabled={currentIndex === testimonials.length - 1}
                                        className="transition-colors disabled:cursor-not-allowed cursor-pointer"
                                        aria-label="Next testimonial"
                                    >
                                        <img 
                                            src={currentIndex === testimonials.length - 1 ? disablerArrowIcon : enablerArrowIcon} 
                                            alt={currentIndex === testimonials.length - 1 ? "disabled arrow" : "next"} 
                                        />
                                    </button>
                                </div>

                                {/* Mobile counter only */}
                                <div className="hidden  max-md:flex">
                                    <span className="text-black text-[14px] font-medium">
                                        {currentIndex + 1} / {testimonials.length}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



        <div className="py-20 mt-10 max-md:hidden overflow-hidden">
  {/* First row - scrolling left */}
  <div className={`${style["animate-scroll-left"]} flex gap-[69px] mb-10`}>
    <img src={conservaIcon} alt="conversa" className="flex-shrink-0"/>
    <img src={copyAllIcon} alt="copyall" className="flex-shrink-0"/>
    <img src={cliqmitIcon} alt="cliqmit" className="flex-shrink-0"/>
    <img src={koboIcon} alt="kobo" className="flex-shrink-0"/>
    <img src={bosscabIcon} alt="bosscab" className="flex-shrink-0"/>
    <img src={clxIcon} alt="clx" className="flex-shrink-0"/>
    <img src={syncventoryIcon} alt="syncventory" className="flex-shrink-0"/>
    <img src={conservaIcon} alt="conversa" className="flex-shrink-0"/>
    <img src={copyAllIcon} alt="copyall" className="flex-shrink-0"/>
    <img src={cliqmitIcon} alt="cliqmit" className="flex-shrink-0"/>
    {/* Duplicate for seamless loop */}
    <img src={conservaIcon} alt="conversa" className="flex-shrink-0"/>
    <img src={copyAllIcon} alt="copyall" className="flex-shrink-0"/>
    <img src={cliqmitIcon} alt="cliqmit" className="flex-shrink-0"/>
    <img src={koboIcon} alt="kobo" className="flex-shrink-0"/>
    <img src={bosscabIcon} alt="bosscab" className="flex-shrink-0"/>
    <img src={clxIcon} alt="clx" className="flex-shrink-0"/>
    <img src={syncventoryIcon} alt="syncventory" className="flex-shrink-0"/>
    <img src={conservaIcon} alt="conversa" className="flex-shrink-0"/>
    <img src={copyAllIcon} alt="copyall" className="flex-shrink-0"/>
    <img src={cliqmitIcon} alt="cliqmit" className="flex-shrink-0"/>
  </div>

  {/* Second row - scrolling right */}
  <div className={`${style["animate-scroll-right"]} flex gap-[69px]`}>
    <img src={cliqmitIcon} alt="cliqmit" className="flex-shrink-0"/>
    <img src={syncventoryIcon} alt="syncventory" className="flex-shrink-0"/>
    <img src={conservaIcon} alt="conversa" className="flex-shrink-0"/>
    <img src={copyAllIcon} alt="copyall" className="flex-shrink-0"/>
    <img src={koboIcon} alt="kobo" className="flex-shrink-0"/>
    <img src={bosscabIcon} alt="bosscab" className="flex-shrink-0"/>
    <img src={clxIcon} alt="clx" className="flex-shrink-0"/>
    <img src={koboIcon} alt="kobo" className="flex-shrink-0"/>
    {/* Duplicate for seamless loop */}
    <img src={cliqmitIcon} alt="cliqmit" className="flex-shrink-0"/>
    <img src={syncventoryIcon} alt="syncventory" className="flex-shrink-0"/>
    <img src={conservaIcon} alt="conversa" className="flex-shrink-0"/>
    <img src={copyAllIcon} alt="copyall" className="flex-shrink-0"/>
    <img src={koboIcon} alt="kobo" className="flex-shrink-0"/>
    <img src={bosscabIcon} alt="bosscab" className="flex-shrink-0"/>
    <img src={clxIcon} alt="clx" className="flex-shrink-0"/>
    <img src={koboIcon} alt="kobo" className="flex-shrink-0"/>
  </div>
</div>
            </div>
        </>
    );
}

export default Testimonial;