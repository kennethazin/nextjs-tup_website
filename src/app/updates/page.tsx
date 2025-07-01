import { type SanityDocument } from "next-sanity";
import { Gallery4 } from "@/components/ui/gallery4";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";
import Hero from "@/components/hero";

const UPDATES_QUERY = `*[
  _type == "Update"
]|order(updateDate desc)[0...16]{_id, title, slug, updateDate, images }`;

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
  const updates = await client.fetch<SanityDocument[]>(
    UPDATES_QUERY,
    {},
    options
  );

  if (!updates || updates.length === 0) {
    return (
      <main className="mx-auto min-h-screen max-w-8xl">
        <div className="flex justify-center items-center flex-col mt-40 mb-40 gap-5">
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

  const updatesSection = {
    title: "Latest Updates",
    items: updates.map((update) => ({
      id: update._id,
      title: update.title,
      description: "", // Add a description if needed
      href: `/updates/${update.slug?.current || ""}`,
      image: update.images?.[0]
        ? urlFor(update.images[0])
        : "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='521' height='651'%3E%3Crect width='521' height='651' fill='%23F38BBB'/%3E%3C/svg%3E", // Fallback background
      width: 521, // Specify width
      height: 651, // Specify height
      date: update.updateDate ? new Date(update.updateDate) : undefined,
      type: update.updateType,
    })),
  };

  return (
    <main className="mx-auto min-h-screen max-w-8xl">
      <div className="flex justify-center items-center flex-col mt-40 mb-40 gap-5">
        <div className="w-full max-w-2xl">
          <Hero title="What We've Been Up To at Useless HQ" subtitle="" />
        </div>
      </div>
      <Gallery4 galleryType={"update"} {...updatesSection} />
    </main>
  );
}
