import cpuIcon from "../../assets/new-portfolio/portfolio/sync/refresh-2.svg";
import chartIcon from "../../assets/new-portfolio/portfolio/sync/receipt-text.svg";
import penIcon from "../../assets/new-portfolio/portfolio/sync/receipt-2.svg";
import toolIcon from "../../assets/new-portfolio/portfolio/sync/user.svg";
import bezeirToolIcon from "../../assets/new-portfolio/about-me/skills/bezier.svg";
import statusIcon from "../../assets/new-portfolio/about-me/skills/status-up.svg";
import monitorIcon from "../../assets/new-portfolio/about-me/skills/monitor.svg";
import trendIcon from "../../assets/new-portfolio/about-me/skills/trend-up.svg";
import userIcon from "../../assets/new-portfolio/portfolio/sync/document-text.svg";
import peopleIcon from "../../assets/new-portfolio/about-me/skills/people.svg";

const LastSection = () =>{
    return(
        <div className="xl:px-20 px-7 xl:py-16 py-10">

            <h1 className="text-[#000000]  text-[25px] md:text-[32px] md:text-center font-[500] md:mb-6 max-lg:pt-5 max-lg:border-t max-lg:border-[#5A5A5A] ">
            Final Product 
            </h1>

    
                <div>
                <span className="font-semibold"> The Complete Syncventory Platform</span>
                     <p className="text-[#5A5A5A] text-[16px] leading-relaxed">
                     The platform that shipped delivered on its core promise: manage all your stores from one place. Everything a retailer needed — product management, inventory tracking,
                    order fulfilment, POS operations, and business intelligence — in a single unified interface that felt coherent, not cobbled together.
                    </p>
                    </div>

                    <div>
                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed mt-5">
                    For multi-channel retailers, fragmentation was simply gone. Products created once appeared everywhere. Inventory changed once updated everywhere. Orders from any
                    channel followed one fulfilment workflow.
                    </p>
                    </div>

                    <div>
                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed mt-5">
                    For physical stores, the POS was fast, worked offline, supported mobile money alongside card and cash, and synced with central inventory when connection restored.
                    For business intelligence, actionable insights across sales, inventory health, and channel efficiency — in plain language that didn't require a finance background to interpret.
                    </p>
                    </div>


                    <div className="mt-10">
                    <span className="font-semibold"> What The Platform Delivered</span>

                    <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-x-4  md:gap-y-5 gap-y-3 md:mt-12 mt-5">
                        <div className="bg-[#FFFFFF] md:max-w-[230px] h-[140px] flex flex-col px-4 pt-4 gap-2 items-start">
                            <div className="h-[40px] w-[40px] bg-[#E9F4FF] rounded-full items-center justify-center flex">
                            <img src={cpuIcon} alt="cpuIcon" className="w-5 h-5" />
                            </div>
                            <div className="mt-1">
                            <p className="font-medium text-[14px] text-black leading-tight">Real-time inventory sync across all stores and e-commerce channels</p>
                            </div>
                        </div>

                        <div className="bg-[#FFFFFF] md:max-w-[230px] h-[140px] flex flex-col px-4 pt-4 gap-2 items-start">
                            <div className="h-[40px] w-[40px] bg-[#EAF9EE] rounded-full items-center justify-center flex">
                            <img src={chartIcon} alt="chartIcon" className="w-5 h-5" />
                            </div>
                            <div className="mt-1">
                            <p className="font-medium text-[14px] text-black leading-tight">Modern offline-capable POS supporting all payment methods</p>
                            </div>
                        </div>

                        <div className="bg-[#FFFFFF] md:max-w-[230px] h-[140px] flex flex-col px-4 pt-4 gap-2 items-start">
                            <div className="h-[40px] w-[40px] bg-[#FFF3EC] rounded-full items-center justify-center flex">
                            <img src={penIcon} alt="penIcon" className="w-5 h-5" />
                            </div>
                            <div className="mt-1">
                            <p className="font-medium text-[14px] text-black leading-tight">Unified order management
                            regardless of channel origin</p>
                            </div>
                        </div>

                        <div className="bg-[#FFFFFF] md:max-w-[230px] h-[140px] flex flex-col px-4 pt-4 gap-2 items-start">
                            <div className="h-[40px] w-[40px] bg-[#F2EFFF] rounded-full items-center justify-center flex">
                            <img src={toolIcon} alt="toolIcon" className="w-5 h-5" />
                            </div>
                            <div className="mt-1">
                            <p className="font-medium text-[14px] text-black leading-tight">Progressive onboarding — live in under 5 minutes</p>
                            </div>
                        </div>

                        <div className="bg-[#FFFFFF] md:max-w-[230px] h-[140px] flex flex-col px-4 pt-4 gap-2 items-start">
                            <div className="h-[40px] w-[40px] bg-[#E8F6F6] rounded-full items-center justify-center flex">
                            <img src={bezeirToolIcon} alt="bezeirToolIcon" className="w-5 h-5" />
                            </div>
                            <div className="mt-1">
                            <p className="font-medium text-[14px] text-black leading-tight">Plain-language business intelligence and actionable alerts</p>
                            </div>
                        </div>

                        <div className="bg-[#FFFFFF] md:max-w-[230px] h-[140px] flex flex-col px-4 pt-4 gap-2 items-start">
                            <div className="h-[40px] w-[40px] bg-[#FEFAED] rounded-full items-center justify-center flex">
                            <img src={statusIcon} alt="statusIcon" className="w-5 h-5" />
                            </div>
                            <div className="mt-1">
                            <p className="font-medium text-[14px] text-black leading-tight">Multi-location stock transfer with
                            approval workflows</p>
                            </div>
                        </div>

                        <div className="bg-[#FFFFFF] md:max-w-[230px] h-[140px] flex flex-col px-4 pt-4 gap-2 items-start">
                            <div className="h-[40px] w-[40px] bg-[#FFEEEF] rounded-full items-center justify-center flex">
                            <img src={monitorIcon} alt="monitorIcon" className="w-5 h-5" />
                            </div>
                            <div className="mt-1">
                            <p className="font-medium text-[14px] text-black leading-tight">Supplier and purchase order management</p>
                            </div>
                        </div>

                        <div className="bg-[#FFFFFF] md:max-w-[230px] h-[140px] flex flex-col px-4 pt-4 gap-2 items-start">
                            <div className="h-[40px] w-[40px] bg-[#E5E8EB] rounded-full items-center justify-center flex">
                            <img src={trendIcon} alt="trendIcon" className="w-5 h-5" />
                            </div>
                            <div className="mt-1">
                            <p className="font-medium text-[14px] text-black leading-tight">Full audit trail on every inventory
                            change</p>
                            </div>
                        </div>

                        <div className="bg-[#FFFFFF] md:max-w-[230px] h-[140px] flex flex-col px-4 pt-4 gap-2 items-start">
                            <div className="h-[40px] w-[40px] bg-[#F4F6F8] rounded-full items-center justify-center flex">
                            <img src={userIcon} alt="userIcon" className="w-5 h-5" />
                            </div>
                            <div className="mt-1">
                            <p className="font-medium text-[14px] text-black leading-tight">Mobile-optimised stock counting
                            for warehouse teams</p>
                            </div>
                        </div>

                        <div className="bg-[#FFFFFF] md:max-w-[230px] h-[140px] flex flex-col px-4 pt-4 gap-2 items-start">
                            <div className="h-[40px] w-[40px] bg-[#EFF0FE] rounded-full items-center justify-center flex">
                            <img src={peopleIcon} alt="peopleIcon" className="w-5 h-5" />
                            </div>
                            <div className="mt-1">
                            <p className="font-medium text-[14px] text-black leading-tight">Featured at London Tech Week
                            2025</p>
                            </div>
                        </div>
                        </div>
                    </div>

        </div>
    )
}

export default LastSection;