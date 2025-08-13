import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselIndicator,
  CarouselItem,
} from "@/components/ui/carousel";


const EVENT_QUERY = `*[_type == "event" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = await client.fetch<SanityDocument>(EVENT_QUERY, { slug }, options);
  
  return {
    title: event?.title ? `${event.title} - The Useless Project` : "Event - The Useless Project",
    description: event?.subtitle || "Join us for this sustainable living event with The Useless Project. Community-focused activities promoting circular living and environmental action.",
    keywords: ["event", "sustainability", "community event", "circular living", event?.eventType].filter(Boolean),
  };
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const event = await client.fetch<SanityDocument>(
    EVENT_QUERY,
    await params,
    options
  );

  // Use the same image loading logic as updates, but filter for valid asset._ref
  const eventImages =
    event.images
      ?.filter(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (image: any) =>
          image &&
          typeof image === "object" &&
          "asset" in image &&
          image.asset &&
          typeof image.asset === "object" &&
          "_ref" in image.asset &&
          typeof image.asset._ref === "string"
      )
      .map((image: { asset: { _ref: string } }) => {
        // At this point, asset._ref is guaranteed
        return {
          url: urlFor(image)?.url(),
          isHorizontal: image.asset._ref.includes("-h"),
        };
      }) || [];

  return (
    <main className="container mx-auto min-h-screen p-8 flex flex-col gap-4 ">
      <Link href="/events" className="hover:underline">
        ← Back to events
      </Link>
      <h1 className="text-5xl text-center lg:text-8xl lg:text-left font-bold mb-8">
        {event.title}
      </h1>
      <div className="flex justify-center">
        {eventImages.length > 0 ? (
          <div className="relative w-full max-w-md mb-10">
            <Carousel>
              <CarouselContent>
                {eventImages.map(
                  (
                    {
                      url,
                      isHorizontal,
                    }: { url: string | undefined; isHorizontal: boolean },
                    index: number
                  ) => (
                    <CarouselItem key={index} className="p-4">
                      <Image
                        src={url as string}
                        alt={`${event.title} - Image ${index + 1}`}
                        className="rounded-3xl"
                        width={isHorizontal ? 859 : 570}
                        height={isHorizontal ? 570 : 859}
                      />
                    </CarouselItem>
                  )
                )}
              </CarouselContent>
              <CarouselNavigation alwaysShow />
              <CarouselIndicator />
            </Carousel>
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No images available for this event.
          </p>
        )}
      </div>
      <div className=" w-full ">
        <div className="flex flex-row items-center gap-x-5 mb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            className="mb-2"
          >
            <path
              d="M17 0.602051L17.6125 15.6234L28.6673 5.43479L18.4787 16.4896L33.5 17.1021L18.4787 17.7145L28.6673 28.7693L17.6125 18.5807L17 33.6021L16.3875 18.5807L5.33274 28.7693L15.5213 17.7145L0.5 17.1021L15.5213 16.4896L5.33274 5.43479L16.3875 15.6234L17 0.602051Z"
              fill="#031100"
            />
          </svg>
          <div className="border px-6 sm:px-10 py-0 rounded-full h-12 border-[#031100] items-center flex">
            <p className="text-sm sm:text-base">
              {event.eventDate
                ? new Date(event.eventDate).toLocaleDateString()
                : "Date not available"}
            </p>
          </div>
          <div className="border px-6 sm:px-10 py-0 rounded-full h-12 border-[#031100] items-center flex uppercase">
            <p className="text-sm sm:text-base">{event._type}</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 min-w-full  prose">
          {Array.isArray(event.secondary) && (
            <div className="w-full ">
              <PortableText value={event.secondary} />
            </div>
          )}
          {Array.isArray(event.body) && (
            <div className="w-full ">
              <PortableText value={event.body} />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

