// src/components/Home.js
import React from "react";
import Projects from "./Projects";
import SampleSwiper from "./Swiper";

const Home = () => (
  <section className="px-5">
    <div className="hero flex justify-between text-white max-w-7xl mx-auto py-10">
      <div className="left flex flex-col gap-5 items-start flex-1 text-left">
        <h1 className="text-5xl font-medium">
          Helping startups achive online pressence with webflow websites
        </h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          sed ipsum urna. Pellentesque laoreet dolor et mi faucibus maximus et
          eu elit.
        </p>
        <a
          className="p-[2px] block rounded-[50px] bg-gradient-to-r from-[#ff6f4c] to-[#4454fe]"
          href=""
        >
          <div className="button-content px-7 py-6 flex items-center gap-3 rounded-[50px] bg-gradient-to-r from-[#693834] to-[#282c67] text-white text-base leading-none font-medium no-underline">
            <span>Request a Website</span>
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
            >
              <path
                fillRule="evenodd"
                d="M14 2.5a.5.5 0 00-.5-.5h-6a.5.5 0 000 1h4.793L2.146 13.146a.5.5 0 00.708.708L13 3.707V8.5a.5.5 0 001 0v-6z"
              />
            </svg>
          </div>
        </a>
      </div>
      <div className="right flex-1"></div>
    </div>
    <div className="max-w-7xl mx-auto">
      <SampleSwiper />
    </div>
    {/* <Projects /> */}
  </section>
);
export default Home;
