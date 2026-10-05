import { Animal } from "@/types/Animal";

export const animais: Animal[] = [
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