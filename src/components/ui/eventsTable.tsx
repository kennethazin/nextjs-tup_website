"use client";

import { useState } from "react";
import { ExternalLink, Calendar, ChevronUp, ChevronDown } from "lucide-react";
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

  // Sorting state
  const [sortBy, setSortBy] = useState<"name" | "date" | "type">("date");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  // Sorting handler
  function handleSort(column: "name" | "date" | "type") {
    if (sortBy === column) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortDir("asc");
    }
  }

  // Sort events
  const sortedEvents = [...events].sort((a, b) => {
    const valA = a[sortBy];
    const valB = b[sortBy];
    if (sortBy === "date") {
      // Try to parse as date
      const dateA = new Date(valA);
      const dateB = new Date(valB);
      if (!isNaN(dateA.getTime()) && !isNaN(dateB.getTime())) {
        return sortDir === "asc"
          ? dateA.getTime() - dateB.getTime()
          : dateB.getTime() - dateA.getTime();
      }
    }
    // Fallback to string comparison
    if (valA < valB) return sortDir === "asc" ? -1 : 1;
    if (valA > valB) return sortDir === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div className="w-full  mx-auto p-6 ">
      <div className="overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-12 gap-4 py-4 border-b border-gray-200 mb-1">
          <div
            className="col-span-5 md:col-span-4 cursor-pointer select-none flex items-center"
            onClick={() => handleSort("name")}
            tabIndex={0}
            role="button"
            aria-label="Sort by event name"
          >
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide flex items-center">
              Event Name
              {sortBy === "name" && (
                sortDir === "asc" ? (
                  <ChevronUp className="w-4 h-4 ml-1" />
                ) : (
                  <ChevronDown className="w-4 h-4 ml-1" />
                )
              )}
            </h3>
          </div>
          <div
            className="col-span-3 md:col-span-3 cursor-pointer select-none flex items-center"
            onClick={() => handleSort("date")}
            tabIndex={0}
            role="button"
            aria-label="Sort by date"
          >
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide flex items-center">
              Date
              {sortBy === "date" && (
                sortDir === "asc" ? (
                  <ChevronUp className="w-4 h-4 ml-1" />
                ) : (
                  <ChevronDown className="w-4 h-4 ml-1" />
                )
              )}
            </h3>
          </div>
          <div
            className="col-span-3 md:col-span-4 cursor-pointer select-none flex items-center"
            onClick={() => handleSort("type")}
            tabIndex={0}
            role="button"
            aria-label="Sort by type"
          >
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide flex items-center">
              Type
              {sortBy === "type" && (
                sortDir === "asc" ? (
                  <ChevronUp className="w-4 h-4 ml-1" />
                ) : (
                  <ChevronDown className="w-4 h-4 ml-1" />
                )
              )}
            </h3>
          </div>
          <div className="col-span-1">{/* Empty space for arrow */}</div>
        </div>

        {/* Event Rows */}
        <div className="space-y-0">
          {sortedEvents.map((event, index) => {
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
                    <span className="text-sm">
                      {(() => {
                        // Try to parse as date and format as day/month/year
                        const d = new Date(event.date);
                        return !isNaN(d.getTime())
                          ? d.toLocaleDateString("en-GB")
                          : event.date;
                      })()}
                    </span>
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
