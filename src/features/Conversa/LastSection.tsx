import screenImg from "../../assets/new-portfolio/conversa/Group (12).svg"
import screenMobImg from "../../assets/new-portfolio/conversa/9.svg"


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