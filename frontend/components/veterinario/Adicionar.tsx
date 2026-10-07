import { useState } from "react";
import { Animal } from "@/types/Animal";
import { animais } from "@/data/animais";

interface AdicionarProps {
    setAbaAtiva: (aba: string) => void;
}

export default function Adicionar({ setAbaAtiva }: AdicionarProps) {
    const [nomeAnimal, setNomeAnimal] = useState("");
    const [especieAnimal, setEspecieAnimal] = useState<"Cachorro" | "Gato">("Cachorro");
    const [localAnimal, setLocalAnimal] = useState("");
    const [descricaoAnimal, setDescricaoAnimal] = useState("");
    const [fotoPreview, setFotoPreview] = useState<string>("");
    const [animaisLista, setAnimaisLista] = useState<Animal[]>([]);
    function handleCadastrarAnimal(e: React.FormEvent) {
        e.preventDefault();
        const novo: Animal = {
            id: animais.length + 1,
            nome: nomeAnimal,
            especie: especieAnimal,
            status: "Disponível",
            localizacao: localAnimal,
            imagem: fotoPreview || "https://images.unsplash.com/photo-1543466835-00a7907e9de1",
            descricao: descricaoAnimal,
            idade: "Não informada",
            cor: "Não informada"
        };

        setAnimaisLista([novo, ...animaisLista]);
        alert("Animal cadastrado com sucesso!");
        setNomeAnimal("");
        setLocalAnimal("");
        setDescricaoAnimal("");
        setFotoPreview("");
        setAbaAtiva("atualizar");
    }

    function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (file) {
            // Cria uma URL temporária local para exibir o preview da imagem selecionada no computador
            const objectUrl = URL.createObjectURL(file);
            setFotoPreview(objectUrl);
        }
    }

    return (
        <div className="bg-white p-6 rounded-[14px] shadow-[0_4px_20px_#173d2e0a] border border-[#e9e2d7]">
            <h2 className="text-lg font-bold font-serif text-[#173d2e] mb-1">Cadastrar Animal e Enviar Foto</h2>
            <p className="text-xs text-[#789187] mb-5">Insira os dados clínicos e envie a foto oficial do pet resgatado.</p>

            <form onSubmit={handleCadastrarAnimal} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-semibold text-[#355b49] mb-1">Nome do Animal</label>
                        <input
                            type="text"
                            value={nomeAnimal}
                            onChange={(e) => setNomeAnimal(e.target.value)}
                            placeholder="Ex: Max, Mimi..."
                            className="w-full p-2.5 rounded-[8px] border border-[#e9e2d7] bg-[#f8f5ef] text-sm focus:outline-none focus:border-[#123e2f]"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-[#355b49] mb-1">Espécie</label>
                        <select
                            value={especieAnimal}
                            onChange={(e) => setEspecieAnimal(e.target.value as "Cachorro" | "Gato")} // <-- Ajuste aqui
                            className="w-full p-2.5 rounded-[8px] border border-[#e9e2d7] bg-[#f8f5ef] text-sm focus:outline-none focus:border-[#123e2f]"
                        >
                            <option value="Cachorro">Cachorro</option>
                            <option value="Gato">Gato</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-semibold text-[#355b49] mb-1">Localização Exata no Campus</label>
                    <input
                        type="text"
                        value={localAnimal}
                        onChange={(e) => setLocalAnimal(e.target.value)}
                        placeholder="Ex: Próximo ao Restaurante Universitário"
                        className="w-full p-2.5 rounded-[8px] border border-[#e9e2d7] bg-[#f8f5ef] text-sm focus:outline-none focus:border-[#123e2f]"
                        required
                    />
                </div>

                {/* Upload de Foto */}
                <div>
                    <label className="block text-xs font-semibold text-[#355b49] mb-1">Foto do Animal (Upload do Computador)</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="w-full p-2 rounded-[8px] border border-[#e9e2d7] bg-[#f8f5ef] text-xs cursor-pointer text-[#789187]"
                        required
                    />
                    {fotoPreview && (
                        <div className="mt-3 flex items-center gap-3">
                            <img src={fotoPreview} alt="Preview" className="w-16 h-16 object-cover rounded-[8px] border border-[#e9e2d7]" />
                            <span className="text-xs text-[#35be73] font-semibold">✓ Foto carregada com sucesso!</span>
                        </div>
                    )}
                </div>

                <div>
                    <label className="block text-xs font-semibold text-[#355b49] mb-1">Histórico Médico / Comportamento</label>
                    <textarea
                        value={descricaoAnimal}
                        onChange={(e) => setDescricaoAnimal(e.target.value)}
                        placeholder="Ex: Dócil, necessita de avaliação para castração..."
                        className="w-full p-2.5 rounded-[8px] border border-[#e9e2d7] bg-[#f8f5ef] text-sm h-24 focus:outline-none focus:border-[#123e2f]"
                        required
                    ></textarea>
                </div>

                <button type="submit" className="bg-[#123e2f] text-white py-3 rounded-[8px] font-semibold text-sm cursor-pointer hover:bg-[#194a37] transition-colors mt-2">
                    Publicar Pet no Catálogo
                </button>
            </form>
        </div>
    )
}