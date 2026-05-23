import screenImg from "../../assets/new-portfolio/conversa/Group (7).png"
import screenMobImg from "../../assets/new-portfolio/conversa/9.png"


const LastSection : React.FC = () => {
    return(
        <>
        
           <div className="hidden md:block">
               <img src={screenImg}/>
           </div>

            <div className="md:hidden">
               <img src={screenMobImg}/>
           </div>
        </>
    )
}

export default LastSection;