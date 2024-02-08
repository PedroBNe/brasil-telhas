"use client";

import Link from "next/link";

export default function CookiesPopUp() {
  return (
    <div className="fixed bottom-0 bg-white w-full flex justify-center z-20">
      <div className="flex text-base justify-center w-[85%] py-4 gap-4">
        <b className="font-bold flex items-center">Hm... Cookies!</b>
        <p className="text-base flex items-center">
          🍪 Usamos cookies para garantir que você tenha a melhor experiência em
          nosso site.
          <Link href="/" className="flex items-center font-bold pl-1">
            Saiba Mais
          </Link>
        </p>
        <button className="bg-[#254977] rounded px-4 py-2 text-white text-sm font-medium">
          Aceitar
        </button>
      </div>
    </div>
  );
}
