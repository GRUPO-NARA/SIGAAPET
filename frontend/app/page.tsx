"use client";

import Header from "@/components/Header";
import Image from "next/image";
import { useMemo, useState } from "react";

type Animal = {
  id: number;
  nome: string;
  especie: "Cachorro" | "Gato";
  idade: string;
  localizacao: string;
  cor: string;
  status: "Disponível" | "Adotado" | "Lar temporário";
  condicao?: string;
  imagem: string;
  descricao: string;
};

const animais: Animal[] = [
  ["Mel", "Cachorro", "~1 ano", "Bloco de Engenharia", "Caramelo", "Disponível", "", "1558788353-f76d92427f16", "Mel é carinhosa e brincalhona. Adora companhia e está esperando uma família para chamar de sua."],
  ["Pipoca", "Gato", "~2 anos", "Biblioteca Central", "Branco e laranja", "Adotado", "", "1518791841217-8f162f1e1131", "Pipoca foi adotada com sucesso por uma família da comunidade."],
  ["Bolinha", "Cachorro", "~3 meses", "Restaurante Universitário", "Preto", "Disponível", "Precisa de cirurgia", "1543466835-00a7907e9de1", "Bolinha é um filhote brincalhão e precisa de cuidados veterinários."],
  ["Cinza", "Gato", "~4 anos", "Diretório Acadêmico", "Cinza rajado", "Disponível", "Tratamento em andamento", "1514888286974-6c03e2ca1dba", "Cinza é calmo e independente. Precisa de um espaço tranquilo."],
  ["Thor", "Cachorro", "~2 anos", "Estacionamento Central", "Preto e castanho", "Lar temporário", "Precisa de cirurgia", "1558788353-f76d92427f16", "Thor é dócil e procura uma família que possa oferecer companhia e cuidado."],
  ["Mimi", "Gato", "~1 ano", "Bloco de Medicina", "Laranja e branca", "Adotado", "", "1574158622682-e40e69881006", "Mimi encontrou um lar cheio de carinho."],
  ["Duda", "Cachorro", "~6 meses", "Entrada Principal", "Bege e branco", "Lar temporário", "", "1583511655857-d19b40a7a54e", "Duda é doce e esperta. Está em um lar temporário enquanto espera pela adoção."],
  ["Luna", "Gato", "~3 anos", "Centro de Artes", "Pretinha", "Disponível", "", "1519052537078-e6302a4968d4", "Luna é independente, mas adora receber carinho."],
].map(([nome, especie, idade, localizacao, cor, status, condicao, imagem, descricao], indice) => ({
  id: indice + 1,
  nome,
  especie: especie as Animal["especie"],
  idade,
  localizacao,
  cor,
  status: status as Animal["status"],
  condicao: condicao || undefined,
  imagem: `https://images.unsplash.com/photo-${imagem}?auto=format&fit=crop&w=900&q=85`,
  descricao,
}));

const filtros = ["Todos", "Cachorros", "Gatos", "Adotados"] as const;
type Filtro = (typeof filtros)[number];

export default function Home() {
  const [filtro, definirFiltro] = useState<Filtro>("Todos");
  const [animalSelecionado, definirAnimalSelecionado] = useState<Animal | null>(null);
  const animaisVisiveis = useMemo(() => {
    if (filtro === "Cachorros") return animais.filter((animal) => animal.especie === "Cachorro");
    if (filtro === "Gatos") return animais.filter((animal) => animal.especie === "Gato");
    if (filtro === "Adotados") return animais.filter((animal) => animal.status === "Adotado");
    return animais;
  }, [filtro]);

  return (
    <div className="site-shell">
      <Header />
      <main>
        <section className="hero"><div className="hero-content">
          <h1>Eles vivem no campus.<br /><em>Merecem um lar.</em></h1>
          <p className="hero-copy">O SIGAAPET reúne os animais encontrados no campus da UEMA. Conheça cada um, saiba onde foi encontrado e entre em contato para adotar.</p>
          <div className="stats"><span><strong>8</strong> cadastrados</span><span><strong>4</strong> aguardando adoção</span><span><strong className="green">2</strong> adotados</span><span><strong className="red">2</strong> precisam de ajuda</span></div>
        </div></section>

        <section className="catalog">
          <div className="filter-row"><span>Filtrar:</span>{filtros.map((opcao) => (
            <button key={opcao} className={`filter ${filtro === opcao ? "active" : ""}`} onClick={() => definirFiltro(opcao)} type="button">
              {opcao} <b>{opcao === "Todos" ? 8 : opcao === "Cachorros" ? 4 : opcao === "Gatos" ? 4 : 2}</b>
            </button>
          ))}</div>
          <div className="animal-grid">{animaisVisiveis.map((animal) => (
            <article className="animal-card" key={animal.id} onClick={() => definirAnimalSelecionado(animal)}>
              <div className="card-image">
                <Image src={animal.imagem} alt={`Foto de ${animal.nome}`} fill sizes="(max-width: 760px) 50vw, 245px" />
                <span className={`status-badge ${animal.status === "Adotado" ? "adopted" : animal.status === "Lar temporário" ? "temporary" : ""}`}>{animal.status}</span>
                {animal.condicao && <span className="condition-badge">Condição de saúde</span>}
                <span className="photo-count">2 fotos</span>
              </div>
              <div className="card-content">
                <div className="card-title"><h2>{animal.nome}</h2><span>{animal.especie}</span></div>
                <p className="also">também: {animal.nome === "Mel" ? "Melinha, Caramelinha" : animal.nome}</p>
                <p className="location">{animal.localizacao}</p>
                <p className="meta">{animal.idade} · {animal.cor}</p>
              </div>
            </article>
          ))}</div>
        </section>
      </main>
      <footer><div>SIGAAPET</div><span>Iniciativa estudantil · Universidade Estadual do Maranhão (UEMA) · São Luís/MA</span><span>Todos os animais precisam de cuidado.</span></footer>

      {animalSelecionado && <div className="modal-backdrop" onClick={() => definirAnimalSelecionado(null)}>
        <div className="modal" onClick={(evento) => evento.stopPropagation()}>
          <div className="modal-image"><Image src={animalSelecionado.imagem} alt={`Foto de ${animalSelecionado.nome}`} fill sizes="(max-width: 760px) 100vw, 315px" /><span className="status-badge">{animalSelecionado.status}</span></div>
          <div className="modal-body">
            <button className="close-button" onClick={() => definirAnimalSelecionado(null)} aria-label="Fechar">×</button>
            <p className="eyebrow">{animalSelecionado.especie.toUpperCase()} · {animalSelecionado.idade}</p>
            <h2>{animalSelecionado.nome}</h2>
            <p className="also">Também atende por: {animalSelecionado.nome}</p>
            {animalSelecionado.condicao && <div className="alert"><strong>CONDIÇÃO DE SAÚDE</strong><br />{animalSelecionado.condicao}.</div>}
            <div className="info-block"><strong>ONDE FOI ENCONTRADO</strong><p>Próximo ao {animalSelecionado.localizacao} da UEMA</p><small>Desde março de 2026</small></div>
            <h3>SOBRE {animalSelecionado.nome.toUpperCase()}</h3><p className="description">{animalSelecionado.descricao}</p>
            <div className="details"><span><small>Pelagem</small>{animalSelecionado.cor}</span><span><small>Idade estimada</small>{animalSelecionado.idade}</span></div>
            {animalSelecionado.status !== "Adotado" && <button className="contact-button" type="button">Entrar em contato pelo WhatsApp</button>}
          </div>
        </div>
      </div>}
    </div>
  );
}
