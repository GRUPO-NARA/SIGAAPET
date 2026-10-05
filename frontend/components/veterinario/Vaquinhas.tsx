import { useState } from "react";
import { Vaquinha } from "@/types/Vaquinha";
import { animais } from "@/data/animais";
import { vaquinhas } from "@/data/vaquinhas";

export default function Vaquinhas() {
    const [vaquinhaAnimalId, setVaquinhaAnimalId] = useState<number>(3);
    const [vaquinhaTitulo, setVaquinhaTitulo] = useState("");
    const [vaquinhaMeta, setVaquinhaMeta] = useState("");
    const [vaquinhaUrl, setVaquinhaUrl] = useState("");

    function handleCadastrarVaquinha(e: React.FormEvent) {
        e.preventDefault();
        const animalSelecionado = animais.find(a => a.id === Number(vaquinhaAnimalId));
        if (!animalSelecionado) return;

        const novaVaquinha: Vaquinha = {
            id: vaquinhas.length + 1,
            animalId: animalSelecionado.id,
            animalNome: animalSelecionado.nome,
            titulo: vaquinhaTitulo,
            meta: Number(vaquinhaMeta),
            arrecadado: 0,
            url: vaquinhaUrl
        };

        alert(`Vaquinha vinculada ao pet ${animalSelecionado.nome} criada com sucesso!`);
        setVaquinhaTitulo("");
        setVaquinhaMeta("");
        setVaquinhaUrl("");
    }
    return (
        <div className="bg-white p-6 rounded-[14px] shadow-[0_4px_20px_#173d2e0a] border border-[#e9e2d7]">
            <h2 className="text-lg font-bold font-serif text-[#173d2e] mb-1">Vaquinhas Vinculadas a Animais</h2>
            <p className="text-xs text-[#789187] mb-5">Crie campanhas de arrecadação conectadas diretamente ao perfil de um animal específico.</p>

            <form onSubmit={handleCadastrarVaquinha} className="flex flex-col gap-4 mb-8 bg-[#f8f5ef] p-4 rounded-[10px] border border-[#e9e2d7]">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#173d2e]">Nova Campanha de Apoio</h3>

                <div>
                    <label className="block text-xs font-semibold text-[#355b49] mb-1">Vincular ao Animal</label>
                    <select
                        value={vaquinhaAnimalId}
                        onChange={(e) => setVaquinhaAnimalId(Number(e.target.value))}
                        className="w-full p-2.5 rounded-[8px] border border-[#e9e2d7] bg-white text-sm focus:outline-none"
                    >
                        {animais.map((animal) => (
                            <option key={animal.id} value={animal.id}>
                                {animal.nome} ({animal.especie} - {animal.localizacao})
                            </option>
                        ))}
                    </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label className="block text-xs font-semibold text-[#355b49] mb-1">Título da Vaquinha</label>
                        <input
                            type="text"
                            value={vaquinhaTitulo}
                            onChange={(e) => setVaquinhaTitulo(e.target.value)}
                            placeholder="Ex: Cirurgia de pata do Bolinha"
                            className="w-full p-2.5 rounded-[8px] border border-[#e9e2d7] bg-white text-sm focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-[#355b49] mb-1">Meta Financeira (R$)</label>
                        <input
                            type="number"
                            value={vaquinhaMeta}
                            onChange={(e) => setVaquinhaMeta(e.target.value)}
                            placeholder="Ex: 1500"
                            className="w-full p-2.5 rounded-[8px] border border-[#e9e2d7] bg-white text-sm focus:outline-none"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-semibold text-[#355b49] mb-1">Link Externo (Vakinha / Apoia.se)</label>
                    <input
                        type="url"
                        value={vaquinhaUrl}
                        onChange={(e) => setVaquinhaUrl(e.target.value)}
                        placeholder="https://vakinha.com.br/..."
                        className="w-full p-2.5 rounded-[8px] border border-[#e9e2d7] bg-white text-sm focus:outline-none"
                        required
                    />
                </div>

                <button type="submit" className="bg-[#123e2f] text-white py-2.5 rounded-[8px] font-semibold text-sm cursor-pointer hover:bg-[#194a37]">
                    Vincular e Publicar Vaquinha
                </button>
            </form>

            <h3 className="text-xs font-bold uppercase tracking-wider text-[#789187] mb-3">Campanhas Ativas Vinculadas</h3>
            <div className="flex flex-col gap-3">
                {vaquinhas.map((v) => (
                    <div key={v.id} className="bg-[#f8f5ef] p-4 rounded-[10px] border border-[#e9e2d7]">
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-[11px] bg-[#e9a52a] text-white px-2 py-0.5 rounded-full font-semibold">Pet: {v.animalNome}</span>
                            <span className="text-xs text-[#123e2f] font-bold">R$ {v.arrecadado} / R$ {v.meta}</span>
                        </div>
                        <strong className="text-sm text-[#173d2e] block mt-1">{v.titulo}</strong>
                        <div className="w-full bg-[#e9e2d7] h-2 rounded-full overflow-hidden mt-2">
                            <div className="bg-[#35be73] h-full" style={{ width: `${(v.arrecadado / v.meta) * 100}%` }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}