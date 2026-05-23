import painPointImg from "../../assets/new-portfolio/boss-cab/seventh-section/Group 38 1.png";


const SeventhSection : React.FC = () => {
    return(
        <>
        
        <div className="xl:border-t  border-[#5A5A5A] flex xl:flex-row flex-col-reverse">

        <div className="xl:w-1/2 xl:flex sm:py-16 py-10 md:py-20 xl:py-0 md:justify-center md:items-center px-10 bg-[#171A23]  ">
          <img src={painPointImg} className=""/>
       </div>
       
        <div className="xl:w-1/2  border-[#5A5A5A] xl:border-r xl:px-20 lg:px-10 px-7 md:py-20 py-10  bg-[#FBFBFB]">
            <h1 className="text-[#000000] md:text-[32px] text-[25px] md:text-center font-medium md:mb-6 max-lg:pt-5 max-lg:border-t max-lg:border-[#5A5A5A]">
            Solving Usability Bugs
            </h1>

 
            <div className="md:space-y-10">
                <div>

                    
                    <p className="text-[#5A5A5A] text-[16px] font-semibold leading-relaxed">
                    USABILITY TESTING            
                    </p>

                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed md:mt-5">
                    To validate whether my design solutions effectively addressed the identified pain points, I conducted a second round of usability testing with 10 new participants who matched Bosscab's target user demographics. Participants completed tasks related to creating and funding a group wallet, making payments through the in-app wallet, and navigating using the improved map system.        
                    </p>

                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed md:mt-5">
                    The results demonstrated that the designs directly addressed the usability issues from the first round of testing. I found significant improvements across key metrics, including decreased mis-click rate, reduced task duration, and lower bounce rate. Users completed tasks more quickly with a substantially higher success rate. The group wallet proved intuitive, the payment flow felt seamless, and the map localization eliminated previous routing confusion, confirming the redesigned experience was ready to move forward.                    </p>

                    
                </div>

            </div>
       </div>
      


      
    </div>

        </>
    )
}

export default SeventhSection;