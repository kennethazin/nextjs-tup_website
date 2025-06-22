import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#308021] rounded-t-4xl h-fit p-6 text-[#FFF9EB] flex flex-col justify-between overflow-hidden metropolitano space-y-10">
      <div className="flex justify-between flex-wrap ">
        <div className="flex flex-row gap-x-3 flex-wrap">
          <Link href="/about" className="hover:underline">
            About us
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          <Link href="/events" className="hover:underline">
            Events
          </Link>
          <Link href="/markets" className="hover:underline">
            Markets
          </Link>
          <Link href="/corporateevents" className="hover:underline">
            Corporate Events
          </Link>
          <Link href="/updates" className="hover:underline">
            Updates
          </Link>
          <Link href="/impact" className="hover:underline">
            Our impact
          </Link>
        </div>
        <div className="flex flex-row gap-3">
          <Link href="/terms" className="hover:underline">
            Terms of service
          </Link>
          <Link href="/privacy" className="hover:underline">
            Privacy policy
          </Link>
        </div>
      </div>

      <div className="flex flex-row justify-between items-end">
        <div className="flex flex-col gap-2">
          <p className="lg:text-5xl metropolitano text-3xl">
            The Useless Project
          </p>
          <p className="w-full lg:w-fit metropolitano">
            A Space to Reconnect—with People, Planet & Creativity
          </p>
        </div>
        <div className="font">@2025</div>
      </div>
    </div>
  );
};

export default Footer;
