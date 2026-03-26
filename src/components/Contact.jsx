'use client';

import { useState } from 'react';

const SOCIAL = [
  { label: 'GitHub', href: 'https://github.com/rodrigo-ed', abbr: 'GH' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rodrigoalmeidaads/', abbr: 'LI' },
  { label: 'Instagram', href: 'https://www.instagram.com/rtech.tech/', abbr: 'IT' },
];

const CONTACT_INFO = [
  { icon: '✉️', label: 'Email', value: 'eduardorodrigoalmeida18@gmail.com', href: 'mailto:eduardorodrigoalmeida18@gmail.com' },
  { icon: '📱', label: 'WhatsApp', value: '+55 (81) 9 9124-6738', href: 'https://wa.me/5581991246738' },
  { icon: '📍', label: 'Localização', value: 'Barreiros — PE', href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  /* ── Substitua pela sua lógica real de envio (Resend, EmailJS, etc.) ── */
  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');

    try {
      const { name, email, message } = form;

      const text =
        `Olá! Recebi uma nova mensagem do formulário:

Nome: ${name}
Email: ${email}
Mensagem: ${message}`;

      const phone = "5581991246738";

      const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

      window.open(url, "_blank");

      setStatus('sent');
    } catch (err) {
      setStatus('idle');
    }
  };

  return (
    <section id="contato" className="py-24" style={{ background: 'var(--bg)' }}>
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">

          {/* ── Info lateral ── */}
          <div>
            <span className="section-label">Contato</span>

            <h2
              className="font-syne font-bold tracking-[-0.02em] leading-[1.15] mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-primary)' }}
            >
              Vamos trabalhar juntos?
            </h2>

            <p className="text-[1.02rem] leading-[1.8] mb-9" style={{ color: 'var(--text-secondary)' }}>
              Estou aberto a novos projetos, parcerias e oportunidades. Me envie
              uma mensagem e responderei em até 24 horas.
            </p>

            {/* Informações de contato */}
            <div className="flex flex-col gap-3 mb-8">
              {CONTACT_INFO.map(({ icon, label, value, href }) => {
                const Tag = href ? 'a' : 'div';
                return (
                  <Tag
                    key={label}
                    href={href || undefined}
                    className="flex items-center gap-3.5 px-4 py-3.5 rounded-xl transition-all duration-200"
                    style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; }}
                  >
                    <div
                      className="w-10 h-10 rounded-[10px] flex items-center justify-center text-xl flex-shrink-0"
                      style={{ background: 'var(--tag-bg)' }}
                    >
                      {icon}
                    </div>
                    <div>
                      <span
                        className="block font-mono text-[0.68rem] uppercase tracking-[0.08em] mb-0.5"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        {label}
                      </span>
                      <span className="block text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                        {value}
                      </span>
                    </div>
                  </Tag>
                );
              })}
            </div>

            {/* Redes sociais */}
            <div className="flex gap-2.5 flex-wrap">
              {SOCIAL.map(({ label, href, abbr }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    border: '1px solid var(--border)',
                    background: 'var(--bg-card)',
                    color: 'var(--text-secondary)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.color = '#1a6bff'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                >
                  <span
                    className="font-mono text-[0.7rem] font-medium px-1.5 py-0.5 rounded"
                    style={{ background: 'var(--tag-bg)', color: 'var(--tag-color)' }}
                  >
                    {abbr}
                  </span>
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* ── Formulário ── */}
          <div
            className="rounded-2xl p-9"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
          >
            {status === 'sent' ? (
              /* ── Estado de sucesso ── */
              <div className="flex flex-col items-center text-center gap-3 py-6">
                <div className="text-[2.5rem] animate-[fadeUp_0.4s_ease]">✅</div>
                <h3 className="font-syne text-[1.4rem] font-bold" style={{ color: 'var(--text-primary)' }}>
                  Mensagem enviada!
                </h3>
                <p className="mb-3" style={{ color: 'var(--text-secondary)' }}>
                  Obrigado pelo contato. Responderei em breve.
                </p>
                <button
                  className="btn-outline"
                  onClick={() => { setStatus('idle'); setForm({ name: '', email: '', message: '' }); }}
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              /* ── Formulário principal ── */
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <h3 className="font-syne text-[1.3rem] font-bold" style={{ color: 'var(--text-primary)' }}>
                  Envie uma mensagem
                </h3>

                {/* Nome + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>
                      Nome *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Mensagem */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>
                    Mensagem *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Conte um pouco sobre o seu projeto..."
                    required
                    rows={6}
                    className="form-input resize-y min-h-[130px] leading-relaxed"
                  />
                </div>

                {/* Botão de envio */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary justify-center !py-3.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {status === 'sending' ? (
                    <>
                      <span
                        className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin flex-shrink-0"
                      />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar mensagem
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}