import Image from "next/image";
import Hero from "@/components/hero";
export default function CorporateEvents() {
  return (
    <>
      <main className="mx-auto min-h-screen max-w-8xl">
        <div className="flex justify-center items-center flex-col mt-40 mb-40 px-4">
          <Hero
            title="Corporate Events & Workshops"
            subtitle="Bring Sustainability & Creativity to Your Workplace"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="bg-[#ECE4D3] w-full lg:w-1/2 h-[700px] lg:h-[800px] text-[#031100] flex justify-between flex-col p-8 rounded-4xl border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="87"
              height="87"
              viewBox="0 0 87 87"
              fill="none"
            >
              <path
                d="M43.5 0L45.1147 39.6017L74.2591 12.7409L47.3983 41.8853L87 43.5L47.3983 45.1147L74.2591 74.2591L45.1147 47.3983L43.5 87L41.8853 47.3983L12.7409 74.2591L39.6017 45.1147L0 43.5L39.6017 41.8853L12.7409 12.7409L41.8853 39.6017L43.5 0Z"
                fill="#131912"
              />
            </svg>
            <div className="space-y-5 text-center flex flex-col items-center">
              <p className="mt-5">
                We love going into businesses to inspire, educate, and spark
                action through interactive workshops and engaging talks. Whether
                you&apos;re looking to explore sustainable fashion, food waste
                solutions, or hands-on upcycling projects, we create fun,
                accessible sessions tailored to your team. From Dublin to Delhi,
                we’ve worked with companies like Airbnb, TikTok, PayPal, and the
                European Parliament, delivering dynamic, eye-opening workshops
                that leave teams feeling empowered and inspired to make real
                change.
              </p>
              <p className="mt-10">
                Download our Corporate Workshops Brochure here
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="239"
                height="59"
                viewBox="0 0 239 59"
                fill="none"
              >
                <path
                  d="M119.5 0.5C152.471 0.5 182.304 3.79975 203.88 9.12598C214.671 11.79 223.37 14.9544 229.357 18.4492C235.38 21.9646 238.5 25.716 238.5 29.5C238.5 33.284 235.38 37.0354 229.357 40.5508C223.37 44.0456 214.671 47.21 203.88 49.874C182.304 55.2003 152.471 58.5 119.5 58.5C86.5292 58.5 56.6959 55.2003 35.1201 49.874C24.3286 47.21 15.6304 44.0456 9.64258 40.5508C3.61956 37.0354 0.5 33.284 0.5 29.5C0.5 25.716 3.61956 21.9646 9.64258 18.4492C15.6304 14.9544 24.3286 11.79 35.1201 9.12598C56.6959 3.79975 86.5292 0.5 119.5 0.5Z"
                  stroke="#031100"
                />
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill="#031100"
                  fontFamily="inherit"
                  className="futura font-medium hover:underline"
                >
                  Download
                </text>
              </svg>
            </div>
            <div></div>
          </div>
          <div className="flex flex-col gap-8 w-full lg:w-1/2">
            <div className="bg-[#F38BBB] flex-1 text-[#FFF9EB] flex justify-center flex-col p-8 rounded-4xl items-center space-y-8 border ">
              <p className="text-center">
                If you’d like to get us into your business or if you have any
                questions?
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="239"
                height="59"
                viewBox="0 0 239 59"
                fill="none"
              >
                <path
                  d="M119.5 0.5C152.471 0.5 182.304 3.79975 203.88 9.12598C214.671 11.79 223.37 14.9544 229.357 18.4492C235.38 21.9646 238.5 25.716 238.5 29.5C238.5 33.284 235.38 37.0354 229.357 40.5508C223.37 44.0456 214.671 47.21 203.88 49.874C182.304 55.2003 152.471 58.5 119.5 58.5C86.5292 58.5 56.6959 55.2003 35.1201 49.874C24.3286 47.21 15.6304 44.0456 9.64258 40.5508C3.61956 37.0354 0.5 33.284 0.5 29.5C0.5 25.716 3.61956 21.9646 9.64258 18.4492C15.6304 14.9544 24.3286 11.79 35.1201 9.12598C56.6959 3.79975 86.5292 0.5 119.5 0.5Z"
                  stroke="#FFF9EB"
                />
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill="#FFF9EB"
                  fontFamily="inherit"
                  className="futura"
                >
                  Contact Us
                </text>
              </svg>
            </div>
            <div className="flex-1 w-full rounded-4xl overflow-hidden border">
              <div className="relative w-full h-64 md:h-80 lg:h-full">
                <Image
                  src="/corporate.jpg"
                  alt="Corporate Event"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
