import linkedinIcon from "../../assets/new-portfolio/footer/LinkedIn.svg";
import facebookIcon from "../../assets/new-portfolio/footer/Facebook.svg";
import instagramIcon from "../../assets/new-portfolio/footer/Instagram.svg";
import mediumIcon from "../../assets/new-portfolio/footer/Medium.svg";
import xIcon from "../../assets/new-portfolio/footer/X.svg";
import copyIcon from "../../assets/new-portfolio/footer/c.svg";
import luckyEkezieIcon from "../../assets/new-portfolio/footer/LUCKY EKEZIE.svg";
import luckyEkezieMobIcon from "../../assets/new-portfolio/footer/LUCKY EKEZIE (1).svg";

const Footer:React.FC = () =>{
    return(
        <>

        <div className="xl:px-20 py-10 bg-white px-7 ">

            <div className="flex flex-col leading-tight"> 
                <span className="text-[#000000] font-[600] md:text-[60px] text-[50px]">Let’s create</span>
                <span className="text-[#626262] font-[600] md:text-[60px] text-[50px]">incredible work together.</span>

            </div>

 
            <div className="flex md:flex-row flex-col md:justify-between md:items-center max-sm:gap-5 border-b-1 border-[#CBCBCB] py-8">

                <div className=" flex flex-col md:gap-1">
                    <span className="text-[#626262] text-[17px]">Email</span>
                    <span className="font-[500] text-[20px]">luckyekezie91@gmail.com</span>
                </div>

                <div  className=" flex flex-col  gap-1">
                    <span className="text-[#626262] text-[17px]">Chat Me on LinkedIn</span>
                    <span className="font-[500] text-[20px]">Lucky Ekezie</span>
                </div>

                <div  className=" flex flex-col  gap-2 md:mr-20">
                    <span className="text-[#626262] text-[17px]">Social</span>
                    <div className="flex flex-row gap-2">
                        <img src={linkedinIcon} alt="linkedin"/>
                        <img src={xIcon} alt="x"/>
                        <img src={facebookIcon} alt="facebook"/>
                        <img src={instagramIcon} alt="instagram"/>
                        <img src={mediumIcon} alt="medium"/>

                    </div>
                </div>

            </div>


             
            <div className="flex flex-row justify-between py-10">

                <div>
                    <span className="text-[#626262]">All Rights Reserved</span>

                </div>


                <div className="flex flex-row gap-2">
                    <img src={copyIcon} alt="copy"/>
                    <span className="text-[#626262]">2025 Lucky Ekezie</span>

                </div>

            </div>


             
            <div className="md:mt-10 mt-16 flex items-center justify-center">

                <img src={luckyEkezieIcon} className="hidden md:block"/>
                <img src={luckyEkezieMobIcon} className="md:hidden"/>


            </div>


        </div>
        
        </>
    )
}

export default Footer;