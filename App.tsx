
import React, { useState } from 'react';
import { BOOKS, BONUS_BOOK, TESTIMONIALS, FAQS, KIWIFY_LINK, BONUS_LINK } from './constants';
import BookCard from './components/BookCard';
import CTAButton from './components/CTAButton';
import CountdownTimer from './components/CountdownTimer';
import { getPersonalizedRecommendation } from './services/geminiService';

const App: React.FC = () => {
  const [mood, setMood] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRecommendation = async () => {
    if (!mood) return;
    setIsLoading(true);
    const result = await getPersonalizedRecommendation(mood);
    setRecommendation(result || "");
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#FDFBF7]/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold text-[#3E5C54] tracking-tight">ZEN MASTER <span className="text-[#E8C5AF]">.</span></div>
          <CTAButton text="Garantir Acesso" className="hidden md:block !py-2 !px-6 !text-xs" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-24 md:pb-32 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#E8C5AF]/20 rounded-full blur-3xl"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="mb-8 flex flex-col items-center">
            <span className="inline-block px-4 py-1.5 bg-red-100 text-red-600 rounded-full text-xs font-bold tracking-widest mb-4">
              OFERTA RELÂMPAGO: TERMINA EM
            </span>
            <CountdownTimer />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-[#3E5C54] mb-8 leading-[1.1]">
            Domine sua Mente e <br />
            <span className="text-stone-400 italic font-normal">Recupere sua Liberdade.</span>
          </h1>
          <p className="text-lg text-stone-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Tenha acesso imediato à coleção completa de 5 bestsellers que ensinam você a sair do piloto automático e viver com presença real.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton text="QUERO O BUNDLE COMPLETO - R$ 47" />
          </div>
        </div>
      </section>

      {/* Books Showcase */}
      <section id="books" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E5C54] mb-4">Os 5 Pilares da sua Transformação</h2>
            <p className="text-stone-500 max-w-xl mx-auto">Cada livro foca em um aspecto fundamental da sua jornada rumo à paz interior.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BOOKS.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      {/* SPECIAL BONUS SECTION - New Part */}
      <section className="py-24 bg-[#3E5C54] text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <img src="https://picsum.photos/seed/texture/1920/1080" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#E8C5AF]/20 rounded-3xl blur-xl group-hover:bg-[#E8C5AF]/30 transition-all"></div>
              <img 
                src={BONUS_BOOK.image} 
                alt={BONUS_BOOK.title} 
                className="rounded-2xl shadow-2xl relative z-10 w-full max-w-sm mx-auto transform hover:rotate-2 transition-transform duration-500" 
              />
              <div className="absolute -bottom-6 -right-6 bg-[#E8C5AF] text-[#3E5C54] p-6 rounded-2xl shadow-xl z-20 hidden md:block">
                <p className="text-sm font-black uppercase tracking-tighter">Oferta Adicional</p>
                <p className="text-2xl font-bold">Tao & Zen</p>
              </div>
            </div>
            <div className="space-y-6">
              <span className="text-[#E8C5AF] font-bold tracking-widest text-sm uppercase">Conteúdo Exclusivo (Adicional)</span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">{BONUS_BOOK.title}</h2>
              <p className="text-xl text-stone-300 italic">{BONUS_BOOK.subtitle}</p>
              <p className="text-stone-300 leading-relaxed text-lg">
                Explore o conceito de Wu Wei (agir sem forçar) e descubra como o Tai Chi e o Qi Gong podem ser portais para a consciência através do corpo.
              </p>
              <ul className="space-y-4 mb-8">
                {["Filosofia Taoísta Aplicada", "Técnicas de Qi Gong para Energia", "Wu Wei: A Arte da Não-Ação"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#E8C5AF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={BONUS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-5 bg-[#E8C5AF] text-[#3E5C54] font-bold rounded-full shadow-2xl hover:scale-105 transition-transform"
              >
                QUERO ADQUIRIR ESTE BÔNUS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AI Recommendation */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-stone-100">
            <h2 className="text-3xl font-bold text-[#3E5C54] mb-4 text-center">Por onde devo começar?</h2>
            <p className="text-center text-stone-600 mb-8">Diga ao nosso Mentor AI como está sua mente hoje e ele recomendará o livro ideal para o seu momento.</p>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <input 
                type="text" 
                placeholder="Ex: Estou me sentindo perdido e sem rumo..." 
                className="flex-1 px-6 py-4 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#3E5C54]/20"
                value={mood}
                onChange={(e) => setMood(e.target.value)}
              />
              <button 
                onClick={handleRecommendation}
                disabled={isLoading || !mood}
                className="px-8 py-4 bg-[#3E5C54] text-white font-bold rounded-xl hover:bg-[#2A413B] disabled:opacity-50"
              >
                {isLoading ? 'Analisando...' : 'Obter Guia'}
              </button>
            </div>
            {recommendation && (
              <div className="bg-[#FDFBF7] p-6 rounded-2xl border-l-4 border-[#E8C5AF]">
                <p className="text-[#3E5C54] italic">"{recommendation}"</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pricing / Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-[#3E5C54] text-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Sua Jornada Começa Hoje</h2>
            <p className="text-xl text-stone-400 mb-10">O preço promocional de R$ 47,00 expira em breve.</p>
            <div className="mb-12">
              <div className="text-6xl font-black text-[#E8C5AF] mb-2">R$ 47,00</div>
              <p className="text-sm uppercase tracking-widest opacity-60">Acesso Vitalício aos 5 E-books Bestsellers</p>
            </div>
            <CTAButton className="!bg-[#E8C5AF] !text-[#3E5C54] !px-12 !py-6 !text-lg" text="QUERO MEU ACESSO AGORA" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-stone-50 py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#3E5C54] text-center mb-12">Dúvidas Frequentes</h2>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <details key={idx} className="group border border-stone-200 rounded-2xl bg-white overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-[#3E5C54]">
                  {faq.question}
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="p-6 text-stone-600 leading-relaxed border-t border-stone-100">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D3436] text-white/50 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-xs">
          <p className="mb-4">© 2024 Zen Master Coleções. Todos os direitos reservados.</p>
          <p className="max-w-md mx-auto italic leading-relaxed">
            As informações contidas neste material não substituem acompanhamento médico ou psiquiátrico profissional.
          </p>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
        <CTAButton className="w-full shadow-2xl !bg-[#E8C5AF] !text-[#3E5C54]" text="COMPRAR BUNDLE POR R$ 47" />
      </div>
    </div>
  );
};

export default App;
