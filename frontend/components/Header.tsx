"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const router = useRouter();
  const [acessoVeterinario, setAcessoVeterinario] = useState(false);
  const [tokenJWT, setTokenJWT] = useState<string | null>(null);
  const [menuMobileAberto, setMenuMobileAberto] = useState(false);

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
    if (menuMobileAberto) setMenuMobileAberto(false);
  }

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-gradient-to-br from-[#194a37] to-[#1d4432] shadow-sm">
      <div className="mx-auto max-w-[1000px] h-[64px] md:h-[90px] px-4 md:px-5 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            onClick={(e) => {
              // Se já estiver na página inicial, apenas rola para o topo suavemente
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <img
              src="/identidade_visual/01_logo_principal_horizontal.svg"
              alt="Logo SIGAAPET"
              className="h-30 md:h-[90px] w-auto object-contain cursor-pointer"
            />
          </Link>
        </div>

        {/* Botões e Navegação (Desktop) */}
        <section className="text-white flex items-center gap-3 md:gap-5">
          
          {/* Navegação SEMPRE visível no Desktop */}
          <nav className="hidden md:flex gap-6 lg:gap-8 text-sm font-medium mr-2">
            <Link href="/#quem-somos" className="cursor-pointer hover:underline">
              Conheça a gente
            </Link>
            <Link href="/#adocao" className="cursor-pointer hover:underline">
              Adoção
            </Link>
            <a className="cursor-pointer hover:underline">
              Vaquinha digital
            </a>
          </nav>

          {tokenJWT ? (
            <>
              {/* Botão Painel do Veterinário (Substitui o "Olá, Júlio" e "Acesso Veterinário") */}
              <button
                onClick={() => router.push("/veterinario")}
                type="button"
                className="bg-[#e8a532] hover:bg-[#d6952a] transition text-[#173d2e] border-0 rounded-[6px] px-[10px] md:px-[14px] py-[6px] md:py-[10px] text-[12px] md:text-sm font-bold cursor-pointer whitespace-nowrap hidden sm:block"
              >
                Painel do veterinário
              </button>

              {/* Botão Sair */}
              <button
                onClick={() => {
                  localStorage.removeItem("tokenJWT");
                  router.push("/");
                  setTokenJWT(null);
                }}
                type="button"
                className="bg-transparent text-white border border-white/40 hover:bg-white/10 rounded-[6px] px-[10px] md:px-[14px] py-[6px] md:py-[10px] text-[13px] md:text-sm font-semibold inline-block text-center cursor-pointer transition"
              >
                Sair
              </button>
            </>
          ) : (
            <>
              {/* Botão de Acesso Veterinário (Deslogado) */}
              <button
                className="bg-[#123e2f] hover:bg-[#0f3326] transition text-white border-0 rounded-[6px] px-[10px] md:px-[14px] py-[6px] md:py-[10px] text-[12px] md:text-sm font-semibold cursor-pointer whitespace-nowrap"
                type="button"
                onClick={handleAcessoDoVeterinario}
              >
                Acesso veterinário
              </button>
            </>
          )}

          {/* Botão Menu Hambúrguer (Mobile) */}
          <button 
            className="md:hidden text-white p-1 ml-1 cursor-pointer"
            onClick={() => {
                setMenuMobileAberto(!menuMobileAberto);
                setAcessoVeterinario(false);
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuMobileAberto ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </section>
      </div>

      {/* Dropdown Menu Mobile */}
      {menuMobileAberto && (
        <nav className="md:hidden absolute top-[64px] left-0 w-full bg-[#123e2f] border-t border-[#194a37] flex flex-col shadow-xl z-40">
          
          {/* Se estiver logado, mostra o botão do painel também no menu mobile */}
          {tokenJWT && (
            <Link 
              href="/veterinario"
              onClick={() => setMenuMobileAberto(false)}
              className="px-5 py-4 bg-[#e8a532] text-[#173d2e] text-sm font-bold border-b border-[#194a37]"
            >
              Acessar Painel do Veterinário
            </Link>
          )}

          <Link 
            href="/#quem-somos" 
            onClick={() => setMenuMobileAberto(false)} 
            className="px-5 py-4 text-white text-sm font-medium hover:bg-[#0f3326] border-b border-[#194a37]"
          >
            Conheça a gente
          </Link>
          <Link 
            href="/#adocao" 
            onClick={() => setMenuMobileAberto(false)} 
            className="px-5 py-4 text-white text-sm font-medium hover:bg-[#0f3326] border-b border-[#194a37]"
          >
            Adoção
          </Link>
          <a 
            className="px-5 py-4 text-white text-sm font-medium hover:bg-[#0f3326] cursor-pointer"
            onClick={() => setMenuMobileAberto(false)}
          >
            Vaquinha digital
          </a>
        </nav>
      )}

      {/* Modal de Login (Veterinário) */}
      {acessoVeterinario && !tokenJWT && (
        <div className="absolute top-[70px] md:top-[95px] right-2 md:right-[calc(50%-500px+20px)] bg-white border border-[#e9e2d7] rounded-[6px] shadow-lg p-4 z-50 w-[280px]">
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