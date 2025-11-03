/* eslint-disable @typescript-eslint/no-explicit-any */
import { type SanityDocument } from "next-sanity";
import { Gallery4 } from "@/components/ui/gallery4";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";
import Hero from "@/components/hero";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

// ✅ Extended type that includes the Sanity fields you're actually using
interface UpdateDoc extends SanityDocument {
  title?: string;
  slug?: { current?: string };
  updateDate?: string;
  updateType?: string;
  cover?: {
    type?: "image" | "video";
    image?: unknown; // you can replace with a specific type if you have Sanity image types
  };
  images?: unknown[];
}

export const metadata: Metadata = {
  title: "Updates & News - The Useless Project",
  description:
    "Stay updated with the latest news from The Useless Project. Read about our recent events, sustainability initiatives, community stories, and environmental action updates.",
  keywords: [
    "updates",
    "news",
    "blog",
    "sustainability news",
    "community stories",
    "environmental updates",
    "event highlights",
  ],
};

const UPDATES_QUERY = `*[
  _type == "Update"
]|order(updateDate desc)[0...200]{_id, title, slug, updateDate, images, cover, updateType }`;

const options = { next: { revalidate: 30 } };

const { projectId, dataset } = client.config();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const urlFor = (source: any) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset })
        .image(source)
        .width(521)
        .height(651)
        .url()
    : "";

export default async function UpdatesPage() {
  // ✅ Use the new type here
  const updates = await client.fetch<UpdateDoc[]>(UPDATES_QUERY, {}, options);

  if (!updates || updates.length === 0) {
    return (
      <main className="mx-auto max-w-8xl">
        <div className="flex justify-center items-center flex-col mt-10 mb-20 gap-5">
          <div className="w-full max-w-2xl">
            <Hero title="What We've Been Up To at Useless HQ" subtitle="" />
          </div>
          <div className="text-center text-2xl text-gray-500 mt-10">
            No updates from us at the moment!
          </div>
        </div>
      </main>
    );
  }

  // determine cutoff for 30 days
  const cutoffMs = Date.now() - 30 * 24 * 60 * 60 * 1000;

  // normalize and partition updates
  const normalized = updates.map((u) => ({
    ...u,
    parsedDate: u.updateDate ? new Date(u.updateDate) : null,
  }));

  // helper: format Date as DD/MM/YYYY
  const formatDate = (d: Date | null | undefined) => {
    if (!d) return "";
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const latestUpdates = normalized.filter(
    (u) => u.parsedDate && u.parsedDate.getTime() >= cutoffMs
  );

  const olderUpdates = normalized.filter(
    (u) => !u.parsedDate || u.parsedDate.getTime() < cutoffMs
  );

  const mapToGalleryItem = (update: UpdateDoc & { parsedDate?: Date | null }) => {
    let imageUrl =
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='521' height='651'%3E%3Crect width='521' height='651' fill='%23F38BBB'/%3E%3C/svg%3E";

    if (update.cover?.type === "image" && (update.cover as any)?.image) {
      imageUrl = urlFor((update.cover as any).image);
    } else if (update.cover?.type === "video") {
      if ((update.cover as any)?.image) {
        imageUrl = urlFor((update.cover as any).image);
      }
    } else if (update.images?.[0]) {
      imageUrl = urlFor(update.images[0]);
    }

    return {
      id: update._id,
      title: update.title ?? "",
      description: "",
      href: `/updates/${update.slug?.current || ""}`,
      image: imageUrl,
      width: 521,
      height: 651,
      date: update.parsedDate ? new Date(update.parsedDate) : undefined,
      type: update.updateType ?? "",
    };
  };

  const updatesSection = {
    title: "Latest Updates",
    items: latestUpdates.map(mapToGalleryItem),
  };

  return (
    <main className="mx-auto max-w-8xl container">
      <div className="flex justify-center items-center flex-col mt-10 mb-20 gap-5">
        <div className="w-full max-w-2xl">
          <Hero title="What We've Been Up To at Useless HQ" subtitle="" />
        </div>
      </div>

      <Gallery4 galleryType={"update"} {...updatesSection} />

      {/* All Updates (older than 30 days) */}
      <section className="mt-12 mb-20">
        <div className="max-w-8xl mx-auto px-4">
          <h2 className="text-2xl font-semibold">All Updates</h2>
          {olderUpdates.length === 0 ? (
            <p className="text-gray-500 mt-4">No earlier updates.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              {olderUpdates.map((update) => {
                const imageUrl = (() => {
                  if (update.cover?.type === "image" && (update.cover as any)?.image) {
                    return urlFor((update.cover as any).image);
                  } else if (update.cover?.type === "video" && (update.cover as any)?.image) {
                    return urlFor((update.cover as any).image);
                  } else if (update.images?.[0]) {
                    return urlFor(update.images[0]);
                  }
                  return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='521' height='521'%3E%3Crect width='521' height='521' fill='%23F3E8EF'/%3E%3C/svg%3E";
                })();

                return (
                  <Link
                    key={update._id}
                    href={`/updates/${update.slug?.current || ""}`}
                    className="group block"
                  >
                    <div className="w-full aspect-square bg-gray-100 overflow-hidden rounded-md">
                      <Image
                        src={imageUrl}
                        alt={update.title || "Update image"}
                        width={521}
                        height={651}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    <div className="mt-2">
                      <h3 className="text-sm font-medium">{update.title}</h3>
                      {update.parsedDate ? (
                        <p className="text-xs text-gray-500 mt-1">
                          {formatDate(update.parsedDate)}
                        </p>
                      ) : null}
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
