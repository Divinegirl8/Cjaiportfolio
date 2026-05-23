import { useState, useRef } from 'react';
import video1 from "../../assets/new-portfolio/ai/videos/Perfume Ad.mp4";
import video2 from "../../assets/new-portfolio/ai/videos/Bloom Zobo AD 3.mp4";
import video3 from "../../assets/new-portfolio/ai/videos/tense.mp4";
import video4 from "../../assets/new-portfolio/ai/videos/Zombie.mp4";
import thumbnail1 from "../../assets/new-portfolio/ai/videos/perfume.png";
import thumbnail2 from "../../assets/new-portfolio/ai/videos/zobo.png";
import thumbnail3 from "../../assets/new-portfolio/ai/videos/tense.png";
import thumbnail4 from "../../assets/new-portfolio/ai/videos/zombie.png";
import { useNavigate } from 'react-router-dom';

interface Video {
    id: number;
    src: string;
    title: string;
    thumbnail: string;
}

const MobileVersion: React.FC = () => {
    const videos: Video[] = [
        { id: 0, src: video1, title: 'Celestial Ascendance', thumbnail: thumbnail1 },
        { id: 1, src: video2, title: 'Beauty Beyond Time', thumbnail: thumbnail2 },
        { id: 2, src: video3, title: 'Royal Blood and Destiny', thumbnail: thumbnail3 },
        { id: 3, src: video4, title: 'Embrace of Nature', thumbnail: thumbnail4 },
    ];

    const [selectedVideo, setSelectedVideo] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const thumbnailRefs = useRef<(HTMLDivElement | null)[]>([]);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const mainVideoRef = useRef<HTMLVideoElement>(null);
    const navigate = useNavigate();
    
    // Touch/swipe handling
    const touchStartX = useRef<number>(0);
    const touchEndX = useRef<number>(0);

    const handleVideoClick = (index: number) => {
        setSelectedVideo(index);
        setIsPlaying(false);
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
            if (diff > 0 && selectedVideo < videos.length - 1) {
                // Swipe left - next video
                handleVideoClick(selectedVideo + 1);
            } else if (diff < 0 && selectedVideo > 0) {
                // Swipe right - previous video
                handleVideoClick(selectedVideo - 1);
            }
        }
    };

    const togglePlayPause = () => {
        if (mainVideoRef.current) {
            if (isPlaying) {
                mainVideoRef.current.pause();
                setIsPlaying(false);
            } else {
                mainVideoRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    const toggleMute = () => {
        if (mainVideoRef.current) {
            mainVideoRef.current.muted = !mainVideoRef.current.muted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <div className="fixed inset-0 bg-black lg:hidden overflow-y-auto">
            <div
                key={`bg-${selectedVideo}`}
                className="fixed inset-0 z-0"
                style={{
                    backgroundImage: `url(${videos[selectedVideo].thumbnail})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(50px)',
                    transform: 'scale(1.1)',
                }}
            />
            
            <div className="fixed inset-0 bg-black/40 z-10" />

            <div className="relative z-20 min-h-full flex flex-col">
                <div className="pt-5 flex justify-center items-center">
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
                        key={selectedVideo}
                        className="w-full max-w-sm relative"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <video
                            ref={mainVideoRef}
                            src={videos[selectedVideo].src}
                            className="w-[530px] h-[530px] aspect-square "
                            playsInline
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
                        />

                        {/* Play/Pause Button */}
                        <button
                            onClick={togglePlayPause}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-all"
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

                        {/* Mute/Unmute Button */}
                        <button
                            onClick={toggleMute}
                            className="absolute top-4 right-12 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all"
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

                    <h2 className="text-white text-sm font-light mt-4 text-center drop-shadow-lg">
                        {videos[selectedVideo].title}
                    </h2>
                </div>

                <div className="px-4 pb-6 flex justify-center">
                    <div 
                        ref={scrollContainerRef}
                        className="flex gap-3 overflow-x-auto pb-2"
                        style={{ scrollbarWidth: 'none' }}
                    >
                        {videos.map((video, index) => (
                            <div
                                key={video.id}
                                ref={(el) => { thumbnailRefs.current[index] = el; }}
                                onClick={() => handleVideoClick(index)}
                                className={`flex-shrink-0 overflow-hidden transition-all cursor-pointer ${
                                    selectedVideo === index ? 'border-[#238EFF] border-t-2' : 'border-white/30 opacity-60 hover:opacity-100'
                                }`}
                            >
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
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
