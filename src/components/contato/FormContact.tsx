"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export function FormContact() {
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    email: "",
    telefone: "",
    nomeEmpresa: "",
    mensagem: "",
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
      telefone: formData.telefone,
      nomeEmpresa: formData.nomeEmpresa,
      mensagem: formData.mensagem,
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
          email: "",
          telefone: "",
          nomeEmpresa: "",
          mensagem: "",
        });
      });
  };

  return (
    <div className="mt-12">
      <div className="mb-4">
        <h1>Mande um e-mail para gente!</h1>
        <p className="text-title">Retornaremos seu contato</p>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between mb-6">
            <div className="flex flex-col w-[50%] gap-8">
              <input
                type="text"
                name="nomeCompleto"
                placeholder="Seu nome completo*"
                className="bg-input w-[675px] h-[50px] rounded pl-4"
                value={formData.nomeCompleto}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Seu melhor e-mail completo*"
                className="bg-input w-[675px] h-[50px] rounded pl-4"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="telefone"
                placeholder="Telefone:"
                className="bg-input w-[675px] h-[50px] rounded pl-4"
                value={formData.telefone}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="nomeEmpresa"
                placeholder="Nome da empresa"
                className="bg-input w-[675px] h-[50px] rounded pl-4"
                value={formData.nomeEmpresa}
                onChange={handleChange}
              />
            </div>
            <div className="w-[45%] flex flex-col gap-6">
              <textarea
                name="mensagem"
                placeholder="Sua mensagem aqui:"
                className="w-[580PX] h-full bg-input rounded p-4"
                value={formData.mensagem}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className="w-[300px] h-[50px] rounded bg-button hover:bg-button-hover text-white transition duration-300 cursor-pointer font-bold text-base shadow-lg"
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
