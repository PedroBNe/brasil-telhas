"use client";

import Image from "next/image";
import popup from "@/assets/popup.png";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import close from "@/assets/x-symbol-svgrepo-com.svg";

export default function PopUp() {
  const [popUp, setPopUp] = useState(true); // Define popUp como true por padrão
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const [formData, setFormData] = useState({
    nomeCompleto: "",
    telefone: "",
  });

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const popUpData = localStorage.getItem("popUpData");
    if (popUpData) {
      const { show, expireAt } = JSON.parse(popUpData);
      const now = new Date().getTime();
      if (now < expireAt) {
        setPopUp(show);
      }
    }
    setIsReady(true); // Atualiza o estado para indicar que a verificação está completa
  }, []);

  if (!isReady) {
    return null; // Ou renderize um carregamento, se preferir
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const templateParams = {
      from_name: formData.nomeCompleto,
      telefone: formData.telefone,
    };

    emailjs
      .send(
        "service_ae7r5gi",
        "template_y54fjw8",
        templateParams,
        "AhwHJTIIyg9zOzEqX"
      )
      .then(() => {
        console.log("Email enviado!");
        setFormData({
          nomeCompleto: "",
          telefone: "",
        });
        const expireAt = new Date().getTime() + 6 * 60 * 60 * 1000; // Define um novo tempo de expiração
        localStorage.setItem(
          "popUpData",
          JSON.stringify({ show: false, expireAt })
        );
        setShowSuccessMessage(true);
        setPopUp(false);
        setTimeout(() => setShowSuccessMessage(false), 2000);
      });
  };

  const handleClose = () => {
    const expireAt = new Date().getTime() + 6 * 60 * 60 * 1000; // Define um novo tempo de expiração
    localStorage.setItem(
      "popUpData",
      JSON.stringify({ show: false, expireAt })
    );
    setPopUp(false);
  };

  if (showSuccessMessage) {
    return (
      <div className="w-full h-full fixed top-0 left-0 flex justify-center items-center z-50">
        <div className="bg-white p-4 rounded shadow">
          <p>Email enviado com sucesso!</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {popUp && (
        <div className="w-full h-full fixed top-0 popup z-50">
          <div className="w-[90%] md:max-w-[500px] my-[1.75rem] mx-auto relative bg-white rounded">
            <div className="p-3 flex justify-end opacity-70 cursor-pointer">
              <button onClick={handleClose}>
                <Image src={close} alt="close" width={20} height={20} />
              </button>
            </div>
            <div className="flex justify-center">
              <Image src={popup} alt="Imagem popup" width={120} />
            </div>
            <div className="flex justify-center items-center gap-2 flex-col mb-4">
              <h3 className="flex justify-center text-xl font-bold">
                Olá, tudo bem ?
              </h3>
              <p className="flex justify-center text-center w-[90%] opacity-80">
                Nossa equipe deseja apresentar a Brasil Telhas para você, deixe
                seu telefone abaixo e entraremos em contato!
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex items-center flex-col gap-6"
            >
              <input
                type="text"
                name="nomeCompleto"
                placeholder="Seu Nome"
                className="bg-input w-[90%] h-[50px] rounded pl-4"
                value={formData.nomeCompleto}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="telefone"
                placeholder="Telefone"
                className="bg-input w-[90%] h-[50px] rounded pl-4"
                value={formData.telefone}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="w-[90%] bg-button py-2 rounded mb-4 text-white text-base font-semibold"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
