// Dados dos projetos

const projetos = [
    {
        img: 'assets/photo-app-nextjs.png',
        titulo: 'Dashboard App Next.js',
        desc: 'Dashboard com Next.js 14 e TypeScript, com autenticação, CRUD de faturas, validação, busca otimizada e interface responsiva. Integração com PostgreSQL e uso de Server Actions para segurança e performance.',
        github: 'https://github.com/rodrigo-ed/nextjs-dashboard',
        deploy: 'https://nextjs-dashboard-rho-ochre-65.vercel.app/dashboard'
    },
    {
        img: 'assets/photo-ad-python.png',
        titulo: 'Análise de Dados com Python',
        desc: 'Dashboard interativo com Streamlit para análise de salários na área de dados. Utiliza dados reais e oferece filtros por cargo, senioridade, contrato e país. Inclui gráficos com Plotly, métricas principais e visualizações detalhadas por função e localização.',
        github: 'https://github.com/rodrigo-ed/imersao-dados-python',
        deploy: 'https://imersao-dado-py.streamlit.app/'
    },
    {
        img: 'assets/photo-finabot.png',
        titulo: 'Chatbot IA + Python',
        desc: 'FinanBot é um assistente virtual para educação financeira, criado com Python, Flask e IA generativa. Ajuda usuários a organizar finanças, aprender sobre o tema e alcançar metas de forma prática e interativa.',
        github: 'https://github.com/rodrigo-ed/chatbot-ia',
        deploy: '/'
    }
];

// Função para renderizar os cards

function renderCards(cards) {
    const container = document.querySelector('.cards-container');
    container.innerHTML = '';
    cards.forEach(proj => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
    <img src="${proj.img}" alt="${proj.titulo}">
    <div class="card-content">
        <div>
            <div class="card-title">${proj.titulo}</div>
            <div class="card-desc">${proj.desc}</div>
        </div>
        <div class="card-buttons">
            <a href="${proj.github}" target="_blank">GitHub</a>
            <a href="${proj.deploy}" target="_blank" class="deploy"${proj.deploy === '/' ? ' onclick="alert(\'Deploy não disponível para este projeto.\'); return false;"' : ''}>Deploy</a>
        </div>
    </div>
`;
        container.appendChild(card);

        // Após criar o card, adicione o evento via JS:
        if (proj.deploy === '/') {
            const deployBtn = card.querySelector('.deploy');
            deployBtn.addEventListener('click', function(e) {
                e.preventDefault();
                alert('Deploy não disponível para este projeto. Só funciona localmente');
            });
        }
    });
}



// Loop automático para telas menores
let currentIndex = 0;
function autoLoopCards() {
    if (window.innerWidth <= 900) {
        renderCards([projetos[currentIndex]]);
        currentIndex = (currentIndex + 1) % projetos.length;
    } else {
        renderCards(projetos);
    }
}
window.addEventListener('resize', autoLoopCards);
setInterval(autoLoopCards, 3000);
document.addEventListener('DOMContentLoaded', autoLoopCards);


// Formulário WhatsApp
document.addEventListener('DOMContentLoaded', function () {
    autoLoopCards();

    const form = document.getElementById('whatsappForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const nome = document.getElementById('nome').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();
            const numero = '5581991246738';
            const texto = encodeURIComponent(`Olá, meu nome é ${nome}. ${mensagem}`);
            window.open(`https://wa.me/${numero}?text=${texto}`, '_blank');
        });
    }
});

// Para baixar currículo
function baixarCurriculo() {
    window.open('assets/curriculo/curriculo-rodrigoeduardo.pdf', '_blank');
}

// Menu responsivo
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbarList = document.querySelector('.navbar-list');

    if (menuToggle && navbarList) {
        menuToggle.addEventListener('click', function () {
            const isOpen = navbarList.classList.toggle('open');
            menuToggle.setAttribute('aria-expanded', isOpen);
        });
    }

});
