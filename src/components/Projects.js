import React, { useEffect, useState } from "react";

const apiUrl = process.env.REACT_APP_API_URL;

export default function Projects() {
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
    <section className="relative flex flex-col gap-5 md:gap-10 border-l pl-3 md:pl-10 border-spacing-10 border-dotted border-[#ff6f4c]/40">
      {portfolios.map((item, index) => (
        <div key={index} className="relative">
          <a
            href={`${item.Link}`}
            target="_bank"
            className="card w-full max-h-[480px] md:max-h-[660px] p-2.5 md:px-5 md:py-2 text-white bg-white border-2 border-transparent rounded-lg flex flex-col cursor-pointer transform-gpu transition-transform duration-800 ease-out hover:rrotate-[-2deg] hover:sscale-105"
          >
            <div className="main-content flex-1 flex flex-col gap-1">
              <div className="header flex items-center text-[#717171] font-semibold">
                <span className="mr-1 text-darkBlue1 text-lg leading-5 md:text-xl md:leading-10 mb-2 md:mb-1 text-left">
                  {item.title}
                </span>
              </div>
              <div className="md:max-h-[460px] sm:max-h-[350px] max-h-[200px] overflow-y-hidden border rounded-xl">
                <img
                  src={`${apiUrl}${item.image.url}`}
                  alt={item.image.name}
                  className="w-full object-cover h-full object-top rounded-xl opacity-0 transition-opacity duration-300"
                  loading="lazy"
                  onLoad={(e) => e.currentTarget.classList.remove("opacity-0")}
                />
              </div>
              <div className="categories flex gap-1 md:gap-2 flex-wrap py-2">
                {item.Tags.split(", ").map((category, index) => (
                  <p
                    key={index}
                    className="border pt-[.75px] pb-[.25px] m-0 px-2 text-xs xl:leading-none xl:font-semibold text-darkBlue1 border-darkBlue1"
                  >
                    {category}
                  </p>
                ))}
              </div>
            </div>
            <div className="footer text-xs sm:text-sm text-left line-clamp-2 md:line-clamp-5 flex-1 md:leading-[1.2] text-darkBlue1">
              {item.Description}
            </div>
          </a>
        </div>
      ))}
    </section>
  );
}
