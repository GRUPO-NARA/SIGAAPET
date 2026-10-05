import { animais } from "@/data/animais";
import { vaquinhas } from "@/data/vaquinhas";

interface InicioProps {
    setAbaAtiva: (aba: string) => void;
}

export default function Inicio({ setAbaAtiva }: InicioProps) {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-[14px] shadow-[0_4px_20px_#173d2e0a] border border-[#e9e2d7]">
                    <span className="text-xs text-[#789187] font-medium block">Interessados / Chamadas</span>
                    <div className="flex items-baseline gap-2 mt-1">
                        <h3 className="text-3xl font-bold font-serif text-[#173d2e]">14</h3>
                        <span className="text-xs text-[#35be73] font-semibold">+3 esta semana</span>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-[14px] shadow-[0_4px_20px_#173d2e0a] border border-[#e9e2d7]">
                    <span className="text-xs text-[#789187] font-medium block">Animais Registrados</span>
                    <div className="flex items-baseline gap-2 mt-1">
                        <h3 className="text-3xl font-bold font-serif text-[#173d2e]">{animais.length}</h3>
                        <span className="text-xs text-[#789187]">Campi UEMA</span>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-[14px] shadow-[0_4px_20px_#173d2e0a] border border-[#e9e2d7]">
                    <span className="text-xs text-[#789187] font-medium block">Vaquinhas Vinculadas</span>
                    <div className="flex items-baseline gap-2 mt-1">
                        <h3 className="text-3xl font-bold font-serif text-[#173d2e]">{vaquinhas.length}</h3>
                        <span className="text-xs text-[#e9a52a]">Em andamento</span>
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-[14px] shadow-[0_4px_20px_#173d2e0a] border border-[#e9e2d7]">
                <h2 className="text-lg font-bold font-serif text-[#173d2e] mb-2">Painel Operacional Integrado</h2>
                <p className="text-sm text-[#526a5d] leading-relaxed">
                    Gerencie todo o fluxo de resgate no campus. Agora você pode fazer o upload direto da foto do pet e vincular campanhas de arrecadação diretamente ao histórico do animal correspondente.
                </p>
                <div className="mt-4 pt-4 border-t border-[#e9e2d7] flex gap-3">
                    <button onClick={() => setAbaAtiva("adicionar")} className="bg-[#123e2f] text-white px-4 py-2 rounded-[8px] text-xs font-semibold cursor-pointer">
                        Cadastrar com Foto
                    </button>
                    <button onClick={() => setAbaAtiva("vaquinhas")} className="bg-[#f3ede1] text-[#173d2e] px-4 py-2 rounded-[8px] text-xs font-semibold cursor-pointer">
                        Gerenciar Vaquinhas
                    </button>
                </div>
            </div>
        </>
    )
}
