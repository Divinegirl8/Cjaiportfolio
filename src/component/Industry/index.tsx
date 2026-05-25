import comImageOne from "../../assets/new-portfolio/industry/Mask group (33).png";
import comImageTwo from "../../assets/new-portfolio/industry/2 (25).png";
import comImageThree from "../../assets/new-portfolio/industry/3 (16).png";
import comImageFour from "../../assets/new-portfolio/industry/1 (20).png";
import comImageFive from "../../assets/new-portfolio/industry/2 (26).png";
import comImageSix from "../../assets/new-portfolio/industry/3 (17).png";

const Industry = () => {
  const imgClass = "w-full h-full object-cover";
  const cellStyle = { height: "300px" };

  const images = [
    { src: comImageOne, alt: "Workshop session with participants" },
    { src: comImageTwo, alt: "Product design training" },
    { src: comImageThree, alt: "Certificate presentation ceremony" },
    { src: comImageFour, alt: "Group learning session" },
    { src: comImageFive, alt: "Team collaboration" },
    { src: comImageSix, alt: "Community graduates with certificates" },
  ];

  return (
    <section className="bg-[#F3F3F3] px-6 py-14 md:px-16 lg:px-24 xl:px-32 w-full">

      {/* Header */}
      <div className="mb-2 lg:mt-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-black tracking-tight">
          Industry Workshop.
        </h2>
        <p className="text-sm md:text-[16px] text-[#626262] mt-10">
          Training Media Professionals on AI-Driven Production Workflows
        </p>
        <p className="text-sm md:text-[16px] text-[#626262] mb-10">
          Date: 2025 · Lagos, Nigeria.
        </p>
      </div>

      {/* Mobile: vertical stack */}
      <div className="mt-8 flex flex-col gap-3 md:grid md:grid-cols-2 lg:hidden">
        {images.map((img) => (
          <div key={img.alt} className="w-full overflow-hidden">
            <img src={img.src} alt={img.alt} className={imgClass} />
          </div>
        ))}
      </div>

      {/* Desktop: grid layout */}
      <div className="hidden lg:block">
        {/* Row 1 — 4-col grid: 1 + 2 + 1 */}
        <div className="mt-8 grid grid-cols-4 gap-3">
          <div className="col-span-1 overflow-hidden" style={cellStyle}>
            <img src={comImageOne} alt="Workshop session with participants" className={imgClass} />
          </div>
          <div className="col-span-2 overflow-hidden" style={cellStyle}>
            <img src={comImageTwo} alt="Product design training" className={imgClass} />
          </div>
          <div className="col-span-1 overflow-hidden" style={cellStyle}>
            <img src={comImageThree} alt="Certificate presentation ceremony" className={imgClass} />
          </div>
        </div>

        {/* Row 2 — 4-col grid: 2 + 1 + 1 */}
        <div className="mt-3 grid grid-cols-4 gap-3">
          <div className="col-span-2 overflow-hidden" style={cellStyle}>
            <img src={comImageFour} alt="Group learning session" className={imgClass} />
          </div>
          <div className="col-span-1 overflow-hidden" style={cellStyle}>
            <img src={comImageFive} alt="Team collaboration" className={imgClass} />
          </div>
          <div className="col-span-1 overflow-hidden" style={cellStyle}>
            <img src={comImageSix} alt="Community graduates with certificates" className={imgClass} />
          </div>
        </div>
      </div>

      {/* Body text */}
      <p className="mt-8 text-black text-sm md:text-[16px] leading-[30px] lg:mb-10">
        Invited by VOW TV to train their media production team on practical applications of AI in editorial and production workflows. The session bridged the gap
        between AI capability and real-world media industry application — covering how AI tools can streamline content creation, improve efficiency, and open
        new creative possibilities for broadcast and digital media teams.
      </p>

    </section>
  );
};

export default Industry;