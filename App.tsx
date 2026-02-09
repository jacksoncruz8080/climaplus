
import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, CheckCircle, ShieldAlert, Thermometer, Wind, 
  ChevronDown, Star, MessageCircle, ArrowRight, Instagram, 
  Facebook, Camera, Droplets, Zap, ShieldCheck, Snowflake, Cloud
} from 'lucide-react';
import { ACType, Urgency, FormData, PortfolioItem, Testimonial, FAQItem } from './types';

// Constants
const WHATSAPP_NUMBER = '5565999999999';
const COMPANY_NAME = 'Clima Plus Refrigeração';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormData>({
    nome: '',
    whatsapp: '',
    localizacao: '',
    tipoAr: ACType.SPLIT,
    quantidade: 1,
    problema: '',
    urgencia: Urgency.ESSA_SEMANA
  });

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Pedido de Orçamento - ${COMPANY_NAME}*%0A%0A` +
      `*Nome:* ${formData.nome}%0A` +
      `*WhatsApp:* ${formData.whatsapp}%0A` +
      `*Local:* ${formData.localizacao}%0A` +
      `*Aparelho:* ${formData.tipoAr}%0A` +
      `*Quantidade:* ${formData.quantidade}%0A` +
      `*Problema:* ${formData.problema}%0A` +
      `*Urgência:* ${formData.urgencia}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    setIsModalOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const portfolio: PortfolioItem[] = [
    { id: 1, image: 'https://picsum.photos/id/1015/800/600', type: 'Split Hi-Wall', location: 'Cuiabá - Centro', result: 'Higienização profunda antibacteriana' },
    { id: 2, image: 'https://picsum.photos/id/1020/800/600', type: 'Ar Janela', location: 'Várzea Grande', result: 'Remoção de mofo e limpeza de dutos' },
    { id: 3, image: 'https://picsum.photos/id/1031/800/600', type: 'Cassete', location: 'Cuiabá - Coxipó', result: 'Manutenção preventiva comercial' },
    { id: 4, image: 'https://picsum.photos/id/1040/800/600', type: 'Piso Teto', location: 'Cuiabá - Santa Rosa', result: 'Recarga de gás e limpeza técnica' },
    { id: 5, image: 'https://picsum.photos/id/1050/800/600', type: 'Central', location: 'Distrito Industrial', result: 'Revisão completa de eficiência' },
    { id: 6, image: 'https://picsum.photos/id/1060/800/600', type: 'Split Multi', location: 'Condomínio Florais', result: 'Desobstrução de dreno e higienização' },
  ];

  const testimonials: Testimonial[] = [
    { id: 1, name: 'Marcos Silva', stars: 5, text: 'Serviço impecável. A Clima Plus resolveu o mau cheiro do meu aparelho rapidinho. Técnicos muito educados!' },
    { id: 2, name: 'Ana Paula', stars: 5, text: 'Atendimento nota 10. Fiz a higienização de 3 aparelhos e a economia de energia já apareceu na conta.' },
    { id: 3, name: 'Ricardo Santos', stars: 5, text: 'A melhor de Cuiabá. Pontualidade e limpeza durante o serviço. Recomendo de olhos fechados.' },
  ];

  const faqs: FAQItem[] = [
    { id: 1, question: 'De quanto em quanto tempo devo limpar?', answer: 'Recomendamos a cada 6 meses para residências e a cada 3 meses para escritórios ou locais com muita poeira.' },
    { id: 2, question: 'A Clima Plus atende empresas?', answer: 'Sim! Temos contratos de manutenção (PMOC) e emissão de nota fiscal para empresas de todos os portes.' },
    { id: 3, question: 'Faz muita bagunça no local?', answer: 'Não. Utilizamos capas coletoras de água e proteção plástica para móveis e paredes. Deixamos tudo como encontramos.' },
    { id: 4, question: 'Quais marcas vocês atendem?', answer: 'Atendemos todas as marcas do mercado: LG, Samsung, Consul, Elgin, Carrier, Gree, Midea, entre outras.' },
  ];

  return (
    <div className="relative">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-glass border-b border-blue-100 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-2.5 rounded-xl text-white shadow-lg shadow-blue-200">
              <Snowflake size={24} className="animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-slate-900 tracking-tight leading-none uppercase italic">Clima <span className="text-blue-600">Plus</span></span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Refrigeração</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-10">
            <a href="#inicio" className="text-slate-600 hover:text-blue-600 font-bold text-sm uppercase tracking-wide transition-colors">Início</a>
            <a href="#beneficios" className="text-slate-600 hover:text-blue-600 font-bold text-sm uppercase tracking-wide transition-colors">Vantagens</a>
            <a href="#portfolio" className="text-slate-600 hover:text-blue-600 font-bold text-sm uppercase tracking-wide transition-colors">Serviços</a>
            <a href="#faq" className="text-slate-600 hover:text-blue-600 font-bold text-sm uppercase tracking-wide transition-colors">Dúvidas</a>
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <a href={`tel:${WHATSAPP_NUMBER}`} className="flex items-center gap-2 text-slate-800 font-extrabold hover:text-blue-600 transition-colors">
              <Phone size={18} className="text-blue-600" />
              <span>(65) 99999-9999</span>
            </a>
            <button 
              onClick={toggleModal}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:shadow-xl hover:shadow-blue-200 transition-all active:scale-95"
            >
              Orçamento
            </button>
          </div>

          <button className="lg:hidden p-2 text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-100 p-6 flex flex-col gap-6 animate-in slide-in-from-top-5">
            <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold">Início</a>
            <a href="#beneficios" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold">Vantagens</a>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold">Portfólio</a>
            <button onClick={() => { toggleModal(); setIsMenuOpen(false); }} className="bg-blue-600 text-white py-4 rounded-2xl font-black uppercase tracking-widest">Orçamento Grátis</button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 lg:pt-56 lg:pb-32 bg-gradient-to-b from-blue-50 via-white to-white relative overflow-hidden">
        {/* Airflow Particles */}
        <div className="airflow-line top-1/4 left-0" style={{ animationDelay: '0s' }}></div>
        <div className="airflow-line top-1/2 left-0" style={{ animationDelay: '2s' }}></div>
        <div className="airflow-line top-3/4 left-0" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 bg-blue-600/10 text-blue-700 px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest">
              <Wind size={16} className="animate-bounce" /> Especialistas em Climatização
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
              O frescor do <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Ar Puro</span> na sua casa.
            </h1>
            <p className="text-lg lg:text-2xl text-slate-600 leading-relaxed max-w-xl font-medium">
              A Clima Plus cuida da sua saúde através da higienização profunda do seu ar-condicionado. Elimine ácaros e respire leveza.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={toggleModal}
                className="bg-blue-600 text-white px-10 py-5 rounded-3xl font-black text-lg hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 flex items-center justify-center gap-3 active:scale-95"
              >
                Solicitar Orçamento <ArrowRight size={22} />
              </button>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank" rel="noreferrer"
                className="bg-white text-slate-800 px-10 py-5 rounded-3xl font-black text-lg hover:bg-slate-50 transition-all border-2 border-slate-100 flex items-center justify-center gap-3 shadow-lg"
              >
                <MessageCircle size={22} className="text-green-500" /> WhatsApp
              </a>
            </div>
          </div>

          <div className="relative lg:scale-110">
            <div className="absolute inset-0 bg-blue-400 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
            <div className="relative frost-card p-6 rounded-[3rem] shadow-2xl border border-white/50">
              <div className="flex justify-between items-center mb-6">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-tighter">Status: Operacional</span>
                <Thermometer size={24} className="text-blue-500" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative group overflow-hidden rounded-2xl">
                  <img src="https://picsum.photos/id/10/400/500" className="w-full h-64 object-cover grayscale opacity-60" alt="Antes" />
                  <div className="absolute top-3 left-3 bg-red-600 text-white px-2 py-0.5 rounded text-[10px] font-bold">AR SUJO</div>
                </div>
                <div className="relative group overflow-hidden rounded-2xl">
                  <img src="https://picsum.photos/id/10/400/500" className="w-full h-64 object-cover brightness-125" alt="Depois" />
                  <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-tighter">Clima Plus</div>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-4 bg-white/60 p-4 rounded-2xl">
                <div className="p-3 bg-blue-600 text-white rounded-xl"><Cloud size={20} /></div>
                <div>
                  <h4 className="font-black text-slate-800 text-sm">Ar 100% Filtrado</h4>
                  <p className="text-xs text-slate-500">Sem fungos, sem bactérias.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid (Identity Visual focus) */}
      <section id="beneficios" className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight italic uppercase">
              Por que escolher a <span className="text-blue-600 underline decoration-cyan-400">Clima Plus?</span>
            </h2>
            <p className="text-slate-500 font-medium">Equipamentos de ponta e técnicos certificados para o melhor desempenho do seu ar.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Droplets />, title: "Limpeza Química", desc: "Produtos biodegradáveis que não agridem seu aparelho." },
              { icon: <Snowflake />, title: "Recarga de Gás", desc: "Testes de vazamento e recarga R-410A ou R-22." },
              { icon: <Zap />, title: "Menos Consumo", desc: "Um aparelho limpo consome até 30% menos energia." },
              { icon: <ShieldCheck />, title: "Garantia Total", desc: "90 dias de garantia em todos os serviços realizados." },
            ].map((s, i) => (
              <div key={i} className="p-8 frost-card rounded-[2.5rem] border border-blue-50 hover:border-blue-200 transition-all hover:-translate-y-2">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-100">
                  {s.icon}
                </div>
                <h3 className="text-xl font-black mb-3 text-slate-800">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health / Visual Identity Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-blue-600/10 pointer-events-none"></div>
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">
           <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <img src="https://picsum.photos/id/80/800/800" className="relative rounded-[2.5rem] shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Saúde" />
           </div>
           <div className="text-white space-y-8">
              <h2 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight uppercase italic">
                Cuidamos do seu <span className="text-blue-400">Bem-estar</span>
              </h2>
              <p className="text-slate-400 text-xl font-medium">Não é só sobre frio. É sobre respirar com segurança.</p>
              
              <div className="space-y-6">
                {[
                  "Eliminação de alérgenos e ácaros.",
                  "Prevenção de rinites e sinusites.",
                  "Fim do mau cheiro e da umidade excessiva.",
                  "Sono mais profundo e reparador."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={14} />
                    </div>
                    <span className="text-lg font-bold text-slate-200">{item}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={toggleModal}
                className="inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl font-black hover:bg-blue-50 transition-all active:scale-95"
              >
                CUIDAR DA MINHA SAÚDE <ArrowRight size={20} />
              </button>
           </div>
        </div>
      </section>

      {/* Portfolio with Blue Highlights */}
      <section id="portfolio" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter italic">Serviços <span className="text-blue-600">Recentes</span></h2>
              <p className="text-slate-500 font-medium">A Clima Plus atende residências, comércios e indústrias em toda a região.</p>
            </div>
            <div className="flex items-center gap-4">
               <div className="flex -space-x-3">
                 {[1,2,3].map(i => <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-300 overflow-hidden shadow-lg"><img src={`https://picsum.photos/id/${i+40}/100/100`} alt="User" /></div>)}
               </div>
               <span className="text-sm font-black text-slate-800 uppercase tracking-widest">+2.000 Clientes</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map(item => (
              <div 
                key={item.id} 
                className="group relative bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-blue-900/5 hover:-translate-y-2 transition-all cursor-pointer"
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="h-72 overflow-hidden relative">
                  <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.type} />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
                    <p className="text-blue-300 font-black text-xs uppercase tracking-widest mb-2">{item.location}</p>
                    <h4 className="text-white text-2xl font-black italic uppercase tracking-tighter">{item.type}</h4>
                  </div>
                </div>
                <div className="p-6 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-slate-600 font-bold text-sm">{item.result}</span>
                  <div className="bg-blue-600 p-2 rounded-lg text-white"><Camera size={16} /></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            {testimonials.map(t => (
              <div key={t.id} className="p-10 frost-card rounded-[3rem] border border-blue-100 relative shadow-2xl shadow-blue-100/50">
                <div className="text-blue-600 mb-6 flex gap-1">
                  {[...Array(t.stars)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
                </div>
                <p className="text-slate-700 font-medium italic text-lg leading-relaxed mb-8">"{t.text}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-blue-50">
                   <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-200 to-slate-300 shadow-inner"></div>
                   <div>
                     <h5 className="font-black text-slate-900 uppercase tracking-tighter">{t.name}</h5>
                     <p className="text-xs text-blue-600 font-bold uppercase tracking-widest">Cliente Verificado</p>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black italic uppercase tracking-tighter">Perguntas <span className="text-blue-600">Frequentes</span></h2>
          </div>
          <div className="space-y-4">
            {faqs.map(faq => (
              <div key={faq.id} className="bg-white rounded-3xl overflow-hidden border border-slate-100 transition-all hover:border-blue-200 shadow-sm">
                <button 
                  className="w-full px-8 py-6 flex items-center justify-between text-left font-black text-slate-800"
                  onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}
                >
                  {faq.question}
                  <ChevronDown className={`transition-transform duration-300 text-blue-600 ${activeFaq === faq.id ? 'rotate-180' : ''}`} size={24} />
                </button>
                {activeFaq === faq.id && (
                  <div className="px-8 pb-8 animate-in fade-in slide-in-from-top-2">
                    <p className="text-slate-600 font-medium leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-r from-blue-700 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl lg:text-7xl font-black mb-10 tracking-tighter uppercase italic">Sinta o <span className="text-cyan-300">Clima Plus</span> agora!</h2>
          <p className="text-xl lg:text-3xl font-medium mb-12 opacity-90 max-w-3xl mx-auto italic">Técnicos disponíveis em Cuiabá e Várzea Grande para atendimento hoje.</p>
          <button 
            onClick={toggleModal}
            className="bg-white text-blue-700 px-12 py-6 rounded-full font-black text-2xl uppercase tracking-tighter shadow-2xl hover:scale-105 transition-all active:scale-95"
          >
            PEÇA SEU ORÇAMENTO
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-16 mb-20">
            <div className="space-y-8">
              <div className="flex items-center gap-3 text-white">
                <div className="bg-blue-600 p-2 rounded-xl"><Snowflake size={24} /></div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black uppercase italic tracking-tighter leading-none">Clima <span className="text-blue-500">Plus</span></span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Refrigeração</span>
                </div>
              </div>
              <p className="text-sm font-medium leading-relaxed">Referência em higienização e manutenção preventiva de ar-condicionado. Saúde e economia para o seu ambiente.</p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-colors"><Instagram size={24} className="text-white" /></a>
                <a href="#" className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-colors"><Facebook size={24} className="text-white" /></a>
              </div>
            </div>
            
            <div className="space-y-6">
              <h5 className="text-white font-black uppercase tracking-widest text-sm italic">Navegação</h5>
              <ul className="space-y-4 font-bold text-sm">
                <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
                <li><a href="#beneficios" className="hover:text-white transition-colors">Benefícios</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Serviços</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h5 className="text-white font-black uppercase tracking-widest text-sm italic">Atendimento</h5>
              <ul className="space-y-4 font-bold text-sm">
                <li className="flex items-center gap-3"><Phone size={16} className="text-blue-500" /> (65) 99999-9999</li>
                <li className="flex items-center gap-3"><MessageCircle size={16} className="text-green-500" /> WhatsApp On-line</li>
                <li className="text-xs opacity-60">Seg à Sáb: 08:00 - 18:00</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h5 className="text-white font-black uppercase tracking-widest text-sm italic">Cobertura</h5>
              <p className="text-sm font-medium">Atendemos Cuiabá, Várzea Grande, Chapada e todo o entorno metropolitano.</p>
              <div className="bg-slate-800 p-6 rounded-3xl border border-slate-700 text-xs">
                <p className="font-black mb-1">UNIDADE MATRIZ</p>
                <p>Av. Miguel Sutil, Santa Rosa, Cuiabá - MT</p>
              </div>
            </div>
          </div>
          <div className="pt-10 border-t border-slate-800 text-center text-[10px] font-black uppercase tracking-[0.2em]">
            &copy; 2024 {COMPANY_NAME}. DESENVOLVIDO COM FOCO EM RESULTADOS.
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
        <button 
          onClick={toggleModal}
          className="bg-blue-600 text-white w-20 h-20 rounded-full shadow-2xl flex items-center justify-center animate-bounce hover:scale-110 transition-transform active:scale-95 shadow-blue-500/40"
        >
          <Wind size={32} />
        </button>
        <a 
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank" rel="noreferrer"
          className="bg-green-500 text-white w-20 h-20 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 shadow-green-500/40"
        >
          <MessageCircle size={36} />
        </a>
      </div>

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" onClick={toggleModal}></div>
          <div className="relative bg-white w-full max-w-xl rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-white/20">
            <div className="bg-gradient-to-br from-blue-700 to-blue-600 p-10 text-white relative">
              <button onClick={toggleModal} className="absolute top-6 right-6 p-2 bg-white/10 rounded-full hover:bg-white/20"><X size={20} /></button>
              <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-2 leading-none">Orçamento <span className="text-cyan-300">Expresso</span></h3>
              <p className="text-blue-100 font-medium">Preencha os campos abaixo e receba o valor no WhatsApp.</p>
            </div>
            <form onSubmit={handleSubmit} className="p-10 space-y-5 max-h-[65vh] overflow-y-auto custom-scrollbar">
              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Nome Completo</label>
                <input required name="nome" value={formData.nome} onChange={handleInputChange} className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 focus:border-blue-500 outline-none transition-all font-bold" placeholder="Digite seu nome..." />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">WhatsApp</label>
                  <input required name="whatsapp" value={formData.whatsapp} onChange={handleInputChange} className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 focus:border-blue-500 outline-none transition-all font-bold" placeholder="(65) 9..." />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Bairro / Cidade</label>
                  <input required name="localizacao" value={formData.localizacao} onChange={handleInputChange} className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 focus:border-blue-500 outline-none transition-all font-bold" placeholder="Ex: Santa Rosa" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Tipo de Ar</label>
                  <select name="tipoAr" value={formData.tipoAr} onChange={handleInputChange} className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 focus:border-blue-500 outline-none transition-all font-bold appearance-none">
                    {Object.values(ACType).map(v => <option key={v} value={v}>{v}</option>)}
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Quantidade</label>
                  <input type="number" name="quantidade" value={formData.quantidade} onChange={handleInputChange} className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 focus:border-blue-500 outline-none transition-all font-bold" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Qual o problema?</label>
                <textarea required name="problema" value={formData.problema} onChange={handleInputChange} rows={3} className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 focus:border-blue-500 outline-none transition-all font-bold resize-none" placeholder="Ex: Não está gelando, barulho estranho, mau cheiro..."></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-xl uppercase tracking-tighter hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 flex items-center justify-center gap-3 active:scale-95">
                ENVIAR AGORA <ArrowRight size={22} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Image Zoom */}
      {selectedImage && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-900/95 p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-10 right-10 text-white bg-white/10 p-4 rounded-full"><X size={32} /></button>
          <img src={selectedImage} className="max-w-full max-h-[85vh] rounded-[2rem] shadow-2xl border-4 border-white/20" alt="Zoom" />
        </div>
      )}
    </div>
  );
};

export default App;
