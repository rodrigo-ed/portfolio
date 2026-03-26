'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section id="sobre" className="py-24" style={{ background: 'var(--bg)' }}>
      <div className="max-w-container mx-auto px-6">

        {/* ── Grid principal: conteúdo | foto ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 items-start">

          {/* ── Coluna esquerda: texto + skills ── */}
          <div>
            <span className="section-label">Sobre mim</span>

            <h2
              className="font-syne font-bold tracking-[-0.02em] mb-4 leading-[1.15]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-primary)' }}
            >
              Sites que elevarão seu negócio. Suporte técnico que você pode confiar.
            </h2>

            <p className="leading-[1.8] mb-4" style={{ color: 'var(--text-secondary)', fontSize: '1.02rem' }}>
              Sou Rodrigo, estudante de Análise e Desenvolvimento de Sistemas. Desde criança, procurei entender como os computadores funcionam e, a partir daí,
              comecei a me interessar por tecnologia. No ensino médio, sem nenhum conhecimento prévio, desbroquei um notebook antigo e consegui fazê-lo funcionar.
              Foi nesse momento que percebi que queria aprender mais sobre o assunto. Hoje, com experiência em desenvolvimento web e suporte técnico (voltado para softwares),
              estou criando a Rtech, que une a criação de sites para negócios locais ao suporte técnico de qualidade — tudo com um toque pessoal e atenção aos detalhes.
            </p>
            <p className="leading-[1.8] mb-7" style={{ color: 'var(--text-secondary)', fontSize: '1.02rem' }}>
              Acredito que um bom site é aquele que atrai, engaja e converte em clientes. Também defendo que suporte técnico de qualidade é essencial para manter tudo funcionando perfeitamente.</p>
            <a href="#contato" className="btn-primary mb-12 w-fit">
              Vamos conversar
            </a>
          </div>

          {/* ── Coluna direita: foto ── */}
          <div className="lg:sticky lg:top-24 flex flex-col items-center gap-4">

            {/* Placeholder da foto — substitua pelo seu <img> ou <Image /> */}
            <div
              className="relative w-full rounded-2xl overflow-hidden flex flex-col items-center justify-center gap-4 transition-all duration-300 group cursor-pointer"
              style={{
                aspectRatio: '3/4',
                maxWidth: '320px',
                border: '2px dashed var(--border-strong)',
                background: 'var(--bg-card)',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#1a6bff'; e.currentTarget.style.boxShadow = '0 0 40px rgba(61,127,255,0.15)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              {/* Ícone de pessoa */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-1"
                style={{ background: 'var(--tag-bg)' }}
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1a6bff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>

              {/*Foto de perfil*/}
              <Image
                src="/photo-perfil.jpeg"
                alt="Foto de perfil de Rodrigo Eduardo"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 320px"
              />

              {/* Cantos decorativos */}
              <span className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-blue-500 rounded-tl-sm opacity-50" />
              <span className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-blue-500 rounded-tr-sm opacity-50" />
              <span className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-blue-500 rounded-bl-sm opacity-50" />
              <span className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-blue-500 rounded-br-sm opacity-50" />
            </div>

            {/* Nome e cargo abaixo da foto */}
            <div className="text-center">
              <p className="font-syne font-bold text-base" style={{ color: 'var(--text-primary)' }}>
                Rodrigo Eduardo De Almeida
              </p>
              <p className="text-sm mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                Desenvolvedor Web & Suporte Técnico
              </p>
            </div>

            {/* Badge de localização */}
            <div
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-mono text-[0.7rem] font-medium"
              style={{ background: 'var(--tag-bg)', color: 'var(--tag-color)' }}
            >
              Barreiros — PE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}