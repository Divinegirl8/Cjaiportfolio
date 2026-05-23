// import { useState, useRef, useEffect, useCallback } from 'react';
// import video1 from "../../assets/new-portfolio/ai/videos/Perfume Ad.mp4";
// import video2 from "../../assets/new-portfolio/ai/videos/Bloom Zobo AD 3.mp4";
// import video3 from "../../assets/new-portfolio/ai/videos/tense.mp4";
// import video4 from "../../assets/new-portfolio/ai/videos/Zombie.mp4";
// import thumbnail1 from "../../assets/new-portfolio/ai/videos/perfume.png";
// import thumbnail2 from "../../assets/new-portfolio/ai/videos/zobo.png";
// import thumbnail3 from "../../assets/new-portfolio/ai/videos/tense.png";
// import thumbnail4 from "../../assets/new-portfolio/ai/videos/zombie.png";
// import { useNavigate } from 'react-router-dom';




// interface Image {
//     id: number;
//     src: string;
//     title: string;
//     thumbnail?: string; 
//   }
  
//   const Videos: React.FC = () => {
//     const [selectedImage, setSelectedImage] = useState<number>(0);
//     const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
//     const [canScrollLeft, setCanScrollLeft] = useState(false);
//     const [canScrollRight, setCanScrollRight] = useState(false);
//     const [isPlaying, setIsPlaying] = useState(false);
//     const [showControls, setShowControls] = useState(true);
//     const [isMuted, setIsMuted] = useState(false);
//     const thumbnailRefs = useRef<(HTMLDivElement | null)[]>([]);
//     const containerRef = useRef<HTMLDivElement>(null);
//     const scrollContainerRef = useRef<HTMLDivElement>(null);
//     const mainVideoRef = useRef<HTMLVideoElement>(null);
//     const controlsTimeoutRef = useRef<number | null>(null);
//     const navigate = useNavigate();
    
    
//     const images: Image[] = [
//       { id: 0, src: video1, title: 'Celestial Ascendance' ,thumbnail: thumbnail1}, 
//       { id: 1, src: video2, title: 'Beauty Beyond Time' ,thumbnail: thumbnail2}, 
//       { id: 2, src: video3, title: 'Royal Blood and Destiny' ,thumbnail: thumbnail3}, 
//       { id: 3, src: video4, title: 'Embrace of Nature' ,thumbnail: thumbnail4}, 
  
//     ];
  
   
//     const checkScrollPosition = () => {
//       const scrollContainer = scrollContainerRef.current;
//       if (scrollContainer) {
//         const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
//         setCanScrollLeft(scrollLeft > 0);
//         setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
//       }
//     };
  
//     useEffect(() => {
//       const updateIndicator = () => {
//         if (thumbnailRefs.current[selectedImage] && containerRef.current && scrollContainerRef.current) {
//           const thumbnail = thumbnailRefs.current[selectedImage];
          
//           setIndicatorStyle({
//             left: thumbnail.offsetLeft,
//             width: thumbnail.offsetWidth
//           });
//         }
//       };
  
//       updateIndicator();
//       checkScrollPosition();
  
  
//       const scrollContainer = scrollContainerRef.current;
//       if (scrollContainer) {
//         const handleScroll = () => {
//           checkScrollPosition();
//         };
//         scrollContainer.addEventListener('scroll', handleScroll);
//         return () => scrollContainer.removeEventListener('scroll', handleScroll);
//       }
//     }, [selectedImage]);
  
//     useEffect(() => {
//       if (thumbnailRefs.current[selectedImage] && scrollContainerRef.current) {
//         const thumbnail = thumbnailRefs.current[selectedImage];
//         const scrollContainer = scrollContainerRef.current;
        
//         const thumbnailLeft = thumbnail.offsetLeft;
//         const thumbnailWidth = thumbnail.offsetWidth;
//         const scrollLeft = scrollContainer.scrollLeft;
//         const containerWidth = scrollContainer.clientWidth;
        
//         const thumbnailRight = thumbnailLeft + thumbnailWidth;
//         const visibleRight = scrollLeft + containerWidth;
        
//         const buffer = thumbnailWidth * 2;
//         if (thumbnailRight > visibleRight - buffer) {
//           scrollContainer.scrollTo({
//             left: thumbnailLeft - containerWidth + thumbnailWidth + 40,
//             behavior: 'smooth'
//           });
//         }
//         else if (thumbnailLeft < scrollLeft) {
//           scrollContainer.scrollTo({
//             left: thumbnailLeft - 40,
//             behavior: 'smooth'
//           });
//         }
//       }
//     }, [selectedImage]);

//     // Reset video when selection changes
//     useEffect(() => {
//       if (mainVideoRef.current) {
//         mainVideoRef.current.load();
//         setIsPlaying(false);
//       }
//     }, [selectedImage]);

//     // Video event handlers
//     useEffect(() => {
//       const video = mainVideoRef.current;
//       if (!video) return;

//       const handlePlay = () => {
//         setIsPlaying(true);
//       };

//       const handlePause = () => {
//         setIsPlaying(false);
//       };

//       video.addEventListener('play', handlePlay);
//       video.addEventListener('pause', handlePause);

//       return () => {
//         video.removeEventListener('play', handlePlay);
//         video.removeEventListener('pause', handlePause);
//       };
//     }, [selectedImage]);

//     // Auto-hide controls
//     const resetControlsTimeout = useCallback(() => {
//       if (controlsTimeoutRef.current) {
//         window.clearTimeout(controlsTimeoutRef.current);
//       }
//       setShowControls(true);
//       if (isPlaying) {
//         controlsTimeoutRef.current = window.setTimeout(() => {
//           setShowControls(false);
//         }, 3000);
//       }
//     }, [isPlaying]);

//     useEffect(() => {
//       resetControlsTimeout();
//       return () => {
//         if (controlsTimeoutRef.current) {
//           window.clearTimeout(controlsTimeoutRef.current);
//         }
//       };
//     }, [isPlaying, resetControlsTimeout]);

//     const togglePlayPause = () => {
//       if (mainVideoRef.current) {
//         if (isPlaying) {
//           mainVideoRef.current.pause();
//         } else {
//           mainVideoRef.current.play();
//         }
//       }
//     };

//     const toggleMute = () => {
//       if (mainVideoRef.current) {
//         mainVideoRef.current.muted = !mainVideoRef.current.muted;
//         setIsMuted(!isMuted);
//       }
//     };

//     const handleVideoClick = () => {
//       togglePlayPause();
//       resetControlsTimeout();
//     };

//     const handleMouseMove = () => {
//       resetControlsTimeout();
//     };
  
//     const handleImageClick = (index: number) => {
//       setSelectedImage(index);
//     };
  
//     const handlePrevious = () => {
//       setSelectedImage((prev) => (prev > 0 ? prev - 1 : prev));
//     };
  
//     const handleNext = () => {
//       setSelectedImage((prev) => (prev < images.length - 1 ? prev + 1 : prev));
//     };
  
//     const scrollThumbnailsLeft = () => {
//       const scrollContainer = scrollContainerRef.current;
//       if (scrollContainer) {
//         scrollContainer.scrollBy({
//           left: -300,
//           behavior: 'smooth'
//         });
//       }
//     };
  
//     const scrollThumbnailsRight = () => {
//       const scrollContainer = scrollContainerRef.current;
//       if (scrollContainer) {
//         scrollContainer.scrollBy({
//           left: 300,
//           behavior: 'smooth'
//         });
//       }
//     };
  
  
  
  
//     return (
//       <>
//        <div className='hidden lg:block'>
  
  
//        <div className="min-h-screen flex items-center justify-center p-4 sm:p-8  relative overflow-hidden">
//         {/* Dynamic Background Video/Image */}
//                 <div 
//             key={`bg-${selectedImage}`}
//             className="absolute inset-0 transition-opacity duration-700 ease-in-out overflow-hidden"
//           >
//                   <div className="absolute inset-0">
//                     {images[selectedImage].thumbnail ? (
//                       <div
//                         className="w-full h-full"
//                         style={{
//                           backgroundImage: `url(${images[selectedImage].thumbnail})`,
//                           backgroundSize: 'cover',
//                           backgroundPosition: 'center',
//                           filter: 'blur(50px)',
//                           transform: 'scale(1.1)',
//                         }}
//                       />
//                     ) : (
//                       <video
//                         loop
//                         muted
//                         playsInline
//                         className="w-full h-full object-cover"
//                         style={{
//                           filter: 'blur(50px)',
//                           transform: 'scale(1.1)',
//                         }}
//                       >
//                         <source src={images[selectedImage].src} type="video/mp4" />
//                       </video>
//                     )}
//                   </div>
//                   <div className="absolute inset-0 bg-black opacity-40" />
//                   </div>
                
  
//                 <style>{`
//                   @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');
              
//                   .gallery-container {
//                     animation: fadeIn 0.8s ease-out;
//                   }
                  
//                   @keyframes fadeIn {
//                     from {
//                       opacity: 0;
//                       transform: translateY(20px);
//                     }
//                     to {
//                       opacity: 1;
//                       transform: translateY(0);
//                     }
//                   }
                  
//                   .main-image-container {
//                     animation: slideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1);
//                   }
                  
//                   @keyframes slideIn {
//                     from {
//                       opacity: 0;
//                       transform: scale(0.95);
//                     }
//                     to {
//                       opacity: 1;
//                       transform: scale(1);
//                     }
//                   }
                  
//                   .thumbnail {
//                     transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//                     cursor: pointer;
//                   }
                  
//                   .thumbnail:hover {
//                     transform: translateY(-4px);
//                   }
                  
//                   .thumbnail.selected {
//                     border-color: rgba(255, 255, 255, 0.9);
//                     box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.2);
//                   }
                  
//                   .nav-button {
//                     transition: all 0.3s ease;
//                     backdrop-filter: blur(8px);
//                   }
                  
//                   .nav-button:hover:not(:disabled) {
//                     background-color: rgba(255, 255, 255, 0.15);
//                     transform: scale(1.1);
//                   }
  
//                   .nav-button:disabled {
//                     opacity: 0.3;
//                     cursor: not-allowed;
//                   }
                  
//                   .close-button {
//                     transition: all 0.3s ease;
//                     backdrop-filter: blur(8px);
//                   }
                  
//                   .close-button:hover {
//                     background-color: rgba(255, 255, 255, 0.15);
//                     transform: rotate(90deg);
//                   }
                  
//                   .thumbnail-scroll {
//                     scrollbar-width: thin;
//                     scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
//                     scroll-behavior: smooth;
//                   }
                  
//                   .thumbnail-scroll::-webkit-scrollbar {
//                     height: 6px;
//                   }
                  
//                   .thumbnail-scroll::-webkit-scrollbar-track {
//                     background: transparent;
//                   }
                  
//                   .thumbnail-scroll::-webkit-scrollbar-thumb {
//                     background-color: rgba(255, 255, 255, 0.3);
//                     border-radius: 3px;
//                   }
                  
//                   .thumbnail-scroll::-webkit-scrollbar-thumb:hover {
//                     background-color: rgba(255, 255, 255, 0.5);
//                   }
                  
//                   .image-title {
//                     letter-spacing: 0.05em;
//                   }
  
//                   .thumbnail-arrow {
//                     transition: all 0.3s ease;
//                   }
  
//                   .thumbnail-arrow:hover:not(:disabled) {
//                     background-color: rgba(0, 0, 0, 0.1);
//                   }
  
//                   .thumbnail-arrow:disabled {
//                     opacity: 0.3;
//                     cursor: not-allowed;
//                   }

//                   .video-controls {
//                     transition: opacity 0.3s ease;
//                   }

//                   .video-controls.hidden {
//                     opacity: 0;
//                   }
//                 `}</style>
  
//                 <div className="gallery-container w-full max-w-6xl relative z-10" >
//                 <div className="flex relative z-50">
//             <div 
//               className="ml-auto  cursor-pointer" 
//               onClick={() => navigate(-1)}
//             >
//               <button
//                 className="text-white/90 text-[16px] hover:text-white transition-colors w-[74px] h-[32px] pointer-events-none"
//                 aria-label="Close gallery"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
  
//                   {/* Main Video Display */}
//                   <div className="relative mb-6 sm:mb-20 -mt-10 w-full ">
            
//                     {/* CENTERED VIDEO WITH CUSTOM CONTROLS */}
//                     <div
//                       key={selectedImage}
//                       className="relative mx-auto"
//                       style={{ maxWidth: '680px' }}
//                       onMouseMove={handleMouseMove}
//                     >
//                       <div className="relative w-[425px] h-[650px] mx-auto">
//                         <video
//                           ref={mainVideoRef}
//                           className="w-full h-full cursor-pointer"
//                           onClick={handleVideoClick}
//                           playsInline
//                         >
//                           <source src={images[selectedImage].src} type="video/mp4" />
//                           Your browser does not support the video tag.
//                         </video>

//                         {/* Custom Video Controls */}
//                         <div 
//                           className={`video-controls absolute inset-0 flex items-center justify-center ${
//                             showControls ? '' : 'hidden'
//                           }`}
//                         >
//                           {/* Center Play/Pause Button */}
//                           <button
//                             onClick={togglePlayPause}
//                             className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-all"
//                             aria-label={isPlaying ? 'Pause' : 'Play'}
//                           >
//                             {!isPlaying ? (
//                               <svg width="32" height="32" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M8 5v14l11-7L8 5z" />
//                               </svg>
//                             ) : (
//                               <svg width="32" height="32" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
//                               </svg>
//                             )}
//                           </button>
//                         </div>

//                         {/* Mute/Unmute Button - Top Right Corner */}
//                         <div 
//                           className={`video-controls absolute top-4 right-4 cursor-pointer ${
//                             showControls ? '' : 'hidden'
//                           }`}
//                         >
//                           <button
//                             onClick={toggleMute}
//                             className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all"
//                             aria-label={isMuted ? 'Unmute' : 'Mute'}
//                           >
//                             {!isMuted ? (
//                               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M11 5L6 9H2v6h4l5 4V5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                                 <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                               </svg>
//                             ) : (
//                               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M11 5L6 9H2v6h4l5 4V5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                                 <line x1="23" y1="9" x2="17" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
//                                 <line x1="17" y1="9" x2="23" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
//                               </svg>
//                             )}
//                           </button>
//                         </div>
//                       </div>
//                     </div>
  
//                     {/* PREVIOUS — FAR LEFT */}
//                     <button
//                       onClick={handlePrevious}
//                       disabled={selectedImage === 0}
//                       className="nav-button absolute left-10 top-1/2 -translate-y-1/2
//                                 w-10 h-10 sm:w-[83px] sm:h-[83px] 
//                                 rounded-full border border-white/20
//                                 flex items-center justify-center text-white/90 transition-all"
//                       aria-label="Previous image"
//                     >
//                       <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M31.4375 41.5L17.8542 27.9167C16.25 26.3125 16.25 23.6875 17.8542 22.0833L31.4375 8.5" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
//                       </svg>
//                     </button>
  
//                     {/* NEXT — FAR RIGHT */}
//                     <button
//                       onClick={handleNext}
//                       disabled={selectedImage === images.length - 1}
//                       className="nav-button absolute right-6 top-1/2 -translate-y-1/2
//                                 w-10 h-10 sm:w-[83px] sm:h-[83px]
//                                 rounded-full border border-white/20
//                                 flex items-center justify-center text-white/90 transition-all"
//                       aria-label="Next image"
//                     >
//                       <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M18.5625 41.5L32.1458 27.9167C33.75 26.3125 33.75 23.6875 32.1458 22.0833L18.5625 8.5" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
//                       </svg>
//                     </button>
  
//                     {/* TITLE */}
//                     <div className="text-center mt-4 sm:mt-6">
//                       <h2 className="text-[16px] text-white font-normal">
//                         {images[selectedImage].title}
//                       </h2>
//                     </div>
//                   </div>
  
  
                  
//                 </div>
//               </div>
  
//                 {/* Container with background color that extends below */}
//           <div className="bg-[#EEF1F4] pt-14 pb-14">
//             {/* Thumbnail section - positioned to be half in main image, half in gray bg */}
//             <div className="relative px-4 sm:px-8 flex justify-center items-center -mt-34 z-20">
//               <div ref={containerRef} className="bg-white py-5 px-6 w-[660px] relative overflow-hidden flex items-center gap-4 shadow-lg">
//                 {/* Left Arrow */}
//                 <button
//                   onClick={scrollThumbnailsLeft}
//                   disabled={!canScrollLeft}
//                   className="thumbnail-arrow flex-shrink-0 w-10 h-10 flex items-center justify-center z-20"
//                   aria-label="Scroll thumbnails left"
//                 >
//                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </button>
  
//                 <div className="flex-1 relative overflow-hidden ">
//                   <div 
//                     ref={scrollContainerRef}
//                     className="thumbnail-scroll flex gap-4 overflow-x-auto pb-2 relative pt-1"
//                   >
//                     <div 
//                       className="absolute top-0 left-0 h-1 bg-[#238EFF] z-10 transition-all duration-300 pointer-events-none"
//                       style={{
//                         transform: `translateX(${indicatorStyle.left}px)`,
//                         width: `${indicatorStyle.width}px`
//                       }}
//                     />
//                     {images.map((image, index) => (
//                       <div
//                         key={image.id}
//                         ref={(el) => { thumbnailRefs.current[index] = el; }}
//                         onClick={() => handleImageClick(index)}
//                         className="thumbnail flex-shrink-0 overflow-hidden"
//                       >
//                         {image.thumbnail ? (
//                           <img
//                             src={image.thumbnail}
//                             alt={image.title}
//                             className="w-[120px] h-[120px] object-cover"
//                           />
//                         ) : (
//                           <video
//                             muted
//                             playsInline
//                             className="w-[120px] h-[120px] object-cover"
//                           >
//                             <source src={image.src} type="video/mp4" />
//                           </video>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
  
//                 {/* Right Arrow */}
//                 <button
//                   onClick={scrollThumbnailsRight}
//                   disabled={!canScrollRight}
//                   className="thumbnail-arrow flex-shrink-0 w-10 h-10 flex items-center justify-center z-20"
//                   aria-label="Scroll thumbnails right"
//                 >
//                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
  
//        </div>
        
         
  
    
  
//   </>
//     );
//   };
  
//   export default Videos;


import { useState, useRef, useEffect, useCallback } from 'react';
import video1 from "../../assets/new-portfolio/ai/videos/Perfume Ad.mp4";
import video2 from "../../assets/new-portfolio/ai/videos/Bloom Zobo AD 3.mp4";
import video3 from "../../assets/new-portfolio/ai/videos/tense.mp4";
import video4 from "../../assets/new-portfolio/ai/videos/Zombie.mp4";
import thumbnail1 from "../../assets/new-portfolio/ai/videos/perfume.png";
import thumbnail2 from "../../assets/new-portfolio/ai/videos/zobo.png";
import thumbnail3 from "../../assets/new-portfolio/ai/videos/tense.png";
import thumbnail4 from "../../assets/new-portfolio/ai/videos/zombie.png";
import { useNavigate } from 'react-router-dom';
import MobileVersion from './MobileVersion';




interface Image {
    id: number;
    src: string;
    title: string;
    thumbnail?: string; 
  }
  
  const Videos: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<number>(0);
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showControls, setShowControls] = useState(true);
    const [isMuted, setIsMuted] = useState(false);
    const thumbnailRefs = useRef<(HTMLDivElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const mainVideoRef = useRef<HTMLVideoElement>(null);
    const controlsTimeoutRef = useRef<number | null>(null);
    const navigate = useNavigate();
    
    
    const images: Image[] = [
      { id: 0, src: video1, title: 'Celestial Ascendance' ,thumbnail: thumbnail1}, 
      { id: 1, src: video2, title: 'Beauty Beyond Time' ,thumbnail: thumbnail2}, 
      { id: 2, src: video3, title: 'Royal Blood and Destiny' ,thumbnail: thumbnail3}, 
      { id: 3, src: video4, title: 'Embrace of Nature' ,thumbnail: thumbnail4}, 
  
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
        
        const thumbnailRight = thumbnailLeft + thumbnailWidth;
        const visibleRight = scrollLeft + containerWidth;
        
        const buffer = thumbnailWidth * 2;
        if (thumbnailRight > visibleRight - buffer) {
          scrollContainer.scrollTo({
            left: thumbnailLeft - containerWidth + thumbnailWidth + 40,
            behavior: 'smooth'
          });
        }
        else if (thumbnailLeft < scrollLeft) {
          scrollContainer.scrollTo({
            left: thumbnailLeft - 40,
            behavior: 'smooth'
          });
        }
      }
    }, [selectedImage]);

    // Reset video when selection changes
    useEffect(() => {
      if (mainVideoRef.current) {
        mainVideoRef.current.load();
        setIsPlaying(false);
      }
    }, [selectedImage]);

    // Video event handlers
    useEffect(() => {
      const video = mainVideoRef.current;
      if (!video) return;

      const handlePlay = () => {
        setIsPlaying(true);
      };

      const handlePause = () => {
        setIsPlaying(false);
      };

      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);

      return () => {
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
      };
    }, [selectedImage]);

    // Auto-hide controls
    const resetControlsTimeout = useCallback(() => {
      if (controlsTimeoutRef.current) {
        window.clearTimeout(controlsTimeoutRef.current);
      }
      setShowControls(true);
      if (isPlaying) {
        controlsTimeoutRef.current = window.setTimeout(() => {
          setShowControls(false);
        }, 3000);
      }
    }, [isPlaying]);

    useEffect(() => {
      resetControlsTimeout();
      return () => {
        if (controlsTimeoutRef.current) {
          window.clearTimeout(controlsTimeoutRef.current);
        }
      };
    }, [isPlaying, resetControlsTimeout]);

    const togglePlayPause = () => {
      if (mainVideoRef.current) {
        if (isPlaying) {
          mainVideoRef.current.pause();
        } else {
          mainVideoRef.current.play();
        }
      }
    };

    const toggleMute = () => {
      if (mainVideoRef.current) {
        mainVideoRef.current.muted = !mainVideoRef.current.muted;
        setIsMuted(!isMuted);
      }
    };

    const handleVideoClick = () => {
      togglePlayPause();
      resetControlsTimeout();
    };

    const handleMouseMove = () => {
      resetControlsTimeout();
    };
  
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
        {/* Dynamic Background Video/Image */}
                <div 
            key={`bg-${selectedImage}`}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out overflow-hidden"
          >
                  <div className="absolute inset-0">
                    {images[selectedImage].thumbnail ? (
                      <div
                        className="w-full h-full"
                        style={{
                          backgroundImage: `url(${images[selectedImage].thumbnail})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          filter: 'blur(50px)',
                          transform: 'scale(1.1)',
                        }}
                      />
                    ) : (
                      <video
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        style={{
                          filter: 'blur(50px)',
                          transform: 'scale(1.1)',
                        }}
                      >
                        <source src={images[selectedImage].src} type="video/mp4" />
                      </video>
                    )}
                  </div>
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

                  .video-controls {
                    transition: opacity 0.3s ease;
                  }

                  .video-controls.hidden {
                    opacity: 0;
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
  
                  {/* Main Video Display */}
                  <div className="relative mb-6 sm:mb-20 -mt-10 w-full ">
            
                    {/* CENTERED VIDEO WITH CUSTOM CONTROLS */}
                    <div
                      key={selectedImage}
                      className="relative mx-auto"
                      style={{ maxWidth: '680px' }}
                      onMouseMove={handleMouseMove}
                    >
                      <div className="relative w-[425px] h-[650px] mx-auto">
                        <video
                          ref={mainVideoRef}
                          className="w-full h-full  cursor-pointer"
                          onClick={handleVideoClick}
                          playsInline
                        >
                          <source src={images[selectedImage].src} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>

                        {/* Custom Video Controls */}
                        <div 
                          className={`video-controls absolute inset-0 flex items-center justify-center pointer-events-none ${
                            showControls ? '' : 'hidden'
                          }`}
                        >
                          {/* Center Play/Pause Button */}
                          <button
                            onClick={togglePlayPause}
                            className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-all pointer-events-auto"
                            aria-label={isPlaying ? 'Pause' : 'Play'}
                          >
                            {!isPlaying ? (
                              <svg width="32" height="32" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 5v14l11-7L8 5z" />
                              </svg>
                            ) : (
                              <svg width="32" height="32" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                              </svg>
                            )}
                          </button>
                        </div>

                        {/* Mute/Unmute Button - Top Right Corner */}
                        <div 
                          className={`video-controls absolute top-4 right-8 z-50 ${
                            showControls ? '' : 'hidden'
                          }`}
                        >
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleMute();
                            }}
                            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all"
                            aria-label={isMuted ? 'Unmute' : 'Mute'}
                          >
                            {!isMuted ? (
                             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M11 5L6 9H2v6h4l5 4V5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                             <line x1="23" y1="9" x2="17" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                             <line x1="17" y1="9" x2="23" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                           </svg>
                            ) : (   

                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 5L6 9H2v6h4l5 4V5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            )}
                          </button>
                        </div>
                      </div>
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
          <div className="bg-[#EEF1F4] pt-14 pb-12">
            {/* Thumbnail section - positioned to be half in main image, half in gray bg */}
            <div className="relative px-4 sm:px-8 flex justify-center items-center -mt-34 z-20">
              <div ref={containerRef} className="bg-white py-5 px-6 w-[660px] relative overflow-hidden flex items-center gap-4 shadow-lg">
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
                        {image.thumbnail ? (
                          <img
                            src={image.thumbnail}
                            alt={image.title}
                            className="w-[120px] h-[120px] object-cover"
                          />
                        ) : (
                          <video
                            muted
                            playsInline
                            className="w-[120px] h-[120px] object-cover"
                          >
                            <source src={image.src} type="video/mp4" />
                          </video>
                        )}
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
  
  export default Videos;