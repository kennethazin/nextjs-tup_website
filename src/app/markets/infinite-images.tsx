"use client";

import Image from "next/image";

export default function InfiniteImages() {
  const images = [
    { src: "/markets/IMG_1814.jpg", alt: "Image 1" },
    { src: "/markets/IMG_5940.jpg", alt: "Image 2" },
    { src: "/markets/IMG_5926.jpg", alt: "Image 3" },
    { src: "/markets/IMG_5944.jpg", alt: "Image 4" },
    { src: "/markets/IMG_5947.jpg", alt: "Image 5" },
    { src: "/markets/IMG_5948.jpg", alt: "Image 5" },
    { src: "/markets/IMG_5952.jpg", alt: "Image 5" },
    { src: "/markets/IMG_5957.jpg", alt: "Image 5" },
    { src: "/markets/WhatsApp Image 2023-10-11 at 18.16.24 (2).jpeg", alt: "Image 5" },
    { src: "/markets/IMG_5923.jpg", alt: "Image 5" },
    { src: "/markets/WhatsApp Image 2023-10-11 at 18.16.27.jpeg", alt: "Image 5" },
    { src: "/markets/WhatsApp Image 2023-10-11 at 18.16.23 (1).jpeg", alt: "Image 5" },
  ];

  const imageWidth = 300;
  const imageHeight = 400;

  return (
    <div className="w-full overflow-hidden py-8 bg-[#FCFAF8] mt-10 ">
      <div className="relative">
        {/* Horizontally scrollable container */}
        <div className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 justify-left">
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
          
        </div>
      </div>
    </div>
  );
}
