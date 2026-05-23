import { useState, useEffect } from "react";
import { useNavigate, useLocation} from "react-router-dom";
import logo from "../../assets/new-portfolio/navbar/logo.svg";
import linkedinIcon from "../../assets/new-portfolio/footer/LinkedIn.svg";
import facebookIcon from "../../assets/new-portfolio/footer/Facebook.svg";
import instagramIcon from "../../assets/new-portfolio/footer/Instagram.svg";
import mediumIcon from "../../assets/new-portfolio/footer/Medium.svg";
import xIcon from "../../assets/new-portfolio/footer/X.svg";
import manImage from "../../assets/new-portfolio/menu/Mask group (17).png";
import secondManImage from "../../assets/new-portfolio/menu/2 (19).png";



const NavBar: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isHomePage = location.pathname === '/';

    const handleNavigation = (sectionId: string) => {
        if (isHomePage) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            navigate(`/#${sectionId}`);
        }
        setIsMenuOpen(false);
    };

    useEffect(() => {
        if (isMenuOpen) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            
            document.body.style.overflow = 'hidden';

            document.body.style.paddingRight = `${scrollbarWidth}px`;
        } else {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = '0px';
        }
    
        return () => {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = '0px';
        };
    }, [isMenuOpen]);

    const openResume = () => {
        window.open("/resume", "_blank");
        setIsMenuOpen(false);
    };

    const handleMenuNavigation = (path: string) => {
        navigate(path);
        setIsMenuOpen(false);
    };
    
    return (
        <>
                <div className="flex flex-row bg-white w-full lg:px-10 xl:px-20 py-6 justify-between items-center relative z-50 max-lg:px-6 max-md:py-4" id="nav">
                <div>
                    <img src={logo} width={70} alt="Logo" className="max-md:w-[60px]"/>
                </div>
                {/* Desktop Menu Links */}
                <div className="flex gap-10 text-[#1F1F1F] text-[18px] max-lg:hidden absolute left-1/2 -translate-x-1/2">
                    <span className="cursor-pointer whitespace-nowrap" onClick={() => handleNavigation('home')}>
                        HOME
                    </span>
                    <span className="cursor-pointer whitespace-nowrap" onClick={() => handleNavigation('portfolio')}>
                        PORTFOLIO
                    </span>
                    <span className="cursor-pointer whitespace-nowrap" onClick={() => handleNavigation('ai')}>
                        AI JOURNEY
                    </span>
                    <span className="cursor-pointer whitespace-nowrap" onClick={() => handleNavigation('teaching')}>
                        TEACHING & MENTORSHIP
                    </span>
                    <span className="cursor-pointer whitespace-nowrap" onClick={() => handleNavigation('contact')}>
                        CONTACT ME
                    </span>
                </div>

                {/* Hamburger Menu Icon */}
                <div>
                    <div 
                        className="flex flex-col space-y-[7px] cursor-pointer" 
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <div className="w-9 h-[2.5px] bg-black rounded-xl max-md:w-7"></div>
                        <div className="w-8 h-[2.5px] bg-black rounded-xl ml-auto max-md:w-6"></div>
                        <div className="w-6 h-[2.5px] bg-black rounded-xl ml-auto max-md:w-5"></div>
                    </div>
                </div>
            </div>

            {/* Mobile/Desktop Menu Overlay */}
            {isMenuOpen && (
                <>
                    {/* Menu Header */}
                    <div className="fixed top-0 left-0 right-0 flex flex-row bg-[#F5F5F5] w-full px-20 py-6 justify-center items-center z-50 max-md:px-6 max-md:py-4">
                        <div className={`${isMenuOpen ? 'max-md:invisible' : ''}`}>
                            <img src={logo} width={70} alt="Logo" className="max-md:w-[60px]"/>
                        </div>
                                    
                        
                       
                        <div 
                            className="absolute right-20 max-xl:right-10 max-lg:right-6 cursor-pointer p-6 -m-6"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <div className="w-9 h-[2.5px] bg-black rounded-xl max-md:w-7"></div>
                        </div>
                    </div>

                   
                    <div className="fixed top-[89px] left-0 right-0 bg-[#F5F5F5] w-full z-50 px-20 py-12 flex flex-row justify-evenly items-start gap-5 overflow-y-auto xl:max-h-[calc(100vh-89px)] max-lg:bottom-0 max-md:flex-col max-md:px-6 max-md:py-4 max-md:justify-start max-md:items-start max-md:top-[67px] max-md:h-full">
                        <div className="max-md:w-full">
                            {/* Menu Links - Desktop shows 3 items, Mobile shows all 8 */}
                            <div className="flex flex-col gap-6 text-[#000000] text-[25px] mb-20 font-medium max-md:text-[20px] max-md:mb-8">
                                <span className="cursor-pointer hover:opacity-70 lg:hidden" onClick={() => handleNavigation('home')}>Home</span>
                                <span className="cursor-pointer hover:opacity-70 lg:hidden" onClick={() => handleNavigation('portfolio')}>Portfolio</span>
                                <span className="cursor-pointer hover:opacity-70 lg:hidden" onClick={() => handleNavigation('ai')}>AI journey</span>
                                <span className="cursor-pointer hover:opacity-70 lg:hidden" onClick={() => handleNavigation('teaching')}>Teaching & mentorship</span>
                                <span className="cursor-pointer hover:opacity-70 lg:hidden" onClick={() => handleNavigation('contact')}>Contact me</span>
                                <span className="cursor-pointer hover:opacity-70" onClick={() => handleMenuNavigation("about/me")}>About me</span>
                                <span className="cursor-pointer hover:opacity-70" onClick={openResume}>My resume</span>
                                <span className="cursor-pointer hover:opacity-70"  onClick={() => handleMenuNavigation("publications")}>Publications</span>
                            </div>
                            
                            {/* Contact Information */}
                            {/* Contact Information */}
                        <div className="pt-24 max-md:pt-4">
                            <div className="border-t border-gray-400 pt-8 max-md:pt-4">
                                <div className="flex max-xl:items-center max-xl:justify-between gap-5 max-md:flex-col max-md:items-start max-md:gap-4">
                                    <span className="text-[15px] text-[#1F1F1F] max-md:text-[13px]">luckyekezie91@gmail.com</span>
                                    <div className="flex flex-row gap-2">
                                        <img src={linkedinIcon} alt="linkedin" className="max-md:w-[35px] cursor-pointer"/>
                                        <img src={xIcon} alt="x" className="max-md:w-[35px] cursor-pointer"/>
                                        <img src={facebookIcon} alt="facebook" className="max-md:w-[35px] cursor-pointer"/>
                                        <img src={instagramIcon} alt="instagram" className="max-md:w-[35px] cursor-pointer"/>
                                        <img src={mediumIcon} alt="medium" className="max-md:w-[35px] cursor-pointer"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

                        {/* Desktop Image Placeholders (Hidden on Mobile) */}
                     <div className="flex flex-row max-md:hidden">
  <div className="w-[200px] xl:w-[320px]">
    <img src={manImage} className="w-full h-auto"/>
  </div>
  <div className="w-[200px] xl:w-[320px]">
    <img src={secondManImage} className="w-full h-auto"/>
  </div>
</div>
                    </div>

                    {/* Backdrop Overlay */}
                    <div 
                        className="fixed inset-0 z-40 "
                        style={{ backgroundColor: 'rgba(80, 80, 80, 0.45)' }}
                        onClick={() => setIsMenuOpen(false)}
                    />
                </>
            )}
        </>
    );
};

export default NavBar;