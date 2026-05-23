import facebook from "../../assets/about/fb.png"
import twitter from "../../assets/about/twitter.png"
import linkedin from "../../assets/about/linkedin.png"
import arrUp from "../../assets/footer/arr-up.png" 
import InfoMove from "../InfoMove"


const Footer:React.FC = () =>{
   return(
    <>
    <div className=" mt-20">
    <InfoMove/>
    </div>
   

      <div className="md:flex md:flex-row justify-between  border-b-[0.25px] border-[#62646C] md:px-0 sm:pb-6 md:pb-0 px-9 ">
       
       <div className="md:flex flex-row border-x-[0.25px] border-[#62646C] md:border-none ">
       <div className="md:flex flex-col pt-20 gap-7 hidden">
            <div className="lg:w-[5rem] w-[2rem] h-7 bg-[#1C1C21]"></div>
            <div className="lg:w-[5rem] w-[2rem] h-7 bg-[#1C1C21]"></div>
            <div className="lg:w-[5rem] w-[2rem] h-7 bg-[#1C1C21]"></div>
        </div>



        <div className="flex flex-col gap-6 md:border-l-[0.25px] border-[#62646C]  sm:px-14 xl:px-[5rem] md:px-4 px-5 md:border-r-[0.25px]  md:border-b-0 border-b-[0.25px]  md:pt-20 lg:pt-10 pt-10 md:py-0 xl:py-14 py-4 ">
            <h5 className="text-[#797C86] font-[600] text-[16px]">A MORE MEANINGFUL HOME FOR PHOTOGRAPHY</h5>
            <div>
            <div className="flex flex-row gap-5">
             <h1 className="text-white font-[600] md:text-[48px] text-[40px]">Let’s</h1>
              <div className="bg-[#238EFF] w-[104px] h-[56px]  flex items-center justify-center rounded-[50px]">
                <img src={arrUp} className="w-5 h-5"/>
              </div>
             </div>
             <h5 className="text-white font-[600] md:text-[48px] text-[40px]">Work Together</h5>

            </div>
        </div>

       </div>

       <div className="md:flex md:flex-row sm:px-0 px-5 border-x-[0.25px] border-[#62646C] md:border-none">

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 sm:gap-[5rem] uppercase border-[#62646C] sm:px-14 md:px-10 px-2 md:border-r-[1px] pt-10 md:space-y-[2rem] sm:space-y-0 space-y-[2rem]">

            {/* Column 1 */}
            <div className="flex flex-col gap-4">
            <h4 className="text-[#797C86]">Home</h4>
            <div className="text-[#F2F2F3] flex flex-col gap-2">
                <h4 className="border-b border-[#62646C] w-[90px] pb-1">About Me</h4>
                <h4 className="border-b border-[#62646C] w-[96px] pb-1">My Works</h4>
                <h4 className="border-b border-[#62646C] w-[112px] pb-1">Testimonials</h4>

            </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4">
            <h4 className="text-[#797C86]">Clients</h4>
            <div className="text-[#F2F2F3] flex flex-col gap-2">
                <h4 className="border-b border-[#62646C] w-[90px] pb-1">Klovesto</h4>
                <h4 className="border-b border-[#62646C] w-[85px] pb-1">Nukeway</h4>
                <h4 className="border-b border-[#62646C] w-[80px] pb-1">Cloven’s</h4>
                <h4 className="border-b border-[#62646C] w-[80px] pb-1">MenVol</h4>
            </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4">
            <h4 className="text-[#797C86]">Portfolio</h4>
            <div className="text-[#F2F2F3] flex flex-col gap-2">
                <h4 className="border-b border-[#62646C] w-[80px] pb-1">Events</h4>
                <h4 className="border-b border-[#62646C] w-[80px] pb-1">Portrait</h4>
                <h4 className="border-b border-[#62646C] w-[83px] pb-1">Branding</h4>
                <h4 className="border-b border-[#62646C] w-[115px] pb-1">Commerciale</h4>
                <h4 className="border-b border-[#62646C] w-[80px] pb-1">Wedding</h4>
            </div>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col gap-4">
            <h4 className="text-[#797C86]">Services</h4>
            <div className="text-[#F2F2F3] flex flex-col gap-2">
                <h4 className="border-b border-[#62646C] w-[85px] pb-1">Portraits</h4>
                <h4 className="border-b border-[#62646C] w-[70px] pb-1">Events</h4>
                <h4 className="border-b border-[#62646C] w-[100px] pb-1">Commercial</h4>
            </div>
            </div>

</div>


       
        <div className="md:flex flex-col pt-20 gap-7 hidden">
            <div className="lg:w-[5rem] w-[2rem] h-7 bg-[#1C1C21]"></div>
            <div className="lg:w-[5rem] w-[2rem] h-7 bg-[#1C1C21]"></div>
            <div className="lg:w-[5rem] w-[2rem] h-7 bg-[#1C1C21]"></div>
        </div>

        </div>
      </div>




    
    <div className="md:flex md:flex-row sm:justify-between md:px-2 xl:px-18 mt-8 items-center flex flex-col gap-5 md:gap-6">

    <div className="text-[#797C86] flex flex-row font-[400] text-[14px]">
        <h4 className="border-r-[0.25px] border-[#62646C] px-2 h-5">Terms & Conditions</h4>
        <h4 className="pl-2">Privacy Policy</h4>
    </div>


    <div className="sm:flex flex-row gap-3 border-[0.25px] border-[#62646C] rounded-[20px] p-1 xl:w-[9rem] md:w-[9rem] w-[9.6rem] hidden">
             <img src={facebook} className="md:w-9 md:h-9 xl:x-12 xl:h-10 w-10 h-10 cursor-pointer"/>
             <img src={twitter}  className="md:w-9 md:h-9 xl:x-12 xl:h-10 w-10 h-10 cursor-pointer"/>
            <img src={linkedin} className="md:w-9 md:h-9 xl:x-12 xl:h-10 w-10 h-10 cursor-pointer"/>
    </div>


    <div>
        <h4 className="text-[#797C86]  font-[400] text-[14px]">© 2025 Lucky Ekezie Artistry. All rights reserved.</h4>
    </div>

    <div className="flex flex-row gap-3 border-[0.25px] border-[#62646C] rounded-[20px] p-1 xl:w-[9rem] md:w-[9rem] w-[9.6rem] sm:hidden">
             <img src={facebook} className="md:w-9 md:h-9 xl:x-12 xl:h-10 w-10 h-10 cursor-pointer"/>
             <img src={twitter}  className="md:w-9 md:h-9 xl:x-12 xl:h-10 w-10 h-10 cursor-pointer"/>
            <img src={linkedin} className="md:w-9 md:h-9 xl:x-12 xl:h-10 w-10 h-10 cursor-pointer"/>
    </div>





    </div>
    
    </>
   )
}

export default Footer;