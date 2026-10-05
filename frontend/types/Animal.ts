export type Animal = {
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