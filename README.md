# 🚀 Dev Portfolio — Next.js

Protótipo rápido de portfólio com tema claro/escuro, design responsivo e integração básica de contato.

## ⚡ Uso

1. npm install
2. npm run dev
3. http://localhost:3000

## 📁 Estrutura

- `src/app/layout.js` + `page.js`
- `src/components/[Navbar,Hero,About,Services,Contact,Footer].jsx`
- `src/styles/globals.css`

## ✏️ Customização

- Trocar texto e links em `Hero.jsx`, `About.jsx`, `Services.jsx` e `Contact.jsx`
- Ajustar cores em `src/styles/globals.css` (variáveis CSS)
- Substituir envio de formulário em `Contact.jsx` pela sua API (Resend, EmailJS, etc.)

## 🛠️ Tech

- Next.js 14 (App Router)
- React 18
- Tailwind CSS v3
- Google Fonts: Syne, DM Mono, Instrument Sans

## 📱 Padrões atendidos

- Desktop, tablet e mobile
- Tema persiste em `localStorage`
- CSS customizável com variáveis