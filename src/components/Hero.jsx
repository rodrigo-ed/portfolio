'use client';

import { useEffect, useState } from 'react';

const TYPED_WORDS = ['web', 'suporte', 'sites', 'tecnologia', 'soluções', 'inovação'];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  /* ── Efeito de digitação ── */
  useEffect(() => {
    const word = TYPED_WORDS[wordIndex];
    let timeout;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else {
      setDeleting(false);
      setWordIndex(i => (i + 1) % TYPED_WORDS.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">

      {/* Orb superior direito */}
      <div
        className="absolute -top-52 -right-52 w-[700px] h-[700px] rounded-full pointer-events-none animate-float-slow"
        style={{ background: 'radial-gradient(circle, rgba(26,107,255,0.15) 0%, transparent 65%)' }}
      />
      {/* Orb inferior esquerdo */}
      <div
        className="absolute -bottom-72 -left-36 w-[600px] h-[600px] rounded-full pointer-events-none animate-float-slower"
        style={{ background: 'radial-gradient(circle, rgba(61,127,255,0.08) 0%, transparent 65%)' }}
      />

      {/* Grid de fundo */}
      <div className="absolute inset-0 hero-grid opacity-40 pointer-events-none" />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-container mx-auto px-6 pt-28 pb-16 w-full">

        {/* Badge de disponibilidade */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-mono text-xs font-medium mb-7 animate-[fadeUp_0.5s_ease_both]"
          style={{ border: '1px solid var(--border-strong)', background: 'var(--tag-bg)', color: 'var(--tag-color)' }}
        >
          <span className="relative w-[7px] h-[7px] flex-shrink-0">
            <span className="absolute inset-0 rounded-full bg-green-500" />
            <span className="absolute inset-[-3px] rounded-full bg-green-500/30 animate-pulse-ring" />
          </span>
          Disponível para projetos
        </div>

        {/* Título principal */}
        <h1
          className="font-syne font-extrabold leading-[1.05] tracking-[-0.03em] mb-6 animate-[fadeUp_0.5s_ease_0.1s_both]"
          style={{ fontSize: 'clamp(1.5rem, 5.5vw, 4.5rem)', color: 'var(--text-primary)' }}
        >
          Desenvolvedor
          <br />
          <span className="inline-block min-w-[2ch] text-blue-500">
            {displayed}
            <span className="inline-block w-1 h-[0.85em] bg-blue-500 rounded-sm ml-1 align-[-0.05em] animate-blink" />
          </span>
        </h1>

        {/* Subtítulo */}
        <p
          className="text-lg leading-[1.75] max-w-[540px] mb-9 animate-[fadeUp_0.5s_ease_0.2s_both]"
          style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}
        >
          Transformo ideias em experiências digitais incríveis.
          De sites a suporte técnico, estou aqui para levar seu projeto ao próximo nível.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 mb-14 animate-[fadeUp_0.5s_ease_0.3s_both]">
          <a href="#servicos" className="btn-primary">
            Ver projetos
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#sobre" className="btn-outline">
            Sobre mim
          </a>
        </div>
      </div>

      {/* Indicador de scroll */}
      <a
        href="#sobre"
        aria-label="Rolar para baixo"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-7 h-11 rounded-[14px] flex justify-center pt-1.5 animate-[fadeUp_0.5s_ease_0.6s_both]"
        style={{ border: '2px solid var(--border-strong)' }}
      >
        <span className="w-1 h-2 bg-blue-500 rounded-sm animate-float" />
      </a>
    </section>
  );
}