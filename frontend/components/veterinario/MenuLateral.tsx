interface MenuLateralProps {
    abaAtiva: string;
    setAbaAtiva: (aba: string) => void;
}

export default function MenuLateral({ abaAtiva, setAbaAtiva }: MenuLateralProps) {
    return (
        <aside className="md:col-span-1 bg-white p-4 rounded-[14px] shadow-[0_4px_20px_#173d2e0a] border border-[#e9e2d7] h-fit sticky top-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#789187] mb-3 px-3">Navegação</h2>
            <nav className="flex flex-col gap-1">
                <button
                    onClick={() => setAbaAtiva("inicio")}
                    className={`text-left px-3.5 py-2.5 rounded-[8px] text-sm font-medium transition-all ${abaAtiva === "inicio" ? "bg-[#123e2f] text-white shadow-sm" : "text-[#355b49] hover:bg-[#f8f5ef]"
                        }`}
                >
                    📊 Visão Geral
                </button>
                <button
                    onClick={() => setAbaAtiva("adicionar")}
                    className={`text-left px-3.5 py-2.5 rounded-[8px] text-sm font-medium transition-all ${abaAtiva === "adicionar" ? "bg-[#123e2f] text-white shadow-sm" : "text-[#355b49] hover:bg-[#f8f5ef]"
                        }`}
                >
                    ➕ Cadastrar Animal & Foto
                </button>
                <button
                    onClick={() => setAbaAtiva("atualizar")}
                    className={`text-left px-3.5 py-2.5 rounded-[8px] text-sm font-medium transition-all ${abaAtiva === "atualizar" ? "bg-[#123e2f] text-white shadow-sm" : "text-[#355b49] hover:bg-[#f8f5ef]"
                        }`}
                >
                    ✏️ Gerenciar Animais
                </button>
                <button
                    onClick={() => setAbaAtiva("solicitacoes")}
                    className={`text-left px-3.5 py-2.5 rounded-[8px] text-sm font-medium transition-all ${abaAtiva === "solicitacoes" ? "bg-[#123e2f] text-white shadow-sm" : "text-[#355b49] hover:bg-[#f8f5ef]"
                        }`}
                >
                    💬 Chamadas / Adoção
                </button>
                <button
                    onClick={() => setAbaAtiva("vaquinhas")}
                    className={`text-left px-3.5 py-2.5 rounded-[8px] text-sm font-medium transition-all ${abaAtiva === "vaquinhas" ? "bg-[#123e2f] text-white shadow-sm" : "text-[#355b49] hover:bg-[#f8f5ef]"
                        }`}
                >
                    🤝 Vaquinhas por Animal
                </button>
            </nav>
        </aside>
    )
}