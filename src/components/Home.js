import React, { useEffect, useState } from "react";
import SampleSwiper from "./Swiper";

const apiUrl = process.env.REACT_APP_API_URL;

const IconLink = ({ icon, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <img src={icon} alt="icon" className="w-8 h-8 hover:scale-125" />
  </a>
);

const Home = () => {
  const [content, setContents] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setContents(data);
    };
    getData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${apiUrl}/api/global?populate=socialAddress.icon`
      );
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }
      const { data } = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error:", error);
      return [];
    }
  };

  return (
    <section className="px-5">
      <div className="hero md:flex justify-between text-white max-w-7xl mx-auto py-5">
        <div className="left flex flex-col gap-1 items-start flex-1 text-left">
          <h1 className="text-3xl md:text-5xl font-medium">
            {content.siteName}
          </h1>
          <p className="text-base md:text-lg leading-tight mt-2">
            {content.siteDescription}
          </p>
          <div className="icon flex gap-1.5 items-center mt-2 justify-between">
            {content.socialAddress?.map(({ icon, url }, index) => (
              <IconLink
                key={index}
                icon={`${apiUrl}${icon.url}`}
                url={`${url}`}
              />
            ))}
          </div>
          {/* <a
            className="p-[2px] mt-5 block rounded-[50px] bg-gradient-to-r from-[#ff6f4c] to-[#4454fe]"
            href=""
          >
            <div className="group button-content px-7 py-4 flex items-center gap-3 rounded-[50px] bg-gradient-to-r from-[#693834] to-[#282c67] text-white text-base leading-none font-medium no-underline">
              <span>Request a Website</span>
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                className="group-hover:rotate-45"
              >
                <path
                  fillRule="evenodd"
                  d="M14 2.5a.5.5 0 00-.5-.5h-6a.5.5 0 000 1h4.793L2.146 13.146a.5.5 0 00.708.708L13 3.707V8.5a.5.5 0 001 0v-6z"
                />
              </svg>
            </div>
          </a> */}
        </div>
        <div className="right flex-1"></div>
      </div>
      <div className="max-w-7xl mx-auto">
        <SampleSwiper />
      </div>
    </section>
  );
};
export default Home;
