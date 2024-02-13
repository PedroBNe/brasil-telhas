"use client";

import Image from "next/image";
import MenuRight from "@/assets/menu-right.svg";
import Button from "./Button";

import SimbolImage from "@/assets/BRASIL TELHAS 1.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Banner() {
  const router = useRouter();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // A verificação é adiada até a montagem do componente,
    // garantindo que o router esteja disponível.
    setShowBanner(router.pathname !== "/sobre");
  }, [router.pathname]);

  if (!showBanner) {
    return null;
  }

  return (
    <div className="mt-12 md:mt-0 pl-[6%] text-white max-w-6xl static">
      <div className=" font-bold text-5xl leading-[3.5rem] mb-[2%]">
        <h1 className="text-white">
          CONSTRUINDO EXCELÊNCIA EM COBERTURAS METÁLICAS
        </h1>
      </div>
      <div className="font-normal leading-8 text-xl mb-[4%] max-w-[70%]">
        <p>
          Telhas Metálicas, Perfis e Parafusos de qualidade superior para elevar
          seus projetos a novos patamares.
        </p>
      </div>
      <div className="flex gap-10">
        <div className=" w-[40%]">
          <Button
            link="https://api.whatsapp.com/send?phone=5548999040036"
            text="ENTRAR EM CONTATO AGORA"
          />
        </div>
        <Link href="/produtos">
          <div className="flex">
            <p className="font-semibold">Navegar no catálogo de produtos</p>
            <Image
              src={MenuRight}
              alt="MenuRight"
              width={32}
              height={24}
              className=" cursor-pointer"
            />
          </div>
        </Link>
      </div>
      <div className="hidden lg:block md:absolute right-0 top-40">
        <Image src={SimbolImage} alt="Simbolo marca" width={660} height={395} />
      </div>
    </div>
  );
}
