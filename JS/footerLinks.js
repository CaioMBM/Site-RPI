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
    window.open('https://wa.me/5581992780767?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20como%20o%20R%3DP-I%20pode%20me%20ajudar%20a%20melhorar%20a%20Performance%20e%20eliminar%20Interfer%C3%AAncias%2C%20para%20garantir%20que%20os%20Resultados%20sejam%20atingidos.');;
};
