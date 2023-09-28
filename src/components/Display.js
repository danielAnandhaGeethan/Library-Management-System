import React from "react";
import HomeNav from "./HomeNav";
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
    <div className="max-w-[1520px] h-[10%]">
      <div className="w-full">
        <HeroSlider
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
                background={{
                  backgroundImage: `url(${image.url})`,
                  backgroundSize: "100% 100%",
                }}
              >
                <div className="w-full h-full bg-[#2f7a92] bg-opacity-40">
                  <HomeNav />
                  <div className="w-full flex justify-center items-center h-full ">
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
