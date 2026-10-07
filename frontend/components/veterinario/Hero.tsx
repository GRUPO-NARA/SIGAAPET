
export default function Hero() {
    return (
        <section className="text-white py-10 px-6 mt-20">
            <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="font-sans font-bold text-3xl md:text-4xl text-[#173d2e]">Painel Clínico & Administrativo</h1>
                    <p className="text-gray-500 text-sm mt-1 max-w-xl">
                        Gerencie resgates, registros visuais e vaquinhas de tratamento vinculadas aos pets da UEMA.
                    </p>
                </div>
            </div>
        </section>
    )
}