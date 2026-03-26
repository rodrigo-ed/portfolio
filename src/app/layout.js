import '../styles/globals.css';

export const metadata = {
  title: 'Rtech | Suporte e Sites',
  description: 'Portfólio de desenvolvedor de sites e suporte técnico em Barreiros -PE e Região.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <link rel="icon" href="/logo-rtech.png" />
      <head>
        {/* Script de inicialização do tema — evita flash de tema errado */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var prefer = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  document.documentElement.setAttribute('data-theme', saved || prefer);
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}