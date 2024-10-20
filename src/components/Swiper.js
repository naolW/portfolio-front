import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import React, { useEffect, useState } from "react";

const apiUrl = process.env.REACT_APP_API_URL;

const SampleSwiper = () => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchPortfolio();
      setPortfolios(data);
    };
    getData();
  }, []);

  const fetchPortfolio = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/portfolios?populate=*`);
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
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      onSlideChange={() => {}}
      onSwiper={(swiper) => {}}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Navigation]}
    >
      {portfolios.map((item, index) => (
        <SwiperSlide key={index}>
          <a
            href={`${item.Link}`}
            target="_bank"
            className="card w-full h-[470px] p-5 text-white bg-gradient-to-b from-[#212121] to-[#212121] border-2 border-transparent rounded-lg flex flex-col cursor-pointer transform-gpu transition-transform duration-800 ease-out hover:rotate-[-2deg] hover:scale-105"
          >
            <div className="main-content flex-1 flex flex-col gap-3">
              <div className="header flex items-center text-[#717171] font-semibold">
                <span className="mr-1 text-white">{item.title}</span>
              </div>
              <img
                src={`${apiUrl}${item.image.url}`}
                alt={item.image.name}
                className="w-full object-cover aspect-[4/3] h-[300px] object-top rounded-md"
              />
              <div className="categories flex gap-2">
                {item.Tags.split(", ").map((category, index) => (
                  <span
                    key={index}
                    className="border py-0.5 px-2 text-xs text-white uppercase rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
            <div className="footer text-sm leading-none text-left">
              {item.Description}
            </div>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SampleSwiper;
