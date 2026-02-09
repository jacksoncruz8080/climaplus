
export enum ACType {
  SPLIT = 'Split',
  JANELA = 'Janela',
  CASSETE = 'Cassete',
  PISO_TETO = 'Piso-teto',
  OUTRO = 'Outro'
}

export enum Urgency {
  HOJE = 'Hoje',
  ESSA_SEMANA = 'Esta semana',
  FLEXIVEL = 'Flexível'
}

export interface FormData {
  nome: string;
  whatsapp: string;
  localizacao: string;
  tipoAr: ACType;
  quantidade: number;
  problema: string;
  urgencia: Urgency;
}

export interface PortfolioItem {
  id: number;
  image: string;
  type: string;
  location: string;
  result: string;
}

export interface Testimonial {
  id: number;
  name: string;
  stars: number;
  text: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}
