"use client";

import Image from "next/image";

export default function InfiniteImages() {
  const images = [
    { src: "/markets/1.png", alt: "Image 1" },
    { src: "/markets/2.png", alt: "Image 2" },
    { src: "/markets/3.png", alt: "Image 3" },
    { src: "/markets/4.png", alt: "Image 4" },
    { src: "/markets/5.png", alt: "Image 5" },
  ];

  const imageWidth = 300;
  const imageHeight = 400;

  return (
    <div className="w-full overflow-hidden py-8 bg-[#FCFAF8] mt-10">
      <div className="relative">
        {/* Infinite scrolling container */}
        <div className="flex animate-scroll">
          {/* First set of images */}
          {images.map((image, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-2"
              style={{ width: imageWidth, height: imageHeight }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="rounded-lg object-cover"
                  sizes={`${imageWidth}px`}
                />
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {images.map((image, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-2"
              style={{ width: imageWidth, height: imageHeight }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="rounded-lg object-cover"
                  sizes={`${imageWidth}px`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
