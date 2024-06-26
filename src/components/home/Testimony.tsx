"use client";

import Image from "next/image";
import { useState } from "react";

import Video from "@/assets/Testimony/fotoT.png";
import Foto from "@/assets/Testimony/fotoT2.png";
import Maior from "@/assets/Carousel/maior.png";
import Menor from "@/assets/Carousel/menor.png";
import Star from "@/assets/Testimony/star.svg";

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

    const goToNextSlide = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
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
            {carouselItems.map((item, index) => (
              <div
                key={item.id}
                className={
                  index === activeIndex
                    ? "slide-testion slide h-full active flex-col md:flex-row mt-20 md:mt-0"
                    : "slide-testion slide h-full flex-col md:flex-row mt-20 md:mt-0"
                }
              >
                <div
                  key={item.testimony[0].title}
                  className="md:w-[28%] ml-[4%] mt-[4%]"
                >
                  <p className="flex">
                    {Array.from({ length: item.testimony[0].quality }).map(
                      (_, index) => (
                        <Image
                          key={index}
                          src={Star}
                          alt="Star"
                          width={20}
                          height={20}
                        />
                      )
                    )}
                  </p>
                  <h2 className="text-text">{item.testimony[0].title}</h2>
                  <p className="text-text italic font-medium mb-4">
                    {item.testimony[0].profession}
                  </p>
                  <p className="text-justify font-medium">
                    {item.testimony[0].text}
                  </p>
                </div>
                <div className="flex justify-center md:justify-end h-full md:flex-row gap-[2%] mr-[4%]">
                  {item.images.map((image) => (
                    <Image
                      key={image.alt}
                      src={image.src}
                      alt={image.alt}
                      width={20}
                      height={20}
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
  };
}
