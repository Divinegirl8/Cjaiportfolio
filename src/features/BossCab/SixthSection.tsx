import { useRef, useState, useEffect } from "react";
import taskFlowImg from "../../assets/new-portfolio/boss-cab/sixth-section/Task flow 2 1.png";
import userFlowImg from "../../assets/new-portfolio/boss-cab/sixth-section/User flow 1.png";
import sketch from "../../assets/new-portfolio/boss-cab/sixth-section/Sketches.png";



const SixthSection: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollContainerRef.current) {
                const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
                const totalScrollable = scrollHeight - clientHeight;
                const percentage = totalScrollable > 0 ? (scrollTop / totalScrollable) * 100 : 0;
                setScrollPercentage(percentage);
            }
        };

        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
            handleScroll(); 
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <>
            <div className="flex xl:flex-row flex-col">
                <div className="xl:w-1/2 border-[#5A5A5A] border-r xl:px-20 lg:px-7 px-7 md:py-20 py-10 bg-[#FBFBFB]">
                    <h1 className="text-[#000000] md:text-[32px] text-[25px] md:text-center font-medium md:mb-6 max-lg:pt-5 max-lg:border-t max-lg:border-[#5A5A5A]">
                        Structuring The Experience
                    </h1>

                    <div className="md:space-y-10">
                        <div>
                            <p className="font-semibold">TASK FLOW, USER FLOW, SKETCHES</p>

                            <p className="text-[#5A5A5A] text-[16px] leading-relaxed">
                                Once I decided on implementing the "Group Wallet" feature alongside
                                the in-app wallet and map localization improvements, I created a
                                detailed task flow to map out the steps users would take to utilize
                                these new features. This was challenging because new features must
                                feel native to Bosscab's existing experience, not like bolted-on
                                additions. Understanding the exact flow—where users would access
                                the group wallet, how many taps to complete transactions, and what
                                confirmations they'd need—was crucial before moving to visual design.
                            </p>

                            <p className="text-[#5A5A5A] text-[16px] leading-relaxed md:mt-5">
                                Stepping into the persona's shoes, I developed a comprehensive user
                                flow that mapped out key decision-making points and potential user
                                paths. This included considering scenarios like insufficient group wallet
                                funds, joining existing groups, or switching between personal and group
                                payment methods. Ensuring the flow remained intuitive while
                                accommodating these various scenarios was essential to creating a
                                seamless experience that addressed our identified pain points.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="xl:w-1/2 flex bg-[#171A23] md:relative xl:h-[700px] md:h-[800px]  ">
            
                    <div className="md:absolute md:right-1 md:top-1/2 -translate-y-1/2 flex flex-col items-center z-10 md:h-[200px]">
                  
                        <div className="md:w-[2px] md:h-full md:rounded-full md:relative">
                            <div
                                className="md:w-1 md:h-16 bg-[#3D414E] rounded-full md:absolute md:left-1/2 md:-translate-x-1/2 md:transition-all duration-150 ease-out"
                                style={{
                                    top: `${scrollPercentage}%`,
                                    transform: `translate(-50%, ${scrollPercentage === 100 ? '-100%' : '0'})`
                                }}
                            ></div>
                        </div>
                    </div>

                  
                    <div
                        ref={scrollContainerRef}
                        className="md:flex-1 md:overflow-y-auto md:px-10  md:py-20   md:scrollbar-hide"
                        style={{
                            scrollbarWidth: 'none', 
                            msOverflowStyle: 'none', 
                        }}
                    >
                        <style>{`
                            .scrollbar-hide::-webkit-scrollbar {
                                display: none; /* Chrome, Safari, Opera */
                            }
                        `}</style>
                        <div className="flex flex-col md:gap-10 ">
                            <img src={taskFlowImg} className="w-full px-7 sm:px-10 md:px-0  max-sm:py-10" alt="Task Flow" />
                            <img src={userFlowImg} className="w-full px-7 sm:px-10 md:px-0 max-sm:py-10" alt="User Flow" />
                            <div >
                             
                                    <img src={sketch} />
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SixthSection;