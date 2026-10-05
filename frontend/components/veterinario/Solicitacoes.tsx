

export default function Solicitacoes() {
    return (
        <div className="bg-white p-6 rounded-[14px] shadow-[0_4px_20px_#173d2e0a] border border-[#e9e2d7]">
            <h2 className="text-lg font-bold font-serif text-[#173d2e] mb-1">Chamadas de Adoção</h2>
            <p className="text-xs text-[#789187] mb-4">Total de <strong>14 chamadas</strong> recebidas.</p>

            <div className="flex flex-col gap-3">
                <div className="bg-[#f8f5ef] p-4 rounded-[10px] border border-[#e9e2d7]">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-bold text-[#e9a52a] uppercase tracking-wider">Interesse em: Bolinha</span>
                        <span className="text-[10px] text-[#789187]">Hoje, 14:20</span>
                    </div>
                    <p className="text-xs text-[#173d2e] font-medium">Contato: (98) 99111-2233 (Maria Clara)</p>
                    <p className="text-xs text-[#526a5d] mt-1">Deseja adotar e auxiliar nos custos cirúrgicos do pet.</p>
                </div>
            </div>
        </div>
    )
}