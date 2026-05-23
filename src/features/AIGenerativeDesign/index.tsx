import React from 'react';
import mysteryImage from "../../assets/new-portfolio/ai/Mask group (15).png";
import castleImage from "../../assets/new-portfolio/ai/IMG_6333 1.png";
import roadImage from "../../assets/new-portfolio/ai/2 27.png"
import Form from '../../component/Form';
import { useNavigate } from 'react-router-dom';

const AIGenerativeDesign: React.FC = () => {
  const navigate = useNavigate();

  const designs = [
    {
      id: 1,
      image: mysteryImage,
      title: 'AI-generated character concepts for games, films, and storytelling.',
      photoCount: '10 Photos',
      tag : "Characters",
      path : "/ai/generative/characters"
    },
    {
      id: 2,
      image: castleImage,
      title: 'Concept art for game levels, film sets, and immersive worlds.',
      photoCount: '07 Photos',
      tag : "Environments",
      path : "/ai/generative/environments"
    },
    {
      id: 3,
      image: roadImage,
      title: 'AI-generated video content including animated ads, motion graphics, character animations, and atmospheric sequences.',
      photoCount: '04 Videos',
      tag : "Videos",
      path : "/ai/generative/videos"
    }
  ];

  return (
    <>
    <div className="xl:px-[8.5rem] lg:px-10 px-7 md:py-30 py-10 max-md:bg-[#F3F3F3]">
      {/* Header */}
      <div className="mb-12">
        <h2 className="md:text-[35px] text-[25px] font-[600] text-black mb-4">AI Generative Design.</h2>
        <p className="text-[#626262] text-[16px] max-w-lg leading-relaxed">
        Using AI to explore visual possibilities beyond traditional design constraints. I create culturally-grounded characters, environments, and speculative worlds with Midjourney and Stable Diffusion.        </p>
      </div>

      {/* Design Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {designs.map((design) => (
          <div key={design.id} onClick={()=> navigate(design.path)}>
            {/* Desktop Version - Hover Effect */}
            <div 
              className="relative hidden xl:block group cursor-pointer overflow-hidden bg-gray-900"
            >
              {/* Image */}
              <img 
                src={design.image}
                alt="Generative design"
                className="w-full h-full object-cover opacity-70 transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col">
                <div className="flex items-start mt-5">
                  <span className="inline-flex items-center gap-2 text-white text-sm font-medium">
                    <span className="w-[10px] h-[10px] bg-[#238EFF]"></span>
                    {design.tag}
                  </span>
                </div>

                <div className="flex flex-col justify-between h-full mt-4">
                  <h3
                    className="text-white text-lg font-semibold leading-tight 
                                opacity-0 group-hover:opacity-100 
                                transform translate-y-6 group-hover:translate-y-0 
                                transition-all duration-300"
                  >
                    {design.title}
                  </h3>

                  <div
                    className="flex items-center gap-2 text-white text-sm 
                                opacity-0 group-hover:opacity-100 
                                transition-opacity duration-300"
                  >
                    <span>{design.photoCount}</span>
                  </div>
                </div>
              </div>
            </div>

   
            <div className="xl:hidden">
              {/* Image */}
              <div className="relative overflow-hidden bg-gray-900">
                <img 
                  src={design.image}
                  alt="Generative design"
                  className="w-full h-full object-cover opacity-70"
                />
              </div>

              {/* Content Below Image */}
              <div className="mt-4">
                <div className="flex items-start mb-3 flex-row justify-between ">
                  <span className="inline-flex items-center gap-2 text-black text-sm font-semibold">
                    <span className="w-[10px] h-[10px] bg-[#238EFF]"></span>
                    {design.tag}
                  </span>

                  <div className="flex items-center gap-2 text-[#000000] font-semibold text-sm">
                  <span>{design.photoCount}</span>
                </div>
                </div>

                <h3 className="text-black text-lg font-normal leading-tight mb-2">
                  {design.title}
                </h3>

             
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <Form/>
    </>
  );
};

export default AIGenerativeDesign;