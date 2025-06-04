import React from "react";

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <>
      <div className="text-center ">
        <h1 className="text-8xl tracking-tighter">{title}</h1>
        <h2 className="text-3xl text-[#6b6f6a] ">{subtitle}</h2>
      </div>
    </>
  );
};

export default Hero;
