// Fonte única dos dados da escola. Página, metadados e JSON-LD leem daqui.
// Itens marcados com "VALIDAR" são rascunho do protótipo e precisam de confirmação da escola.

export const site = {
  nome: "Instituto Mundo da Educação",
  sigla: "IME",
  // VALIDAR: domínio definitivo
  url: "https://www.institutomundodaeducacao.com.br",
  descricao:
    "Escola de educação infantil e ensino fundamental em Ananindeua (PA), do Maternal ao 2º ano. Inglês para todas as idades, educação ambiental e experiência com crianças com TEA, TDAH e TDA. Matrículas abertas para 2026.",
  endereco: {
    rua: "Rua Manoel Pinho, 50",
    cidade: "Ananindeua",
    uf: "PA",
    pais: "BR",
    // VALIDAR: CEP e bairro
  },
  horario: { entrada: "07:30", saida: "11:30", texto: "7h30 às 11h30" },
  telefones: [
    { exibir: "(91) 98992-0930", e164: "+5591989920930" },
    { exibir: "(91) 98893-5720", e164: "+5591988935720" },
  ],
  instagram: { usuario: "@oficialime", url: "https://www.instagram.com/oficialime/" },
  anoMatricula: 2026,
} as const;

const whatsappBase = `https://wa.me/${site.telefones[0].e164.replace("+", "")}`;

export function whatsapp(mensagem: string) {
  return `${whatsappBase}?text=${encodeURIComponent(mensagem)}`;
}

export const mensagens = {
  matricula: `Olá! Vim pelo site e gostaria de informações sobre as matrículas ${site.anoMatricula}.`,
  visita: "Olá! Vim pelo site e gostaria de agendar uma visita à escola.",
  inclusao:
    "Olá! Vim pelo site e gostaria de conversar sobre como a escola acompanha crianças neurodivergentes.",
};

export const mapaUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.endereco.rua}, ${site.endereco.cidade} - ${site.endereco.uf}`,
)}`;

export const mapaEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(
  `${site.endereco.rua}, ${site.endereco.cidade} - ${site.endereco.uf}`,
)}&output=embed`;

// VALIDAR: faixa etária de cada turma
export const turmas = [
  { nome: "Maternal", idade: "2 e 3 anos", etapa: "Educação infantil" },
  { nome: "Jardim I", idade: "4 anos", etapa: "Educação infantil" },
  { nome: "Jardim II", idade: "5 anos", etapa: "Educação infantil" },
  { nome: "1º ano", idade: "6 anos", etapa: "Ensino fundamental" },
  { nome: "2º ano", idade: "7 e 8 anos", etapa: "Ensino fundamental" },
];

export const disciplinas = [
  "Português",
  "Matemática",
  "História",
  "Geografia",
  "Ciências",
  "Inglês",
  "Educação Física",
  "Educação Ambiental",
];

export const programas = [
  {
    titulo: "Inglês para todas as idades",
    texto: "Desde o Maternal, com músicas, jogos e vocabulário do dia a dia.",
    itens: [
      "Cores e números",
      "Animais",
      "Partes do corpo humano",
      "Sentimentos e saudações",
      "Membros da família",
      "Comandos simples",
    ],
  },
  {
    titulo: "Educação ambiental",
    texto: "A turma cuida da horta e aprende a cuidar dos recursos da casa e da escola.",
    itens: [
      "Plantio de hortaliças",
      "Coleta seletiva",
      "Economia de água",
      "Economia de energia",
      "Visitas à natureza",
    ],
  },
  {
    titulo: "Educação física",
    texto: "Movimento e coordenação motora em atividades na quadra da escola.",
    itens: ["Futebol", "Vôlei", "Handebol", "Funcional para coordenação motora", "Bola no balde", "Boliche"],
  },
];

// VALIDAR: compromissos com famílias de crianças neurodivergentes (texto provisório)
export const inclusao = [
  {
    titulo: "Experiência de verdade",
    texto: "Recebemos alunos com TEA, TDAH, TDA e outras neurodivergências há anos, em turmas regulares.",
  },
  {
    titulo: "Rotina previsível",
    texto: "Combinados claros e atividades em sequência ajudam a criança a saber o que vem depois.",
  },
  {
    titulo: "Aprender brincando",
    texto: "Jogos, quebra-cabeças e atividades sensoriais respeitam o tempo e o jeito de cada um.",
  },
  {
    titulo: "Família por perto",
    texto: "Conversamos com os responsáveis com frequência sobre avanços e desafios.",
  },
];

export const estrutura = [
  "Salas de aula climatizadas",
  "Área do lanche",
  "Área da brincadeira com escorregadores e gangorras",
  "Quadra esportiva",
  "Monitoramento por câmeras",
];

export const eventos = [
  "Dia do cinema",
  "Contação de histórias",
  "Dia das crianças",
  "Dia Mundial da Água",
  "Dia das Mães",
  "Formatura do ABC",
];

export const valores = {
  // VALIDAR: valores para 2026 (conforme folder)
  matricula: "R$ 270,00",
  irmaos: "R$ 250,00",
};

export const perguntas = [
  {
    pergunta: "Quais idades a escola atende?",
    resposta:
      "Atendemos crianças de 2 a 8 anos, do Maternal ao 2º ano do ensino fundamental: Maternal, Jardim I, Jardim II, 1º ano e 2º ano.",
  },
  {
    pergunta: "Qual é o horário das aulas?",
    resposta: `As aulas são no turno da manhã, com entrada às 7h30 e saída às 11h30.`,
  },
  {
    pergunta: "A escola recebe crianças com autismo (TEA), TDAH ou TDA?",
    resposta:
      "Sim. Temos experiência com alunos neurodivergentes, incluindo TEA, TDAH e TDA. Antes da matrícula, conversamos com a família para entender as necessidades da criança.",
  },
  {
    pergunta: "Tem aula de inglês?",
    resposta: "Sim. Todas as turmas têm inglês, a partir do Maternal.",
  },
  {
    pergunta: "Quanto custa a matrícula?",
    resposta: `A matrícula é de ${valores.matricula} e já conta como a primeira mensalidade. Alunos da mesma família pagam ${valores.irmaos} por mês. Confirme os valores atualizados pelo WhatsApp.`,
  },
  {
    pergunta: "A proposta pedagógica segue a BNCC?",
    resposta:
      "Sim. O currículo é baseado na BNCC, com Português, Matemática, História, Geografia, Ciências, Inglês, Educação Física e Educação Ambiental.",
  },
  {
    pergunta: "Onde fica a escola?",
    resposta: `Na ${site.endereco.rua}, em ${site.endereco.cidade} (PA).`,
  },
  {
    pergunta: "Posso visitar a escola antes de matricular?",
    resposta: "Pode, e recomendamos. Agende sua visita pelo WhatsApp e venha conhecer as salas, a quadra e a área da brincadeira.",
  },
];
