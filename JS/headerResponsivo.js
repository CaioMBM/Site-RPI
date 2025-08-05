const navbar          = document.querySelector('nav')
const navlinks        = document.querySelectorAll('.navlink a')
const icon_abrirMenu  = document.querySelector('.icon-abrirMenu');
const icon_fecharMenu = document.querySelector('.icon-fecharMenu');
const diversasTelas   = window.matchMedia('(max-width: 980px)');

// Media query: ...px - 980px
if (diversasTelas.matches){
    navlinks.forEach(function(navlink){
        navlink.addEventListener('click', () => {
            setTimeout(() => {
                icon_abrirMenu.style.display  = 'block';
                icon_fecharMenu.style.display = 'none';
                navbar.style.display          = 'none';
            }, 300);
        })
    })
};

// Abrir menu hamburguer
icon_abrirMenu.addEventListener("click", ()=> {
    icon_abrirMenu.style.display  = 'none';
    icon_fecharMenu.style.display = 'block';
    navbar.style.display          = 'block';

    navbar.classList.remove('navbarOcultar');
});

// Fechar menu hamburguer
icon_fecharMenu.addEventListener("click", ()=> {
    icon_abrirMenu.style.display  = 'block';
    icon_fecharMenu.style.display = 'none';
    navbar.style.display          = 'none';
});