import { type SanityDocument } from "next-sanity";
import { Gallery4 } from "@/components/ui/gallery4";
import imageUrlBuilder from "@sanity/image-url";

import { client } from "@/sanity/client";
import EventsTable from "@/components/ui/eventsTable";
import Hero from "@/components/hero";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const EVENTS_QUERY = `*[
  _type == "event"
  && defined(slug.current)
]|order(eventDate desc)[0...12]{_id, title, slug, eventDate, image_1, eventType, }`;

const PAST_EVENTS_QUERY = `*[
  _type == "event"
  && defined(slug.current)
  && eventDate < now()
]|order(eventDate desc)[0...12]{_id, title, slug, eventDate, image_1, eventType, }`;

const options = { next: { revalidate: 30 } };

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset })
        .image(source)
        .width(800)
        .height(600)
        .url()
    : "";

export default async function IndexPage() {
  const events = await client.fetch<SanityDocument[]>(
    EVENTS_QUERY,
    {},
    options
  );

  const pastEvents = await client.fetch<SanityDocument[]>(
    PAST_EVENTS_QUERY,
    {},
    options
  );

  const futureEvents = {
    title: "Upcoming Events",
    items: events.map((event) => ({
      id: event._id,
      title: event.title,
      description: event.secondary || "", // Use event.secondary for description
      href: `/events/${event.slug.current}`,
      image: event.image_1
        ? urlFor(event.image_1)
        : "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%23F38BBB'/%3E%3C/svg%3E", // Fallback background
      width: 800, // Specify width
      height: 600, // Specify height
      date: event.eventDate ? new Date(event.eventDate) : undefined, // Parse date
      type: event.eventType,
    })),
  };

  const pastEventsSection = {
    title: "Past Events",
    items: pastEvents.map((event) => ({
      id: event._id,
      title: event.title,
      description: event.secondary || "", // Use event.secondary for description
      href: `/events/${event.slug.current}`,
      image: event.image_1
        ? urlFor(event.image_1)
        : "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%23F38BBB'/%3E%3C/svg%3E", // Fallback background
      width: 800, // Specify width
      height: 600, // Specify height
      date: event.eventDate ? new Date(event.eventDate) : undefined, // Parse date
      type: event.eventType,
    })),
  };

  return (
    <main className="mx-auto min-h-screen max-w-8xl metropolitano">
      <div className="flex justify-center items-center flex-col mt-40 mb-40">
        <Hero title="Events" subtitle="Find out what's coming next" />
      </div>
      <Gallery4 galleryType="event" {...futureEvents} />
      <div className="mt-20">
        <Gallery4 {...pastEventsSection} galleryType="event" />
      </div>

      <div className="mt-20">
        <h2 className="text-2xl mb-4">All Events</h2>
        <EventsTable
          events={events.map((event) => ({
            id: event._id,
            name: event.title,
            date: event.eventDate
              ? new Date(event.eventDate).toLocaleDateString()
              : "TBD",
            type: event.eventType,
            url: `/events/${event.slug.current}`,
          }))}
        />
      </div>
    </main>
  );
}
