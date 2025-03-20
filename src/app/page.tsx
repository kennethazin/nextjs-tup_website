import React from "react";
import OvalButton from "@/components/ui/oval-button";
const Main = () => {
  return (
    <main className=" m-auto min-h-screen max-w-7xl p-3">
      <section className="h-screen flex items-center justify-center">
        <h1 className=" text-7xl leading-15 md:text-8xl md:leading-20 lg:text-9xl lg:leading-28 text-center  ">
          A Space to Reconnect—with People, Planet & Creativity
        </h1>
      </section>
      {/* bento box */}
      <section className="flex items-center justify-center h-screen w-full">
        <div className="grid grid-cols-5 grid-rows-2 h-[700px] w-full  gap-4 ">
          <div className="col-span-2 row-span-2 border rounded-4xl">
            big left
          </div>
          <div className="col-span-1 row-span-1 border rounded-4xl">
            small top mid
          </div>
          <div className="col-span-2 row-span-1 border rounded-4xl p-10 text-center flex flex-col justify-center items-center gap-4 ">
            Workshops <br />
            Events <br />
            Community action for a greener future <br />
            <OvalButton className="">Events</OvalButton>
          </div>
          <div className="col-span-2 row-span-1 border rounded-4xl p-10 text-center flex flex-col justify-center items-center gap-4 ">
            Connection <br />
            Sustainability <br />
            Creativity & action <br />
            Education & accesibility <br />
            Community & collaboration
            <OvalButton className=""> Contact us</OvalButton>
          </div>
          <div className="col-span-1 row-span-1 border rounded-4xl">
            small bottom right
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
