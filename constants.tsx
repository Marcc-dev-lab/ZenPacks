
import React from 'react';
import { Book, FAQItem, Testimonial } from './types';

export const KIWIFY_LINK = "https://pay.kiwify.com.br/Fpv2DOO";
export const BONUS_LINK = "https://pay.kiwify.com.br/Vvn6bpi"; // Updated link for the bonus offer

export const BOOKS: Book[] = [
  {
    id: 1,
    title: "Consciência Desperta",
    description: "Um guia prático para despertar da ilusão do piloto automático e redescobrir a liberdade interior e o poder de escolha.",
    category: "Mindset",
    image: "https://picsum.photos/seed/awake/400/600"
  },
  {
    id: 2,
    title: "Pare de Pensar (e Comece a Viver)",
    description: "Como sair do excesso de pensamentos (overthinking), silenciar o ruído mental e encontrar a paz no momento presente.",
    category: "Mental Health",
    image: "https://picsum.photos/seed/think/400/600"
  },
  {
    id: 3,
    title: "O Encontro com o Eu Interior",
    description: "Uma jornada de reconexão profunda com sua essência verdadeira, removendo as camadas de medo e expectativas alheias.",
    category: "Espiritualidade",
    image: "https://picsum.photos/seed/inner/400/600"
  },
  {
    id: 4,
    title: "Meditação Descomplicada",
    description: "O guia definitivo para quem nunca conseguiu meditar. Aprenda que meditação não é esvaziar a mente, mas sim observar.",
    category: "Prática",
    image: "https://picsum.photos/seed/medit/400/600"
  },
  {
    id: 5,
    title: "Mindfulness na Vida Real",
    description: "Técnicas práticas para silenciar a mente e reduzir a ansiedade mesmo vivendo em uma rotina caótica e sobrecarregada.",
    category: "Lifestyle",
    image: "https://picsum.photos/seed/life/400/600"
  }
];

export const BONUS_BOOK = {
  title: "O Caminho do Fluxo",
  subtitle: "Tai Chi, Qi Gong e a sabedoria Tao/Zen aplicados à vida moderna",
  description: "Aprenda a viver em fluxo, equilíbrio e presença usando práticas milenares simples como Wu Wei e o cultivo do Qi.",
  image: "https://picsum.photos/seed/flow/400/600"
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ana Silveira",
    role: "Arquiteta",
    content: "O livro 'Pare de Pensar' foi um divisor de águas. Eu sofria com insônia por excesso de pensamentos e as técnicas de aterramento funcionaram na primeira noite.",
    image: "https://picsum.photos/seed/user1/100/100"
  },
  {
    name: "Carlos Mendes",
    role: "Empreendedor",
    content: "Sempre achei que meditação era ficar parado sem pensar em nada. O 'Meditação Descomplicada' me provou que eu estava errado e hoje medito 10min todo dia.",
    image: "https://picsum.photos/seed/user2/100/100"
  },
  {
    name: "Juliana Rocha",
    role: "Médica",
    content: "A coleção é muito completa. O bônus sobre o Tao e o Caminho do Fluxo traz uma leveza que raramente encontramos em livros ocidentais.",
    image: "https://picsum.photos/seed/user3/100/100"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Como recebo o acesso?",
    answer: "Imediatamente após o pagamento, você recebe um e-mail da Kiwify com o link para baixar os 5 e-books bestsellers da coleção principal."
  },
  {
    question: "O bônus está incluso na bundle de R$ 47,00?",
    answer: "Não. O bônus 'O Caminho do Fluxo' é um conteúdo adicional exclusivo e deve ser adquirido separadamente através do link disponibilizado na seção de bônus."
  },
  {
    question: "Os livros são em qual formato?",
    answer: "Todos os e-books estão em formato PDF de alta resolução, compatíveis com smartphones, tablets e e-readers como o Kindle."
  },
  {
    question: "O pagamento é único?",
    answer: "Sim, você paga apenas R$ 47,00 uma única vez para ter acesso vitalício aos 5 livros da coleção principal."
  }
];
