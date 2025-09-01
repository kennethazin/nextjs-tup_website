/* eslint-disable @typescript-eslint/no-explicit-any */
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

const UPDATE_QUERY = `*[_type == "Update" && slug.current == $slug][0]`;

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
  const update = await client.fetch<SanityDocument>(UPDATE_QUERY, { slug }, options);
  
  return {
    title: update?.title ? `${update.title} - The Useless Project` : "Update - The Useless Project",
    description: update?.subtitle || "Read the latest news and updates from The Useless Project about our sustainability initiatives, community events, and environmental action.",
    keywords: ["update", "news", "sustainability", "community", "environmental action"],
  };
}

export default async function UpdatePage({ params }: any) {
  const update = await client.fetch<SanityDocument>(
    UPDATE_QUERY,
    params,
    options
  );

  const updateImages =
    update.images
      ?.filter(Boolean) // Ensure images exist
      .map((image: SanityImageSource) => {
        // Type guard for asset property
        const hasAsset =
          typeof image === "object" &&
          image !== null &&
          "asset" in image &&
          image.asset &&
          typeof image.asset === "object" &&
          "_ref" in image.asset;
        return {
          url: urlFor(image)?.url(),
          isHorizontal: hasAsset
            ? (image.asset as { _ref: string })._ref.includes("-h")
            : false,
        };
      }) || [];

  return (
    <main className="mx-auto min-h-screen max-w-8xl metropolitano container">
      <Link
        href="/updates"
        className="hover:underline metropolitano font-medium"
      >
        ← Back to updates
      </Link>
      <h1 className="text-3xl text-center md:text-4xl lg:text-6xl lg:text-center font-bold mb-8 mt-10">
        {update.title}
      </h1>
      <div className="flex justify-center">
        {updateImages.length > 0 ? (
          <div className="relative w-3/4 max-w-md mb-10">
            <Carousel>
              <CarouselContent>
                {updateImages.map(
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
                        alt={`${update.title} - Image ${index + 1}`}
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
            No images available for this update.
          </p>
        )}
      </div>
      <div className="w-full">
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
              {update.updateDate
                ? new Date(update.updateDate).toLocaleDateString()
                : "Date not available"}
            </p>
          </div>
          <div className="border px-6 sm:px-10 py-0 rounded-full h-12 border-[#031100] items-center flex uppercase">
            <p className="text-sm sm:text-base">{update.updateType}</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 min-w-full prose">
          {Array.isArray(update.secondary) && (
            <div className="w-full">
              <PortableText value={update.secondary} />
            </div>
          )}
          {Array.isArray(update.body) && (
            <div className="w-full">
              <PortableText value={update.body} />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
