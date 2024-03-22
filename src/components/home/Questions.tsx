"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Menu from "@/assets/Questions/menu.svg";
import Logo from "@/assets/Questions/Telhas.png";

import { SetStateAction, useState } from "react";

export default function Question() {
  const [activeList, setActiveList] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-9 md:max-w-[75%] select-none relative">
      <div>
        <h1 className="mb-2">Não queremos deixá-lo com dúvidas!</h1>
        <p className="text-title">
          Caso não encontre o que procura, entre em contato com nossa equipe.
        </p>
      </div>
      <div>
        <ul className="list-questions">
          <div
            className="flex title"
            onClick={() => setActiveList(activeList === 1 ? null : 1)}
          >
            <Image
              src={Menu}
              alt="menu"
              width={24}
              height={24}
              className={
                activeList === 1
                  ? "transition transform -rotate-180 duration-300"
                  : ""
              }
            />
            <p className="font-bold">
              Como posso escolher o perfil de telha metálica adequado para o meu
              projeto?
            </p>
          </div>
          {activeList === 1 && (
            <motion.div
              className="div"
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <li className="pl-6">
                <p>
                  A escolha do perfil de telha metálica depende de vários
                  fatores, como o tipo de construção, o clima da região, o
                  design estético desejado e requisitos específicos.
                  Recomendamos uma consulta com nossos especialistas para
                  avaliar suas necessidades e oferecer orientações
                  personalizadas para garantir a escolha mais adequada ao seu
                  projeto.
                </p>
              </li>
            </motion.div>
          )}
        </ul>
      </div>
      <div>
        <ul className="list-questions">
          <div
            className="flex"
            onClick={() => setActiveList(activeList === 2 ? null : 2)}
          >
            <Image
              src={Menu}
              alt="menu"
              width={24}
              height={24}
              className={
                activeList === 2
                  ? "transition transform -rotate-180 duration-300"
                  : ""
              }
            />
            <p className="font-bold">
              Vocês oferecem garantia para as telhas metálicas?
            </p>
          </div>
          {activeList === 2 && (
            <motion.div
              className="div"
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <li className="pl-6">
                <p>
                  Agradecemos pelo seu interesse em nossas telhas metálicas. No
                  momento, nossa empresa não oferece garantia para esse produto.
                  Reconhecemos a importância da garantia para a tranquilidade do
                  cliente, e estamos constantemente revisando nossas políticas
                  para melhor atender às necessidades de nossos clientes. No
                  entanto, estamos comprometidos em fornecer produtos de alta
                  qualidade e garantir sua satisfação. Se você tiver alguma
                  dúvida adicional ou precisar de assistência, não hesite em
                  entrar em contato conosco. Estamos aqui para ajudar.
                </p>
              </li>
            </motion.div>
          )}
        </ul>
      </div>
      <div>
        <ul className="list-questions">
          <div
            className="flex"
            onClick={() => setActiveList(activeList === 3 ? null : 3)}
          >
            <Image
              src={Menu}
              alt="menu"
              width={24}
              height={24}
              className={
                activeList === 3
                  ? "transition transform -rotate-180 duration-300"
                  : ""
              }
            />
            <p className="font-bold">
              Qual é o prazo de entrega das telhas metálicas?
            </p>
          </div>
          {activeList === 3 && (
            <motion.div
              className="div"
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <li className="pl-6">
                <p>
                  Estamos constantemente monitorando nossa capacidade de
                  produção e logística para garantir que possamos atender às
                  demandas de nossos clientes da melhor maneira possível. Assim
                  que você realizar a compra, nossa equipe estará em contato
                  para fornecer uma estimativa mais precisa do prazo de entrega.
                  Agradecemos sua compreensão e estamos à disposição para
                  fornecer qualquer assistência adicional que
                  você possa precisar.
                </p>
              </li>
            </motion.div>
          )}
        </ul>
      </div>
      <div>
        <ul className="list-questions">
          <div
            className="flex"
            onClick={() => setActiveList(activeList === 4 ? null : 4)}
          >
            <Image
              src={Menu}
              alt="menu"
              width={24}
              height={24}
              className={
                activeList === 4
                  ? "transition transform -rotate-180 duration-300"
                  : ""
              }
            />
            <p className="font-bold">Quais tamanhos vocês produzem?</p>
          </div>
          {activeList === 4 && (
            <motion.div
              className="div"
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <li className="pl-6">
                <p>
                  Temos uma variedade de tamanhos e cores disponíveis em nossa
                  linha de telhas metálicas. Para atender às diferentes
                  necessidades dos nossos clientes, oferecemos uma gama
                  diversificada de opções. Desde tamanhos padrão até medidas
                  personalizadas, estamos prontos para atender às
                  suas especificações.
                </p>
              </li>
            </motion.div>
          )}
        </ul>
      </div>
      <div>
        <ul className="list-questions">
          <div
            className="flex"
            onClick={() => setActiveList(activeList === 5 ? null : 5)}
          >
            <Image
              src={Menu}
              alt="menu"
              width={24}
              height={24}
              className={
                activeList === 5
                  ? "transition transform -rotate-180 duration-300"
                  : ""
              }
            />
            <p className="font-bold">
              Qual é a vida útil média das telhas metálicas?
            </p>
          </div>
          {activeList === 5 && (
            <motion.div
              className="div"
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <li className="pl-6">
                <p>
                  Nossas telhas metálicas são projetadas para oferecer uma vida
                  útil duradoura. Embora a vida útil exata possa variar
                  dependendo de vários fatores, como condições climáticas,
                  manutenção adequada e uso, geralmente as telhas metálicas têm
                  uma vida útil média de X anos. Recomendamos seguir as
                  instruções de instalação e manutenção fornecidas para garantir
                  a longevidade e o desempenho ideal das telhas metálicas.
                </p>
              </li>
            </motion.div>
          )}
        </ul>
      </div>
      <div className="w-[50%] absolute bottom-0 xl:top-24 right-[-36%] hidden md:block">
        <Image src={Logo} alt="Logo" width={540} />
      </div>
    </div>
  );
}
