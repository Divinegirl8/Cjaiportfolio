import uniImageOne from "../../assets/new-portfolio/mentorship/1 (18).png";
import uniImageTwo from "../../assets/new-portfolio/mentorship/2 (23).png";
import uniImageThree from "../../assets/new-portfolio/mentorship/3 (14).png";
import uniImageFour from "../../assets/new-portfolio/mentorship/3 (15).png";
import uniImageFive from "../../assets/new-portfolio/mentorship/2 (24).png";
import uniImageSix from "../../assets/new-portfolio/mentorship/1 (19).png";
import uniImageSeven from "../../assets/new-portfolio/mentorship/1 (21).png";
import uniImageEight from "../../assets/new-portfolio/mentorship/Mask group (34).png";
import uniImageNine from "../../assets/new-portfolio/mentorship/3 (19).png";
const University = () => {
  const imgClass = "w-full h-full object-cover";
  const cellStyle = { height: "300px" };

  const images = [
    { src: uniImageOne, alt: "Workshop session with participants" },
    { src: uniImageTwo, alt: "Product design training" },
    { src: uniImageThree, alt: "Certificate presentation ceremony" },
    { src: uniImageSix, alt: "Group learning session" },
    { src: uniImageFive, alt: "Team collaboration" },
    { src: uniImageFour, alt: "Community graduates with certificates" },
    { src: uniImageSeven, alt: "Community graduates with certificates" },
    { src: uniImageEight, alt: "Group learning session" },
    { src: uniImageNine, alt: "Team collaboration" },
  ];

  return (
    <section className="bg-[#F3F3F3] px-6 py-14 md:px-16 lg:px-24 xl:px-32 w-full">

      {/* Header */}
      <div className="mb-2 lg:mt-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-black tracking-tight">
          University Keynote.
        </h2>
        <p className="text-sm md:text-[16px] text-[#626262] mt-10">
          Invited Speaker — The Future of Art Just Got Smarter
        </p>
        <p className="text-sm md:text-[16px] text-[#626262] mb-10">
          Date: June 25, 2025 Mountain Top University, Nigeria
        </p>
      </div>

      {/* Mobile: vertical stack */}
      <div className="mt-8 flex flex-col gap-3 md:grid md:grid-cols-2 lg:hidden">
        {images.map((img) => (
          <div key={img.alt} className="w-full overflow-hidden" >
            <img src={img.src} alt={img.alt} className={imgClass} />
          </div>
        ))}
      </div>

      {/* Desktop: grid layout */}
      <div className="hidden lg:block">
        {/* Row 1 — 4-col grid: 1 + 2 + 1 */}
        <div className="mt-8 grid grid-cols-4 gap-3">
          <div className="col-span-1 overflow-hidden" style={cellStyle}>
            <img src={uniImageOne} alt="Workshop session with participants" className={imgClass} />
          </div>
          <div className="col-span-2 overflow-hidden" style={cellStyle}>
            <img src={uniImageTwo} alt="Product design training" className={imgClass} />
          </div>
          <div className="col-span-1 overflow-hidden" style={cellStyle}>
            <img src={uniImageThree} alt="Certificate presentation ceremony" className={imgClass} />
          </div>
        </div>

        {/* Row 2 — 4-col grid: 2 + 1 + 1 */}
        <div className="mt-3 grid grid-cols-4 gap-3">
          <div className="col-span-2 overflow-hidden" style={cellStyle}>
            <img src={uniImageSix} alt="Group learning session" className={imgClass} />
          </div>
          <div className="col-span-1 overflow-hidden" style={cellStyle}>
            <img src={uniImageFive} alt="Team collaboration" className={imgClass} />
          </div>
          <div className="col-span-1 overflow-hidden" style={cellStyle}>
            <img src={uniImageFour} alt="Community graduates with certificates" className={imgClass} />
          </div>
        </div>

        {/* Row 3 — 4-col grid: 1 + 2 + 1 */}
      

        <div className="mt-3 grid grid-cols-5 gap-3">
          <div className="col-span-1 overflow-hidden" style={cellStyle}>
            <img src={uniImageSeven} alt="Community graduates with certificates" className={imgClass} />
          </div>
          <div className="col-span-2 overflow-hidden" style={cellStyle}>
            <img src={uniImageEight} alt="Group learning session" className={imgClass} />
          </div>
          <div className="col-span-2 overflow-hidden" style={cellStyle}>
            <img src={uniImageNine} alt="Team collaboration" className={imgClass} />
          </div>
        </div>
              </div>

      {/* Body text */}
      <p className="mt-8 text-black text-sm md:text-[16px] leading-[30px]">
        Invited by the Head of the Department of Fine and Applied Arts, Dr. Kehinde Shobukonla of Mountain Top University to deliver a keynote AI Tech Talk to
        80+ art and design students. The session explored how AI tools — including ChatGPT, Midjourney, and Hailuo AI — can enhance creativity, productivity,
        and innovation across graphic design, painting, sculpture, textile, and fashion design. The event was chaired by Prof. Elijah A. Ayolabi, Vice Chancellor of
        MTU. Recognised with a departmental award following the lecture.
      </p>

    </section>
  );
};

export default University;