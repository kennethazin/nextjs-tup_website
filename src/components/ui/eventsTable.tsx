"use client";

import { useState } from "react";
import { ExternalLink, Calendar } from "lucide-react";
import Link from "next/link";

interface Event {
  id: string;
  name: string;
  date: string;
  type: string;
  url?: string;
}

interface EventsTableProps {
  events: Event[];
}

export default function EventsTable({ events }: EventsTableProps) {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <div className="w-full  mx-auto p-6 ">
      <div className="overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-12 gap-4 py-4 border-b border-gray-200 mb-1">
          <div className="col-span-5 md:col-span-4">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Event Name
            </h3>
          </div>
          <div className="col-span-3 md:col-span-3">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Date
            </h3>
          </div>
          <div className="col-span-3 md:col-span-4">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Type
            </h3>
          </div>
          <div className="col-span-1">{/* Empty space for arrow */}</div>
        </div>

        {/* Event Rows */}
        <div className="space-y-0">
          {events.map((event, index) => {
            const rowContent = (
              <div
                className={`
                  grid grid-cols-12 gap-4 py-6 border-b border-gray-100 cursor-pointer
                  transition-colors duration-300 ease-in-out
                  ${hoveredRow === index ? "bg-gray-100" : "hover:bg-gray-100"}
                `}
                onMouseEnter={() => setHoveredRow(index)}
                onMouseLeave={() => setHoveredRow(null)}
                // Remove onClick, handled by link/a
              >
                <div className="col-span-5 md:col-span-4 flex items-center">
                  <div className="flex items-center space-x-3">
                    <span
                      className={`
                      text-gray-900 font-medium transition-colors duration-300
                      ${hoveredRow === index ? "text-pink-600" : ""}
                    `}
                    >
                      {event.name}
                    </span>
                  </div>
                </div>

                <div className="col-span-3 md:col-span-3 flex items-center">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar
                      className={`
                      w-4 h-4 transition-colors duration-300 hidden sm:block
                      ${hoveredRow === index ? "text-pink-500" : "text-gray-400"}
                    `}
                    />
                    <span className="text-sm">{event.date}</span>
                  </div>
                </div>

                <div className="col-span-3 md:col-span-4 flex items-center">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <span className="text-sm">{event.type}</span>
                  </div>
                </div>

                <div className="col-span-1 flex items-center justify-end">
                  <ExternalLink
                    className={`
                    w-4 h-4 transition-colors duration-300 hidden sm:block
                    ${hoveredRow === index ? "text-pink-500" : "text-gray-400"}
                  `}
                  />
                </div>
              </div>
            );

            if (event.url) {
              if (event.url.startsWith("/")) {
                return (
                  <Link href={event.url} key={event.id} legacyBehavior>
                    <a tabIndex={0}>{rowContent}</a>
                  </Link>
                );
              } else {
                return (
                  <a
                    href={event.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={event.id}
                    tabIndex={0}
                  >
                    {rowContent}
                  </a>
                );
              }
            }
            // No link
            return <div key={event.id}>{rowContent}</div>;
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 pt-4 border-t border-gray-100">
        <p className="text-sm text-gray-500 text-center">
          Showing {events.length} events
        </p>
      </div>
    </div>
  );
}
