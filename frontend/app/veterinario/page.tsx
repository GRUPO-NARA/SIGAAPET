"use client";

import Header from "@/components/Header";
import Adicionar from "@/components/veterinario/Adicionar";
import Gerenciar from "@/components/veterinario/Gerenciar";
import Hero from "@/components/veterinario/Hero";
import Inicio from "@/components/veterinario/Inicio";
import MenuLateral from "@/components/veterinario/MenuLateral";
import Solicitacoes from "@/components/veterinario/Solicitacoes";
import Vaquinhas from "@/components/veterinario/Vaquinhas";
import { useState } from "react";


export default function Veterinario() {
  const [abaAtiva, setAbaAtiva] = useState("inicio");

  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#173d2e] font-sans selection:bg-[#123e2f] selection:text-white">
      <Header />
      <Hero />
      {/* Grid Principal */}
      <section className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
        
        {/* Menu Lateral */}
        <MenuLateral abaAtiva={abaAtiva} setAbaAtiva={setAbaAtiva} />

        {/* Conteúdo Dinâmico */}
        <div className="md:col-span-3 flex flex-col gap-6">
          
          {/* ABA: INÍCIO */}
          {abaAtiva === "inicio" && (
            <Inicio setAbaAtiva={setAbaAtiva} />
          )}

          {/* ABA: CADASTRAR ANIMAL COM UPLOAD DE FOTO */}
          {abaAtiva === "adicionar" && (
            <Adicionar setAbaAtiva={setAbaAtiva} />
          )}

          {/* ABA: GERENCIAR ANIMAIS */}
          {abaAtiva === "atualizar" && (
            <Gerenciar />
          )}

          {/* ABA: SOLICITAÇÕES */}
          {abaAtiva === "solicitacoes" && (
            <Solicitacoes />
          )}

          {/* ABA: VAQUINHAS VINCULADAS A ANIMAIS */}
          {abaAtiva === "vaquinhas" && (
            <Vaquinhas />
          )}

        </div>
      </section>
    </main>
  );
}