import React from "react";
import { client } from "@/sanity/client";
import { PortableText } from "@portabletext/react";
import { color } from "motion/react";

async function getPrivacy() {
  const query = `*[_type == "privacy"][0]{
    lastUpdated,
    introduction,
    informationWeCollect,
    howWeUseInformation,
    sharingInformation,
    cookies,
    dataSecurity,
    yourRights,
    changesToPolicy,
    contactUs
  }`;
  return await client.fetch(query);
}

export default async function Privacy() {
  const privacy = await getPrivacy();

  return (
    <div className="max-w-3xl mx-auto my-12 p-8 font-sans text-gray-900 leading-relaxed">
      <h1 className="text-4xl font-bold mb-2 text-black">Privacy Policy</h1>
      <p className="text-gray-500 text-base mb-8">
        Last updated:{" "}
        {privacy?.lastUpdated
          ? new Date(privacy.lastUpdated).toLocaleDateString()
          : "N/A"}
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-black">
        1. Introduction
      </h2>
      <PortableText value={privacy?.introduction} />

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-black">
        2. Information We Collect
      </h2>
      <PortableText value={privacy?.informationWeCollect} />

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-black">
        3. How We Use Information
      </h2>
      <PortableText value={privacy?.howWeUseInformation} />

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-black">
        4. Sharing of Information
      </h2>
      <PortableText value={privacy?.sharingInformation} />

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-black">
        5. Cookies
      </h2>
      <PortableText value={privacy?.cookies} />

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-black">
        6. Data Security
      </h2>
      <PortableText value={privacy?.dataSecurity} />

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-black">
        7. Your Rights
      </h2>
      <PortableText value={privacy?.yourRights} />

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-black">
        8. Changes to This Policy
      </h2>
      <PortableText value={privacy?.changesToPolicy} />

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-black">
        9. Contact Us
      </h2>
      <PortableText value={privacy?.contactUs} />
    </div>
  );
}
