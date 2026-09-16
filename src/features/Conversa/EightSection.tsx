import sketchImage from "../../assets/new-portfolio/conversa/Group (11).svg";
import sketchImageMob from "../../assets/new-portfolio/conversa/Group (8).png";

const EightSection: React.FC = () => {
  return (
    <>
      <div className="xl:border-t border-[#5A5A5A] flex flex-col xl:flex-row">
        <div className="xl:w-1/2 border-[#5A5A5A] xl:border-r xl:px-20 md:px-10 px-7 md:py-20 py-10 bg-[#FBFBFB]">
          <h1 className="text-[#000000] md:text-[32px] text-[25px] md:text-center font-medium md:mb-6 max-lg:pt-5 max-lg:border-t max-lg:border-[#5A5A5A]">
            Design System & Component Library
          </h1>

          <div className="md:space-y-5 space-y-4">
            <p className="text-[#5A5A5A] text-[16px] leading-relaxed">
              Sernio's design system was built to scale — semantic tokens, documented
              component states, and a consistent visual language across every surface.
            </p>

            <p className="text-[#5A5A5A] text-[16px] leading-relaxed flex flex-col">
              <span className="font-[500] text-black">Buttons & Controls</span>
              Four hierarchies — primary, secondary, outline, and ghost — each with hover,
              active, loading, and disabled states. Every dashboard action maps to one,
              ensuring consistent affordance signals throughout.
            </p>

            <p className="text-[#5A5A5A] text-[16px] leading-relaxed mt-5 flex flex-col">
              <span className="font-[500] text-black">Form Inputs</span>
              Default, active, error, and disabled states built for speed and clarity.
              Error states include inline messages that explain the problem, not just flag it.
            </p>

            <p className="text-[#5A5A5A] text-[16px] leading-relaxed mt-5 flex flex-col">
              <span className="font-[500] text-black">Badges & Status Indicators</span>
              Semantic colour coding across six states — generic, success, new, caution, info,
              danger. Colour never carries meaning alone; labels are always present.
            </p>

            <p className="text-[#5A5A5A] text-[16px] leading-relaxed mt-5 flex flex-col">
              <span className="font-[500] text-black">Colour Tokens & Brand Variables</span>
              A 500-level token scale covering primary, neutral, and semantic colours.
              Token-based architecture lets white-label clients theme the entire interface
              without touching component structure.
            </p>

            <p className="text-[#5A5A5A] text-[16px] leading-relaxed mt-5 flex flex-col">
              <span className="font-[500] text-black">Accessibility — Built In, Not Bolted On</span>
              WCAG 2.1 AA compliant from the first component. Keyboard navigation,
              screen reader support, and high contrast modes are system requirements,
              not afterthoughts.
            </p>
          </div>
        </div>

        <div className="xl:w-1/2 bg-[#FBFBFB] flex px-10 items-center justify-center">
  <img src={sketchImage} className="md:block hidden w-full h-full object-contain" />
  <img src={sketchImageMob} className="md:hidden w-full h-full object-contain" />
</div>
        
      </div>
    </>
  );
};

export default EightSection;