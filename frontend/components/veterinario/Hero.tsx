
export default function Hero() {
    return (
        <section className="bg-gradient-to-br from-[#194a37] to-[#1d4432] text-white py-10 px-6 shadow-md">
            <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-[#e9a52a] font-bold text-[11px] tracking-[1.5px] uppercase">Sistema Gestor SIGAAPET</span>
                    </div>
                    <h1 className="font-serif font-bold text-3xl md:text-4xl">Painel Clínico & Administrativo</h1>
                    <p className="text-[#b4cbbb] text-sm mt-1 max-w-xl">
                        Gerencie resgates, registros visuais e vaquinhas de tratamento vinculadas aos pets da UEMA.
                    </p>
                </div>
                <div className="bg-[#123e2f]/80 backdrop-blur-md border border-[#ffffff15] px-4 py-3 rounded-[10px] text-right">
                    <span className="block text-[11px] text-[#b4cbbb]">Acesso Ativo</span>
                    <strong className="text-sm font-medium text-white">Dr(a). Veterinário(a)</strong>
                </div>
            </div>
        </section>
    )
}