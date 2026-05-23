import React, { useState, useRef, useEffect } from 'react';
import imag1 from "../../assets/new-portfolio/ai/character/luckyekezie._An_ethereal_humanoid_figure_levitating_mid-air_in__d5ecd3d3-b549-49b4-b064-1a0cc8f3b779 3.png";
import imag2 from "../../assets/new-portfolio/ai/character/luckyekezie_A_mystical_African_woman_emerging_from_an_organic_d3d7a17a 3.png";
import imag3 from "../../assets/new-portfolio/ai/character/luckyekezie._A_powerful_African_warrior_draped_in_elaborate_tri_392b4f3e-a9bc-4d62-9f69-be5f27fe9b74 3.png";
import imag4 from "../../assets/new-portfolio/ai/character/luckyekezie_An_African_person_in_minimalist_white_clothing_sit_738192cb 3.png";
import imag5 from "../../assets/new-portfolio/ai/character/luckyekezie_An_astronaut_in_a_minimalist_beige_jumpsuit_sittin_783f11ab 2.png";
import imag6 from "../../assets/new-portfolio/ai/character/IMG_6346.png";
import imag7 from "../../assets/new-portfolio/ai/character/luckyekezie._A_mystical_armored_warrior_standing_in_a_lush_ench_c10c7021-5b98-4829-8d2f-346ec2b72634 3.png";
import imag8 from "../../assets/new-portfolio/ai/character/luckyekezie._A_regal_African_woman_with_deep_brown_skin_adorned_e2376211-6f62-413c-80a5-a6890bb30447 3.png";
import imag9 from "../../assets/new-portfolio/ai/character/luckyekezie._A_futuristic_alien_warlord_in_a_sleek_dark_exosuit_881520ef-d0c8-4906-9297-346c0f116800 3.png";
import imag10 from "../../assets/new-portfolio/ai/character/luckyekezie._A_surreal_sculpture_of_a_regal_figure_with_a_crack_466cb2e2-0950-41f3-bf87-f4935c5e7dab 3.png"
import { useNavigate } from 'react-router-dom';
import MobileVersion from './MobileVersion';



interface Image {
  id: number;
  src: string;
  title: string;
}

const Characters: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const thumbnailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  
  const images: Image[] = [
    { id: 0, src: imag1, title: 'Celestial Ascendance' },
    { id: 1, src: imag2, title: 'Beauty Beyond Time' },
    { id: 2, src: imag3, title: 'Royal Blood and Destiny' },
    { id: 3, src: imag4, title: 'Embrace of Nature' },
    { id: 4, src: imag5, title: 'Solace' },
    { id: 5, src: imag6, title: "Medusa's Awakening" },
    { id: 6, src: imag7, title: 'The Forgotten Guardian of Eldoria' },
    { id: 7, src: imag8, title: 'Black Panther Character' },
    { id: 8, src: imag9, title: 'The Shadow Legion' },
    { id: 9, src: imag10, title: 'Beauty in Decay' }
  ];

 
  const checkScrollPosition = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const updateIndicator = () => {
      if (thumbnailRefs.current[selectedImage] && containerRef.current && scrollContainerRef.current) {
        const thumbnail = thumbnailRefs.current[selectedImage];
        
        // Use offsetLeft to get position relative to the scroll container
        // This keeps the indicator fixed to the thumbnail's absolute position
        setIndicatorStyle({
          left: thumbnail.offsetLeft,
          width: thumbnail.offsetWidth
        });
      }
    };

    updateIndicator();
    checkScrollPosition();


    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const handleScroll = () => {
        checkScrollPosition();
      };
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, [selectedImage]);

  useEffect(() => {
    if (thumbnailRefs.current[selectedImage] && scrollContainerRef.current) {
      const thumbnail = thumbnailRefs.current[selectedImage];
      const scrollContainer = scrollContainerRef.current;
      
      const thumbnailLeft = thumbnail.offsetLeft;
      const thumbnailWidth = thumbnail.offsetWidth;
      const scrollLeft = scrollContainer.scrollLeft;
      const containerWidth = scrollContainer.clientWidth;
      
      // Calculate if thumbnail is near the right edge (second-to-last visible)
      const thumbnailRight = thumbnailLeft + thumbnailWidth;
      const visibleRight = scrollLeft + containerWidth;
      
      // Scroll if thumbnail is too close to the right edge (with buffer for second-to-last)
      const buffer = thumbnailWidth * 2; // Buffer for 2 thumbnails
      if (thumbnailRight > visibleRight - buffer) {
        scrollContainer.scrollTo({
          left: thumbnailLeft - containerWidth + thumbnailWidth + 40, // 40 for some padding
          behavior: 'smooth'
        });
      }
      // Scroll if thumbnail is past the left edge
      else if (thumbnailLeft < scrollLeft) {
        scrollContainer.scrollTo({
          left: thumbnailLeft - 40, // 40 for some padding
          behavior: 'smooth'
        });
      }
    }
  }, [selectedImage]);

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  const handlePrevious = () => {
    setSelectedImage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setSelectedImage((prev) => (prev < images.length - 1 ? prev + 1 : prev));
  };

  const scrollThumbnailsLeft = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollThumbnailsRight = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };




  return (
    <>
     <div className='hidden lg:block'>


     <div className="min-h-screen flex items-center justify-center p-4 sm:p-8  relative overflow-hidden">
      {/* Dynamic Background Image */}
              <div 
          key={`bg-${selectedImage}`}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out overflow-hidden"
        >
                <div
                    className="absolute inset-0"
                    style={{
                    backgroundImage: `url(${images[selectedImage].src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(50px)',
                    transform: 'scale(1.1)',
                    }}
                />
                <div className="absolute inset-0 bg-black opacity-40" />
                </div>
              

              <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');
            
                .gallery-container {
                  animation: fadeIn 0.8s ease-out;
                }
                
                @keyframes fadeIn {
                  from {
                    opacity: 0;
                    transform: translateY(20px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
                
                .main-image-container {
                  animation: slideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                }
                
                @keyframes slideIn {
                  from {
                    opacity: 0;
                    transform: scale(0.95);
                  }
                  to {
                    opacity: 1;
                    transform: scale(1);
                  }
                }
                
                .thumbnail {
                  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                  cursor: pointer;
                }
                
                .thumbnail:hover {
                  transform: translateY(-4px);
                }
                
                .thumbnail.selected {
                  border-color: rgba(255, 255, 255, 0.9);
                  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.2);
                }
                
                .nav-button {
                  transition: all 0.3s ease;
                  backdrop-filter: blur(8px);
                }
                
                .nav-button:hover:not(:disabled) {
                  background-color: rgba(255, 255, 255, 0.15);
                  transform: scale(1.1);
                }

                .nav-button:disabled {
                  opacity: 0.3;
                  cursor: not-allowed;
                }
                
                .close-button {
                  transition: all 0.3s ease;
                  backdrop-filter: blur(8px);
                }
                
                .close-button:hover {
                  background-color: rgba(255, 255, 255, 0.15);
                  transform: rotate(90deg);
                }
                
                .thumbnail-scroll {
                  scrollbar-width: thin;
                  scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
                  scroll-behavior: smooth;
                }
                
                .thumbnail-scroll::-webkit-scrollbar {
                  height: 6px;
                }
                
                .thumbnail-scroll::-webkit-scrollbar-track {
                  background: transparent;
                }
                
                .thumbnail-scroll::-webkit-scrollbar-thumb {
                  background-color: rgba(255, 255, 255, 0.3);
                  border-radius: 3px;
                }
                
                .thumbnail-scroll::-webkit-scrollbar-thumb:hover {
                  background-color: rgba(255, 255, 255, 0.5);
                }
                
                .image-title {
                
                  letter-spacing: 0.05em;
                }

                .thumbnail-arrow {
                  transition: all 0.3s ease;
                }

                .thumbnail-arrow:hover:not(:disabled) {
                  background-color: rgba(0, 0, 0, 0.1);
                }

                .thumbnail-arrow:disabled {
                  opacity: 0.3;
                  cursor: not-allowed;
                }
              `}</style>

              <div className="gallery-container w-full max-w-6xl relative z-10" >
              <div className="flex relative z-50">
          <div 
            className="ml-auto  cursor-pointer" 
            onClick={() => navigate(-1)}
          >
            <button
              className="text-white/90 text-[16px] hover:text-white transition-colors w-[74px] h-[32px] pointer-events-none"
              aria-label="Close gallery"
            >
              Close
            </button>
          </div>
        </div>

                {/* Main Image Display */}
                <div className="relative mb-6 sm:mb-20 mt-10 w-full ">
          
                  {/* CENTERED IMAGE */}
                  <div
                    key={selectedImage}
                    className="relative mx-auto"
                    style={{ maxWidth: '680px' }}
                  >
                    <img
                      src={images[selectedImage].src}
                      alt={images[selectedImage].title}
                      className="w-[550px] h-[550px] object-cover mx-auto"
                    />
                  </div>

                  {/* PREVIOUS — FAR LEFT */}
                  <button
                    onClick={handlePrevious}
                    disabled={selectedImage === 0}
                    className="nav-button absolute left-10 top-1/2 -translate-y-1/2
                              w-10 h-10 sm:w-[83px] sm:h-[83px] 
                              rounded-full border border-white/20
                              flex items-center justify-center text-white/90 transition-all"
                    aria-label="Previous image"
                  >
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M31.4375 41.5L17.8542 27.9167C16.25 26.3125 16.25 23.6875 17.8542 22.0833L31.4375 8.5" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  {/* NEXT — FAR RIGHT */}
                  <button
                    onClick={handleNext}
                    disabled={selectedImage === images.length - 1}
                    className="nav-button absolute right-6 top-1/2 -translate-y-1/2
                              w-10 h-10 sm:w-[83px] sm:h-[83px]
                              rounded-full border border-white/20
                              flex items-center justify-center text-white/90 transition-all"
                    aria-label="Next image"
                  >
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.5625 41.5L32.1458 27.9167C33.75 26.3125 33.75 23.6875 32.1458 22.0833L18.5625 8.5" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  {/* TITLE */}
                  <div className="text-center mt-4 sm:mt-6">
                    <h2 className="text-[16px] text-white font-normal">
                      {images[selectedImage].title}
                    </h2>
                  </div>
                </div>


                
              </div>
            </div>

              {/* Container with background color that extends below */}
        <div className="bg-[#EEF1F4] pt-14 pb-14">
          {/* Thumbnail section - positioned to be half in main image, half in gray bg */}
          <div className="relative px-4 sm:px-8 flex justify-center items-center -mt-34 z-20">
            <div ref={containerRef} className="bg-white py-5 px-6 w-[1000px] relative overflow-hidden flex items-center gap-4 shadow-lg">
              {/* Left Arrow */}
              <button
                onClick={scrollThumbnailsLeft}
                disabled={!canScrollLeft}
                className="thumbnail-arrow flex-shrink-0 w-10 h-10 flex items-center justify-center z-20"
                aria-label="Scroll thumbnails left"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className="flex-1 relative overflow-hidden ">
                <div 
                  ref={scrollContainerRef}
                  className="thumbnail-scroll flex gap-4 overflow-x-auto pb-2 relative pt-1"
                >
                  <div 
                    className="absolute top-0 left-0 h-1 bg-[#238EFF] z-10 transition-all duration-300 pointer-events-none"
                    style={{
                      transform: `translateX(${indicatorStyle.left}px)`,
                      width: `${indicatorStyle.width}px`
                    }}
                  />
                  {images.map((image, index) => (
                    <div
                      key={image.id}
                      ref={(el) => { thumbnailRefs.current[index] = el; }}
                      onClick={() => handleImageClick(index)}
                      className="thumbnail flex-shrink-0 overflow-hidden"
                    >
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-[120px] h-[120px] object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Arrow */}
              <button
                onClick={scrollThumbnailsRight}
                disabled={!canScrollRight}
                className="thumbnail-arrow flex-shrink-0 w-10 h-10 flex items-center justify-center z-20"
                aria-label="Scroll thumbnails right"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

     </div>
      
            <MobileVersion/>

  

</>
  );
};

export default Characters;