import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Main from '../components/main';

export default function Inicio() {
    const [entradas, setEntradas] = useState([]);
    const [filtro, setFiltro] = useState('');
  
    useEffect(() => {
      const salvas = JSON.parse(localStorage.getItem('diarios')) || [];
      setEntradas(salvas);
    }, []);
  
    function deletarTodasEntradas() {
      localStorage.removeItem('diarios');
      setEntradas([]);
    }
  
    function deletarUmaEntrada(id) {
      const atualizadas = entradas.filter((entrada) => entrada.id !== id);
      localStorage.setItem('diarios', JSON.stringify(atualizadas));
      setEntradas(atualizadas);
    }
  
    return (
      <div className="bg-[#ffe9bb] min-h-screen">
        <Header />
        <Main
          entradas={entradas}
          onDelete={deletarTodasEntradas}
          onDeleteUm={deletarUmaEntrada}
          filtro={filtro}
          setFiltro={setFiltro}
        />
      </div>
    );
  }
