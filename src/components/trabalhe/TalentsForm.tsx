"use client";

import Image from "next/image";

import Anexo from "@/assets/Form/Attach.png";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function TalentsForm() {
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    email: "",
    idade: "",
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
      email: formData.email,
      idade: formData.idade,
      tel: formData.telefone,
    };

    emailjs
      .send(
        "service_ae7r5gi",
        "template_87bo6oj",
        templateParams,
        "AhwHJTIIyg9zOzEqX"
      )
      .then(() => {
        console.log("Email enviado!");
        setFormData({
          nomeCompleto: "",
          email: "",
          idade: "",
          telefone: "",
        });
      });
  };

  return (
    <div className="flex justify-between mt-24 flex-col md:flex-row">
      <div className="w-full md:w-[50%]">
        <h1 className="mb-3">Banco de Talentos</h1>
        <h2 className="mb-8">Não encontrou nada para você?</h2>
        <p className="mb-4">
          Não tem problema! Pensamos em você e por isso deixamos um espaço
          dedicado a coletar talentos que podem vir a somar futuramente na nossa
          empresa.
        </p>
        <p>Preencha os campos abaixo e anexe seu currículo.</p>
      </div>
      <div className="md:w-[45%] mt-4 md:mt-0">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between mb-6">
            <div className="flex flex-col w-full gap-8">
              <input
                type="text"
                name="nomeCompleto"
                placeholder="Seu nome completo*"
                className="bg-input w-full h-[50px] rounded pl-4"
                value={formData.nomeCompleto}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Seu melhor e-mail completo*"
                className="bg-input w-full h-[50px] rounded pl-4"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <div className="flex justify-between flex-col md:flex-row gap-8 md:gap-0">
                <input
                  type="number"
                  name="idade"
                  placeholder="Idade:"
                  className="bg-input md:w-[45%] h-[50px] rounded pl-4"
                  value={formData.idade}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="telefone"
                  placeholder="Telefone:"
                  className="bg-input md:w-[50%] h-[50px] rounded pl-4"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className="w-full h-[50px] rounded bg-button hover:bg-button-hover text-white transition duration-300 cursor-pointer font-bold text-base shadow-lg"
              type="submit"
            >
              Enviar formulário
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
