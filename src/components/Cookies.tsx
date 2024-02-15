"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function CookiesPopUp() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookiesAccepted) {
      setShowPopup(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed bottom-0 bg-white w-full flex justify-center z-40">
      <div className="flex text-base justify-center w-[85%] py-4 gap-4">
        <p className="md:flex">
          <b className="text-[11px] font-bold flex items-center md:text-base">
            Hm... Cookies!
          </b>
          <p className="text-[11px] md:flex md:text-base items-center">
            🍪 Usamos cookies para garantir que você tenha a melhor experiência
            em nosso site.
            <Link href="/politica-de-privacidade">
              <span className="flex text-[11px] md:text-base items-center font-bold pl-1">
                Saiba Mais
              </span>
            </Link>
          </p>
        </p>
        <button
          onClick={handleAcceptCookies}
          className="bg-[#254977] rounded px-4 py-2 text-white text-sm font-medium"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
}
