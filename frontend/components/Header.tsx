"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const router = useRouter();
  const [acessoVeterinario, setAcessoVeterinario] = useState(false);
  const [tokenJWT, setTokenJWT] = useState<string | null>(null);

  const email = "julio@gmail.com";
  const senha = "1234";

  useEffect(() => {
    const token = localStorage.getItem("tokenJWT");
    if (token) {
      setTokenJWT(token);
    }
  }, []);

  function handleAcessoDoVeterinario() {
    setAcessoVeterinario(!acessoVeterinario);
  }

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-gradient-to-br from-[#194a37] to-[#1d4432] shadow-sm">
      <div className="mx-auto max-w-[1000px] h-[64px] md:h-[90px] px-5 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/identidade_visual/01_logo_principal_horizontal.svg" 
            alt="Logo SIGAAPET" 
            className="md:w-100 md:h-100 object-contain" 
          />
        </div>

        <section className="text-white flex items-center gap-5">
          {tokenJWT ? (
            <>
              <article className="bg-[#123e2f] text-white rounded-[6px] px-[14px] py-[10px] whitespace-nowrap text-sm font-semibold inline-block text-center no-underline">
                Olá, Júlio
              </article>
              <button
                onClick={() => {
                  localStorage.removeItem("tokenJWT");
                  router.push("/");
                  setTokenJWT(null);
                }}
                type="button"
                className="bg-white text-[#123e2f] border border-[#123e2f] rounded-[6px] px-[14px] py-[10px] text-sm font-semibold inline-block text-center cursor-pointer transition hover:bg-gray-100"
              >
                Sair
              </button>
            </>
          ) : (
            <>
              <nav className="hidden md:flex gap-8 text-sm font-medium mr-4">
                <a href="#quem-somos" className="cursor-pointer hover:underline">
                  Conheça a gente
                </a>
                <a href="#adocao" className="cursor-pointer hover:underline">
                  Adoção
                </a>
                <a className="cursor-pointer hover:underline">
                  Vaquinha digital
                </a>
              </nav>
              <button
                className="bg-[#123e2f] hover:bg-[#0f3326] transition text-white border-0 rounded-[6px] px-[14px] py-[5px] md:py-[10px] text-sm font-semibold cursor-pointer"
                type="button"
                onClick={handleAcessoDoVeterinario}
              >
                Acesso veterinário
              </button>
            </>
          )}
        </section>
      </div>

      {acessoVeterinario && !tokenJWT && (
        <div className="absolute top-[70px] md:top-[95px] right-5 md:right-[calc(50%-500px+20px)] bg-white border border-[#e9e2d7] rounded-[6px] shadow-lg p-4 z-50 w-[280px]">
          <p className="text-[#173d2e] text-sm mb-[10px] font-medium">Entre com seu e-mail e senha:</p>
          <form 
            action={(formData: FormData) => {
              const emailDigitado = formData.get("email");
              const senhaDigitada = formData.get("senha");

              if (emailDigitado === email && senhaDigitada === senha) {
                localStorage.setItem("tokenJWT", "teste");
                setTokenJWT("teste");
                router.push("/veterinario");
                setAcessoVeterinario(false);
              } else {
                alert("E-mail ou senha incorretos.");
              }
            }}
            className="flex flex-col gap-[10px]"
          >
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              className="border border-[#e9e2d7] text-gray-800 rounded-[6px] px-[10px] py-[8px] text-sm outline-none focus:border-[#123e2f]"
              required
            />
            <input
              type="password"
              name="senha"
              placeholder="Senha"
              className="border border-[#e9e2d7] text-gray-800 rounded-[6px] px-[10px] py-[8px] text-sm outline-none focus:border-[#123e2f]"
              required
            />
            <button
              type="submit"
              className="bg-[#123e2f] hover:bg-[#0f3326] transition text-white border-0 rounded-[6px] px-[14px] py-[9px] text-sm font-semibold cursor-pointer"
            >
              Entrar
            </button>
          </form>
        </div>
      )}
    </header>
  );
}