import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";
import Image from "next/image";

const EVENT_QUERY = `*[_type == "event" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

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
  const eventImageUrl = event?.image_1
    ? urlFor(event.image_1)?.width(570).height(859).url()
    : null;

  return (
    <main className="container mx-auto min-h-screen p-8 flex flex-col gap-4">
      <Link href="/events" className="hover:underline">
        ← Back to events
      </Link>
      <h1 className="text-8xl font-bold mb-8">{event.title}</h1>

      <div className="flex justify-center ">
        {eventImageUrl && (
          <Image
            src={eventImageUrl}
            alt={event.title}
            className=" rounded-3xl"
            width="570"
            height="859"
          />
        )}
      </div>
      <div className="prose">
        <p>Event: {new Date(event.eventDate).toLocaleDateString()}</p>
        {Array.isArray(event.body) && <PortableText value={event.body} />}
      </div>
    </main>
  );
}
