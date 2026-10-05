import { useMemo, useState } from "react";
import Image from "next/image";
import { animais } from "@/data/animais";
import { Animal } from "@/types/Animal";

const filtros = ["Todos", "Cachorros", "Gatos", "Adotados"] as const;
type Filtro = (typeof filtros)[number];

interface CatalogoProps {
    definirAnimalSelecionado: (animal: Animal | null) => void;
}

export default function Catalogo({ definirAnimalSelecionado }: CatalogoProps) {
    const [filtro, definirFiltro] = useState<Filtro>("Todos");

    const animaisVisiveis = useMemo(() => {
        if (filtro === "Cachorros") return animais.filter((animal) => animal.especie === "Cachorro");
        if (filtro === "Gatos") return animais.filter((animal) => animal.especie === "Gato");
        if (filtro === "Adotados") return animais.filter((animal) => animal.status === "Adotado");
        return animais;
    }, [filtro]);

    return (
        <section className="max-w-[1000px] mx-auto pt-[34px] px-5 pb-[56px]">
            <div className="flex flex-wrap items-center gap-2 mb-[22px] text-[#416757] text-sm font-semibold">
                <span>Filtrar:</span>
                {filtros.map((opcao) => (
                    <button
                        key={opcao}
                        className={`border-0 rounded-[18px] px-[11px] py-2 text-[11px] font-inherit cursor-pointer transition-colors ${filtro === opcao ? "bg-[#123e2f] text-white" : "bg-[#eee9df] text-[#355b49]"
                            }`}
                        onClick={() => definirFiltro(opcao)}
                        type="button"
                    >
                        {opcao} <b className="text-[#a49786] ml-1">{opcao === "Todos" ? 8 : opcao === "Cachorros" ? 4 : opcao === "Gatos" ? 4 : 2}</b>
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {animaisVisiveis.map((animal) => (
                    <article
                        key={animal.id}
                        className="bg-white rounded-[13px] overflow-hidden shadow-[0_5px_14px_#193d2e12] hover:-translate-y-1 hover:shadow-[0_10px_22px_#193d2e1c] transition-all cursor-pointer"
                        onClick={() => definirAnimalSelecionado(animal)}
                    >
                        <div className="h-[175px] md:h-[235px] relative bg-[#d5ddd7]">
                            <Image src={animal.imagem} alt={`Foto de ${animal.nome}`} fill sizes="(max-width: 760px) 50vw, 245px" className="object-cover" />
                            <span className={`absolute top-[10px] left-[10px] rounded-[10px] px-[7px] py-[3px] text-[12px] ${animal.status === "Adotado"
                                    ? "bg-[#d9f2e2] text-[#39855d]"
                                    : animal.status === "Lar temporário"
                                        ? "bg-[#d5ead8] text-[#287151]"
                                        : "bg-[#fffaf0] text-[#df8a10]"
                                }`}>
                                {animal.status}
                            </span>
                            <span className="absolute bottom-[9px] right-[9px] rounded-[10px] px-[7px] py-[3px] text-[12px] bg-[#1c4133d9] text-white">
                                2 fotos
                            </span>
                        </div>
                        <div className="p-[10px] md:p-3">
                            <div className="flex items-center justify-between gap-[5px]">
                                <h2 className="font-serif font-bold text-[15px] md:text-xl m-0 text-[#173d2e]">{animal.nome}</h2>
                                <span className="bg-[#eee8dc] rounded-[5px] text-[#896a45] text-[8px] md:text-[12px] px-[6px] py-[4px] whitespace-nowrap">{animal.especie}</span>
                            </div>
                            <p className="text-[#9bb0a2] text-[12px] my-1">também: {animal.nome === "Mel" ? "Melinha, Caramelinha" : animal.nome}</p>
                            {animal.condicao && (
                                <div className="mt-[8px] text-[9px] md:text-[11px] text-[#8c6817]">
                                    <strong>Apresenta condição de saúde</strong><br />
                                </div>
                            )}
                            <p className="text-sm my-[10px] text-[#486d5a] leading-[1.4] md:leading-normal"> Costuma frequentar: {animal.localizacao}</p>
                            <p className="text-[#9bb0a2] text-[12px] my-1">{animal.idade} · {animal.cor}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}