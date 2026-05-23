import arrowButtonIcon from "../../assets/new-portfolio/teaching/export (1).svg";
import luckyOne from "../../assets/new-portfolio/teaching/image 205.png";
import luckyTwo from "../../assets/new-portfolio/teaching/Mask group (13).png";

const Teaching : React.FC = () => {
    return(
        <>

        <div className="xl:px-20 px-7 lg:px-10  scroll-mt-[88px] md:py-16 py-16  max-md:scroll-mt-[60px] bg-[#F3F3F3]" id="teaching">

        <div className="flex flex-col">
                    <span className="text-[#626262] text-[18px] font-medium">TEACHING & MENTORSHIP</span>
                    <h2 className="text-[#000000] md:text-[50px] text-[35px] font-medium leading-tight mt-5">
                    <span className="block">Innovation, Excellence, and</span>
                    <span className="block">Success Combined</span>
                    </h2>
            </div>

{/* 
            <div className="flex lg:flex-row flex-col justify-between gap-5">

                <div className="flex flex-col md:gap-4 md:mt-16 mt-5">
                    <h4 className="text-[#626262] text-[16px]">PRODUCT DESIGN</h4>

                    <div className="flex gap-3 flex-col">
                    <h2 className="text-[#000000] md:text-[30px] text-[25px] font-medium leading-tight ">
                    <span className="block">Empowering the Next</span>
                    <span className="block">Generation of Designers</span>
                    </h2>
                        <span className="text-[14px]">August, 2025</span>

                        <div className="mt-3">
                            <div className="md:w-[24rem] h-[24rem] bg-[#D9D9D9]"></div>
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col md:gap-4 md:mt-16 mt-5">
                    <h4 className="text-[#626262] text-[16px]">UX DESIGN</h4>

                    <div className="flex gap-3 flex-col">
                    <h2 className="text-[#000000] md:text-[30px] text-[25px] font-medium leading-tight ">
                    <span className="block">Crafting User-Centered</span>
                    <span className="block">Experiences</span>
                    </h2>
                        <span className="text-[14px]">August, 2025</span>

                        <div className="mt-3 flex flex-col gap-10 ">
                            <div className="md:w-[24rem] lg:h-[12rem] h-[24rem] bg-[#D9D9D9]"></div>
                            <div className="justify-end mr-10 hidden lg:flex">
                                  <img src={arrowButtonIcon} alt="arrow" className="cursor-pointer"/>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col md:gap-4 md:mt-16 mt-5">
                    <h4 className="text-[#626262] text-[16px]">ARTIFICIAL INTELLIGENCE</h4>

                    <div className="flex gap-3 flex-col">
                    <h2 className="text-[#000000] md:text-[30px] text-[25px] font-medium leading-tight ">
                    <span className="block">Enhancing Ministry Through AI</span>
                    <span className="block">Powered Creativity</span>
                    </h2>
                        <span className="text-[14px]">May, 2025</span>

                        <div className="mt-3">
                            <div className="md:w-[24rem] max-lg:h-[24rem] h-[20rem] bg-[#D9D9D9]"></div>
                        </div>
                    </div>
                </div>
            </div> */}

<div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-5">
    <div className="flex flex-col md:gap-4 md:mt-16 mt-5">
        <h4 className="text-[#626262] text-[16px]">ONLINE MENTORSHIP</h4>

        <div className="flex gap-3 flex-col">
            <h2 className="text-[#000000] md:text-[25px] text-[20px] font-medium leading-tight ">
                <span className="block">One-on-one Sessions with </span>
                <span className="block">Aspiring Designers Globally</span>
            </h2>
            <span className="text-[14px] text-[#626262] font-normal">Ongoing since 2022</span>

            <div className="mt-3">
                <div className="xl:w-[24rem] h-[24rem] bg-[#D9D9D9]"></div>
            </div>
        </div>
    </div>
    
    <div className="flex flex-col md:gap-4 md:mt-16 mt-5 ">
        <h4 className="text-[#626262] text-[16px]">SCHOOL PARTNERSHIPS</h4>
       
        <div className="flex gap-3 flex-col">
            <h2 className="text-[#000000] md:text-[25px] text-[20px] font-medium leading-tight ">
                <span className="block">Empowering Design Education in Schools Across Nigeria</span>
             
            </h2>
            <span className="text-[14px] text-[#626262] font-normal">Ongoing since 2024</span>

            <div className="mt-3 flex flex-col lg:gap-5 xl:gap-14  ">
                <div className="xl:w-[24rem]"><img src={luckyOne}/></div>
                <div className="justify-end mr-10 hidden lg:flex">
                    <div className="bg-[#238EFF] h-[72px] w-[72px] rounded-full justify-center items-center flex cursor-pointer"><img src={arrowButtonIcon}/></div>
                </div>
            </div>
        </div>
    </div>

    <div className="flex flex-col md:gap-4 md:mt-16 mt-5 ">
        <h4 className="text-[#626262] text-[16px]">COMMUNITY WORKSHOPS</h4>

        <div className="flex gap-3 flex-col">
            <h2 className="text-[#000000] md:text-[25px] text-[20px] font-medium leading-tight ">
                <span className="block">Free Design Training for Young Aspiring Designers </span>
        
            </h2>
            <span className="text-[14px] text-[#626262] font-normal">Ongoing since 2025</span>

            <div className="mt-3">
                <div className="xl:w-[24rem]  bg-[#D9D9D9]"><img src={luckyTwo}/></div>
            </div>
        </div>
    </div>
</div>

        </div>
        
        
        </>
    )
}

export default Teaching