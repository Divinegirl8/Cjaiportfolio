import { useState } from "react";
import arrR from "../../assets/services/arrRight.png";
import arrL from "../../assets/services/arrLeft.png";
import arrUp from "../../assets/footer/arr-up.png";
import rock from "../../assets/services/rock.png";
import darkStar from "../../assets/services/darkStar.png";
import { Link } from "react-router-dom";
import FilledButton from "../../components/resuables/FilledButton";
import ai from "../../assets/services/ai1.jpg";
import machine from "../../assets/services/machine.jpg";

const serviceItems = [
    {
        title: "GAME & ENVIRONMENT DESIGN",
        subtitle: "Bring Virtual Worlds to Life",
        description:
            "From designing immersive game environments and characters to crafting detailed gameplay and level designs, this service is ideal for video games, VR experiences, and interactive media. Create captivating worlds that engage players and audiences alike.",
        highlights: [
            "In-depth character and environmental concept art",
            "Interactive design elements tailored for gameplay",
            "Realistic rendering and immersive detailing",
            "Advanced 2D/3D modeling and texturing for dynamic world-building",
        ],
        image: rock,
    },
    {
        title: "AI-GENERATED ART",
        subtitle: "Revolutionizing Digital Creativity",
        description:
            "Harness the power of AI-driven artwork, producing unique and futuristic visuals that blend machine learning with human creativity.",
        highlights: [
            "Custom AI art tailored to your vision",
            "High-quality, futuristic, and immersive designs",
            "Perfect for branding, marketing, and digital spaces",
            "Optimized for social media, websites, and more",
        ],
        image: ai,
    },
    {
        title: "3D MODELING & RENDERING",
        subtitle: "Crafting Hyper-Realistic Designs",
        description:
            "Create stunning 3D models and detailed renderings for games, movies, and architectural visualizations.",
        highlights: [
            "High-poly and low-poly 3D modeling",
            "Realistic lighting and texturing",
            "Perfect for animation, gaming, and VR",
            "Optimized for performance and realism",
        ],
        image: machine,
    },
];

const ServicesIntro = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    const nextService = () => {
        setIsVisible(false); 
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === serviceItems.length - 1 ? 0 : prevIndex + 1
            );
            setIsVisible(true); 
        }, 100); 
    };

    const prevService = () => {
        setIsVisible(false); 
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? serviceItems.length - 1 : prevIndex - 1
            );
            setIsVisible(true); 
        }, 100); 
    };

    return (
        <>
            <div className="xl:px-20 px-5 md:px-3">
                <div className="text-white md:pt-40 pt-20 border-b-[0.25px] border-[#62646C] pb-5 ">
                    <p className="text-[#797C86] xl:text-[16px] text-[14px] font-[600]">
                        SERVICES
                    </p>
                    <div className="md:flex md:flex-row justify-between flex flex-col gap-4 md:gap-5">
                        <h1 className="font-[600] xl:text-[40px] md:text-[35px] text-[28px] md:mb-0 mb-4">
                            AI ART & PROMPT ENGINEERING SERVICES
                        </h1>

                        {/* Arrow Navigation */}
                        <div className="md:flex flex-row gap-3 border-[0.25px] border-[#62646C] rounded-[20px] p-1 md:w-[5.5rem] w-[6rem] h-12 hidden">
                            <div
                                className="bg-[#1C1C21] w-9 h-9 rounded-[50px] flex justify-center items-center cursor-pointer"
                                onClick={prevService}
                            >
                                <img src={arrR} className="w-3 h-3" />
                            </div>

                            <div
                                className="bg-[#1C1C21] w-9 h-9 rounded-[50px] flex justify-center items-center cursor-pointer"
                                onClick={nextService}
                            >
                                <img src={arrL} className="w-3 h-3" />
                            </div>
                        </div>

                        <Link to={"/"}>
                            <FilledButton
                                text="View All Services ->"
                                bgColor="#2F2F37"
                                wdt="150px"
                                color="white"
                            />
                        </Link>
                    </div>
                </div>

                {/* Dynamic Service Content */}
                <div className="flex justify-center mt-10">
                    <img
                        src={serviceItems[currentIndex].image}
                        className={`w-[50rem] h-[20rem] sm:h-[30rem] sm:w-[50rem] xl:hidden transition-all duration-500 ease-in-out opacity-${isVisible ? '100' : '0'}`}
                        alt="Service Image"
                    />
                </div>

                <div className="md:mt-22 mt-10 xl:flex xl:flex-row flex flex-col gap-16">
                    <div className="xl:w-[50%] w-full">
                    <div className="flex flex-row gap-5 w-full">
                        <h1 className="text-white font-[600] xl:text-[35px] text-[25px] w-[calc(100%-70px)]">
                            {serviceItems[currentIndex].title}
                        </h1>
                        <div className="bg-[#238EFF] w-[94px] h-[46px] flex items-center justify-center rounded-[50px]">
                            <img src={arrUp} className="w-3 h-3" />
                        </div>
                    </div>


                        <h4 className="text-[#CACACE] font-[500] text-[20px] uppercase mt-5">
                            {serviceItems[currentIndex].subtitle}
                        </h4>
                        <p className="text-[#797C86] font-[400] mt-5 text-[16px]">
                            {serviceItems[currentIndex].description}
                        </p>

                        <div>
                            <h4 className="text-[#CACACE] font-[500] text-[16px] mt-12">
                                Service Highlights
                            </h4>

                            {serviceItems[currentIndex].highlights.map(
                                (highlight, index) => (
                                    <div
                                        key={index}
                                        className="mt-5 flex flex-row gap-2 border-[0.25px] border-[#62646C] px-4 py-2 rounded-[5px] md:w-[80%]"
                                    >
                                        <img src={darkStar} className="w-7 h-7" />
                                        <p className="uppercase text-[#AFB0B6] font-[400] text-[16px]">
                                            {highlight}
                                        </p>
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    <div className="flex justify-center items-center w-full h-full xl:w-[50%]">
                        <img
                            src={serviceItems[currentIndex].image}
                            className={`w-full max-w-[100rem] h-auto max-h-[35rem] object-contain xl:block hidden transition-all duration-500 ease-in-out opacity-${isVisible ? '100' : '0'}`}
                        />
                    </div>
                </div>

                {/* Mobile Arrow Navigation */}
                <div className="flex justify-center items-center h-full w-full mt-[-2rem]">
                    <div className="md:hidden flex flex-row gap-3 border-[0.25px] border-[#62646C] rounded-[20px] p-1 md:w-[6rem] w-[6rem] h-12 justify-center items-center">
                        <div
                            className="bg-[#1C1C21] w-9 h-9 rounded-[50px] flex justify-center items-center cursor-pointer"
                            onClick={prevService}
                        >
                            <img src={arrR} className="w-2 h-2" />
                        </div>

                        <div
                            className="bg-[#1C1C21] w-9 h-9 rounded-[50px] flex justify-center items-center cursor-pointer"
                            onClick={nextService}
                        >
                            <img src={arrL} className="w-2 h-2" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesIntro;
