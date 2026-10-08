// Seleciona o botão de menu e a lista de navegação
const btnMobile = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

// Função para abrir/fechar o menu no celular
function toggleMenu() {
    navList.classList.toggle('ativo');
}

// Adiciona o evento de clique ao botão
btnMobile.addEventListener('click', toggleMenu);

// Fecha o menu automaticamente quando um link for clicado (útil no celular)
const navLinks = document.querySelectorAll('.nav-list a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('ativo');
    });
});