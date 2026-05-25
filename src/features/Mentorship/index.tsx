
import Industry from "../../component/Industry"
import Community from "../../component/Community"
import Form from "../../component/Form"
import University from "../../component/University"





const Mentorship = () => {
    return(
        <div >


             <Community/>

        
        
            <div className="xl:px-[8.5rem] lg:px-10 px-7">
            <hr className="text-[#CBCBCB]"/>
            </div>

            <University/>


            <div className="xl:px-[8.5rem] lg:px-10 px-7">
            <hr className="text-[#CBCBCB]"/>
            </div>

           <Industry/>

           <Form/>




           
        </div>
    )
}

export default Mentorship