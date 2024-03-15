// @ts-nocheck

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import fetchDepo from "@/api/fetchDepo";

import Star from "@/assets/Testimony/star.svg";

import LeftBtn from "@/assets/button/menu-left.svg";
import RightBtn from "@/assets/button/menu-right.svg";

export default function Testimony() {
  const [activeIndex, setActiveIndex] = useState(0);

  const [depo, setDepo] = useState([]);

  useEffect(() => {
    const updateDepo = async () => {
      const data = await fetchDepo();
      setDepo(data);
    };

    updateDepo();
  }, []);

  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + depo.length) % depo.length);
  };

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % depo.length);
  };

  return (
    <div className=" relative">
      <div className="absolute top-6">
        <h1 className="mb-2">Depoimentos</h1>
        <p className="text-title">De quem comprovou nossa qualidade!</p>
      </div>
      <div className="testimony h-[460px]">
        <button className="prev-testimony" onClick={goToPrevSlide}>
          <Image src={LeftBtn} alt="Left" />
        </button>
        <div className="carousel-slide">
          {depo.map((item, index) => (
            <div
              key={item.id}
              className={
                index === activeIndex
                  ? "slide-testion slide h-full active flex-col md:flex-row mt-20 md:mt-0"
                  : "slide-testion slide h-full flex-col md:flex-row mt-20 md:mt-0"
              }
            >
              <div key={item.title} className="md:w-[28%] ml-[4%] mt-[4%]">
                <p className="flex">
                  {Array.from({ length: item.quality }).map((_, index) => (
                    <Image
                      key={index}
                      src={Star}
                      alt="Star"
                      width={20}
                      height={20}
                    />
                  ))}
                </p>
                <h2 className="text-text">{item.title}</h2>
                <p className="text-text italic font-medium mb-4">
                  {item.profession}
                </p>
                <p className="text-justify font-medium">{item.text}</p>
              </div>
              <div className="flex justify-center md:justify-end h-full md:flex-row gap-[2%] mr-[4%]">
                {item.images.map((imagem) => (
                  <Image
                    key={imagem.image.url}
                    src={imagem.image.url}
                    alt={imagem.image.url}
                    width={imagem.image.width}
                    height={imagem.image.height}
                    className="w-[40%] md:max-w-[50%]"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="next-testimony" onClick={goToNextSlide}>
          <Image src={RightBtn} alt="Right" />
        </button>
      </div>
    </div>
  );
}
