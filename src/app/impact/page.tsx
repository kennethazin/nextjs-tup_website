import Hero from "@/components/hero";
import ImpactInfographic from "@/components/ui/impact-infographic";
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Impact - The Useless Project",
  description: "See the positive environmental and social impact we've made through our sustainability initiatives, community events, and circular living programs. Real change through collective action.",
  keywords: ["impact", "environmental impact", "social impact", "sustainability results", "community change", "circular living outcomes"],
};

export default function Impact() {
  return (
    <>
      <div className="flex justify-center items-center flex-col mt-10 mb-20 ">
        <Hero
          title="Impact to Date"
          subtitle="See how we've made a difference"
        />
      </div>
      <div className="flex justify-center items-center mb-40 ">
        <TextGradientScroll
          className="text-2xl lg:text-5xl w-full lg:w-3/4 leading-tighter "
          text="Since 2018, The Useless Project has grown from a small grassroots initiative into a nationwide movement for sustainability, creativity, and connection. Here’s what we’ve achieved so far:"
        />
      </div>
      <ImpactInfographic />
    </>
  );
}
