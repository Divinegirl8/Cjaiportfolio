import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageSrc?: string;
  imageAlt?: string;
  imageOnLeft?: boolean;
  projectUrl: string; 
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  imageSrc,
  imageAlt = "Project image",
  imageOnLeft = true,
  projectUrl
}) => {
  const navigate = useNavigate();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    if (isHovering) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovering]);

  const handleClick = () => {
    if (window.innerWidth >= 768) { 
    navigate(projectUrl);}
  };

  const handleMobileClick = () => {
    navigate(projectUrl)
  }

  return (
    <>
      {/* Custom Cursor - only on desktop */}
      {isHovering && (
        <div
          className="hidden lg:block fixed pointer-events-none z-50 w-20 h-20  bg-[#001737] rounded-full transition-transform duration-200 ease-out"
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">
            View
          </div>
        </div>
      )}

      <div className="max-lg:px-7 px-20 max-md:pt-2 pt-5">
        <div className="border-t border-gray-300 max-md:py-10 py-16">
          <div
            className={`flex flex-col ${imageOnLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:items-center xl:items-stretch md:cursor-none cursor-pointer`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={handleClick}
          >
            
            {/* Image Section */}
            <div className="w-full md:w-1/2">
              {imageSrc ? (
                <img 
                  src={imageSrc} 
                  alt={imageAlt}
                  className="w-full h-auto rounded-lg"
                />
              ) : (
                <div className="w-full h-[400px] bg-gray-300 rounded-lg"></div>
              )}
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 flex flex-col justify-between">
              <div>
                <h2 className="text-[30px] lg:text-[40px] font-medium text-[#000000] mb-4">
                  {title}
                </h2>
                <p className="text-[20px] lg:text-[25px] text-[#626262] mb-6 leading-tight flex-grow">
                  {description}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 border border-[#CBCBCB] font-normal rounded-full text-[12px] text-[#626262]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="lg:hidden">
                          <button 
              className="bg-transparent text-[#000000] text-[18px] font-semibold py-3 px-6 rounded-sm w-full mt-10 border border-[#CBCBCB] disabled:cursor-not-allowed active:bg-[#238EFF] active:text-white transition-colors duration-150" 
              onClick={handleMobileClick}
            >
              View Case Study
            </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;