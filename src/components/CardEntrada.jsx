import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CardEntrada({ entrada, selecionada, onSelecionar }) {
  const navigate = useNavigate();

  const handleChange = () => {
    onSelecionar(entrada.id);
  };

  const handleCardClick = () => {
    navigate(`/nova/${entrada.id}`);
  };

  const formatarData = (data) => {
    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
  };

  return (
    <div className="flex items-center gap-[15px] sm:gap-[30px] mb-4">
      {/* Checkbox */}
      <label className="relative w-[24px] h-[24px] cursor-pointer inline-block">
        <input
          type="checkbox"
          checked={selecionada}
          onChange={handleChange}
          className="sr-only peer"
        />
        <div className="w-full h-full border-[3px] border-[#00214A] rounded-[4px] flex items-center justify-center transition-colors">
          <div
            className={`w-[14px] h-[14px] bg-[#DB4060] rounded-[2px] transition-opacity ${
              selecionada ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
      </label>

      {/* Card */}
      <div
        onClick={handleCardClick}
        className="bg-white rounded-[14px] shadow-sm p-6 sm:p-8 flex-1 cursor-pointer transition-all duration-200 ease-in-out hover:scale-101 hover:shadow-xs"
      >
        <div className="flex justify-between items-start mb-5">
          <span
            className={`text-sm px-2 py-1 rounded text-white
              ${entrada.humor === 'Neutro' ? 'bg-[#D9D9D9]' :
              entrada.humor === 'Ótimo' ? 'bg-[#40C4FF]' :
              entrada.humor === 'Bom' ? 'bg-[#84F489]' :
              entrada.humor === 'Ruim' ? 'bg-[#FF7043]' :
              entrada.humor === 'Péssimo' ? 'bg-[#D32F2F]' :
              'text-gray-700'}`}
          >
            {entrada.humor}
          </span>

          {/* Data com fonte semibold */}
          <span className="font-semibold">{formatarData(entrada.data)}</span>
        </div>

        <h2 className="font-bold text-[20px] mb-2">{entrada.titulo}</h2>

        <p className="font-semibold text-[15px] text-gray-700 whitespace-pre-line mb-3 line-clamp-5">
          {entrada.conteudo}
        </p>
      </div>
    </div>
  );
}
