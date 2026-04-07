'use client';

import { useState, useEffect, useCallback } from 'react';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#contato', label: 'Contato' },
];

export default function Navbar() {
  const [theme, setTheme] = useState('dark');
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(saved);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const ids = NAV_LINKS.map(l => l.href.slice(1));
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive('#' + ids[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  }, [theme]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300"
      style={{
        background: 'var(--nav-bg)',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
      }}
    >
      <div className="max-w-container mx-auto px-6 flex items-center justify-between h-[68px]">

        {/* Logo */}
        <a href="#home" className="font-mono text-[1.15rem] font-medium transition-opacity hover:opacity-75"
          style={{ color: 'var(--text-primary)' }}>
          <span className="text-blue-500">R</span><span>rodrigositeesuporte</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex list-none gap-1">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="block px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200"
                style={{
                  color: active === href ? '#1a6bff' : 'var(--text-secondary)',
                  background: active === href ? 'var(--tag-bg)' : 'transparent',
                }}
                onMouseEnter={e => { if (active !== href) e.currentTarget.style.background = 'var(--bg-card-2)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
                onMouseLeave={e => { if (active !== href) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-secondary)'; } }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={toggleTheme}
            aria-label="Alternar tema"
            className="w-[38px] h-[38px] rounded-lg flex items-center justify-center text-base hover:scale-105 transition-all duration-200"
            style={{ border: '1px solid var(--border)', background: 'var(--bg-card)' }}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          <a href="#contato" className="hidden md:inline-flex btn-primary !py-2 !px-5 !text-[0.85rem]">
            Contato
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Menu"
            className="md:hidden w-[38px] h-[38px] rounded-lg flex flex-col justify-center gap-[5px] px-[9px]"
            style={{ border: '1px solid var(--border)', background: 'var(--bg-card)' }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block h-[1.5px] rounded transition-all duration-300 origin-center"
                style={{
                  background: 'var(--text-primary)',
                  transform: menuOpen
                    ? i === 0 ? 'translateY(6.5px) rotate(45deg)'
                      : i === 2 ? 'translateY(-6.5px) rotate(-45deg)'
                        : 'none'
                    : 'none',
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className="md:hidden flex flex-col gap-1 overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? '400px' : '0',
          opacity: menuOpen ? 1 : 0,
          padding: menuOpen ? '16px 24px 24px' : '0 24px',
          borderTop: menuOpen ? '1px solid var(--border)' : 'none',
        }}
      >
        {NAV_LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            onClick={() => setMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200"
            style={{
              color: active === href ? '#1a6bff' : 'var(--text-secondary)',
              background: active === href ? 'var(--tag-bg)' : 'transparent',
            }}
          >
            {label}
          </a>
        ))}
        <a href="#contato" onClick={() => setMenuOpen(false)} className="btn-primary mt-2 justify-center">
          Contato
        </a>
      </div>
    </nav>
  );
}