import comImageOne from "../../assets/new-portfolio/mentorship/1 (17).png";
import comImageTwo from "../../assets/new-portfolio/mentorship/2 (21).png";
import comImageThree from "../../assets/new-portfolio/mentorship/3 (13).png";
import comImageFour from "../../assets/new-portfolio/mentorship/Mask group (31).png";
import comImageFive from "../../assets/new-portfolio/mentorship/2 (22).png";
import comImageSix from "../../assets/new-portfolio/mentorship/Mask group (32).png";

const Community = () => {
  const imgClass = "w-full h-full object-cover";
  const cellStyle = { height: "320px" };

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
          Community Education.
        </h2>
        <p className="text-sm md:text-[16px] text-[#626262] mt-10">
          Teaching Product Design in Underserved Communities
        </p>
        <p className="text-sm md:text-[16px] text-[#626262] mb-10">
          Date: February — May 2026 · Lagos, Nigeria
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
      <p className="mt-8 text-black text-sm md:text-[16px] leading-[30px]">
        Volunteered as a product design instructor at Gadol Tech Consult, a community tech school serving students from underserved neighbourhoods in
        Lagos, Nigeria. Built the entire design curriculum from scratch — covering UI/UX fundamentals, design thinking, and portfolio development over a
        structured 3-month programme. Every student completed the course and received a certificate, publicly celebrating their achievement on LinkedIn and
        Facebook.
      </p>

    </section>
  );
};

export default Community;