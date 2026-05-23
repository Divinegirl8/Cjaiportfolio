import InfoMove from "../../components/InfoMove";
import aiPix from "../../assets/heropage/ai.png"
import mobAi from "../../assets/heropage/mob-ai.png"
import arrUp from "../../assets/footer/arr-up.png" 

const HeroPage = () => {
    return(
       <>
       
       <div className="sm:flex sm:flex-row justify-between xl:px-20 px-5 flex flex-col gap-4 md:gap-0">


          <div>
              <h2 className="text-[#62646C] font-[500] xl:text-[18px]">CUTTING-EDGE AI ART CREATIONS BY</h2>
              <h1 className="text-[#E4E4E6] font-[600] xl:text-[60px] text-[40px] ">LUCKY EKEZIE</h1>
          </div>

          <div>
          <div className="flex flex-row gap-5">
          <h1 className="text-white font-[600] xl:text-[48px] text-[35px]">Let’s</h1>
            <div className="bg-[#238EFF] w-[104px] h-[56px]  flex items-center justify-center rounded-[50px]">
              <img src={arrUp} className="w-5 h-5"/>
            </div>
          </div>

          <h5 className="text-white font-[600] xl:text-[48px] text-[35px]">Work Together</h5>


          </div>
          </div>

          <div className="mt-10">
          <InfoMove/>
          </div>

          <div className="px-20 hidden md:block">
          <img src={aiPix} />
          </div>

          <div className="px-3 md:hidden ">
          <img src={mobAi} />
        </div>
                
       </>
    )
}

export default HeroPage;