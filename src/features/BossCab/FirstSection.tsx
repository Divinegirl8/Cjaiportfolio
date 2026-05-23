import roadPicture from "../../assets/new-portfolio/boss-cab/first-section/roadgi.gif";
import maskPicture from "../../assets/new-portfolio/boss-cab/first-section/Group (4).png";

const FirstSection: React.FC = () => {
    return (
        <>
       <div className="hidden xl:block">

     

<div className="border-t border-[#5A5A5A] flex flex-row justify-between bg-[#F5F5F5]">
       
       <div className="flex-1 border-r border-[#5A5A5A] flex px-20 items-center  py-20">
           <h1 className="text-[#000000] text-[50px] font-normal leading-tight">
               <span className="block">Ride Like a Boss,</span>
               <span className="block">Pay Like A Pro</span>
           </h1>
       </div>
     
       <div className="flex-1  flex items-center justify-center  py-20 px-20">
           <img 
               src={roadPicture} 
               alt="City skyline illustration"
               className="h-[200px] w-[800px]"
           />
       </div>

    
       <div className="flex items-center justify-center px-[21.5px]">
           <div 
               className="text-[#000000] text-[14px]  font-normal"
               style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
           >
               Date <span className="font-semibold">01.01.2022</span>
           </div>
       </div>
   </div>


   <div className="border-t border-[#5A5A5A] flex flex-row justify-between bg-[#F5F5F5]">
       
       <div className="flex-1 border-r border-[#5A5A5A] flex px-20 items-center  py-22">
           <img src={maskPicture}/>
       </div>
     
       <div className="flex-1 px-20 py-22 flex flex-col justify-center pt-20">
                        <h2 className="text-[#000000] text-[40px] font-normal mb-8 text-center">
                            Project Brief
                        </h2>
                        
                        <p className="text-[#5A5A5A] text-[17px] leading-relaxed">
                            Bosscab is a ride-hailing app connecting private drivers and riders
                            across multiple locations. As the company prepared to scale, it aimed
                            to attract more users by offering a friendlier, fairer alternative in the
                            rideshare space. The project focused on improving the app's
                            information architecture and enhancing key rider experiences—
                            payments, wallet transfers, and ride security. I redesigned Bosscab
                            with these goals in mind to support growth and encourage more
                            people to ride or drive with confidence.
                        </p>
                    </div>

    
       <div className="flex items-stretch gap-10 justify-center flex-col px-5">
           <div 
               className="text-[#000000] text-[16px]   font-normal"
               style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
           >
                    <span className="font-semibold">Bosscab</span> Case Study

           </div>

           <div 
               className="text-[#000000] text-[14px] uppercase font-semibold mt-30"
             
           >

            03
              
           </div>

          
       </div>


      
   </div>
       </div>


       <div className="flex flex-col xl:hidden ">
              
                <div className=" flex flex-col">
                   
                <div className="border-b xl:px-20 max-lg:px-7 lg:px-10 md:py-10 border-[#5A5A5A] relative ">
                       
                        <button className="absolute -bottom-[26px] right-16 px-8 py-3 border border-[#5A5A5A] bg-white rounded-full text-base hover:bg-gray-50 transition-colors inline-flex items-center gap-2">
                            Visit Website 
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 6V8H14.59L5 17.59L6.41 19L16 9.41V18H18V6H6Z" fill="#1E1E1E"/>
                            </svg>
                        </button>
                    </div>

                    
                    <div className=" px-7 md:py-16 py-10 flex-1">
                        <h2 className="text-[#000000] md:text-[32px] text-[25px] md:text-center font-[500] md:mb-6">
                            Project Brief
                        </h2>
                        
                        <div className="space-y-4 text-[#5A5A5A] text-base leading-relaxed">
                            <p>
                                 Bosscab is a ride-hailing app connecting private drivers and riders across multiple locations. As the company prepared to scale, it aimed to attract more users by offering a friendlier, fairer alternative in the rideshare space. The project focused on improving the app’s information architecture and enhancing key rider experiences— payments, wallet transfers, and ride security. I redesigned Bosscab with these goals in mind to support growth and encourage more people to ride or drive with confidence.   
                           </p>
                            
                           
                        </div>
                    </div>
                </div>

                <div className="xl:w-1/2 my-auto md:py-10">
            <div className="flex flex-row justify-evenly items-stretch gap-8 md:px-14   ">
                <div className="">
                    <img 
                        src={maskPicture} 
                        alt="mask picture"
                    />
                </div>

                <div className="md:flex items-start gap-10 justify-between flex-col px-5 hidden">
           <div 
               className="text-[#000000] text-[16px]   font-normal"
               style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
           >
                    <span className="font-semibold">Bosscab</span> Case Study

           </div>

           <div 
               className="text-[#000000] text-[14px] uppercase font-semibold "
             
           >

            03
              
           </div>

          
            </div>
            </div>
            </div>



            </div>



       </>
    );
};

export default FirstSection;