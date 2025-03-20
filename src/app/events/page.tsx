import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";

const EVENTS_QUERY = `*[
  _type == "event"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const events = await client.fetch<SanityDocument[]>(
    EVENTS_QUERY,
    {},
    options
  );

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Events</h1>
      <ul className="flex flex-col gap-y-4">
        {events.map((event) => (
          <li className="hover:underline" key={event._id}>
            <Link href={`/events/${event.slug.current}`}>
              <h2 className="text-xl font-semibold">{event.title}</h2>
              <p>{new Date(event.publishedAt).toLocaleDateString()}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
