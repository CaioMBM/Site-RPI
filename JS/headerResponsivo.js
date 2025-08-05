const navbar          = document.querySelector('nav')
const icon_abrirMenu  = document.querySelector('.icon-abrirMenu');
const icon_fecharMenu = document.querySelector('.icon-fecharMenu');

// Abrir menu hamburguer
icon_abrirMenu.addEventListener("click", ()=> {
    icon_abrirMenu.style.display  = 'none';
    icon_fecharMenu.style.display = 'block';
    navbar.style.display          = 'block';

    navbar.classList.remove('navbarOcultar');
})

// Fechar menu hamburguer
icon_fecharMenu.addEventListener("click", ()=> {
    icon_abrirMenu.style.display  = 'block';
    icon_fecharMenu.style.display = 'none';
    navbar.style.display          = 'none';
})

function fecharMenu(){
    setTimeout(() => {
        icon_abrirMenu.style.display  = 'block';
        icon_fecharMenu.style.display = 'none';
        navbar.style.display          = 'none';
    }, 300);
    
}