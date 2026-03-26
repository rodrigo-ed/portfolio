export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-7"
      style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-card)' }}
    >
      <div className="max-w-container mx-auto px-6 flex items-center justify-between gap-4 flex-wrap">

        <div className="font-mono text-sm" style={{ color: 'var(--text-secondary)' }}>
          <span className="text-blue-500">R</span><span>Tech</span>
        </div>

        <p className="text-[0.85rem]" style={{ color: 'var(--text-muted)' }}>
          © {year} — Desenvolvido por Rodrigo Eduardo De Almeida. Todos os direitos reservados.
        </p>
        <a
          href="#home"
          className="font-mono text-[0.8rem] font-medium text-blue-500 hover:opacity-70 transition-opacity"
        >
          ↑ Topo
        </a>
      </div>
    </footer>
  );
}