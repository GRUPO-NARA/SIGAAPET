"use client";

import Catalogo from "@/components/Catalogo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VisaoAnimal from "@/components/VisaoAnimal";
import { useState } from "react";

export default function Home() {
  const [animalSelecionado, definirAnimalSelecionado] = useState<any | null>(null);

  return (
    <div className="min-h-screen bg-[#f8f5ef] text-[#173d2e] font-sans box-border">
      <Header />
      <main>
        <Hero />
        <Catalogo definirAnimalSelecionado={definirAnimalSelecionado} />
      </main>
      <Footer />
      {animalSelecionado && (
        <VisaoAnimal animalSelecionado={animalSelecionado} definirAnimalSelecionado={definirAnimalSelecionado} />
      )}
    </div>
  );
}