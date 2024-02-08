"use client";

import Image from "next/image";
import popup from "@/assets/popup.png";

import { useState } from "react";
import emailjs from "@emailjs/browser";

import close from "@/assets/x-symbol-svgrepo-com.svg";

export default function PopUp() {
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    telefone: "",
  });

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
      });
  };

  return (
    <div className="w-full h-full fixed top-0 popup z-50">
      <div className="max-w-[500px] my-[1.75rem] mx-auto relative bg-white">
        <div className="p-3 flex justify-end opacity-70 cursor-pointer">
          <button>
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
            Nossa equipe deseja apresentar a Brasil Telhas para você, deixe seu
            telefone abaixo e entraremos em contato!
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
  );
}
