import InfiniteImages from "@/app/markets/infinite-images";
import "./styles.css";
import SimpleMap from "./google-maps";
import { ArrowUpRightIcon } from "lucide-react";
import Hero from "@/components/hero";
export default function Markets() {
  return (
    <>
      <main className="mx-auto min-h-screen max-w-8xl p-8">
        <div className="flex justify-center items-center flex-col mt-40 mb-40">
          <Hero
            title="Markets"
            subtitle="Shop second-hand, support local creatives, and join the movement"
          />
          <InfiniteImages />
        </div>
        <div className="flex flex-col lg:flex-row w-full gap-8 ">
          <div className="bg-[#479239] w-full lg:w-1/2 h-[700px] lg:h-[800px] text-[#FFF9EB] flex justify-between flex-col p-8 rounded-4xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="102"
              height="59"
              viewBox="0 0 102 59"
              fill="none"
            >
              <path
                d="M39.7939 7.98354C39.3174 9.066 39.0611 10.2322 39.0396 11.4144V11.6362C39.1507 13.4109 36.2624 13.4109 36.2624 11.6362C36.2351 9.37352 36.9016 7.15668 38.1724 5.28309C39.4433 3.4095 41.2577 1.96881 43.3722 1.15435C47.292 -0.420308 51.6765 -0.382603 55.5686 1.25912C59.4607 2.90083 62.5442 6.01324 64.146 9.91696C64.7396 11.8403 64.716 13.9009 64.0786 15.8102C63.4412 17.7195 62.2217 19.3821 60.5911 20.5652C60.0996 20.9468 59.417 21.3757 58.6607 21.8508C55.5705 23.7922 51.2492 26.5071 53.7035 29.9378C54.1336 30.5028 53.9918 31.0771 53.6013 31.4616C53.6176 32.0156 53.3178 32.5529 52.5923 32.7114C34.9476 36.6912 15.4722 41.2804 4.09195 56.2435C34.4394 56.3772 64.7842 54.5176 95.0409 52.5872L59.4243 36.5381C57.7579 35.7617 59.2021 33.3769 60.8129 34.1534L101.306 52.3995C102.639 53.0096 101.861 55.0061 100.583 55.0061C67.5895 57.1136 34.7067 58.9992 1.37951 58.9992C1.13611 59.0077 0.89505 58.9494 0.682483 58.8307C0.469916 58.712 0.293826 58.5375 0.173611 58.326C0.0533962 58.1145 -0.00638833 57.8741 0.000540621 57.6311C0.00746957 57.388 0.0808702 57.1515 0.212938 56.9472C11.623 40.0493 31.8868 34.6166 50.7201 30.2754C48.8876 26.2014 52.5311 22.2758 55.7032 20.2324C58.0017 19.2234 59.9388 17.5407 61.2578 15.4075C61.6933 14.3036 61.8697 13.1148 61.7734 11.9323C61.6771 10.7498 61.3107 9.60508 60.7023 8.58599C59.3216 6.60473 57.4487 5.01592 55.2674 3.97556C53.0861 2.93521 50.6714 2.47902 48.2602 2.65178C47.0765 2.61487 45.8973 2.81307 44.791 3.23484C43.6846 3.65662 42.6731 4.29358 41.8154 5.10877C40.9576 5.92396 40.2705 6.90109 39.7939 7.98354Z"
                fill="#FFF9EB"
              />
            </svg>
            <div className="space-y-5">
              <h3 className="text-5xl">
                The useless project flea market at Portobello Hall
              </h3>
              <p>
                A monthly flea market packed with preloved fashion, homeware,
                art, jewellery, and more—all in the heart of Portobello. Expect
                40+ incredible stalls, groovy tunes, and the best community
                vibes.
                <br></br> <br></br>📍46 Bloomfield Ave, Portobello, Dublin 8,
                D08 AY98
              </p>
            </div>
            <div>
              <div className="flex flex-row gap-10">
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
                  >
                    11-4pm
                  </text>
                </svg>
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
                  >
                    Last Sunday of every month
                  </text>
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-[700px] lg:h-[800px]">
            <SimpleMap />
          </div>
        </div>
        <div className="bg-[#D9CDB5] flex flex-row w-full lg:w-1/2 self-start p-14 rounded-4xl text-6xl uppercase mt-12 items-center ">
          <p>Apply for a stall</p>
          <ArrowUpRightIcon size={150} strokeWidth={0.8} />
        </div>
      </main>
    </>
  );
}
