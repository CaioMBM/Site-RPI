const btnSec6CarrosselEsquerda = document.querySelectorAll('.botaoCarrosselAtributos')[0];
const btnSec6CarrosselDireita  = document.querySelectorAll('.botaoCarrosselAtributos')[1];
const containerSec6 = document.querySelector('#section6container');

// Media query
/*
Tela: 599px-768px = telaNormal
Tela: 390px-598px = telaNormalPequena
Tela: ...px-389px = telaMuitoPequena
*/

// Mover itens do carrossel para direita
function moverDireitaAtributos(){
    const scrollMax = containerSec6.scrollWidth - containerSec6.clientWidth;

    // Telas: 689px-768px
    if (telaNormal.matches){
        // Se estiver no último card e então clicar para mover para direita, será mostrado o 1º card do carrossel
        if (containerSec6.scrollLeft >= scrollMax) {
            containerSec6.scrollLeft = 0;
        } 
        // Se não for o último card, será mostrado o card seguinte
        else {
            containerSec6.scrollLeft += 270; // Esse nº vem do width do card + gap entre os cards, então ele avançará um card.
        }
    }
}
btnSec6CarrosselDireita.addEventListener('click', moverDireitaAtributos);

// Mover itens do carrossel para esquerda
function moverEsquerdaAtributos(){
    // Telas: 689px-768px
    if (telaNormal.matches){
        // Se estiver no primeiro card e então clicar para mover para esquerda, será mostrado o último card do carrossel
        if (containerSec6.scrollLeft <= 0) {
            containerSec6.scrollLeft = containerSec6.scrollWidth - containerSec6.clientWidth;
        } 
        // Se não for o primeiro card, será mostrado o card anterior
        else {
            containerSec6.scrollLeft -= 270; // Esse nº vem do width do card + gap entre os cards, então ele avançará um card.
        }
    }
}
btnSec6CarrosselEsquerda.addEventListener('click', moverEsquerdaAtributos);