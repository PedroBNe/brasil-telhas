// @ts-nocheck

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import fetchAva from "@/api/fetchAva";

import Left from "@/assets/Avaliacao/menu-left.svg";
import Right from "@/assets/Avaliacao/menu-right.svg";

const ITEMS_VISIBLE = 3;

export default function Avaliacao() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const updateProducts = async () => {
      const data = await fetchAva();
      setProfiles(data);
    };

    updateProducts();
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = profiles.length - ITEMS_VISIBLE;
  const isAtStart = currentIndex <= 0;
  const isAtEnd = currentIndex >= maxIndex;

  const handleLeftClick = () => {
    if (!isAtStart) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleRightClick = () => {
    if (!isAtEnd) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="relative flex justify-center">
      {!isAtStart && (
        <div
          className="absolute top-[50%] left-0 z-10"
          onClick={handleLeftClick}
        >
          <Image src={Left} alt="Esquerda" />
        </div>
      )}
      <div className="w-[90%] md:w-[666px] xl:w-[1000px] overflow-hidden">
        <motion.div className="carousel-ava">
          <motion.div
            className="inner-ava"
            animate={{ x: -(currentIndex * 350) }}
            drag="x"
            dragConstraints={{ left: -maxIndex * 350, right: 0 }}
          >
            {profiles.map((profile) => (
              <motion.div key={profile.user} className="item-ava">
                <Image
                  src={profile.image[0].image.url}
                  alt="Foto de perfil"
                  width={60}
                  height={60}
                />
                <div>
                  <h2>{profile.user}</h2>
                  <p className="text-title">{profile.category}</p>
                </div>
                <div>
                  <p className="text-justify font-medium">{profile.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      {!isAtEnd && (
        <div
          className="absolute top-[50%] right-0 z-10"
          onClick={handleRightClick}
        >
          <Image src={Right} alt="Direita" />
        </div>
      )}
    </div>
  );
}
