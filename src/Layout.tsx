import { Outlet } from "react-router-dom"
import NavBar from "./component/NavBar"
import Footer from "./component/Footer"


const Layout = () => {
     return(
        <>

          <div className="sticky top-0 z-50">
                    <NavBar/>
          </div>
          <Outlet/>
          <Footer/>
        
        </>
     )
}

export default Layout