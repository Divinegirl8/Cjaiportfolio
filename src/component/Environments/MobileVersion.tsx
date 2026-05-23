import { useState, useRef } from 'react';
import imag1 from "../../assets/new-portfolio/ai/environment/IMG_6333.png";
import imag2 from "../../assets/new-portfolio/ai/environment/luckyekezie._A_sprawling_futuristic_cityscape_stretches_across__8c21613e-54cd-4e92-86e4-d8f2c00f273c.png";
import imag3 from "../../assets/new-portfolio/ai/environment/luckyekezie._A_breathtaking_alien_temple_stands_beneath_a_twili_eff2277b-793f-4ad1-b5e3-a59a15552eb6.png";
import imag4 from "../../assets/new-portfolio/ai/environment/luckyekezie._A_surreal_scene_in_a_minimalist_modern_interior_wi_1b489389-ba1e-44d5-a974-6c8a3b953aeb.png";
import imag5 from "../../assets/new-portfolio/ai/environment/luckyekezie._Mythical_hillside_city_of_spiraling_ivory_towers_c_ea92932d-a4b4-4e4d-bf05-55eca38f34e9.png";
import imag6 from "../../assets/new-portfolio/ai/environment/luckyekezie._Futuristic_megacity_with_towering_golden_skyscrape_c2e6317f-422b-43c1-850a-ac6994315f7a.png";
import imag7 from "../../assets/new-portfolio/ai/environment/IMG_6339.png";
import { useNavigate } from 'react-router-dom';

interface Image {
    id: number;
    src: string;
    title: string;
}

const MobileVersion: React.FC = () => {
    const images: Image[] = [
        { id: 0, src: imag1, title: 'Celestial Ascendance' },
        { id: 1, src: imag2, title: 'Beauty Beyond Time' },
        { id: 2, src: imag3, title: 'Royal Blood and Destiny' },
        { id: 3, src: imag4, title: 'Embrace of Nature' },
        { id: 4, src: imag5, title: 'Solace' },
        { id: 5, src: imag6, title: "Medusa's Awakening" },
        { id: 6, src: imag7, title: 'The Forgotten Guardian of Eldoria' },
    
      ];

    const [selectedImage, setSelectedImage] = useState<number>(0);
    const thumbnailRefs = useRef<(HTMLDivElement | null)[]>([]);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    
    // Touch/swipe handling
    const touchStartX = useRef<number>(0);
    const touchEndX = useRef<number>(0);

    const handleImageClick = (index: number) => {
        setSelectedImage(index);
        // Auto-scroll thumbnail into view
        if (thumbnailRefs.current[index] && scrollContainerRef.current) {
            thumbnailRefs.current[index]?.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
        }
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const swipeThreshold = 50;
        const diff = touchStartX.current - touchEndX.current;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0 && selectedImage < images.length - 1) {
                // Swipe left - next image
                handleImageClick(selectedImage + 1);
            } else if (diff < 0 && selectedImage > 0) {
                // Swipe right - previous image
                handleImageClick(selectedImage - 1);
            }
        }
    };



    return (
        <div className="fixed inset-0 bg-black lg:hidden overflow-y-auto">
            <div
                key={`bg-${selectedImage}`}
                className="fixed inset-0 z-0"
                style={{
                    backgroundImage: `url(${images[selectedImage].src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(50px)',
                    transform: 'scale(1.1)',
                }}
            />
            
            <div className="fixed inset-0 bg-black/40 z-10" />

            <div className="relative z-20 min-h-full flex flex-col">
                <div className="pt-10 flex justify-center items-center">
                    <button
                        onClick={() => navigate(-1)}
                        className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white/90 hover:bg-white/20 transition-colors"
                        aria-label="Close gallery"
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </button>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center px-4 pb-4">
                    <div 
                        key={selectedImage}
                        className="w-full max-w-sm"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <img
                            src={images[selectedImage].src}
                            alt={images[selectedImage].title}
                            className="w-full aspect-square "
                        />
                    </div>

                    <h2 className="text-white text-sm font-light mt-4 text-center drop-shadow-lg">
                        {images[selectedImage].title}
                    </h2>
                </div>

                <div className="px-4 pb-6">
                    <div 
                        ref={scrollContainerRef}
                        className="flex gap-3 overflow-x-auto pb-2"
                        style={{ scrollbarWidth: 'none' }}
                    >
                        {images.map((image, index) => (
                            <div
                                key={image.id}
                                ref={(el) => { thumbnailRefs.current[index] = el; }}
                                onClick={() => handleImageClick(index)}
                                className={`flex-shrink-0 overflow-hidden transition-all cursor-pointer ${
                                    selectedImage === index ? 'border-[#238EFF] border-t-2' : 'border-white/30 opacity-60 hover:opacity-100'
                                }`}
                            >
                                <img
                                    src={image.src}
                                    alt={image.title}
                                    className="w-16 h-16 object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileVersion;