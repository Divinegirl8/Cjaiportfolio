import purpleStar from "../../assets/footer/purple_star.png";

const InfoMove: React.FC = () => {
  return (
    <div className="border-y-[0.25px] border-[#62646C] bg-[#0E0E10] text-[#D6D0FB] sm:py-5 py-3 overflow-hidden relative">
      <div className="flex gap-10 whitespace-nowrap animate-marquee">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex flex-row gap-10">
            <div className="flex flex-row gap-4">
              <img src={purpleStar} className="w-8 h-8" alt="Star" />
              <h4 className="mt-1">INDUSTRIAL & PRODUCT DESIGN</h4>
            </div>
            <div className="flex flex-row gap-4">
              <img src={purpleStar} className="w-8 h-8" alt="Star" />
              <h4 className="mt-1">GAME & ENVIRONMENT DESIGN</h4>
            </div>
            <div className="flex flex-row gap-4">
              <img src={purpleStar} className="w-8 h-8" alt="Star" />
              <h4 className="mt-1">ILLUSTRATIVE & CONCEPT ART</h4>
            </div>
            <div className="flex flex-row gap-4">
              <img src={purpleStar} className="w-8 h-8" alt="Star" />
              <h4 className="mt-1">FASHION & COSTUME DESIGN</h4>
            </div>
            <div className="flex flex-row gap-4">
              <img src={purpleStar} className="w-8 h-8" alt="Star" />
              <h4 className="mt-1">AI DESIGN</h4>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default InfoMove;