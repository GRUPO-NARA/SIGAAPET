"use client"; 

import { useState, useEffect } from "react";

export default function Hero() {
    const [indiceCima, setIndiceCima] = useState(0);
    const [indiceBaixo, setIndiceBaixo] = useState(0);

    const fotosQuadradoCima = [
        "/adocoes/adocao_1.jpg",
        "/adocoes/adocao_2.jpg",
        "/adocoes/adocao_3.jpg",
    ];

    const fotosQuadradoBaixo = [
        "/adocoes/adocao_4.jpeg",
        "/adocoes/adocao_5.jpg",
        "/adocoes/adocao_6.jpeg",
    ];

    useEffect(() => {
        const timerCima = setInterval(() => {
            setIndiceCima((prev) => (prev + 1) % fotosQuadradoCima.length);
        }, 3500);

        const timerBaixo = setInterval(() => {
            setIndiceBaixo((prev) => (prev + 1) % fotosQuadradoBaixo.length);
        }, 4500);

        return () => {
            clearInterval(timerCima);
            clearInterval(timerBaixo);
        };
    }, []);

    return (
        <section id="quem-somos" className="bg-gradient-to-br from-[#194a37] to-[#1d4432] text-white min-h-[366px] mt-15 scroll-mt-20 overflow-hidden">
            <div className="max-w-[1000px] mx-auto py-[66px] px-5 flex flex-col md:flex-row items-center justify-between gap-10">
                
                {/* LADO ESQUERDO: Textos e Informações */}
                <div className="md:w-[55%]">
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
                    <div className="flex flex-wrap gap-y-[10px] text-[#bad0c1] text-[15px] mt-6">
                        <span className="px-[18px] border-r border-[#3e644f] pl-0">
                            <strong className="text-white text-[18px] mr-[5px]">8</strong> cadastrados
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

                {/* LADO DIREITO: Quadrados Desalinhados Animados */}
                {/* Altura responsiva: 300px no mobile, 400px no desktop */}
                <div className="relative w-full max-w-[320px] md:max-w-[350px] h-[300px] md:h-[400px] flex-shrink-0 md:mt-0 mx-auto md:mx-0">
                    
                    {/* Quadrado de Cima (Puxado para o topo e direita) */}
                    {/* Tamanho responsivo: 170px no mobile, 220px no desktop */}
                    <div className="absolute top-0 right-0 w-[170px] md:w-[220px] aspect-square rounded-[18px] overflow-hidden shadow-[0_15px_30px_#0b241966] border-[4px] border-[#225740] bg-[#123e2f]">
                        {fotosQuadradoCima.map((foto, index) => (
                            <img
                                key={`cima-${index}`}
                                src={foto}
                                alt="Veterinário e adotante feliz"
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                                    index === indiceCima ? "opacity-100" : "opacity-0"
                                }`}
                            />
                        ))}
                    </div>

                    {/* Quadrado de Baixo (Puxado para base e esquerda) */}
                    <div className="absolute bottom-0 left-0 w-[170px] md:w-[220px] aspect-square rounded-[18px] overflow-hidden shadow-[0_15px_30px_#0b241966] border-[4px] border-[#225740] bg-[#123e2f] z-10">
                        {fotosQuadradoBaixo.map((foto, index) => (
                            <img
                                key={`baixo-${index}`}
                                src={foto}
                                alt="Veterinário e adotante feliz"
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                                    index === indiceBaixo ? "opacity-100" : "opacity-0"
                                }`}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}