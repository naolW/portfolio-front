import React from "react";

const sampleProjects = [
  "https://picsum.photos/id/1000/400/300",
  "https://picsum.photos/id/230/400/300",
  "https://picsum.photos/id/260/400/300",
  "https://picsum.photos/id/160/400/300",
  "https://picsum.photos/id/660/400/300",
  "https://picsum.photos/id/860/400/300",
  "https://picsum.photos/id/560/400/300",
];

export default function Projects() {
  return (
    <section className="relative flex overflow-x-auto md:overflow-x-hidden bg-darkBlue1 border-b border-t border-[#E9E9E9] mb-10">
      <div className="md:animate-marquee whitespace-nowrap flex gap-1 w-full">
        {sampleProjects.map((item, index) => (
          <a
            key={index}
            target="_blank"

            // className={`m-auto max-md:px-3 p-10 bg-cover bg-center h-[500px] bg-amber-600/50 flex-shrink-0`}
          >
            <img
              src={item}
              alt="{item.icon?.data.attributes.alternativeText}"
              className="h-[300px] w-full object-cover aspect-[4/3]"
            />
          </a>
        ))}
      </div>

      <div className="max-md:hidden absolute left-[70px] md:animate-marquee2 whitespace-nowrap flex gap-1 w-full">
        {sampleProjects.map((item, index) => (
          <a
            key={index}
            target="_blank"
            className="m-auto max-md:px-3 p-10 bg-green-400 flex-shrink-0"
          >
            <img
              src={item}
              alt="{item.icon?.data.attributes.alternativeText}"
              className="h-[300px] w-full object-cover aspect-[4/3]"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
