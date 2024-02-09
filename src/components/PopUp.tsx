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

  useEffect(() => {
    const popUpData = localStorage.getItem("popUpData");
    if (popUpData) {
      const { show, expireAt } = JSON.parse(popUpData);
      const now = new Date().getTime();
      if (now < expireAt) {
        setPopUp(show);
      }
    }
    // Isso garante que a verificação só ocorra no lado do cliente
  }, []); // Dependências vazias indicam que o efeito roda uma vez após o componente montar

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
          {/* Restante do componente */}
        </div>
      )}
    </>
  );
}
