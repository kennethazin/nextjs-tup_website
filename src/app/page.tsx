"use client";
import React from "react";
import Image from "next/image"; // Added import for Next.js Image
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { TextEffect } from "../../components/motion-primitives/text-effect";
import Lottie from "lottie-react";
import Bee from "./bee.json";

const Main = () => {
  const features = [
    {
      id: "1",
      href: "/markets",
      cta: "Flea markets ",
      background: (
        <Image
          src="/5.jpg"
          fill
          className="absolute object-center object-cover transition-all"
          alt=""
        />
      ),
      className:
        "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3 text-white",
    },
    {
      id: "3",
      href: "/events",
      cta: "View events",
      background: (
        <Image
          src="/1.jpg"
          fill
          className="absolute object-cover transition-all"
          alt=""
        />
      ),
      className:
        "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-4 text-white",
    },
    {
      id: "4",
      href: "/impact",
      cta: "Our impact",
      background: (
        <Image
          src="https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill
          className="absolute object-cover"
          alt=""
        />
      ),
      className:
        "lg:col-start-3 lg:col-end-4 lg:row-start-4 lg:row-end-5 text-white",
    },
    {
      id: "5",
      href: "/about",
      cta: "Learn our story",
      background: (
        <Image
          src="/3.jpg"
          fill
          className="absolute object-cover transition-all"
          alt=""
        />
      ),
      className:
        "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-4 text-white",
    },
    // New cards start here
    {
      id: "6",
      href: "/corporateevents",
      cta: "Get us into your workplace",
      background: (
        <Image
          src="/2.jpg"
          fill
          className="absolute object-cover transition-all"
          alt=""
        />
      ),
      className:
        "lg:col-start-2 lg:col-end-3 lg:row-start-4 lg:row-end-5 text-white",
    },
    {
      id: "7",
      href: "/events#past-events",
      cta: "See our past events",
      background: (
        <Image
          src="/janflea.png"
          fill
          className="absolute object-cover transition-all"
          alt=""
        />
      ),
      className:
        "lg:col-start-1 lg:col-end-2 lg:row-start-4 lg:row-end-5 text-white",
    },
    {
      id: "8",
      href: "/events",
      cta: "Upcoming workshops",
      background: (
        <Image
          src="/4.jpg"
          fill
          className="absolute object-cover transition-all"
          alt=""
        />
      ),
      className:
        "lg:col-start-1 lg:col-end-3 lg:row-start-5 lg:row-end-6 text-white",
    },
    {
      id: "9",
      href: "/updates",
      cta: "Latest thoughts, news and updates",
      background: (
        <Image
          src="https://images.pexels.com/photos/6712383/pexels-photo-6712383.jpeg"
          fill
          className="absolute object-cover transition-all"
          alt=""
        />
      ),
      className:
        "lg:col-start-3 lg:col-end-4 lg:row-start-5 lg:row-end-6 text-white",
    },
  ];

  return (
    <main className="">
      <section className="flex items-center justify-center">
        <div className="absolute  z-0 mb-10">
          <Lottie
            animationData={Bee}
            loop={false}
            autoplay={true}
            className="lg:w-full lg:h-full object-cover w-full h-full  overflow-visible pl-30 pt-20 "
          />
        </div>
        <div className="text-3xl mb-20 lg:mb-40 mt-30  md:text-6xl md:leading-20 lg:text-7xl lg:leading-28 text-center lg:max-w-7xl px-4 font-medium">
          <TextEffect
            per="word"
            as="h1"
            preset="slide"
            className="tracking-tighter leading-10 md:leading-15 lg:leading-20 lg:w-190 w-80 md:w-120  "
          >
            A Space to Reconnect with People, Planet and Creativity
          </TextEffect>
        </div>
      </section>
      <section className="w-full flex items-center justify-center py-0 ">
        <div className="max-w-7xl w-full px-4">
          <BentoGrid className="lg:grid-rows-2 relative h-full">
            {features.map((feature) => (
              <BentoCard key={feature.id} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </section>
    </main>
  );
};

export default Main;
