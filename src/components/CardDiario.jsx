import React, { useState, useEffect } from 'react';


// Componente do card individual
function CardDiario({ entrada }) {
  return (
    <div className="bg-white shadow border-l-4 border-blue-400 rounded p-4 w-full max-w-2xl">
      <div className="flex justify-between items-center mb-2">
        <span className="bg- text-gray-800 px-2 py-1 rounded text-sm">{entrada.humor}</span>
        <span className="font-bold text-right">{entrada.data}</span>
      </div>
      <h3 className="font-semibold text-lg mb-1">{entrada.titulo}</h3>
      <p className="text-gray-700 text-sm leading-snug">
        {entrada.conteudo.length > 200 ? entrada.conteudo.slice(0, 200) + '...' : entrada.conteudo}
      </p>
    </div>
  );
}