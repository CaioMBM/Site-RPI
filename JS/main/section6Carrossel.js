const btnSec6CarrosselEsquerda = document.querySelectorAll('.botaoCarrosselAtributos')[0];
const btnSec6CarrosselDireita  = document.querySelectorAll('.botaoCarrosselAtributos')[1];
const containerSec6 = document.querySelector('#section6container');

// Media query
/*
Tela: 689px-768px = atributos_telaNormal
Tela: 390px-598px = atributos_telaNormalPequena
Tela: ...px-389px = atributos_telaMuitoPequena
*/

const atributos_telaNormal         = window.matchMedia('(min-width: 689px) and (max-width: 798px)');
const atributos_telaNormalPequena  = window.matchMedia('(min-width: 599px) and (max-width: 688px)');
const atributos_telaMuitoPequena   = window.matchMedia('(min-width: 389px) and (max-width: 598px)');

// Mover itens do carrossel para direita
function moverDireitaAtributos(){
    const scrollMax = containerSec6.scrollWidth - containerSec6.clientWidth;

    // Telas: 689px-768px
    if (atributos_telaNormal.matches){
        // Se estiver no último card e então clicar para mover para direita, será mostrado o 1º card do carrossel
        if (containerSec6.scrollLeft >= scrollMax) {
            containerSec6.scrollLeft = 0;
        } 
        // Se não for o último card, será mostrado o card seguinte
        else {
            containerSec6.scrollLeft += 270; // Esse nº vem do width do card + gap entre os cards, então ele avançará um card.
        }
    }
    // Telas: 599px-688px
    else if (atributos_telaNormalPequena.matches){
        if (containerSec6.scrollLeft >= scrollMax) {
            containerSec6.scrollLeft = 0;
        } else {
            containerSec6.scrollLeft += 250;
        }
    }
    // Telas: 389px-598px
    else if (atributos_telaMuitoPequena.matches){
        if (containerSec6.scrollLeft >= scrollMax) {
            containerSec6.scrollLeft = 0;
        } else {
            containerSec6.scrollLeft += 280;
        }
    } 
}
btnSec6CarrosselDireita.addEventListener('click', moverDireitaAtributos);

// Mover itens do carrossel para esquerda
function moverEsquerdaAtributos(){
    // Telas: 689px-768px
    if (atributos_telaNormalPequena.matches){
        // Se estiver no primeiro card e então clicar para mover para esquerda, será mostrado o último card do carrossel
        if (containerSec6.scrollLeft <= 0) {
            containerSec6.scrollLeft = containerSec6.scrollWidth - containerSec6.clientWidth;
        } 
        // Se não for o primeiro card, será mostrado o card anterior
        else {
            containerSec6.scrollLeft -= 270; // Esse nº vem do width do card + gap entre os cards, então ele avançará um card.
        }
    }
    // Telas: 599px-688px
    else if (atributos_telaNormalPequena.matches){
        if (containerSec6.scrollLeft <= 0) {
            containerSec6.scrollLeft = containerSec6.scrollWidth - containerSec6.clientWidth;
        } else {
            containerSec6.scrollLeft -= 250;
        }
    }
    // Telas: 389px-598px
    else if (atributos_telaMuitoPequena.matches){
        if (containerSec6.scrollLeft <= 0) {
            containerSec6.scrollLeft = containerSec6.scrollWidth - containerSec6.clientWidth;
        } else {
            containerSec6.scrollLeft -= 280;
        }
    }
}
btnSec6CarrosselEsquerda.addEventListener('click', moverEsquerdaAtributos);