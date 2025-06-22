"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel4";
import { Badge } from "./badge";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string[] | string; // Changed from string to string[] | string to support both formats
  date?: Date; // Make date optional
  type: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items?: Gallery4Item[];
  galleryType: "event" | "update"; // New prop to determine the gallery type
}

const Gallery4 = ({
  title = "Case Studies",
  description = "",
  items,
  galleryType,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  // Helper function to get the image source
  const getImageSource = (image: string[] | string): string => {
    if (Array.isArray(image) && image.length > 0) {
      return image[0]; // Use the first image in the array
    }
    return typeof image === "string" ? image : ""; // Fallback to empty string if no images
  };

  return (
    <section className="w-full">
      <div className="">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-medium md:text-3xl lg:text-3xl">
              {title}
            </h3>
            <p className="max-w-lg text-muted-foreground">{description}</p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 ">
            {(items ?? []).map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
              >
                <a href={item.href} className="group">
                  <div
                    className={`relative w-full h-full min-h-[27rem] aspect-[16/9] overflow-hidden ${
                      galleryType === "event" ? "rounded-xl" : "rounded-none"
                    }`}
                  >
                    <Image
                      src={getImageSource(item.image)}
                      alt={item.title}
                      fill
                      className={`object-cover object-center transition-transform duration-300 hover:opacity-80  ${
                        galleryType === "event" ? "group-hover:scale-105" : ""
                      }`}
                      sizes="(min-width: 1024px) 720px, 100vw"
                      priority={false}
                    />
                    {galleryType === "event" && (
                      <>
                        {getImageSource(item.image)?.trim() && (
                          <div className="absolute inset-0 bg-black/10" />
                        )}
                        <div className="absolute inset-0 h-full bg-[linear-gradient(hsl(var(--primary)/0),hsl(var(--primary)/0.4),hsl(var(--primary)/0.8)_100%)] mix-blend-multiply" />
                        <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-primary-foreground md:p-8">
                          <div className="flex flex-row items-center gap-x-5 mb-0">
                            <div className="text-xs sm:text-xs">
                              <Badge
                                className="gap-1 futura "
                                variant={"secondary"}
                              >
                                {item.date
                                  ? new Date(item.date).toLocaleDateString(
                                      "en-GB",
                                      {
                                        year: "numeric",
                                        month: "2-digit",
                                        day: "2-digit",
                                      }
                                    )
                                  : "TBD"}
                              </Badge>
                            </div>

                            <div className="text-xs sm:text-xs">
                              <Badge className="gap-1 " variant={"secondary"}>
                                {item.type}
                              </Badge>
                            </div>
                          </div>
                          <div className="mb-2 pt-4 text-xl font-semibold">
                            {item.title}
                          </div>

                          <div className="flex items-center text-sm">
                            Read more{" "}
                            <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {(items ?? []).map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-primary" : "bg-primary/20"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };
