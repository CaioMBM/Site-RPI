const conteinarPecas = document.getElementById('conteinarPecas');
const fundoPadrao    = 'Imagens/Quebra-cabeça/fundoPecasPadrao.png';

// Performance
// Caminhos relativos ao HTML
const pecaQC_Perfor  = document.getElementById('pecaQC_Perfor');
const imagem1     = 'Imagens/Quebra-cabeça/peçaPerfor-Contorno.png';
const imagem2     = 'Imagens/Quebra-cabeça/peçaPerfor-Clicada.png';
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


// Interferência
// Caminhos relativos ao HTML
const pecaQC_Interf = document.getElementById('pecaQC_Interf');
const imagem3     = 'Imagens/Quebra-cabeça/peçaInterf-Contorno.png';
const imagem4     = 'Imagens/Quebra-cabeça/peçaInterf-Clicada.png';
const fundoInterf = 'Imagens/Quebra-cabeça/QC-Interferencia_resized.png';

pecaQC_Interf.addEventListener('click', () => {
    const imgAgora = pecaQC_Interf.getAttribute('src');
    
    if (imgAgora === imagem3) {
        pecaQC_Interf.setAttribute('src', imagem4);
        conteinarPecas.style.backgroundImage = `url('${fundoInterf}')`;
    } else {
        pecaQC_Interf.setAttribute('src', imagem3);
        conteinarPecas.style.backgroundImage = `url('${fundoPadrao}')`;
    }
});

// Interferência
// Caminhos relativos ao HTML
const pecaQC_Result = document.getElementById('pecaQC_Result');
const imagem5     = 'Imagens/Quebra-cabeça/peçaResult-Contorno.png';
const imagem6     = 'Imagens/Quebra-cabeça/peçaResult-Clicada.png';
const fundoResult = 'Imagens/Quebra-cabeça/QC-Resultado_resized.png';

pecaQC_Result.addEventListener('click', () => {
    const imgPresente = pecaQC_Result.getAttribute('src');
    
    if (imgPresente === imagem5) {
        pecaQC_Result.setAttribute('src', imagem6);
        conteinarPecas.style.backgroundImage = `url('${fundoResult}')`;
    } else {
        pecaQC_Result.setAttribute('src', imagem5);
        conteinarPecas.style.backgroundImage = `url('${fundoPadrao}')`;
    }
});