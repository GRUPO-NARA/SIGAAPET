import { useState } from "react";
import { animais } from "@/data/animais";

export default function Gerenciar() {
    const [buscaAnimal, setBuscaAnimal] = useState("");
    const animaisFiltrados = animais.filter(a =>
        a.nome.toLowerCase().includes(buscaAnimal.toLowerCase()) ||
        a.especie.toLowerCase().includes(buscaAnimal.toLowerCase())
    );
    return (
        <div className="bg-white p-6 rounded-[14px] shadow-[0_4px_20px_#173d2e0a] border border-[#e9e2d7]">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
                <div>
                    <h2 className="text-lg font-bold font-serif text-[#173d2e]">Lista de Animais Registrados</h2>
                    <p className="text-xs text-[#789187]">Gerencie ou edite os registros do sistema.</p>
                </div>
                <input
                    type="text"
                    placeholder="Pesquisar..."
                    value={buscaAnimal}
                    onChange={(e) => setBuscaAnimal(e.target.value)}
                    className="p-2 rounded-[8px] border border-[#e9e2d7] bg-[#f8f5ef] text-xs w-full sm:w-60 focus:outline-none"
                />
            </div>

            <div className="flex flex-col gap-3">
                {animaisFiltrados.map((animal) => (
                    <div key={animal.id} className="bg-[#f8f5ef] p-3 rounded-[10px] flex justify-between items-center border border-[#e9e2d7]">
                        <div className="flex items-center gap-3">
                            <img src={animal.imagem} alt={animal.nome} className="w-12 h-12 object-cover rounded-[8px]" />
                            <div>
                                <div className="flex items-center gap-2">
                                    <strong className="text-sm text-[#173d2e]">{animal.nome}</strong>
                                    <span className="text-[10px] bg-[#123e2f] text-white px-2 py-0.5 rounded-full">{animal.especie}</span>
                                </div>
                                <span className="text-xs text-[#789187] mt-0.5 block">{animal.localizacao} · <strong>{animal.status}</strong></span>
                            </div>
                        </div>
                        <button className="bg-[#123e2f] text-white px-3 py-1.5 rounded-[6px] text-xs font-medium hover:bg-[#194a37]">Editar</button>
                    </div>
                ))}
            </div>
        </div>
    )
}