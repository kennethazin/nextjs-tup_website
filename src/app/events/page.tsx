import { type SanityDocument } from "next-sanity";
import { Gallery4 } from "@/components/ui/gallery4";
import imageUrlBuilder from "@sanity/image-url";
import type { Metadata } from "next";

import { client } from "@/sanity/client";
import EventsTable from "@/components/ui/eventsTable";
import Hero from "@/components/hero";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const metadata: Metadata = {
  title: "Events - The Useless Project",
  description: "Join our sustainable living events! From flea markets and clothing swaps to creative workshops and community gatherings. Discover upcoming events focused on circular living and environmental action.",
  keywords: ["events", "flea markets", "clothing swaps", "workshops", "sustainability events", "community gatherings", "circular living"],
};

const EVENTS_QUERY = `*[
  _type == "event"
  && defined(slug.current)
]|order(eventDate desc)[0...12]{_id, title, slug, eventDate, images, eventType, secondary}`;


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



  // Get current date (UTC, ignoring time)
  const now = new Date();
  const todayUTC = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));

  // Split events into future and past based on eventDate
  const futureEvents = {
    title: "Upcoming Events",
    items: events
      .filter((event) => {
        if (!event.eventDate) return false;
        const eventDate = new Date(event.eventDate);
        const eventDateUTC = new Date(Date.UTC(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate()));
        return eventDateUTC >= todayUTC;
      })
      .map((event) => ({
        id: event._id,
        title: event.title,
        description: event.secondary || "",
        href: `/events/${event.slug.current}`,
        image: event.images && Array.isArray(event.images) && event.images.length > 0
          ? event.images
              .filter((img) => img && img.asset) // Only images with asset
              .map((img) => urlFor(img))
          : ["data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='521' height='651'%3E%3Crect width='521' height='651' fill='%23F38BBB'/%3E%3C/svg%3E"],
        width: 800,
        height: 600,
        date: event.eventDate ? new Date(event.eventDate) : undefined,
        type: event.eventType,
      })),
  };

  const pastEventsSection = {
    title: "Past Events",
    items: events
      .filter((event) => {
        if (!event.eventDate) return false;
        const eventDate = new Date(event.eventDate);
        const eventDateUTC = new Date(Date.UTC(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate()));
        return eventDateUTC < todayUTC;
      })
      .map((event) => ({
        id: event._id,
        title: event.title,
        description: event.secondary || "",
        href: `/events/${event.slug.current}`,
        image: event.images && Array.isArray(event.images) && event.images.length > 0
          ? event.images
              .filter((img) => img && img.asset) // Only images with asset
              .map((img) => urlFor(img))
          : ["data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='521' height='651'%3E%3Crect width='521' height='651' fill='%23F38BBB'/%3E%3C/svg%3E"],
        width: 800,
        height: 600,
        date: event.eventDate ? new Date(event.eventDate) : undefined,
        type: event.eventType,
      })),
  };

  return (
    <main className="mx-auto min-h-screen max-w-8xl metropolitano container">
      <div className="flex justify-center items-center flex-col mt-10 mb-20 w-full">
        <Hero title="Events" subtitle="Find out what's coming next" />
      </div>
      <div className="mt-20" id="upcoming-events">
        {futureEvents.items.length === 0 ? (
          <div className="text-center text-lg text-muted-foreground py-12">
            Sorry, we have no upcoming events at the moment!
          </div>
        ) : (
          <Gallery4 galleryType="event" {...futureEvents} />
        )}
      </div>
      <div className="mt-20" id="past-events">
        <Gallery4 {...pastEventsSection} galleryType="event" />
      </div>

      <div className="mt-20">
        <h2 className="text-2xl mb-4" >All Events</h2>
        <EventsTable
          events={events.map((event) => ({
            id: event._id,
            name: event.title,
            date: event.eventDate
              ? new Date(event.eventDate).toLocaleDateString("en-GB")
              : "TBD",
            type: event.eventType,
            url: `/events/${event.slug.current}`,
          }))}
        />
      </div>
    </main>
  );
}
