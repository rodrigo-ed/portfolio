'use client';

const SERVICES = [
  {
    icon: '⚡',
    title: 'Desenvolvimento Web',
    description: 'Aplicações web modernas para elevar o seu negócio.',
  },
  {
    icon: '🛠️',
    title: 'Revisão Técnica no seu computador',
    description: 'Formatção, limpeza e otimização do seu sistema.',
  },
];

const PROJECTS = [
  {
    title: 'Cadastro de usuários',
    description: 'Este projeto é uma aplicação web desenvolvida para simular um sistema de cadastro de clientes. Ele demonstra a criação de uma API RESTful completa (CRUD) integrada a um front-end responsivo.',
    tags: ['HTML5', 'Bootstrap', 'JavaScript', 'Node.js', 'Express', 'PostgreSQL'],
    status: 'Produção',
    accent: '#1a6bff',
    link: 'Funcionando localmente!',
    repo: 'https://github.com/rodrigo-ed/Cadastro-de-usuario',
  },
  {
    title: 'Dashboard',
    description: 'Este é um projeto de dashboard completo construído com Next.js, seguindo o curso oficial "Learn Next.js" da Vercel.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Vercel', 'TypeScript'],
    status: 'Produção',
    accent: '#0055e6',
    link: 'https://nextjs-dashboard-rho-ochre-65.vercel.app/',
    repo: 'https://github.com/rodrigo-ed/nextjs-dashboard',
  },
  {
    title: 'Meu portfólio',
    description: 'Este projeto é o próprio portfólio que você está visualizando, desenvolvido com Next.js e Tailwind CSS. Ele serve como uma vitrine dos meus serviços e projetos, demonstrando minhas habilidades em desenvolvimento web e design responsivo.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    status: 'Produção',
    accent: '#3d7fff',
    link: '#',
    repo: 'https://github.com/rodrigo-ed/my-portfolio'
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24" style={{ background: 'var(--bg-card-2)' }}>
      <div className="max-w-container mx-auto px-6">

        {/* ── Header: Serviços ── */}
        <div className="flex justify-between items-end gap-8 flex-wrap mb-12">
          <div>
            <span className="section-label">Serviços</span>
            <h2
              className="font-syne font-bold tracking-[-0.02em] leading-[1.15]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-primary)' }}
            >
              O que eu faço
            </h2>
          </div>
          <p className="text-[1.05rem] leading-[1.7] max-w-[520px]" style={{ color: 'var(--text-secondary)' }}>
            Do planejamento ao lançamento — entrego soluções completas com
            qualidade e prazo cumprido.
          </p>
        </div>

        {/* ── Grid de Serviços ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {SERVICES.map(({ icon, title, description }) => (
            <div key={title} className="card-base !p-7 cursor-default">
              <span className="text-[1.8rem] mb-4 block">{icon}</span>
              <h3 className="font-syne text-[1.05rem] font-bold mb-2.5" style={{ color: 'var(--text-primary)' }}>
                {title}
              </h3>
              <p className="text-sm leading-[1.7]" style={{ color: 'var(--text-secondary)' }}>
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* ── Header: Projetos ── ─ */}
        <div className="mb-8">
          <span className="section-label">Projetos</span>
          <h2
            className="font-syne font-bold tracking-[-0.02em] leading-[1.15]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-primary)' }}
          >
            Trabalhos em destaque
          </h2>
        </div>

        {/* ── Grid de Projetos ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECTS.map(({ title, description, tags, status, accent, link, repo }) => (
            <div
              key={title}
              className="rounded-2xl overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(61,127,255,0.15)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              {/* Barra de cor no topo */}
              <div className="h-1 w-full flex-shrink-0" style={{ background: accent }} />

              <div className="p-6 flex flex-col flex-1">
                {/* Status badge */}
                <span
                  className="self-start inline-block px-2.5 py-0.5 rounded-full font-mono text-[0.7rem] font-medium mb-3"
                  style={{
                    color: accent,
                    background: `${accent}14`,
                    border: `1px solid ${accent}40`,
                  }}
                >
                  {status}
                </span>

                <h3 className="font-syne text-[1.2rem] font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {title}
                </h3>

                <p className="text-sm leading-[1.7] flex-1 mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {tags.map(t => <span key={t} className="chip">{t}</span>)}
                </div>

                {/* Ações */}
                <div
                  className="flex gap-2.5 pt-4"
                  style={{ borderTop: '1px solid var(--border)' }}
                >
                  <a
                    href={link}
                    className="btn-primary !px-4 !py-2 !text-[0.82rem] gap-1.5"
                  >
                    Ver projeto
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                  <a href={repo} className="btn-outline !px-4 !py-2 !text-[0.82rem]">
                    Repositório
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}