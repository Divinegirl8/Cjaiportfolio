
import { useRoutes } from 'react-router-dom'
import { Routes } from './Routes/Routes'
import ScrollToTop from './component/ScrollToTop';


function App() {
  const routing = useRoutes(Routes);


  return (
    <>
    <ScrollToTop />
    {routing}
  </>
  )
}

export default App
