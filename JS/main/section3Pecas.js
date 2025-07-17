const pecaQC_Perfor  = document.getElementById('pecaQC_Perfor');
const conteinarPecas = document.getElementById('conteinarPecas');

// Caminhos relativos ao HTML
const imagem1 = 'Imagens/Quebra-cabeça/peçaPerfor-Contorno.png';
const imagem2 = 'Imagens/Quebra-cabeça/peçaPerfor-Clicada.png';
const fundoPadrao = 'Imagens/Quebra-cabeça/fundoPecasPadrao.png';
const fundoPerfor = 'Imagens/Quebra-cabeça/QC-Performance_resized.png';

pecaQC_Perfor.addEventListener('click', () => {
    const imgAtual = pecaQC_Perfor.getAttribute('src');

    if (imgAtual === imagem1) {
        pecaQC_Perfor.setAttribute('src', imagem2);
        conteinarPecas.style.backgroundImage = `url('${fundoPerfor}')`;
    } else {
        pecaQC_Perfor.setAttribute('src', imagem1);
        conteinarPecas.style.backgroundImage = `url('${fundoPadrao}')`;
    }
});