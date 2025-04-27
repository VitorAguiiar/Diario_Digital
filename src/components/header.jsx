import React from 'react';
import logo from '../assets/image/Logo.svg';

export default function Header() {
  return (
    <header className="bg-[#e1a86f] p-2 h-[72px] sm:mb-12 lg:mb-5 md:mb-15 mb-10">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-[92px] w-auto sm:h-[120px] md:h-[148px]" />
      </div>
    </header>
  );
}
