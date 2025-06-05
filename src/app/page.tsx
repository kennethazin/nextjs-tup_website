import React from "react";
import Image from "next/image"; // Added import for Next.js Image
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { TextEffect } from "../../components/motion-primitives/text-effect";

const Main = () => {
  const features = [
    {
      id: "1",
      href: "/",
      cta: "",
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
      id: "2",
      href: "/corporateevents",
      cta: "Join our workshops",
      background: (
        <Image
          src="https://images.pexels.com/photos/17485817/pexels-photo-17485817/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-represents-the-ways-in-which-ai-can-solve-important-problems-it-was-created-by-vincent-schwenk-as-part-of-the-visualis.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill
          className="absolute object-cover transition-all"
          alt=""
        />
      ),
      className:
        "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3 text-white",
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
        "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4 text-white",
    },
    {
      id: "4",
      background: (
        <Image
          src="https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill
          className="absolute object-cover"
          alt=""
        />
      ),
      className:
        "lg:col-start-3 text-white lg:col-end-3 lg:row-start-1 lg:row-end-2 transition-none",
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
        "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4 text-white",
    },
    // New cards start here
    {
      id: "6",
      href: "/",
      cta: "",
      background: (
        <Image
          src="/2.jpg"
          fill
          className="absolute object-cover transition-all"
          alt=""
        />
      ),
      className:
        "lg:col-start-2 lg:col-end-4 lg:row-start-4 lg:row-end-5 text-white",
    },
    {
      id: "7",
      href: "/events",
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
      href: "/",
      cta: "",
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
      href: "/",
      cta: "",
      background: (
        <Image
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
    <main className="m-auto mb-20">
      <section className="h-screen flex flex-col items-center justify-center">
        <div className="text-5xl mb-40 leading-12 md:text-8xl md:leading-20 lg:text-9xl lg:leading-28 text-center lg:max-w-7xl px-4 font-medium ">
          <TextEffect per="word" as="h1" preset="slide">
            A Space to Reconnect—with People, Planet & Creativity
          </TextEffect>
        </div>
      </section>
      <section className="min-h-screen w-full flex items-center justify-center py-0">
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
