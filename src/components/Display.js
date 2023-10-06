import React from "react";
import first from "../images/first.jpg";
import second from "../images/second.jpg";
import third from "../images/third.jpg";
import fourth from "../images/fourth.jpg";
import fifth from "../images/fifth.jpg";
import HeroSlider, { Slide } from "hero-slider";

const Display = () => {
  const images = [
    {
      url: first,
      text: "Welcome to the world of E-Learning",
    },
    {
      url: second,
      text: "Search and Explore a wide variety of books",
    },
    {
      url: third,
      text: "No restriction to reading. Read anywhere and anytime.",
    },
    {
      url: fourth,
      text: "Available on all kinds of devices you can think of.",
    },
    {
      url: fifth,
      text: "Accessible and easily usable for people of all ages.",
    },
  ];

  return (
    <div className="w-full bg-[#2b2f46] flex justify-center items-center">
      <div className="max-w-[1520px] p-20 pb-10 w-full">
        <HeroSlider
          height="85vh"
          autoplay
          controller={{
            initialSlide: 0,
            slidingDuration: 500,
            slidingDelay: 100,
            onSliding: (nextSlide) =>
              console.debug("onSliding(nextSlide): ", nextSlide),
            onBeforeSliding: (previousSlide, nextSlide) =>
              console.debug(
                "onBeforeSliding(previousSlide, nextSlide): ",
                previousSlide,
                nextSlide
              ),
            onAfterSliding: (nextSlide) =>
              console.debug("onAfterSliding(nextSlide): ", nextSlide),
          }}
        >
          {images.map((image, index) => {
            return (
              <Slide
                key={index}
                style={{
                  backgroundImage: `url(${image.url})`,
                  backgroundSize: "100% 100%",
                }}
              >
                <div className="w-full h-full bg-opacity-40 bg-[#2f7a92]">
                  <div className="w-full h-full flex justify-center translate-y-10 items-center">
                    <h2 className="text-center mb-[8%] text-[240%] text-[#d1fcff] font-serif">
                      {image.text}
                    </h2>
                  </div>
                </div>
              </Slide>
            );
          })}
        </HeroSlider>
      </div>
    </div>
  );
};

export default Display;
