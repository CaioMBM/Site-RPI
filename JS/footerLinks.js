const linkedin  = document.querySelector('.bi-linkedin');
const instagram = document.querySelector('.bi-instagram');
const whatsapp  = document.querySelector('.bi-whatsapp');

// Linkedin
linkedin.addEventListener('click', ()=> {
    window.open('https://www.linkedin.com/in/leandro-uchoa-162809a5/ ', '_blank');
});

// Instagram
instagram.addEventListener('click', ()=> {
    window.open('https://www.instagram.com/resultado.p.i/', '_blank');;
});

// Whastapp
function redirecionarWhatsapp(){
    // Tive que fazer uma function pq o addEventListener para o Whatsapp não estava funcionando
    window.open('https://wa.me/5581992780767?text=Ol%C3%A1%2C%20vim%20pelo%20site%20R%20%3D%20P%20-%20I.%20%0AGostaria%20de%20iniciar%20uma%20conversa.', '_blank');;
};
