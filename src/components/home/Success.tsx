"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import fetchCase from "@/api/fetchCase";

import Maior from "@/assets/Carousel/maior.png";
import Menor from "@/assets/Carousel/menor.png";

import LeftBtn from "@/assets/button/menu-left.svg";
import RightBtn from "@/assets/button/menu-right.svg";

export default function Success() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const updateProducts = async () => {
      const data = await fetchCase();
      setProfiles(data);
    };

    updateProducts();
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + profiles.length) % profiles.length
    );
  };

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % profiles.length);
  };

  return (
    <div id="portfolio">
      <div>
        <p className="text-title">Conheça alguns dos nossos</p>
        <h1 className="text-3xl md:text-5xl">Cases de Sucesso</h1>
      </div>
      <div className="carousel h-[80vh] sm:h-[680px] md:h-[320px] lg:h-[400px] xl:h-[450px]">
        <div className="carousel-slide">
          {profiles.map((item, index) => (
            <div
              key={item.id}
              className={
                index === activeIndex
                  ? "slide active flex flex-col"
                  : "slide flex flex-col"
              }
            >
              <div className="flex relative">
                <button className="prev-button" onClick={goToPrevSlide}>
                  <Image src={LeftBtn} alt="Left" />
                </button>
                <div className="flex flex-col md:flex-row">
                  {item.images.map((image) => (
                    <Image
                      className="max-h-96 md:max-h-none"
                      key={image.image.url}
                      src={image.image.url}
                      alt={image.image.url}
                      width={image.image.width}
                      height={image.image.height}
                    />
                  ))}
                </div>
                <button className="next-button" onClick={goToNextSlide}>
                  <Image src={RightBtn} alt="Right" />
                </button>
              </div>
              <div className="mt-[2%]">
                <h2 className="text-black mb-[0.2%]">{item.title}</h2>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
