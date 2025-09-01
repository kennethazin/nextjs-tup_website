import React from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  titleBreakAfter?: string; // new prop
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, titleBreakAfter }) => {
  let titleContent = title;
  if (titleBreakAfter && title.includes(titleBreakAfter)) {
    const idx = title.indexOf(titleBreakAfter) + titleBreakAfter.length;
    titleContent = (
      <>
        {title.slice(0, idx)}
        <br />
        {title.slice(idx).trim()}
      </>
    );
  }
  return (
    <>
      <div className="text-center  ">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl tracking-tighter ">
          {titleContent}
        </h1>
        {subtitle && (
          <h2 className="text-1xl lg:text-2xl text-[#6b6f6a] mt-2">{subtitle}</h2>
        )}
      </div>
    </>
  );
};

export default Hero;
