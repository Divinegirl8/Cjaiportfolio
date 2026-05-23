import React, { useState} from "react";
import conservaIcon from "../../assets/new-portfolio/testimonial/Conversa.svg";
import disableArrowIcon from "../../assets/new-portfolio/testimonial/Arrow (2).svg";
import enableArrowIcon from "../../assets/new-portfolio/testimonial/blackarr.svg";
import disablerArrowIcon from "../../assets/new-portfolio/testimonial/Arrow (3).svg";
import enablerArrowIcon from "../../assets/new-portfolio/testimonial/rightarr.svg";
import uzorPicture from "../../assets/new-portfolio/testimonial/Mask group (14).png";
import copyAllIcon from "../../assets/new-portfolio/testimonial/Copy All.svg";
import cliqmitIcon from "../../assets/new-portfolio/testimonial/Cliqmit.svg";

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
            text: "Another testimonial text goes here. This is just a placeholder for demonstration purposes.",
            name: "John Doe",
            title: "Creative Director"
        },
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipi elit. Quisque cursus leo in euismod imperdiet. Curabitur rhoncus sit amet lorem in feugiat. Phasellus consec tetur eget nibh a gravida. Proin pulvinar dolor a odio ultricies malesuada.",
            name: "Daniel Oku",
            title: "Human Resource Manager"
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



            <div className="grid grid-cols-4 xl:grid-cols-7 gap-[69px] py-20 mt-10 xl:justify-center xl:items-center max-md:hidden">
                <img src={conservaIcon} alt="conversa"/>
                <img src={copyAllIcon} alt="copyall"/>
                <img src={cliqmitIcon} alt="cliqmit"/>
                <img src={conservaIcon} alt="conversa"/>
                <img src={conservaIcon} alt="conversa" className="max-xl:hidden"/>
                <img src={conservaIcon} alt="conversa" className="max-xl:hidden"/>
                <img src={conservaIcon} alt="conversa" className="max-xl:hidden"/>
                
                <img src={conservaIcon} alt="conversa"/>
                <img src={conservaIcon} alt="conversa"/>
                <img src={conservaIcon} alt="conversa"/>
                <img src={conservaIcon} alt="conversa"/>
                <img src={conservaIcon} alt="conversa" className="max-xl:hidden"/>
                <img src={conservaIcon} alt="conversa" className="max-xl:hidden"/>
                <img src={conservaIcon} alt="conversa" className="max-xl:hidden"/>
            </div>
            </div>
        </>
    );
}

export default Testimonial;