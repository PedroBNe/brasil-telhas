"use client"

import Image from "next/image";
import { motion } from "framer-motion";

import Menu from "@/assets/Questions/menu.svg"
import Logo from "@/assets/Questions/Telhas.png"

import { SetStateAction, useState } from 'react';

export default function Question() {
  const [activeList, setActiveList] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-9 h-[450px] max-w-[75%] select-none relative">
      <div>
        <h1 className="mb-2">Não queremos deixá-lo com dúvidas!</h1>
        <p className="text-title">Caso não encontre o que procura, entre em contato com nossa equipe.</p>
      </div>
      <div>
        <ul className="list-questions">
          <div className="flex title" onClick={() => setActiveList(activeList === 1 ? null : 1)}>
            <Image src={Menu} alt="menu" width={24} height={24} />
            <p className="font-bold">Como posso escolher o perfil de telha metálica adequado para o meu projeto?</p>
          </div>
          {activeList === 1 && (
            <motion.div 
              className="div"
              initial={{opacity: 0, y: -40}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.5}}
            >
              <li className="pl-6">A escolha do perfil de telha metálica depende de vários fatores, como o tipo de construção, o clima da região, o design estético desejado e requisitos específicos. Recomendamos uma consulta com nossos especialistas para avaliar suas necessidades e oferecer orientações personalizadas para garantir a escolha mais adequada ao seu projeto.</li>
            </motion.div>
          )}
        </ul>
      </div>
      <div>
        <ul className="list-questions">
          <div className="flex" onClick={() => setActiveList(activeList === 2 ? null : 2)}>
            <Image src={Menu} alt="menu" width={24} height={24} />
            <p className="font-bold">Vocês oferecem garantia para as telhas metálicas?</p>
          </div>
          {activeList === 2 && (
            <motion.div 
            className="div"
            initial={{opacity: 0, y: -40}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
          >
            <li className="pl-6">A escolha do perfil de telha metálica depende de vários fatores, como o tipo de construção, o clima da região, o design estético desejado e requisitos específicos. Recomendamos uma consulta com nossos especialistas para avaliar suas necessidades e oferecer orientações personalizadas para garantir a escolha mais adequada ao seu projeto.</li>
          </motion.div>
          )}
        </ul>
      </div>
      <div>
        <ul className="list-questions">
          <div className="flex" onClick={() => setActiveList(activeList === 3 ? null : 3)}>
            <Image src={Menu} alt="menu" width={24} height={24} />
            <p className="font-bold">Qual é o prazo de entrega das telhas metálicas?</p>
          </div>
          {activeList === 3 && (
            <motion.div 
            className="div"
            initial={{opacity: 0, y: -40}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
          >
            <li className="pl-6">A escolha do perfil de telha metálica depende de vários fatores, como o tipo de construção, o clima da região, o design estético desejado e requisitos específicos. Recomendamos uma consulta com nossos especialistas para avaliar suas necessidades e oferecer orientações personalizadas para garantir a escolha mais adequada ao seu projeto.</li>
          </motion.div>
          )}
        </ul>
      </div>
      <div>
        <ul className="list-questions">
          <div className="flex" onClick={() => setActiveList(activeList === 4 ? null : 4)}>
            <Image src={Menu} alt="menu" width={24} height={24} />
            <p className="font-bold">Quais tamanhos vocês produzem?</p>
          </div>
          {activeList === 4 && (
            <motion.div 
            className="div"
            initial={{opacity: 0, y: -40}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
          >
            <li className="pl-6">A escolha do perfil de telha metálica depende de vários fatores, como o tipo de construção, o clima da região, o design estético desejado e requisitos específicos. Recomendamos uma consulta com nossos especialistas para avaliar suas necessidades e oferecer orientações personalizadas para garantir a escolha mais adequada ao seu projeto.</li>
          </motion.div>
          )}
        </ul>
      </div>
      <div>
        <ul className="list-questions">
          <div className="flex" onClick={() => setActiveList(activeList === 5 ? null : 5)}>
            <Image src={Menu} alt="menu" width={24} height={24} />
            <p className="font-bold">Quais tamanhos vocês produzem?</p>
          </div>
          {activeList === 5 && (
            <motion.div 
            className="div"
            initial={{opacity: 0, y: -40}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
          >
            <li className="pl-6">A escolha do perfil de telha metálica depende de vários fatores, como o tipo de construção, o clima da região, o design estético desejado e requisitos específicos. Recomendamos uma consulta com nossos especialistas para avaliar suas necessidades e oferecer orientações personalizadas para garantir a escolha mais adequada ao seu projeto.</li>
          </motion.div>
          )}
        </ul>
      </div>
      <div className="absolute top-24 right-[-36%]">
        <Image src={Logo} alt="Logo" width={540} /> 
      </div>
    </div>
  );
}
