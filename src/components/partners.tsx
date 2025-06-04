import { InfiniteSlider } from "@/components/ui/infinite-slider";
import Image from "next/image";

function Partners() {
  return (
    <>
      <div className="flex justify-center mb-10 text-4xl metropolitano font-medium">
        We&apos;ve worked with
      </div>
      <InfiniteSlider
        gap={24}
        className="w-full h-full  justify-center flex items-center mb-20"
        reverse
      >
        <Image
          src="https://cdn.worldvectorlogo.com/logos/airbnb.svg"
          alt="Apple Music logo"
          width={60}
          height={120}
          className="h-[60px] w-auto"
        />
        <Image
          src="https://cdn.worldvectorlogo.com/logos/tiktok-banner-black-3.svg"
          alt="Chrome logo"
          width={120}
          height={120}
          className="h-[60px] w-auto"
        />
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/European_Parliament_logo.svg/1200px-European_Parliament_logo.svg.png"
          alt="Strava logo"
          width={120}
          height={120}
          className="h-[60px] w-auto"
        />
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/UNHCR.svg/2560px-UNHCR.svg.png"
          alt="Nintendo logo"
          width={120}
          height={120}
          className="h-[60px] w-auto"
        />
        <Image
          src="https://cdn.worldvectorlogo.com/logos/guinness-8.svg"
          alt="Jquery logo"
          width={120}
          height={120}
          className="h-[60px] w-auto"
        />
        <Image
          src="https://logos-world.net/wp-content/uploads/2020/09/PayPal-Logo-2022.png"
          alt="Prada logo"
          width={120}
          height={120}
          className="h-[60px] w-auto"
        />
      </InfiniteSlider>
    </>
  );
}

export default Partners;
