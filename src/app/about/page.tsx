import Hero from "@/components/hero";
import Image from "next/image";
import Partners from "@/components/partners";

export default function About() {
  return (
    <>
      <div className="flex justify-center items-center flex-col mt-40 mb-40 w-full">
        <Hero
          title="About us"
          subtitle="Hi👋 I'm Taz–a lover of colour, creativity & connection"
        />
      </div>
      {/* Bento layout */}
      <div className="flex flex-col items-center justify-center w-full  ">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row w-full max-w-7xl gap-6 md:h-[520px]">
          {/* Image Card */}
          <div className="w-full border md:w-[30%] bg-white rounded-2xl shadow-md flex items-center justify-center relative p-0 overflow-hidden min-h-[300px] md:min-h-0">
            {/* Star icon */}
            <div className="absolute top-4 left-4 z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 53 53"
                fill="none"
              >
                <g clipPath="url(#clip0_577_1082)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M49.7538 38.6016C45.845 36.3933 40.1696 33.1471 34.0083 29.7683L29.3267 27.2508C30.8504 26.4337 32.3963 25.6387 33.8538 24.8216C40.4788 21.1779 46.4633 17.8433 49.6654 16.1871C49.7492 16.1492 49.8244 16.0948 49.8867 16.0272C49.949 15.9596 49.997 15.8802 50.0279 15.7936C50.0588 15.7071 50.072 15.6152 50.0666 15.5234C50.0612 15.4317 50.0375 15.3419 49.9967 15.2596C49.9157 15.1 49.7773 14.977 49.6092 14.9156C49.4412 14.8541 49.2561 14.8586 49.0913 14.9283C45.7567 16.4079 39.5954 19.2125 32.7054 22.5912L28.0017 24.9762C28.0017 22.7679 28.0017 20.7362 27.8029 18.6825C27.4717 11.0416 26.9858 4.26206 26.6767 0.662482C26.6739 0.570614 26.6527 0.480244 26.6142 0.396762C26.5758 0.313279 26.5209 0.238393 26.4529 0.176568C26.3849 0.114743 26.3051 0.067245 26.2184 0.0369066C26.1316 0.00656809 26.0396 -0.00598982 25.9479 -1.83946e-05C25.7644 0.0113738 25.5925 0.0938647 25.4688 0.229936C25.3451 0.366006 25.2793 0.544938 25.2854 0.728732V18.7487V25.175C23.585 24.2916 21.8625 23.4083 20.2063 22.5912C13.4046 19.2125 7.24334 16.4079 3.90875 14.9283C3.74183 14.8522 3.5515 14.8455 3.37963 14.9097C3.20776 14.9738 3.06843 15.1037 2.99229 15.2706C2.91615 15.4375 2.90944 15.6279 2.97363 15.7997C3.03783 15.9716 3.16766 16.1109 3.33459 16.1871C6.625 17.8433 12.4108 21.1779 19.1463 24.8216C20.6258 25.6387 22.1496 26.4337 23.6954 27.2508L18.9917 29.7683C12.8304 33.1471 7.155 36.3933 3.24625 38.6016C3.06745 38.7039 2.9353 38.8715 2.87763 39.0692C2.81996 39.2669 2.84127 39.4793 2.93709 39.6616C2.98561 39.7523 3.05173 39.8324 3.13158 39.8972C3.21144 39.9619 3.30341 40.0101 3.40213 40.0389C3.50084 40.0677 3.60431 40.0765 3.70647 40.0648C3.80863 40.0531 3.90743 40.0212 3.99709 39.9708C7.99417 37.9612 13.8683 35.1125 20.14 31.9546L25.4842 29.2383L25.6167 34.2071C25.8817 41.2075 26.1908 47.7662 26.3454 52.2271C26.3766 52.4124 26.4725 52.5807 26.616 52.7021C26.7595 52.8234 26.9414 52.89 27.1294 52.89C27.3173 52.89 27.4992 52.8234 27.6427 52.7021C27.7862 52.5807 27.8821 52.4124 27.9133 52.2271C27.9133 47.8104 28.09 41.1854 28.09 34.185V29.5254C29.68 30.3646 31.2921 31.1816 32.8821 31.9766C39.1538 35.1346 45.0279 37.9833 49.025 39.9929C49.1147 40.0433 49.2135 40.0752 49.3156 40.0869C49.4178 40.0986 49.5212 40.0898 49.62 40.061C49.7187 40.0322 49.8107 39.984 49.8905 39.9192C49.9704 39.8545 50.0365 39.7744 50.085 39.6837C50.135 39.5911 50.1661 39.4894 50.1765 39.3847C50.1869 39.2799 50.1764 39.1741 50.1456 39.0734C50.1147 38.9728 50.0642 38.8792 49.997 38.7982C49.9297 38.7173 49.847 38.6504 49.7538 38.6016Z"
                    fill="#FFF9EB"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_577_1082">
                    <rect width="53" height="53" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <Image
              fill
              src="https://images.pexels.com/photos/4503265/pexels-photo-4503265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Hand with plant"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            />
          </div>
          {/* Green Card */}
          <div className="w-full md:w-[70%] rounded-2xl  p-6 md:p-10 flex flex-col justify-center text-[#FFF9EB] relative min-h-[500px] md:min-h-0 futura ">
            <div className="flex flex-col items-center">
              {/* Heart icon */}

              <div className="text-base md:text-lg  text-black">
                At The Useless Project, we believe that the world’s biggest
                problems—climate change, overconsumption, burnout,
                disconnection—aren’t just environmental, they’re human. When we
                feel lost, when we don’t know where to start, when everything
                feels too big to fix—it’s creativity and community that bring us
                back.
                <br />
                <br />
                This is ultimately why Geraldine Carton and I founded The
                Useless Project back in 2018 as a space to reconnect—with
                people, planet &amp; creativity. Through workshops, flea
                markets, events, and creative projects, we help people find joy
                in rethinking waste, making things with their hands, and coming
                together to learn, share, and take action.
                <br />
                <br />
                Sustainability isn’t about doom and gloom or doing everything
                perfectly. It’s about small, meaningful steps that create big,
                lasting change—for ourselves and the world around us.
                <br />
                <br />
                So whether you’re here to swap clothes, pick up a new skill, or
                just reconnect with what really matters—welcome.
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row w-full max-w-7xl gap-6 md:h-[520px] futura">
          {/* Pink Card */}
          <div className="w-full md:w-[70%]  rounded-2xl  p-6 md:p-10 flex flex-col justify-center text-black relative min-h-[220px] md:min-h-0">
            <div className="flex flex-col items-center">
              <div className="text-base md:text-lg text-black">
                Abit about me – I started out in podcasting, studying audio
                documentary in Chicago, but after a few years in the field, I
                found myself craving community and purpose. At the same time, I
                was waking up to the urgency of the climate crisis, so I pivoted
                to running sustainability events with my pal Geraldine—and
                that’s how The Useless Project was born.
                <br />
                <br />
                Flash forward 8 years, I have just moved home from Lisbon where
                I have been living for the past 2 years diving into the world of
                ceramics. While the change was refreshing, I’ve realised how
                much I miss being part of a close-knit community and working
                towards something bigger.
                <br />
                <br />
                So now, I’m back in the Midlands, with a ceramics studio in my
                shed and a whole lot of love in my heart.
              </div>
            </div>
          </div>
          {/* Image Card with overlay */}
          <div className="w-full border md:w-[30%] bg-white rounded-2xl shadow-md flex items-end justify-center relative p-0 overflow-hidden min-h-[500px] md:min-h-0">
            {/* Star icon */}
            <div className="absolute top-4 left-4 z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 36 40"
                fill="none"
              >
                <path
                  d="M4.26167 24.9383C2.56905 25.7466 0.505867 25.7722 -4.19617e-05 27.9905C1.24942 29.2999 2.53008 28.5693 3.74213 28.1103C7.78716 26.5786 11.8023 24.9705 15.701 23.0839C15.953 22.962 16.2553 22.9449 16.951 22.7806C16.2807 25.5373 15.6667 28.0339 15.0683 30.5342C14.7375 31.9161 14.3494 33.2919 14.1455 34.6937C14.0083 35.637 13.9573 36.8567 15.2231 37.0555C16.3399 37.2309 16.9846 36.2875 17.2431 35.3097C17.8731 32.9267 18.3704 30.5084 18.9794 28.1193C19.303 26.8501 19.4072 25.486 20.3881 24.1266C22.2888 27.0812 23.4381 30.1486 24.6724 33.1697C25.21 34.4855 25.6534 35.8398 26.1644 37.167C26.607 38.3166 27.2095 39.682 28.6285 39.2062C30.297 38.6467 29.6412 37.1066 29.2471 35.9435C27.9762 32.1925 26.5965 28.4802 24.6871 24.718C26.2369 24.7778 27.0496 25.7137 27.9945 26.3482C28.7375 26.8472 29.4283 27.424 30.1568 27.9457C30.8825 28.4654 31.713 29.2225 32.5243 28.3459C33.4913 27.3011 32.3926 26.5835 31.7781 25.9302C30.4421 24.5097 28.9122 23.3148 27.2303 22.3186C25.9673 21.5705 24.7235 20.7896 23.0916 19.791C27.6883 16.9463 32.6306 15.095 35.2981 10.3573C30.5534 11.6802 27.0372 15.4303 21.9114 16.8192C22.6386 11.0517 23.9678 5.62394 23.7235 0.0145845C21.7884 -0.146587 21.4146 1.05633 21.1831 2.22503C20.5869 5.23424 20.0939 8.26396 19.5426 11.2823C19.3692 12.2315 19.1416 13.1707 18.847 14.5417C16.9569 11.8367 15.2992 9.41729 13.5887 7.03628C12.7177 5.82397 11.8025 4.63473 10.8093 3.52354C10.2167 2.86068 9.39411 2.17953 8.47861 2.92999C7.56656 3.67761 8.35351 4.42769 8.76495 5.08141C10.6377 8.05694 12.5471 11.0091 14.4299 13.9784C14.743 14.4721 15.1871 14.9186 15.166 15.7156C14.1565 15.8618 13.3263 15.3671 12.4997 14.9491C9.76944 13.5683 7.05402 12.1579 4.33117 10.7623C3.93355 10.5584 3.54484 10.2913 3.12025 10.1955C2.10662 9.96691 0.82933 9.58384 0.29747 10.7286C-0.283081 11.978 0.948021 12.5803 1.84709 13.0594C5.53319 15.0236 9.20152 17.0273 13.0747 18.6137C13.8201 18.919 14.6176 19.1875 15.3129 20.3026C11.6326 21.8489 8.02789 23.3634 4.26167 24.9383Z"
                  fill="#FFF9EB"
                />
              </svg>
            </div>
            <Image
              fill
              src="/taz.JPG"
              alt="Taz Keller"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            />
            {/* Name and subtitle overlay */}
            <div className="absolute bottom-6 left-6 text-[#FFF9EB] z-10">
              <div className="text-2xl font-semibold">Taz Keller</div>
              <div className="text-base font-light rounded  mt-1">
                founder &amp; creative
              </div>
            </div>
          </div>
        </div>
      </div>
      <Partners />
    </>
  );
}
