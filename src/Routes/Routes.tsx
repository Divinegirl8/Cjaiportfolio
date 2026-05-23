import Characters from "../component/Characters"
import Environment from "../component/Environments"
import ResumeViewer from "../component/ResumeViewer"
import Videos from "../component/Videos"
import AboutMe from "../features/AboutMe"
import AIGenerativeDesign from "../features/AIGenerativeDesign"
import BossCab from "../features/BossCab"
import CliqMitCaseStudy from "../features/CliqMit"
import Conversa from "../features/Conversa"
import Home from "../features/Home"
import KoboCaseStudy from "../features/Kobo"
import Publications from "../features/Publications"
import Layout from "../Layout"

export const Routes = [
    { 
    
        element : <Layout/>,
        children : [ 
            {
             path : "case-study/kobo",
             element : <KoboCaseStudy/>
            },
            {
                path : "case-study/cliqmit",
                element : <CliqMitCaseStudy/>
            },
            {
                path : "case-study/bosscab",
                element : <BossCab/>
               },
               {
                path : "case-study/conversa",
                element : <Conversa/>
               },
               {
                path : "about/me",
                element : <AboutMe/>
               },
               {
                path : "publications",
                element : <Publications/>
               },
               {
                path : "ai/generative/designs",
                element : <AIGenerativeDesign/>
               },
             
        ]},
        {
            path : "/",
             element : <Home/>
        },
        {
            path: "/resume",
            element: <ResumeViewer />
          },
          {
            path : "ai/generative/characters",
            element : <Characters/>
           },
           {
            path : "ai/generative/environments",
            element : <Environment/>
           },
           {
            path : "ai/generative/videos",
            element : <Videos/>
           }
          
    
]
