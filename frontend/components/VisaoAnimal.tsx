import Image from "next/image";

interface VisaoAnimalProps {
    animalSelecionado: {
        nome: string;
        especie: string;
        idade: string;
        localizacao: string;
        cor: string;
        status: string;
        condicao?: string;
        descricao: string;
        imagem: string;
    };
    definirAnimalSelecionado: (animal: any) => void;
}

export default function VisaoAnimal({ animalSelecionado, definirAnimalSelecionado }: VisaoAnimalProps) {
    return (
        <div className="fixed inset-0 bg-[#10291fbb] backdrop-blur-[5px] grid place-items-center p-5 z-50" onClick={() => definirAnimalSelecionado(null)}>
            <div className="bg-[#f8f5ef] w-full max-w-[700px] max-h-[90vh] rounded-[18px] overflow-hidden grid grid-cols-1 md:grid-cols-[45%_55%] shadow-[0_18px_60px_#061d1499]" onClick={(e) => e.stopPropagation()}>
                <div className="h-[250px] md:h-full md:min-h-[500px] relative">
                    <Image src={animalSelecionado.imagem} alt={`Foto de ${animalSelecionado.nome}`} fill sizes="(max-width: 760px) 100vw, 315px" className="object-cover" />
                    <span className="absolute top-[10px] left-[10px] rounded-[10px] px-[7px] py-[3px] text-[9px] bg-[#fffaf0] text-[#df8a10]">{animalSelecionado.status}</span>
                </div>
                <div className="p-[25px_22px] relative overflow-y-auto max-h-[430px] md:max-h-none">
                    <button
                        className="absolute right-[15px] top-[14px] border-0 bg-[#123e2f] text-white rounded-full w-[24px] h-[24px] text-[19px] leading-[18px] cursor-pointer flex items-center justify-center"
                        onClick={() => definirAnimalSelecionado(null)}
                        aria-label="Fechar"
                    >
                        ×
                    </button>
                    <p className="text-[#e9a52a] font-bold text-[12px] tracking-[1.7px] m-0">{animalSelecionado.especie.toUpperCase()} · {animalSelecionado.idade}</p>
                    <h2 className="font-serif font-bold text-[28px] m-0 text-[#173d2e] mt-1">{animalSelecionado.nome}</h2>
                    <p className="text-[#9bb0a2] text-[12px] my-1">Também atende por: {animalSelecionado.nome}</p>

                    {animalSelecionado.condicao && (
                        <div className="rounded-[10px] p-[13px] mt-[18px] text-[11px] leading-[1.5] bg-[#fff5d8] border border-[#efc04e] text-[#8c6817]">
                            <strong>CONDIÇÃO DE SAÚDE</strong><br />{animalSelecionado.condicao}.
                        </div>
                    )}

                    <div className="rounded-[10px] p-[13px] mt-[18px] text-[12px] leading-[1.5] bg-[#eee8db] text-[#526a5d]">
                        <strong className="text-[12px]">ONDE FOI ENCONTRADO</strong>
                        <p className="my-[5px] text-[12px]">Próximo ao {animalSelecionado.localizacao} da UEMA</p>
                        <small className="text-[#99ac9f] text-[12px]">Desde março de 2026</small>
                    </div>

                    <h3 className="text-[#47715e] font-bold text-[10px] tracking-[0.7px] mt-[22px] mb-[7px]">SOBRE {animalSelecionado.nome.toUpperCase()}</h3>
                    <p className="text-[#567266] text-[11px] leading-[1.7]">{animalSelecionado.descricao}</p>
                    
                    <div className="grid grid-cols-2 gap-2 mt-[15px]">
                        <span className="bg-[#eee8dc] p-[10px] text-[11px]">
                            <small className="block text-[#9bb0a2] text-[9px] mb-[3px]">Pelagem</small>
                            {animalSelecionado.cor}
                        </span>
                        <span className="bg-[#eee8dc] p-[10px] text-[11px]">
                            <small className="block text-[#9bb0a2] text-[9px] mb-[3px]">Idade estimada</small>
                            {animalSelecionado.idade}
                        </span>
                    </div>

                    {animalSelecionado.status !== "Adotado" && (
                        <button className="border-0 rounded-[8px] bg-[#20cb68] text-white p-[12px] w-full mt-4 text-sm font-semibold cursor-pointer" type="button">
                            Entrar em contato pelo WhatsApp
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}