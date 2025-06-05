import React from "react";
import { client } from "@/sanity/client";
import { PortableText } from "@portabletext/react";

async function getTerms() {
  const query = `*[_type == "terms"][0]{
    lastUpdated,
    introduction,
    useOfWebsite,
    intellectualProperty,
    limitationOfLiability,
    linksToOtherWebsites,
    changesToTerms,
    governingLaw,
    contactUs
  }`;
  return await client.fetch(query);
}

export default async function Terms() {
  const terms = await getTerms();

  return (
    <div className="max-w-3xl mx-auto my-12 p-8 font-sans text-gray-900 leading-relaxed">
      <h1 className="text-4xl font-bold mb-2 text-black">Terms of Service</h1>
      <p className="text-gray-500 text-base mb-8">
        Last updated:{" "}
        {terms?.lastUpdated
          ? new Date(terms.lastUpdated).toLocaleDateString()
          : "N/A"}
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-black">
        1. Introduction
      </h2>
      <PortableText value={terms?.introduction} />

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-black">
        2. Use of the Website
      </h2>
      <PortableText value={terms?.useOfWebsite} />

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-black">
        3. Intellectual Property
      </h2>
      <PortableText value={terms?.intellectualProperty} />

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-black">
        4. Limitation of Liability
      </h2>
      <PortableText value={terms?.limitationOfLiability} />

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-black">
        5. Links to Other Websites
      </h2>
      <PortableText value={terms?.linksToOtherWebsites} />

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-black">
        6. Changes to These Terms
      </h2>
      <PortableText value={terms?.changesToTerms} />

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-black">
        7. Governing Law
      </h2>
      <PortableText value={terms?.governingLaw} />

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-black">
        8. Contact Us
      </h2>
      <PortableText value={terms?.contactUs} />
    </div>
  );
}
