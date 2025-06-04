import Hero from "@/components/hero";
import ImpactInfographic from "@/components/ui/impact-infographic";
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll";
export default function Impact() {
  return (
    <>
      <div className="flex justify-center items-center flex-col mt-40 mb-40">
        <Hero
          title="Impact to Date"
          subtitle="See how we've made a difference"
        />
      </div>
      <div className="flex justify-center items-center mb-40 ">
        <TextGradientScroll
          className="text-5xl lg:text-6xl w-full lg:w-3/4 leading-tighter "
          text="Since 2018, The Useless Project has grown from a small grassroots initiative into a nationwide movement for sustainability, creativity, and connection. Here’s what we’ve achieved so far:"
        />
      </div>
      <ImpactInfographic />
    </>
  );
}
