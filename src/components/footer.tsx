import React from "react";

const Footer = () => {
  return (
    <div className="bg-black rounded-t-4xl h-80 p-10 text-white flex flex-col justify-between overflow-visible">
      <div className="flex justify-between flex-wrap">
        <div className="flex flex-row gap-3">
          <div>About us</div>
          <div>Contact</div>
          <div>News</div>
          <div>Our impact</div>
        </div>
        <div className="flex flex-row gap-3">
          <div>Terms of service</div>
          <div>Privacy policy</div>
        </div>
      </div>

      <div className="flex flex-row justify-between items-end">
        <div className="flex flex-col gap-2">
          <div className="text-4xl">The Useless Project</div>
          <div className="w-3/4 lg:w-fit">
            A Space to Reconnect—with People, Planet & Creativity
          </div>
        </div>
        <div>@2025</div>
      </div>
    </div>
  );
};

export default Footer;
