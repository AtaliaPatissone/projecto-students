import React, { useState } from "react";

export const Form = () => {
  const initialFormData = {
    name: "",
    email: "",
    message: ""
  };

  const [formData, setFormData] = useState({ ...initialFormData });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setFormData({ ...initialFormData }); 
  };

  return (
    <div style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '1px'}} className="flex justify-center items-center border rounded-2xl border-purple-900 z-10 bg-purple-bytes p-4">
      
      <div className="flex flex-col flex-1 pr-4">
        <p className="text-black mb-5">avenida de Mocambique </p>
        <p className="text-black mb-5">resindencia: Marracuene</p>
        <p className="text-black mb-5">Celular: 8436o780a1</p>
        <p className="text-black mb-5">Email: ataliadacostapatissone@gmail.com</p>
      </div>

     
      <form className="flex flex-col flex-1 space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Escreva aqui o seu nome"
          value={formData.name}
          onChange={handleChange}
          className="w-full h-14 border-b-2 border-pink bg-purple-bytes text-black outline-none placeholder-black px-4"
        />
        <input
          type="email"
          name="email"
          placeholder="Digite o seu email"
          value={formData.email}
          onChange={handleChange}
          className="w-full h-14 border-b-2 border-black bg-purple-bytes text-black outline-none placeholder-black px-4"
        />
        <textarea
          name="message"
          cols="20"
          rows="5"
          placeholder="Mensagem"
          value={formData.message}
          onChange={handleChange}
          className="w-full h-20 border-b-2 border-black bg-purple-bytes text-black outline-none placeholder-black px-4"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-green-bytes text-black rounded-md h-10 font-semibold"
        >
          Enviar
        </button>
      </form>

     
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
          <div className="bg-purple-bytes p-6 rounded-lg shadow-lg">
            <div className="flex justify-end">
              <button onClick={handleClosePopup} className="text-black">&times;</button>
            </div>
            <p className="text-black mb-3">Nome: {formData.name}</p>
            <p className="text-black mb-3">Email: {formData.email}</p>
            <p className="text-black mb-3">Mensagem: {formData.message}</p>
          </div>
        </div>
      )}
    </div>
  );
};