"use client";

import Image from "next/image";
import { useState } from "react";

import Video from "@/assets/Testimony/fotoT.png";
import Foto from "@/assets/Testimony/fotoT2.png";
import Star from "@/assets/Testimony/star.svg";

import Maior from "@/assets/Carousel/maior.png";
import Menor from "@/assets/Carousel/menor.png";

import LeftBtn from "@/assets/button/menu-left.svg";
import RightBtn from "@/assets/button/menu-right.svg";

export default function Testimony() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselItems = [
    {
      id: 1,
      testimony: [
        {
          quality: 5,
          title: "Pedro",
          profession: "Dev",
          text: "“Teste teste.”",
        },
      ],
      images: [
        { src: Video, alt: "Menor 2" },
        { src: Foto, alt: "Maior 2" },
      ],
    },
    {
      id: 2,
      testimony: [
        {
          quality: 3,
          title: "Alan Paulo de Souza",
          profession: "Gestor de Projetos - Ghost Company",
          text: "“Uma obra realizada com os nossos produtos que oferece qualidade e garantia de durabilidade para o governo estadual. Além de fornecer segurança para o público, a estética entregue encanta.”",
        },
      ],
      images: [
        { src: Video, alt: "Menor 2" },
        { src: Foto, alt: "Maior 2" },
      ],
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
    <div className=" relative">
      <div className="absolute top-6">
        <h1>Depoimentos</h1>
        <p className="text-title">De quem comprovou nossa qualidade!</p>
      </div>
      <div className="testimony">
        <button className="prev-testimony" onClick={goToPrevSlide}>
          <Image src={LeftBtn} alt="Left" />
        </button>
        <div className="carousel-slide">
          {carouselItems.map((item, index) => (
            <div
              key={item.id}
              className={
                index === activeIndex
                  ? "slide-testion slide active flex-col md:flex-row mt-20 md:mt-0"
                  : "slide-testion slide"
              }
            >
              {item.testimony.map((testion) => (
                <div key={testion.title} className="w-[28%] mt-[2%]">
                  <p className="flex">
                    {Array.from({ length: testion.quality }).map((_, index) => (
                      <Image
                        key={index}
                        src={Star}
                        alt="Star"
                        width={20}
                        height={20}
                      />
                    ))}
                  </p>
                  <h2 className="text-text">{testion.title}</h2>
                  <p className="text-text italic font-medium mb-4">
                    {testion.profession}
                  </p>
                  <p className="text-justify font-medium">{testion.text}</p>
                </div>
              ))}
              <div className="flex gap-[2%]">
                {item.images.map((image) => (
                  <Image key={image.alt} src={image.src} alt={image.alt} />
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
