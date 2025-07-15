const btnSec8CarrosselEsquerda = document.querySelectorAll('.botaoCarrosselDepoimentos')[0];
const btnSec8CarrosselDireita  = document.querySelectorAll('.botaoCarrosselDepoimentos')[1];
const containerSec8 = document.querySelector('#section8Cards')

// Media query
/*
Tela: 599px-768px = telaNormal
Tela: 390px-598px = telaNormalPequena
Tela: ...px-389px = telaMuitoPequena
*/
const telaNormal         = window.matchMedia('(min-width: 599px) and (max-width: 768px)');
const telaNormalPequena  = window.matchMedia('(min-width: 390px) and (max-width: 598px)');
const telaMuitoPequena   = window.matchMedia('(max-width: 389px)');


function moverDireitaDepoimentos(){
    const scrollMax = containerSec8.scrollWidth - containerSec8.clientWidth;

    // Telas: 599px-768px
    if (telaNormal.matches){
        // Se estiver no último card e então clicar para mover para direita, será mostrado o 1º card do carrossel
        if (containerSec8.scrollLeft >= scrollMax) {
            containerSec8.scrollLeft = 0;
        } 
        // Se não for o último card, será mostrado o card seguinte
        else {
            containerSec8.scrollLeft += 250; // Esse nº vem do width do card + gap entre os cards, então ele avançará um card.
        }
    } 
    // Telas: 390px-598px
    else if (telaNormalPequena.matches){
        // Se estiver no último card e então clicar para mover para direita, será mostrado o 1º card do carrossel
        if (containerSec8.scrollLeft >= scrollMax) {
            containerSec8.scrollLeft = 0;
        } 
        // Se não for o último card, será mostrado o card seguinte
        else {
            containerSec8.scrollLeft += 280; // Esse nº vem do width do card + gap entre os cards, então ele avançará um card.
        }
    }
    // Telas: ...px-389px
    else if (telaMuitoPequena.matches){
        // Se estiver no último card e então clicar para mover para direita, será mostrado o 1º card do carrossel
        if (containerSec8.scrollLeft >= scrollMax) {
            containerSec8.scrollLeft = 0;
        } 
        // Se não for o último card, será mostrado o card seguinte
        else {
            containerSec8.scrollLeft += 240; // Esse nº vem do width do card + gap entre os cards, então ele avançará um card.
        }
    }
}
btnSec8CarrosselDireita.addEventListener('click', moverDireitaDepoimentos);

function moverEsquerdaDepoimentos(){
    // Telas: 599px-768px
    if (telaNormal.matches){
        // Se estiver no primeiro card e então clicar para mover para esquerda, será mostrado o último card do carrossel
        if (containerSec8.scrollLeft <= 0) {
            containerSec8.scrollLeft = containerSec8.scrollWidth - containerSec8.clientWidth;
        } 
        // Se não for o primeiro card, será mostrado o card anterior
        else {
            containerSec8.scrollLeft -= 250; // Esse nº vem do width do card + gap entre os cards, então ele avançará um card.
        }
    }
    // Telas: 390px-598px
    else if(telaNormalPequena.matches){
        // Se estiver no primeiro card e então clicar para mover para esquerda, será mostrado o último card do carrossel
        if (containerSec8.scrollLeft <= 0) {
            containerSec8.scrollLeft = containerSec8.scrollWidth - containerSec8.clientWidth;
        } 
        // Se não for o primeiro card, será mostrado o card anterior
        else {
            containerSec8.scrollLeft -= 280; // Esse nº vem do width do card + gap entre os cards, então ele avançará um card.
        }
    }
    // Telas: ...px-389px
    else if(telaMuitoPequena.matches){
        // Se estiver no primeiro card e então clicar para mover para esquerda, será mostrado o último card do carrossel
        if (containerSec8.scrollLeft <= 0) {
            containerSec8.scrollLeft = containerSec8.scrollWidth - containerSec8.clientWidth;
        } 
        // Se não for o primeiro card, será mostrado o card anterior
        else {
            containerSec8.scrollLeft -= 240; // Esse nº vem do width do card + gap entre os cards, então ele avançará um card.
        }
    }
}
btnSec8CarrosselEsquerda.addEventListener('click', moverEsquerdaDepoimentos);