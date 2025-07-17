const conteinarPecas = document.getElementById('conteinarPecas');
const fundoPadrao    = 'Imagens/Quebra-cabeça/fundoPecasPadrao.png';

// Resultado
// Caminhos relativos ao HTML
const pecaQC_Result = document.getElementById('pecaQC_Result');
const imgResult_Contorno = 'Imagens/Quebra-cabeça/peçaResult-Contorno.png';
const imgResult_Clicada  = 'Imagens/Quebra-cabeça/peçaResult-Clicada.png';
const fundoResult = 'Imagens/Quebra-cabeça/QC-Resultado_resized.png';

pecaQC_Result.addEventListener('click', () => {
    const imgPresente = pecaQC_Result.getAttribute('src');
    
    if (imgPresente === imgResult_Contorno) {
        pecaQC_Result.setAttribute('src', imgResult_Clicada);
        pecaQC_Perfor.setAttribute('src', imgPerfor_Contorno);
        pecaQC_Interf.setAttribute('src', imgInterf_Contorno);
        conteinarPecas.style.backgroundImage = `url('${fundoResult}')`;
    } else {
        pecaQC_Result.setAttribute('src', imgResult_Contorno);
        conteinarPecas.style.backgroundImage = `url('${fundoPadrao}')`;
    }
});

// Performance
// Caminhos relativos ao HTML
const pecaQC_Perfor  = document.getElementById('pecaQC_Perfor');
const imgPerfor_Contorno = 'Imagens/Quebra-cabeça/peçaPerfor-Contorno.png';
const imgPerfor_Clicada  = 'Imagens/Quebra-cabeça/peçaPerfor-Clicada.png';
const fundoPerfor = 'Imagens/Quebra-cabeça/QC-Performance_resized.png';

pecaQC_Perfor.addEventListener('click', () => {
    const imgAtual = pecaQC_Perfor.getAttribute('src');
    
    if (imgAtual === imgPerfor_Contorno) {
        pecaQC_Result.setAttribute('src', imgResult_Contorno);
        pecaQC_Perfor.setAttribute('src', imgPerfor_Clicada);
        pecaQC_Interf.setAttribute('src', imgInterf_Contorno);
        conteinarPecas.style.backgroundImage = `url('${fundoPerfor}')`;
    } else {
        pecaQC_Perfor.setAttribute('src', imgPerfor_Contorno);
        conteinarPecas.style.backgroundImage = `url('${fundoPadrao}')`;
    }
});


// Interferência
// Caminhos relativos ao HTML
const pecaQC_Interf = document.getElementById('pecaQC_Interf');
const imgInterf_Contorno = 'Imagens/Quebra-cabeça/peçaInterf-Contorno.png';
const imgInterf_Clicada  = 'Imagens/Quebra-cabeça/peçaInterf-Clicada.png';
const fundoInterf = 'Imagens/Quebra-cabeça/QC-Interferencia_resized.png';

pecaQC_Interf.addEventListener('click', () => {
    const imgAgora = pecaQC_Interf.getAttribute('src');
    
    if (imgAgora === imgInterf_Contorno) {
        pecaQC_Result.setAttribute('src', imgResult_Contorno);
        pecaQC_Perfor.setAttribute('src', imgPerfor_Contorno);
        pecaQC_Interf.setAttribute('src', imgInterf_Clicada);
        conteinarPecas.style.backgroundImage = `url('${fundoInterf}')`;
    } else {
        pecaQC_Interf.setAttribute('src', imgInterf_Contorno);
        conteinarPecas.style.backgroundImage = `url('${fundoPadrao}')`;
    }
});