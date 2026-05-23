import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from "../../component/Footer";
import Form from "../../component/Form";
import Hero from "../../component/Hero";
import NavBar from "../../component/NavBar";
import Testimonial from "../../component/Testimonial";
import AiJourney from "../AiJourney";
import Portfolio from "../Portfolio";
import Teaching from "../Teaching";

const Home: React.FC = () => {
    const location = useLocation();

    useEffect(() => {

        if (location.hash) {
            const sectionId = location.hash.substring(1);
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100); 
        }
    }, [location]);

    return (
        <>
            <div className="">
                <Hero/>
                <div className="sticky top-0 z-50">
                    <NavBar/>
                </div>
                <Portfolio/>
                <AiJourney/>
                <Teaching/>
                <Testimonial/>
                <Form/>
                <Footer/>
            </div>
        </>
    );
};

export default Home;