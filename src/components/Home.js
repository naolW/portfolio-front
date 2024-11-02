import React, { useEffect, useState } from "react";
import SampleSwiper from "./Swiper";
import Projects from "./Projects";

const apiUrl = process.env.REACT_APP_API_URL;

const IconLink = ({ icon, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <img src={icon} alt="icon" className="w-7 h-7 hover:scale-125" />
  </a>
);

const IconStack = ({ icon, url }) => (
  <img src={icon} alt="icon" className="w-5 h-5 hover:scale-125" />
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
        `${apiUrl}/api/global?populate=socialAddress.icon&populate=stacks&populate=profileImage`
      );
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }
      const { data } = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
      return [];
    }
  };

  return (
    <section className="px-5 xl:px-10 2xl:px-0">
      <div className="hero xl:fixed w-full xl:left-1/2 transform xl:-translate-x-1/2 flex flex-col xl:flex-row max-w-[1440px] justify-between text-darkBlue1 gap-8 mx-auto py-2 md:py-5 h-full pr-2">
        <div className="left relative flex flex-col gap-1 items-start flex-1 text-left h-screen overflow-hidden md:px-5 2xl:px-0">
          <div className="content sticky top-0">
            <div className="flex items-center gap-2">
              {content.profileImage && (
                <img
                  src={`${apiUrl}/${content.profileImage.url}`}
                  alt=""
                  className="h-16 w-16 rounded-full aspect-square object-cover"
                  srcSet={`
                  ${apiUrl}/${content.profileImage.formats?.thumbnail?.url} 96w,
                  ${apiUrl}/${content.profileImage.formats?.small?.url} 309w,
                  ${apiUrl}/${content.profileImage.formats?.medium?.url} 463w,
                  ${apiUrl}/${content.profileImage.formats?.large?.url} 618w
                `}
                  sizes="(max-width: 3rem) 5rem, 3rem"
                />
              )}
              <span>
                <h1 className="text-3xl md:text-5xl md:leading-10 font-medium">
                  {content.fullName}
                </h1>
                <p className="text-xl font-medium leading-none">
                  {content.jobDescription}
                </p>
              </span>
            </div>
            <p className="text-base font-normal md:leading-5 mt-3">
              {content.shortDescription}
            </p>
            <div className="icon flex gap-1.5 items-center mt-2 justify-between w-fit">
              {content.socialAddress?.map(({ icon, url }, index) => (
                <IconLink
                  key={index}
                  icon={`${apiUrl}${icon.url}`}
                  url={`${url}`}
                />
              ))}
            </div>
            <div className="icon flex max-md:overflow-x-auto md:flex-wrap gap-1 items-center mt-4">
              {content.stacks?.map(({ url }, index) => (
                <IconStack key={index} icon={`${apiUrl}${url}`} />
              ))}
            </div>
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
        {/* <div className="right flex-1"></div> */}
        <div
          className="max-w-full xl:max-w-3xl 2xl:max-w-4xl mx-auto xl:h-screen xl:overflow-y-auto sm:pr-3 xl:pb-32
  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-[#4454fe]
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-[#4454fe]
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-[#4454fe]"
        >
          <Projects />
          {/* <SampleSwiper /> */}
        </div>
      </div>
    </section>
  );
};
export default Home;
