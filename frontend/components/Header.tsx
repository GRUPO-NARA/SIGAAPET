"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [acessoVeterinario, setAcessoVeterinario] = useState(false);
  const [tokenJWT, setTokenJWT] = useState<string | null>(null);

  // Carrega o token do localStorage apenas no cliente após a montagem do componente
  useEffect(() => {
    localStorage.setItem("tokenJWT", "teste"); // Descomente se quiser forçar o teste
    const token = localStorage.getItem("tokenJWT");
    setTokenJWT(token);
  }, []);

  function handleAcessoDoVeterinario() {
    setAcessoVeterinario(!acessoVeterinario);
  }

  return (
    <header className="relative h-[64px] md:h-[74px] flex items-center justify-between max-w-[1000px] mx-auto px-5">
      <div className="flex items-center gap-[9px]">
        <span className="font-serif font-bold text-[25px] tracking-[0.3px] text-[#173d2e]">SIGAAPET</span>
      </div>
      
      {tokenJWT ? (
        <a 
          href="/veterinario" 
          className="bg-[#123e2f] text-white rounded-[6px] px-[14px] py-[10px] text-sm font-semibold inline-block text-center no-underline"
        >
          Painel do Veterinário
        </a>
      ) : (
        <button 
          className="bg-[#123e2f] text-white border-0 rounded-[6px] px-[14px] py-[10px] text-sm font-semibold cursor-pointer" 
          type="button" 
          onClick={handleAcessoDoVeterinario}
        >
          Acesso veterinário
        </button>
      )}

      {acessoVeterinario && !tokenJWT && (
        <div className="absolute top-[64px] md:top-[80px] right-5 md:right-5 bg-white border border-[#e9e2d7] rounded-[6px] shadow-[0_5px_14px_#193d2e12] p-4 z-50 w-[280px]">
          <p className="text-[#173d2e] text-sm mb-[10px] font-medium">Entre com seu e-mail e senha:</p>
          <form action="/api/veterinario/login" method="POST" className="flex flex-col gap-[10px]">
            <input 
              type="email" 
              name="email" 
              placeholder="E-mail" 
              className="border border-[#e9e2d7] rounded-[6px] px-[10px] py-[8px] text-sm outline-none focus:border-[#123e2f]" 
              required 
            />
            <input 
              type="password" 
              name="senha" 
              placeholder="Senha" 
              className="border border-[#e9e2d7] rounded-[6px] px-[10px] py-[8px] text-sm outline-none focus:border-[#123e2f]" 
              required 
            />
            <button 
              type="submit" 
              className="bg-[#123e2f] text-white border-0 rounded-[6px] px-[14px] py-[9px] text-sm font-semibold cursor-pointer"
            >
              Entrar
            </button>
          </form>
        </div>
      )}
    </header>
  );
}