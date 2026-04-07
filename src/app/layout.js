import '../styles/globals.css';

export const metadata = {
  // Títulos e Descrições
  title: 'Rtech | Desenvolvimento de Sites e Suporte Técnico em Barreiros',
  description: 'Portfólio de desenvolvedor web e suporte técnico em Barreiros - PE e Região. Desenvolvimento de sites profissionais e soluções de TI para negócios locais.',

  // Keywords para SEO
  keywords: ['desenvolvimento web', 'sites profissionais', 'suporte técnico', 'Barreiros PE', 'desenvolvedor', 
    'portfolio', 'análise de sistemas', 'tecnologia', 'soluções de TI', 'inovação', 'Tamandaré', 'Palmares', 'São José da Coroa Grande', 
    'Maragogi', 'sites para psicólogos', 'sites para advogados', 'sites para restaurantes', 'sites para lojas virtuais', 'sites para profissionais de saúde',],

  // Autor e Criador
  creator: 'Rodrigo',
  author: {
    name: 'Rodrigo',
    url: 'https://rodrigositeesuporte.com.br/',
  },
  // Charset e Viewport para responsividade
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',

  // Robots
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <link rel="icon" href="/logo-profissional.png" />
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