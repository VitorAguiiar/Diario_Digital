import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Header from '../components/header';

export default function Nova() {
    const [form, setForm] = useState({ titulo: '', conteudo: '', data: '', humor: '' });
    const navigate = useNavigate();
    const { id } = useParams();
  
    useEffect(() => {
      if (id) {
        const entradas = JSON.parse(localStorage.getItem('diarios')) || [];
        const entrada = entradas.find((e) => e.id === Number(id));
  
        if (entrada) {
          setForm(entrada);
        } else {
          navigate('/');
        }
      }
    }, [id, navigate]);
  
    function handleChange(e) {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  
    function salvarEntrada(e) {
      e.preventDefault();
      const entradas = JSON.parse(localStorage.getItem('diarios')) || [];
  
      if (id) {
        const atualizadas = entradas.map((e) =>
          e.id === Number(id) ? { ...form, id: Number(id) } : e
        );
        localStorage.setItem('diarios', JSON.stringify(atualizadas));
      } else {
        const novaEntrada = { ...form, id: Date.now() };
        localStorage.setItem('diarios', JSON.stringify([novaEntrada, ...entradas]));
      }
  
      navigate('/');
    }
  
    return (
      <div className="bg-[#ffe9bb] min-h-screen">
        <Header />
      
        <form onSubmit={salvarEntrada} className="max-w-xl mx-auto bg-white mt-6 md:mt-10 p-4 md:p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-gray-800">
            {id ? 'Editar Entrada' : 'Nova Entrada'}
          </h2>
      
          <div className="space-y-4">
            <input
              name="titulo"
              value={form.titulo}
              onChange={handleChange}
              placeholder="Título"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
            <textarea
              name="conteudo"
              value={form.conteudo}
              onChange={handleChange}
              placeholder="Conteúdo"
              rows="5"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
            <input
              type="date"
              name="data"
              value={form.data}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
            <select
              name="humor"
              value={form.humor}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Selecione o humor</option>
              <option value="Ótimo">Ótimo</option>
              <option value="Bom">Bom</option>
              <option value="Neutro">Neutro</option>
              <option value="Ruim">Ruim</option>
              <option value="Péssimo">Péssimo</option>
            </select>
          </div>
      
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors duration-200"
            >
              {id ? 'Atualizar' : 'Salvar'}
            </button>
          </div>
        </form>
      </div>
    );
}