export default function Footer() {
    return (
        <footer className="border-t border-[#e9e2d7] bg-[#f3ede1] text-[#a6b9ac] w-full h-[64px] md:h-[74px] flex items-center justify-center text-[13px] gap-20 font-semibold">
            <article className="hidden md:flex items-center gap-2 ml-4">
                <img src="/identidade_visual/14_icon_escudo.svg" alt="Logo de Segurança" className="w-8 h-8 mr-2"></img>
                <h1>Site Seguro</h1>
            </article>
             <p className="m-0">
                Desenvolvido por <a href="https://github.com/GRUPO-NARA" className="text-[#1d4432] hover:text-[#194a37] transition-colors" target="_blank" rel="noopener noreferrer">NARA</a> - 2026
            </p>
        </footer>
    )
}