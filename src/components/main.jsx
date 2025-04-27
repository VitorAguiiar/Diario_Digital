import React from "react";
import CardEntrada from "../components/CardEntrada";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Main({ entradas, onDelete, onDeleteUm, filtro, setFiltro }) {
  const navigate = useNavigate();
  const [selecionadas, setSelecionadas] = useState([]);

  const entradasFiltradas = entradas.filter((e) =>
    (e.titulo?.toLowerCase() || '').includes(filtro.toLowerCase())
  );

  const toggleSelecionada = (id) => {
    setSelecionadas((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  const deletarSelecionadas = () => {
    const restantes = entradas.filter((e) => !selecionadas.includes(e.id));
    localStorage.setItem('diarios', JSON.stringify(restantes));
    setSelecionadas([]);
    window.location.reload();
  };

  return (
    <main className="max-w-3xl mx-auto p-4">
      {/* Barra de pesquisa*/}
      <div className="flex justify-between items-center mb-4">
        <div className="relative w-3/5 ml-[54px] mr-[10px]">
          <input
            type="text"
            placeholder="Pesquisar..."
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            className="w-full p-2 pr-10 bg-white rounded-full text-sm
              placeholder-opacity-25 placeholder-gray-700
              pl-4 focus:ring-2 focus:ring-blue-500 focus:outline-none outline-none"
          />
          {/* Lupa: escondido em telas menores */}
          <img
            src="src/assets/image/Lupa.svg"
            alt="Pesquisar"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 hidden sm:block"
          />
        </div>

        <div className="flex gap-2">
          {/* Botões de excluir e criar */}
          <button
            onClick={deletarSelecionadas}
            disabled={selecionadas.length === 0}
            className="flex items-center justify-center p-2 rounded min-w-[40px] 
              bg-[#DB4060] hover:bg-[#DB4060] transition-colors"
          >
            <img className="w-6 h-6" src="src/assets/image/lixeira.svg" alt="Excluir" />
          </button>

          <button
            onClick={() => navigate('/Nova')}
            className="bg-[#7AAFFF] hover:bg-[#7AAFFF] text-white font-semibold px-4 py-2 rounded transition-colors"
          >
            Criar
          </button>
        </div>
      </div>

      {/* Exibição dos cards */}
      {entradasFiltradas.length === 0 ? (
        <p className="text-gray-700 text-center">Nenhuma entrada encontrada.</p>
      ) : (
        entradasFiltradas.map((entrada) => (
          <CardEntrada
            key={entrada.id}
            entrada={entrada}
            onExcluir={onDeleteUm}
            selecionada={selecionadas.includes(entrada.id)}
            onSelecionar={toggleSelecionada}
          />
        ))
      )}
    </main>
  );
}
