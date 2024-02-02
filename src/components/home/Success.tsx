"use client";

import React, { useState } from "react";
import Image from "next/image";

import Maior from "@/assets/Carousel/maior.png";
import Menor from "@/assets/Carousel/menor.png";

import LeftBtn from "@/assets/button/menu-left.svg";
import RightBtn from "@/assets/button/menu-right.svg";

export default function Success() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselItems = [
    {
      id: 1,
      images: [
        { src: Menor, alt: "Menor 1" },
        { src: Maior, alt: "Maior 1" },
      ],
      title: "Instalação em Ginásio Estadual em São João do Sul - SC",
      text: `Uma obra realizada com os nossos produtos que oferece qualidade e garantia de durabilidade para o governo estadual. Além de fornecer segurança para o público, a estética entregue encanta.
      `,
    },
    {
      id: 2,
      images: [
        { src: Maior, alt: "Menor 2" },
        { src: Menor, alt: "Maior 2" },
      ],
      title: "Instalação em Ginásio Estadual em São João do Sul - SC",
      text: `Uma obra realizada com os nossos produtos que oferece qualidade e garantia de durabilidade para o governo estadual. Além de fornecer segurança para o público, a estética entregue encanta.
      `,
    },
  ];

  const goToPrevSlide = () => {
    setActiveIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselItems.length) % carouselItems.length
    );
  };

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  return (
    <div id="portfolio">
      <div>
        <p className="text-title">Conheça alguns dos nossos</p>
        <h1 className="text-3xl md:text-5xl">Cases de Sucesso</h1>
      </div>
      <div className="carousel h-[80vh] sm:h-[680px] md:h-[320px] lg:h-[400px] xl:h-[450px]">
        <div className="carousel-slide">
          {carouselItems.map((item, index) => (
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
                    <Image key={image.alt} src={image.src} alt={image.alt} />
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
