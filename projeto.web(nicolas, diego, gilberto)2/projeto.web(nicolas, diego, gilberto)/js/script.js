// ===== DADOS DO CATÁLOGO =====
const catalogo = [
    {
        id: 1,
        titulo: "Interestelar",
        categoria: "filmes",
        genero: "Ficção Científica",
        ano: 2014,
        roteiristas: "Jonathan Nolan, Christopher Nolan",
        avaliacao: 8.7,
        descricao: "Uma equipe de exploradores viaja através de um buraco de minhoca no espaço.",
        favorito: false
    },
    {
        id: 2,
        titulo: "Um Sonho de Liberdade",
        categoria: "filmes",
        genero: "Drama",
        ano: 1949,
        roteiristas: "Stephen King, Frank Darabont",
        avaliacao: 9.3,
        descricao: "Dois homens presos se reúnem ao longo de vários anos, encontrando consolo e eventual redenção através de atos de decência comum.",
        favorito: true
    },
    {
        id: 3,
        titulo: "Gênio Indomável",
        categoria: "filmes",
        genero: "Drama, Romance",
        ano: 1997,
        roteiristas: "Matt Damon, Ben Affleck",
        avaliacao: 8.3,
        descricao: "Will Hunting, um zelador de uma universidade, tem habilidades para a matemática, mas precisa da ajuda de um psicólogo para encontrar seu propósito.",
        favorito: false
    },
    {
        id: 4,
        titulo: "O Poderoso Chefão",
        categoria: "filmes",
        genero: "Policial, Drama",
        ano: 1972,
        roteiristas: "Mario Puzo, Francis Ford Coppola",
        avaliacao: 9.2,
        descricao: "O patriarca idoso de uma dinastia do crime organizado transfere o controle de seu império clandestino para seu filho relutante.",
        favorito: true
    },
    {
        id: 5,
        titulo: "Matrix",
        categoria: "filmes",
        genero: "Ação, Ficção Científica",
        ano: 1999,
        roteiristas: "Lilly Wachowski, Lana Wachouski",
        avaliacao: 8.7,
        descricao: "Um hacker aprende com os misteriosos rebeldes sobre a verdadeira natureza de sua realidade e seu papel na guerra contra seus controladores.",
        favorito: false
    },
    {
        id: 6,
        titulo: "O Iluminado",
        categoria: "filmes",
        genero: "Drama, Terror",
        ano: 1980,
        roteiristas: "Stephen King, Stanley Kubrick, Diane Johnson",
        avaliacao: 8.4,
        descricao: "Hino pacifista que se tornou um clássico atemporal.",
        favorito: true
    },
    {
        id: 7,
        titulo: "A Origem",
        categoria: "filmes",
        genero: "Ação, Aventura, Ficção Científica, Suspense",
        ano: 2010,
        roteiristas: "Christopher Nolan",
        avaliacao: 8.8,
        descricao: "Um ladrão que rouba segredos corporativos através da tecnologia de entrar no subconsciente recebe a tarefa inversa de plantar uma idéia na mente do diretor de uma grande empresa.",
        favorito: false
    },
    {
        id: 8,
        titulo: "O Lobo de Wall Street",
        categoria: "filmes",
        genero: "Biografia, Comédia, Policial, Drama",
        ano: 2013,
        roteiristas: "Terence Winter, Jordan Belfort",
        avaliacao: 8.2,
        descricao: "Baseada na verdadeira história de Jordan Belfort, desde sua ascensão como corretor de valores até a sua queda e envolvimento no crime e corrupção com o governo.",
        favorito: true
    },
    {
        id: 9,
        titulo: "Oldboy",
        categoria: "filmes",
        genero: "Ação, Drama, Mistério, Suspense",
        ano: 2003,
        roteiristas: "Garon Tsuchiya, Nobuaki Minegishi, Park Chan-Wook",
        avaliacao: 8.3,
        descricao: "Depois de ter sido raptado e preso por quinze anos, Oh Dae-Su é libertado, e descobre que tem 5 dias para encontrar seu sequestrador.",
        favorito: true
    },
    {
        id: 10,
        titulo: "Halloween - A Noite do Terror",
        categoria: "filmes",
        genero: "Terror, Suspense",
        ano: 1978,
        roteiristas: "John Carpenter, Debra Hill",
        avaliacao: 7.7,
        descricao: "Quinze anos depois de assassinar sua irmã na noite de Halloween em 1963, Michael Myers escapa do hospício e retorna para a pequena cidade de Haddonfield para matar novamente.",
        favorito: true
    },
    {
        id: 11,
        titulo: "Dr. House",
        categoria: "series",
        genero: "Drama",
        ano: 2004,
        criacao: "David Shore",
        avaliacao: 8.7,
        descricao: "Um médico antisocial faz o que seja para resolver os casos mas difíceis que se encontra com a ajuda do equipe de médicos.",
        favorito: true
    },
    {
        id: 12,
        titulo: "Breaking Bad",
        categoria: "series",
        genero: "Policial, Drama, Suspense",
        ano: 2008,
        criacao: "Vince Gilligan",
        avaliacao: 9.5,
        descricao: "Um professor de química diagnosticado com câncer de pulmão se transforma em fabricante e vendedor de metanfetamina, a fim de garantir o futuro da sua família.",
        favorito: true
    },
    {
        id: 13,
        titulo: "The Walking Dead",
        categoria: "series",
        genero: "Drama, Terror, Suspense",
        ano: 2010,
        criacao: "Frank Darabont",
        avaliacao: 8.1,
        descricao: "Quinze anos depois de assassinar sua irmã na noitUm Xerife acorda de um coma para dar-se conta que o mundo está em ruínas, e deve liderar um grupo de sobreviventes para se manter vivo.",
        favorito: true
    },
    {
        id: 14,
        titulo: "Twin Peaks",
        categoria: "series",
        genero: "Policial, Drama, Mistério, Suspense",
        ano: 1990,
        criacao: "Mark Frost, David Lynch",
        avaliacao: 8.7,
        descricao: "Um agente do FBI pesquisa a morte de uma jovem mulher da cidade de Twin Peaks.",
        favorito: true
    },
    {
        id: 15,
        titulo: "Peaky Blinders",
        categoria: "series",
        genero: "Terror, Suspense",
        ano: 2013,
        criacao: "Steven Knight",
        avaliacao: 8.7,
        descricao: "Depois de servir no Exército, Thomas Shelby e seus irmãos voltam para controlar a cidade, mas, conforme as ambições de Shelby se estendem, ele planeja construir seu próprio negócio e impedir qualquer um que atrapalhe.",
        favorito: true
    },
    {
        id: 16,
        titulo: "Better Call Saul",
        categoria: "series",
        genero: "Policial, Drama",
        ano: 2015,
        criacao: "Vince Gilligan, Peter Gould",
        avaliacao: 9.0,
        descricao: "Os julgamentos e atribulações do advogado criminal, Jimmy McGill, e o estabelecimento de seu escritório de advocacia em Albuquerque, Novo México.",
        favorito: true
    },
    {
        id: 17,
        titulo: "Round 6",
        categoria: "series",
        genero: "Ação, Policial, Drama, Mistério, Suspense",
        ano: 2021,
        criacao: "Hwang Dong-hyuk",
        avaliacao: 8.0,
        descricao: "Centenas de apostadores com dinheiro em caixa aceitam um convite bizarro para competir em jogos infantis. Por dentro, um prêmio tentador espera com um jogo de sobrevivência de alto risco que tem um prêmio de 40 milhões de dólares em jogo.",
        favorito: true
    },
    {
        id: 18,
        titulo: "Sobrenatural",
        categoria: "series",
        genero: "Drama, Fantasia, Terror, Mistério, Suspense",
        ano: 2005,
        criacao: "Eric Kripke",
        avaliacao: 8.4,
        descricao: "Dois irmãos seguem os passos do pai como caçadores, lutando contra aterradores seres sobrenaturais que vagam pela terra.",
        favorito: true
    },
    {
        id: 19,
        titulo: "Dexter",
        categoria: "series",
        genero: "Policial, Drama, Mistério, Suspense",
        ano: 2006,
        criacao: "James Mano Jr.",
        avaliacao: 8.6,
        descricao: "De dia, o gentil Dexter é um analista de sangue para a polícia de Miami. Mas à noite, ele é um assassino en série que só atinge outros assassinos.",
        favorito: true
    },
    {
        id: 20,
        titulo: "Arquivo X",
        categoria: "series",
        genero: "Aventura, Policial, Drama, Mistério, Ficção Científica, Suspense",
        ano: 1993,
        criacao: "Chris Carter",
        avaliacao: 8.6,
        descricao: "Dois agentes do FBI, Fox Mulder, quem acredita e Dana Scully a cética, investigam o insólito e inexplicável.",
        favorito: true
    }
];

// ===== VARIÁVEIS GLOBAIS =====
let itensFavoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
let paginaAtual = 1;
let filtroSomenteFavoritos = false;
const itensPorPagina = 10;

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', function() {
    inicializarTema();
    inicializarBotaoTopo();
    
    // Página específica inicializações
    if (document.querySelector('.grid-destaques')) {
        inicializarFiltros();
        carregarDestaques();
    }
    
    if (document.querySelector('.grid-catalogo')) {
        inicializarFiltrosCatalogo();
        carregarCatalogo();
    }
    
    if (document.getElementById('formContato')) {
        inicializarFormularioContato();
    }
    
    if (document.querySelector('.faq-lista')) {
        inicializarFAQ();
    }
    
    // Atualizar contador de favoritos
    atualizarContadorFavoritos();
});

// ===== TEMA ESCURO/CLARO =====
function inicializarTema() {
    const btnTema = document.querySelector('.btn-tema');
    const temaSalvo = localStorage.getItem('tema');
    
    // Aplicar tema salvo
    if (temaSalvo === 'escuro') {
        document.body.classList.add('modo-escuro');
        atualizarIconeTema();
    }
    
    if (btnTema) {
        btnTema.addEventListener('click', alternarTema);
    }
}

function alternarTema() {
    document.body.classList.toggle('modo-escuro');
    const temaAtual = document.body.classList.contains('modo-escuro') ? 'escuro' : 'claro';
    localStorage.setItem('tema', temaAtual);
    atualizarIconeTema();
}

function atualizarIconeTema() {
    const btnTema = document.querySelector('.btn-tema');
    if (btnTema) {
        const icon = btnTema.querySelector('i');
        if (document.body.classList.contains('modo-escuro')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
}

// ===== BOTÃO VOLTAR AO TOPO =====
function inicializarBotaoTopo() {
    const btnTopo = document.querySelector('.btn-topo');
    
    if (btnTopo) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                btnTopo.style.display = 'flex';
            } else {
                btnTopo.style.display = 'none';
            }
        });
        
        btnTopo.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ===== FILTROS DE DESTAQUES =====
function inicializarFiltros() {
    const filtros = document.querySelectorAll('.filtro-btn');
    
    filtros.forEach(filtro => {
        filtro.addEventListener('click', function() {
            // Remover classe ativo de todos
            filtros.forEach(f => f.classList.remove('ativo'));
            // Adicionar classe ativo ao clicado
            this.classList.add('ativo');
            
            const categoria = this.dataset.categoria;
            filtrarDestaques(categoria);
        });
    });
}

function filtrarDestaques(categoria) {
    const gridDestaques = document.querySelector('.grid-destaques');
    let itensFiltrados;
    
    if (categoria === 'todos') {
        itensFiltrados = catalogo;
    } else {
        itensFiltrados = catalogo.filter(item => item.categoria === categoria);
    }
    
    // Limitar a 6 itens para destaques
    itensFiltrados = itensFiltrados.slice(0, 6);
    
    gridDestaques.innerHTML = '';
    itensFiltrados.forEach(item => {
        gridDestaques.appendChild(criarCardItem(item));
    });
}

function carregarDestaques() {
    const gridDestaques = document.querySelector('.grid-destaques');
    const destaques = catalogo.slice(0, 6); // Primeiros 6 itens
    
    destaques.forEach(item => {
        gridDestaques.appendChild(criarCardItem(item));
    });
}

// ===== CATÁLOGO COMPLETO =====
function inicializarFiltrosCatalogo() {
    const buscaInput = document.getElementById('busca');
    const filtroCategoria = document.getElementById('filtro-categoria');
    const filtroGenero = document.getElementById('filtro-genero');
    const btnLimpar = document.querySelector('.btn-limpar');
    const ordenarSelect = document.getElementById('ordenar');
    const btnFavoritos = document.getElementById('filtro-favoritos');

    if (!buscaInput && !filtroCategoria && !filtroGenero && !ordenarSelect) {
        return;
    }

    if (buscaInput) buscaInput.addEventListener('input', filtrarCatalogo);
    if (filtroCategoria) filtroCategoria.addEventListener('change', filtrarCatalogo);
    if (filtroGenero) filtroGenero.addEventListener('change', filtrarCatalogo);
    if (btnLimpar) btnLimpar.addEventListener('click', () => {
        buscaInput.value = '';
        filtroCategoria.value = 'todos';
        filtroGenero.value = 'todos';
        ordenarSelect.value = 'nome';
        filtrarCatalogo();
    });
    if (ordenarSelect) ordenarSelect.addEventListener('change', filtrarCatalogo);
    if (btnFavoritos) btnFavoritos.addEventListener('click', () => {
        filtroSomenteFavoritos = !filtroSomenteFavoritos;
        btnFavoritos.classList.toggle('ativo');
        filtrarCatalogo();
    });
}
    
    // Paginação
    const btnAnterior = document.querySelector('.btn-pagina.anterior');
    const btnProximo = document.querySelector('.btn-pagina.proximo');
    
    if (btnAnterior && btnProximo) {
        btnAnterior.addEventListener('click', function() {
            if (paginaAtual > 1) {
                paginaAtual--;
                filtrarCatalogo();
            }
        });
        
        btnProximo.addEventListener('click', function() {
            const totalItens = filtrarItensCatalogo().length;
            const totalPaginas = Math.ceil(totalItens / itensPorPagina);
            
            if (paginaAtual < totalPaginas) {
                paginaAtual++;
                filtrarCatalogo();
            }
        });
    }

function filtrarCatalogo() {
    const itensFiltrados = filtrarItensCatalogo();
    const ordenarPor = document.getElementById('ordenar')?.value || 'nome';
    
    // Ordenar itens
    itensFiltrados.sort((a, b) => {
        switch (ordenarPor) {
            case 'ano':
                return b.ano - a.ano;
            case 'avaliacao':
                return b.avaliacao - a.avaliacao;
            default: // nome
                return a.titulo.localeCompare(b.titulo);
        }
    });
    
    // Paginação
    const totalItens = itensFiltrados.length;
    const totalPaginas = Math.ceil(totalItens / itensPorPagina);
    const inicio = (paginaAtual - 1) * itensPorPagina;
    const fim = inicio + itensPorPagina;
    const itensPagina = itensFiltrados.slice(inicio, fim);
    
    // Atualizar grid
    const gridCatalogo = document.querySelector('.grid-catalogo');
    gridCatalogo.innerHTML = '';
    
    itensPagina.forEach(item => {
        gridCatalogo.appendChild(criarCardItem(item));
    });
    
    // Atualizar contador
    const contador = document.getElementById('contador-itens');
    if (contador) {
        contador.textContent = totalItens;
    }
    
    // Atualizar paginação
    atualizarPaginacao(totalPaginas);
}

function normalizarTexto(texto) {
    return texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}

function filtrarItensCatalogo() {
    const termoBusca = document.getElementById('busca')?.value.toLowerCase() || '';
    const categoria = document.getElementById('filtro-categoria')?.value || 'todos';
    const genero = document.getElementById('filtro-genero')?.value || 'todos';
    
    let itens = catalogo.filter(item => {
        const campoResponsavel = (item.roteiristas || item.criacao || '').toLowerCase();
        const buscaMatch = termoBusca === '' || 
            item.titulo.toLowerCase().includes(termoBusca) ||
            campoResponsavel.includes(termoBusca)
        
        const categoriaMatch = categoria === 'todos' || item.categoria === categoria;
        const generoMatch = genero === 'todos' || normalizarTexto(item.genero).includes(normalizarTexto(genero));
        
        return buscaMatch && categoriaMatch && generoMatch;
    });

    if (filtroSomenteFavoritos) {
        itens = itens.filter(item => itensFavoritos.includes(item.id));
    }

    return itens;
}

function carregarCatalogo() {
    filtrarCatalogo();
}

function atualizarPaginacao(totalPaginas) {
    const btnAnterior = document.querySelector('.btn-pagina.anterior');
    const btnProximo = document.querySelector('.btn-pagina.proximo');
    const paginaAtualSpan = document.querySelector('.pagina-atual');
    
    if (btnAnterior) {
        btnAnterior.disabled = paginaAtual === 1;
    }
    
    if (btnProximo) {
        btnProximo.disabled = paginaAtual === totalPaginas;
    }
    
    if (paginaAtualSpan) {
        paginaAtualSpan.textContent = `Página ${paginaAtual} de ${totalPaginas || 1}`;
    }
}

// ===== CRIAR CARD DE ITEM =====
function criarCardItem(item) {
    const card = document.createElement('div');
    card.className = 'card-item';
    card.dataset.id = item.id;
    card.dataset.categoria = item.categoria;
    
    const iconMap = {
        filmes: 'fa-film',
        series: 'fa-film',
    };
    
    const isFavorito = itensFavoritos.includes(item.id);
    const labelAutor = item.categoria === "filmes" ? "Roteiristas" : "Criação";
    const nomeResponsavel = item.categoria === "filmes" ? item.roteiristas : item.criacao;
    
    card.innerHTML = `
        <div class="card-img">
            <i class="fas ${iconMap[item.categoria]}"></i>
        </div>
        <div class="card-conteudo">
            <h3 class="card-titulo">${item.titulo}</h3>
            <div class="card-info">
                <span>${labelAutor}: ${nomeResponsavel} • ${item.ano} • <span class="rating">⭐ ${item.avaliacao}</span></span>
            </div>
            <p>${item.descricao.substring(0, 80)}...</p>
            <div class="card-acoes">
                <span class="card-genero">${item.genero}</span>
                <button class="btn-favorito ${isFavorito ? 'ativo' : ''}" 
                        data-id="${item.id}"
                        aria-label="${isFavorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
        </div>
    `;
    
    // Adicionar evento de favorito
    const btnFavorito = card.querySelector('.btn-favorito');
    btnFavorito.addEventListener('click', function(e) {
        e.stopPropagation();
        alternarFavorito(item.id);
    });
    
    return card;
}

// ===== SISTEMA DE FAVORITOS =====
function alternarFavorito(id) {
    const index = itensFavoritos.indexOf(id);
    const btnFavorito = document.querySelector(`.btn-favorito[data-id="${id}"]`);
    
    if (index === -1) {
        // Adicionar aos favoritos
        itensFavoritos.push(id);
        btnFavorito.classList.add('ativo');
        btnFavorito.setAttribute('aria-label', 'Remover dos favoritos');
        mostrarNotificacao('Item adicionado aos favoritos!');
    } else {
        // Remover dos favoritos
        itensFavoritos.splice(index, 1);
        btnFavorito.classList.remove('ativo');
        btnFavorito.setAttribute('aria-label', 'Adicionar aos favoritos');
        mostrarNotificacao('Item removido dos favoritos!');
    }
    
    // Salvar no localStorage
    localStorage.setItem('favoritos', JSON.stringify(itensFavoritos));
    atualizarContadorFavoritos();
}

function atualizarContadorFavoritos() {
    const contador = document.querySelector('.contador-favoritos');
    if (contador) {
        contador.textContent = itensFavoritos.length;
    }
}

function mostrarNotificacao(mensagem) {
    // Criar elemento de notificação
    const notificacao = document.createElement('div');
    notificacao.className = 'notificacao';
    notificacao.textContent = mensagem;
    notificacao.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: var(--primary);
        color: white;
        padding: var(--spacing-sm) var(--spacing-md);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notificacao);
    
    // Remover após 3 segundos
    setTimeout(() => {
        notificacao.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notificacao.remove(), 300);
    }, 3000);
}

// ===== FORMULÁRIO DE CONTATO =====
function inicializarFormularioContato() {
    const form = document.getElementById('formContato');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validarFormulario()) {
            enviarFormulario();
        }
    });
    
    // Validação em tempo real
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('blur', validarCampo);
        input.addEventListener('input', limparErro);
    });
}

function validarCampo(e) {
    const campo = e.target;
    const valor = campo.value.trim();
    const erroElement = document.getElementById(`erro-${campo.name || campo.id}`);
    
    // Limpar erro anterior
    if (erroElement) {
        erroElement.textContent = '';
    }
    
    // Validar campo vazio
    if (campo.required && valor === '') {
        mostrarErro(campo, 'Este campo é obrigatório.');
        return false;
    }
    
    // Validações específicas
    if (campo.type === 'email' && valor !== '') {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(valor)) {
            mostrarErro(campo, 'Por favor, insira um email válido.');
            return false;
        }
    }
    
    if (campo.id === 'telefone' && valor !== '') {
        const regexTelefone = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
        if (!regexTelefone.test(valor)) {
            mostrarErro(campo, 'Por favor, insira um telefone válido.');
            return false;
        }
    }
    
    if (campo.id === 'nome' && valor !== '') {
        const regexNome = /^[A-Za-zÀ-ÿ\s]{3,50}$/;
        if (!regexNome.test(valor)) {
            mostrarErro(campo, 'O nome deve conter apenas letras e ter entre 3 e 50 caracteres.');
            return false;
        }
    }
    
    return true;
}

function mostrarErro(campo, mensagem) {
    const erroElement = document.getElementById(`erro-${campo.name || campo.id}`);
    if (erroElement) {
        erroElement.textContent = mensagem;
        campo.style.borderColor = 'var(--danger)';
    }
}

function limparErro(e) {
    const campo = e.target;
    campo.style.borderColor = '';
    const erroElement = document.getElementById(`erro-${campo.name || campo.id}`);
    if (erroElement) {
        erroElement.textContent = '';
    }
}

function validarFormulario() {
    const campos = document.querySelectorAll('#formContato [required]');
    let valido = true;
    
    campos.forEach(campo => {
        if (!validarCampo({ target: campo })) {
            valido = false;
        }
    });
    
    return valido;
}

function enviarFormulario() {
    const form = document.getElementById('formContato');
    const dados = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        assunto: document.getElementById('assunto').value,
        mensagem: document.getElementById('mensagem').value,
        newsletter: document.getElementById('newsletter').checked,
        data: new Date().toISOString()
    };
    
    // Simular envio (em um projeto real, seria uma requisição AJAX)
    console.log('Dados do formulário:', dados);
    
    // Mostrar mensagem de sucesso
    const mensagemSucesso = document.getElementById('mensagem-sucesso');
    mensagemSucesso.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
    mensagemSucesso.style.display = 'block';
    
    // Resetar formulário
    form.reset();
    
    // Esconder mensagem após 5 segundos
    setTimeout(() => {
        mensagemSucesso.style.display = 'none';
    }, 5000);
}

// ===== FAQ INTERATIVO =====
function inicializarFAQ() {
    const perguntas = document.querySelectorAll('.faq-pergunta');
    
    perguntas.forEach(pergunta => {
        pergunta.addEventListener('click', function() {
            const resposta = this.nextElementSibling;
            const icon = this.querySelector('i');
            
            // Alternar classe ativa
            resposta.classList.toggle('ativo');
            
            // Rotacionar ícone
            if (resposta.classList.contains('ativo')) {
                icon.style.transform = 'rotate(180deg)';
            } else {
                icon.style.transform = 'rotate(0deg)';
            }
            
            // Fechar outras respostas
            perguntas.forEach(otherPergunta => {
                if (otherPergunta !== this) {
                    const otherResposta = otherPergunta.nextElementSibling;
                    const otherIcon = otherPergunta.querySelector('i');
                    otherResposta.classList.remove('ativo');
                    otherIcon.style.transform = 'rotate(0deg)';
                }
            });
        });
    });
}

// ===== ANIMAÇÕES CSS ADICIONAIS =====
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .notificacao {
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: var(--primary);
        color: white;
        padding: var(--spacing-sm) var(--spacing-md);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', function() {
  // procura h3 dentro do bloco de metodologia que contenha 'Processo' no texto
  const h3s = document.querySelectorAll('.sobre-metodologia .sobre-texto h3, .sobre-metodologia .sobre-texto h2');
  for (const h of h3s) {
    const txt = (h.textContent || '').trim().toLowerCase();
    if (txt.includes('processo de avaliação') || txt.startsWith('processo')) {
      h.style.marginTop = '40px';
      break;
    }
  }
});