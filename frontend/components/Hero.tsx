export default function Hero() {
    return (
        <section className="bg-gradient-to-br from-[#194a37] to-[#1d4432] text-white min-h-[366px]">
          <div className="max-w-[1000px] mx-auto py-[66px] px-5">
            <p className="text-[#e9a52a] font-bold text-[10px] tracking-[1.7px] mb-[13px]">
              INICIATIVA DE PROTEÇÃO ANIMAL
            </p>
            <h1 className="font-serif font-bold text-[clamp(35px,5vw,48px)] leading-[1.02] m-0">
              Eles vivem no campus.<br />
              <em className="text-[#e8a532] not-italic">Merecem um lar.</em>
            </h1>
            <p className="max-w-[480px] text-[#b4cbbb] text-[17px] leading-[1.7] my-[14px]">
              O SIGAAPET reúne os animais encontrados no campus da UEMA. Conheça cada um, saiba onde foi encontrado e entre em contato para adotar.
            </p>
            <div className="flex flex-wrap gap-y-[10px] text-[#bad0c1] text-[15px]">
              <span className="px-[18px] border-r border-[#3e644f] pl-0">
                <strong className="text-[#f2ad2c] text-[18px] mr-[5px]">8</strong> cadastrados
              </span>
              <span className="px-[18px] border-r border-[#3e644f]">
                <strong className="text-[#f2ad2c] text-[18px] mr-[5px]">4</strong> aguardando adoção
              </span>
              <span className="px-[18px] border-r border-[#3e644f]">
                <strong className="text-[#35be73] text-[18px] mr-[5px]">2</strong> adotados
              </span>
              <span className="px-[18px] border-r-0">
                <strong className="text-[#f15e55] text-[18px] mr-[5px]">2</strong> precisam de ajuda
              </span>
            </div>
          </div>
        </section>
    )
}