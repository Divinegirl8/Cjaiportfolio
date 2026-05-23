import luckyImg from "../../assets/new-portfolio/about-me/Mask group (7).png";
import Form from "../../component/Form";
import cpuIcon from "../../assets/new-portfolio/about-me/skills/cpu.svg";
import chartIcon from "../../assets/new-portfolio/about-me/skills/chart.svg";
import penIcon from "../../assets/new-portfolio/about-me/skills/pen-tool.svg";
import toolIcon from "../../assets/new-portfolio/about-me/skills/pen-tool-2.svg";
import bezeirToolIcon from "../../assets/new-portfolio/about-me/skills/bezier.svg";
import statusIcon from "../../assets/new-portfolio/about-me/skills/status-up.svg";
import monitorIcon from "../../assets/new-portfolio/about-me/skills/monitor.svg";
import trendIcon from "../../assets/new-portfolio/about-me/skills/trend-up.svg";
import userIcon from "../../assets/new-portfolio/about-me/skills/user.svg";
import peopleIcon from "../../assets/new-portfolio/about-me/skills/people.svg";

const AboutMe : React.FC = () =>{
    return(
        <>
        
       <div className="xl:px-[8.5rem] lg:px-10 px-7 md:py-30 py-10 max-md:bg-[#F3F3F3]">

            <div className="flex flex-col md:gap-3">
                    <h3 className="font-semibold md:text-[35px] text-[25px] text-[#000000]">About Me.</h3>
                    <p className="font-normal text-[16px] text-[#626262] md:w-[34rem]">I’m an AI-driven Product Designer blending creativity, strategy, and technology to build simple, human-centered digital experiences.</p>
            </div>

            <div className="flex xl:flex-row flex-col gap-10 items-stretch md:mt-20 mt-5">
                    <div className="lg:w-[40%] flex-shrink-0">
                        <img src={luckyImg} alt="luckyImg" className="w-full h-full md:object-cover"/>
                    </div>
                    <div className="flex-1">
                        <div className="w-full h-full md:bg-[#F4F4F4] md:px-10 md:py-10 flex flex-col">
                            <h4 className="text-[30px] text-black font-semibold">Lucky Ekezie</h4>
                            <p className="text-[16px] font-[500] text-[#626262]">AI-Driven Product Design Leader</p>

                            <div className="md:mt-10 mt-5 flex-1 overflow-y-auto text-[16px]">
                                <p className="mb-4">
                                    I am a product designer and technology entrepreneur focused on building intelligent,
                                    human-centered solutions for everyday problems. Over the years, I've worked across
                                    fintech, mobility, gaming, media, and productivity—experiences that shaped my
                                    approach to creating products that are both functional and emotionally intuitive.
                                </p>

                                <p className="mb-4">
                                    As a founder, I'm currently building Conversa, an AI call assistant that handles business
                                    calls with speed and accuracy, and Copyall, a smart productivity tool that organizes
                                    everything users copy in real time. Both products reflect my passion for solving real-
                                    world challenges through automation, simplicity, and thoughtful design.
                                </p>

                                <p className="mb-4">
                                    My background in concept art, motion graphics, and AI-driven creativity gives me a
                                    unique perspective on product development. I approach every idea like a system—
                                    understanding the business goals, mapping user needs, and designing an experience
                                    that feels natural, efficient, and intelligent.
                                </p>

                                <p>
                                    Alongside building my own products, I collaborate with teams and businesses who want
                                    to create meaningful digital experiences. I bring a balance of design strategy,
                                    storytelling, and technical experimentation to every project, helping companies move
                                    from idea to execution with clarity and impact.
                                </p>
                            </div>
                        </div>
                    </div>
            </div>

               <div className="flex flex-col md:gap-3 md:mt-26 mt-10">
                    <h3 className="font-semibold md:text-[35px] text-[25px] text-[#000000]">Overview.</h3>
                    <p className="font-normal text-[16px] text-[#626262] md:w-[30rem]">Key highlights from 8+ years of designing impactful digital experiences.</p>
               </div>

            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 md:gap-30 md:items-center md:mt-16 mt-5">
                <div className="relative">
                    <h4 className="font-[800] md:text-[64px] text-[40px] ">08+</h4>
                    <p className="font-normal md:text-[18px] text-[16px] text-[#626262] md:w-[14rem]">Years of Creative & Product Design Experience</p>
             
                    <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[1px] h-[40px] bg-[#D4D4D4] md:block hidden"></div>
                </div>

                <div className="relative">
                    <h4 className="font-[800] md:text-[64px] text-[40px]">30+</h4>
                    <p className="font-normal md:text-[18px] text-[16px] text-[#626262] md:w-[17rem]">Projects designed across fintech, mobility, gaming & media</p>
                    <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[1px] h-[40px] bg-[#D4D4D4] xl:block hidden"></div>
                </div>

                <div>
                    <h4 className="font-[800] md:text-[64px] text-[40px]">15+</h4>
                    <p className="font-normal md:text-[18px] text-[16px]  text-[#626262] md:w-[16rem]">Products designed, improved, or contributed to</p>
                </div>
            </div>

            <div className="flex flex-col md:gap-3 md:mt-26 mt-10">
                    <h3 className="font-semibold md:text-[35px] text-[25px] text-[#000000]">Skills.</h3>
                    <p className="font-normal text-[16px] text-[#626262] md:w-[27.5rem]">These skills reflect the methods, techniques, and principles I use to create effective, scalable digital products.</p>
               </div>

               {/* skills */}

                    <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-x-4  md:gap-y-5 gap-y-3 md:mt-12 mt-5">
                        <div className="bg-[#FFFFFF] md:max-w-[230px] h-[130px] flex flex-col px-4 pt-4 gap-2 items-start">
                            <div className="h-[40px] w-[40px] bg-[#E9F4FF] rounded-full items-center justify-center flex">
                            <img src={cpuIcon} alt="cpuIcon" className="w-5 h-5" />
                            </div>
                            <div className="mt-1">
                            <p className="font-medium text-[15px] text-black leading-tight">Systems Thinking and Problem-Solving</p>
                            </div>
                        </div>

                        <div className="bg-[#FFFFFF] md:max-w-[230px] h-[130px] flex flex-col px-4 pt-4 gap-2 items-start">
                            <div className="h-[40px] w-[40px] bg-[#EAF9EE] rounded-full items-center justify-center flex">
                            <img src={chartIcon} alt="chartIcon" className="w-5 h-5" />
                            </div>
                            <div className="mt-1">
                            <p className="font-medium text-[15px] text-black leading-tight">User-Centered Design and Business Strategy</p>
                            </div>
                        </div>

                        <div className="bg-[#FFFFFF] md:max-w-[230px] h-[130px] flex flex-col px-4 pt-4 gap-2 items-start">
                            <div className="h-[40px] w-[40px] bg-[#FFF3EC] rounded-full items-center justify-center flex">
                            <img src={penIcon} alt="penIcon" className="w-5 h-5" />
                            </div>
                            <div className="mt-1">
                            <p className="font-medium text-[15px] text-black leading-tight">Information Architecture and Interaction Design</p>
                            </div>
                        </div>

                        <div className="bg-[#FFFFFF] md:max-w-[230px] h-[130px] flex flex-col px-4 pt-4 gap-2 items-start">
                            <div className="h-[40px] w-[40px] bg-[#F2EFFF] rounded-full items-center justify-center flex">
                            <img src={toolIcon} alt="toolIcon" className="w-5 h-5" />
                            </div>
                            <div className="mt-1">
                            <p className="font-medium text-[15px] text-black leading-tight">Design Systems Creation and Maintenance</p>
                            </div>
                        </div>

                        <div className="bg-[#FFFFFF] md:max-w-[230px] h-[130px] flex flex-col px-4 pt-4 gap-2 items-start">
                            <div className="h-[40px] w-[40px] bg-[#E8F6F6] rounded-full items-center justify-center flex">
                            <img src={bezeirToolIcon} alt="bezeirToolIcon" className="w-5 h-5" />
                            </div>
                            <div className="mt-1">
                            <p className="font-medium text-[15px] text-black leading-tight">Rapid Prototyping and User Validation</p>
                            </div>
                        </div>

                        <div className="bg-[#FFFFFF] md:max-w-[230px] h-[130px] flex flex-col px-4 pt-4 gap-2 items-start">
                            <div className="h-[40px] w-[40px] bg-[#FEFAED] rounded-full items-center justify-center flex">
                            <img src={statusIcon} alt="statusIcon" className="w-5 h-5" />
                            </div>
                            <div className="mt-1">
                            <p className="font-medium text-[15px] text-black leading-tight">Data-Informed Design & Product Analytics</p>
                            </div>
                        </div>

                        <div className="bg-[#FFFFFF] md:max-w-[230px] h-[130px] flex flex-col px-4 pt-4 gap-2 items-start">
                            <div className="h-[40px] w-[40px] bg-[#FFEEEF] rounded-full items-center justify-center flex">
                            <img src={monitorIcon} alt="monitorIcon" className="w-5 h-5" />
                            </div>
                            <div className="mt-1">
                            <p className="font-medium text-[15px] text-black leading-tight">AI Product Design and LLM Integration</p>
                            </div>
                        </div>

                        <div className="bg-[#FFFFFF] md:max-w-[230px] h-[130px] flex flex-col px-4 pt-4 gap-2 items-start">
                            <div className="h-[40px] w-[40px] bg-[#E5E8EB] rounded-full items-center justify-center flex">
                            <img src={trendIcon} alt="trendIcon" className="w-5 h-5" />
                            </div>
                            <div className="mt-1">
                            <p className="font-medium text-[15px] text-black leading-tight">A/B Testing & Growth Optimization</p>
                            </div>
                        </div>

                        <div className="bg-[#FFFFFF] md:max-w-[230px] h-[130px] flex flex-col px-4 pt-4 gap-2 items-start">
                            <div className="h-[40px] w-[40px] bg-[#F4F6F8] rounded-full items-center justify-center flex">
                            <img src={userIcon} alt="userIcon" className="w-5 h-5" />
                            </div>
                            <div className="mt-1">
                            <p className="font-medium text-[15px] text-black leading-tight">Leadership and Cross-Functional Collaboration</p>
                            </div>
                        </div>

                        <div className="bg-[#FFFFFF] md:max-w-[230px] h-[130px] flex flex-col px-4 pt-4 gap-2 items-start">
                            <div className="h-[40px] w-[40px] bg-[#EFF0FE] rounded-full items-center justify-center flex">
                            <img src={peopleIcon} alt="peopleIcon" className="w-5 h-5" />
                            </div>
                            <div className="mt-1">
                            <p className="font-medium text-[15px] text-black leading-tight">Accessibility and Inclusive Design</p>
                            </div>
                        </div>
                        </div>
            

       </div>
       <Form/>
        </>
    )
}

export default AboutMe;