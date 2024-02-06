import Image from "next/image";
import popup from "@/assets/popup.png";

import { useState } from "react";
import emailjs from "@emailjs/browser";

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
    <div>
      <div>
        <Image src={popup} alt="Imagem popup" />
      </div>
      <div>
        <h3>Olá, tudo bem ?</h3>
        <p>
          Nossa equipe deseja apresentar a Brasil Telhas para você, deixe seu
          telefone abaixo e entraremos em contato!
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nomeCompleto"
          placeholder="Seu Nome"
          className="bg-input w-[675px] h-[50px] rounded pl-4"
          value={formData.nomeCompleto}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="telefone"
          placeholder="Telefone"
          className="bg-input w-[675px] h-[50px] rounded pl-4"
          value={formData.telefone}
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
