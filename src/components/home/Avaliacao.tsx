"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import Profile from "@/assets/Avaliacao/profile.svg";
import Left from "@/assets/Avaliacao/menu-left.svg";
import Right from "@/assets/Avaliacao/menu-right.svg";

const profiles = [
  {
    user: "Ghost Company",
    category: "Agência de Publicidade",
    image: Profile,
    text: "Uma empresa séria e dedicada em fornecer qualidade para os seus clientes. Parabéns a toda equipe!",
  },
  {
    user: "User2",
    category: "Agência de Publicidade",
    image: Profile,
    text: "Uma empresa séria e dedicada em fornecer qualidade para os seus clientes. Parabéns a toda equipe!",
  },
  {
    user: "User3",
    category: "Agência de Publicidade",
    image: Profile,
    text: "Uma empresa séria e dedicada em fornecer qualidade para os seus clientes. Parabéns a toda equipe!",
  },
  {
    user: "User4",
    category: "Agência de Publicidade",
    image: Profile,
    text: "Uma empresa séria e dedicada em fornecer qualidade para os seus clientes. Parabéns a toda equipe!",
  },
  {
    user: "User5",
    category: "Agência de Publicidade",
    image: Profile,
    text: "Uma empresa séria e dedicada em fornecer qualidade para os seus clientes. Parabéns a toda equipe!",
  },
  {
    user: "Pedro",
    category: "Agência",
    image: Profile,
    text: "Uma empresa séria e dedicada em fornecer qualidade para os seus clientes. Parabéns a toda equipe!",
  },
];
const ITEMS_VISIBLE = 3;

export default function Avaliacao() {
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
      <div className="w-[90%] md:w-[full] overflow-hidden">
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
                  src={profile.image}
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
