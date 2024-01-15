'use client'

import Image from "next/image";
import { useState } from "react";

import Video from "@/assets/Testimony/fotoT.png"
import Foto from "@/assets/Testimony/fotoT2.png"
import Star from "@/assets/Testimony/star.svg"

import Maior from "@/assets/Carousel/maior.png";
import Menor from "@/assets/Carousel/menor.png";

import LeftBtn from "@/assets/button/menu-left.svg"
import RightBtn from "@/assets/button/menu-right.svg"

export default function Testimony(){

  const [activeIndex, setActiveIndex] = useState(0);
  const carouselItems = [
    { 
      id: 1,
      testimony: [
        {
          quality: 5,
          title: "Alan Paulo de Souza",
          profession: "Gestor de Projetos - Ghost Company",
          text: "“Uma obra realizada com os nossos produtos que oferece qualidade e garantia de durabilidade para o governo estadual. Além de fornecer segurança para o público, a estética entregue encanta.”"
        }
      ],
      images: [
        { src: Menor, alt: "Menor 1" },
        { src: Maior, alt: "Maior 1" }
      ]
    },
    { 
      id: 2,
      testimony: [
        {
          quality: 5,
          title: "Alan Paulo de Souza",
          profession: "Gestor de Projetos - Ghost Company",
          text: "“Uma obra realizada com os nossos produtos que oferece qualidade e garantia de durabilidade para o governo estadual. Além de fornecer segurança para o público, a estética entregue encanta.”"
        }
      ],
      images: [
        { src: Video, alt: "Menor 2" }, 
        { src: Foto, alt: "Maior 2" }  
      ]
    },
  ];

  const goToPrevSlide = () => {
    setActiveIndex(prevIndex => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
  };

  const goToNextSlide = () => {
    setActiveIndex(prevIndex => (prevIndex + 1) % carouselItems.length);
  };

  return (
    <div>
      <div className="testimony">
        <button className='prev-button' onClick={goToPrevSlide}><Image src={LeftBtn} alt='Left' /></button>
        <div className="carousel-slide">
          {carouselItems.map((item, index) => (
            <div
              key={item.id}
              className={index === activeIndex ? "slide-testion slide active" : "slide-testion slide"}
            >
              {item.testimony.map(testion => (
                <div key={testion.title} className="w-[28%] ">
                  <p className="flex">
                    {Array.from({ length: testion.quality }).map((_, index) => (
                      <Image key={index} src={Star} alt="Star" width={20} height={20} />
                    ))}
                  </p>
                  <h2>{testion.title}</h2>
                  <p>{testion.profession}</p>
                  <p className="text-justify">{testion.text}</p>
                </div>
              ))}
              <div className="flex">
                {item.images.map(image => (
                  <Image key={image.alt} src={image.src} alt={image.alt} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className='next-button' onClick={goToNextSlide}><Image src={RightBtn} alt='Right'/></button>
      </div>
    </div>
  )
}