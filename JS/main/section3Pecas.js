const escurecer      = document.getElementById('escurecer');
const conteinarPecas = document.getElementById('conteinarPecas');
const fundoPadrao    = 'Imagens/Quebra-cabeça/fundoPecasPadrao.png';

// Resultado
// Caminhos relativos ao HTML
const pecaQC_Result = document.getElementById('pecaQC_Result');
const imgResult_Contorno = 'Imagens/Quebra-cabeça/peçaResult-Contorno.png';
const imgResult_Clicada  = 'Imagens/Quebra-cabeça/peçaResult-Clicada.png';
const fundoResult = 'Imagens/Quebra-cabeça/QC-Resultado_resized.png';
const infoResultado      = document.querySelectorAll('.pecaInformacao')[0];
const modalResultado     = document.querySelectorAll('.modal')[0];
const btn_resultado      = document.querySelector('#btn-resultado');
const sairModalResultado = document.querySelectorAll('.sairModal')[0];

pecaQC_Result.addEventListener('click', () => {
    const imgPresente = pecaQC_Result.getAttribute('src');
    
    if (imgPresente === imgResult_Contorno) {
        pecaQC_Result.setAttribute('src', imgResult_Clicada);
        pecaQC_Perfor.setAttribute('src', imgPerfor_Contorno);
        pecaQC_Interf.setAttribute('src', imgInterf_Contorno);
        conteinarPecas.style.backgroundImage = `url('${fundoResult}')`;
        infoResultado.style.display = 'block';
    } else {
        pecaQC_Result.setAttribute('src', imgResult_Contorno);
        conteinarPecas.style.backgroundImage = `url('${fundoPadrao}')`;
        infoResultado.style.display = 'none';
    }
});

// Abrir modal
btn_resultado.addEventListener('click', () => {
    modalResultado.style.display = 'block';
    escurecer.style.display      = 'block';
})
// Fechar modal
sairModalResultado.addEventListener('click', () => {
    modalResultado.style.display = 'none';
    escurecer.style.display      = 'none';
})


// Performance
// Caminhos relativos ao HTML
const pecaQC_Perfor  = document.getElementById('pecaQC_Perfor');
const imgPerfor_Contorno = 'Imagens/Quebra-cabeça/peçaPerfor-Contorno.png';
const imgPerfor_Clicada  = 'Imagens/Quebra-cabeça/peçaPerfor-Clicada.png';
const fundoPerfor = 'Imagens/Quebra-cabeça/QC-Performance_resized.png';
const infoPerformance      = document.querySelectorAll('.pecaInformacao')[1];
const modalPerformance     = document.querySelectorAll('.modal')[1];
const btn_Performance      = document.querySelector('#btn-performance');
const sairModalPerformance = document.querySelectorAll('.sairModal')[1];

pecaQC_Perfor.addEventListener('click', () => {
    const imgAtual = pecaQC_Perfor.getAttribute('src');
    
    if (imgAtual === imgPerfor_Contorno) {
        pecaQC_Result.setAttribute('src', imgResult_Contorno);
        pecaQC_Perfor.setAttribute('src', imgPerfor_Clicada);
        pecaQC_Interf.setAttribute('src', imgInterf_Contorno);
        conteinarPecas.style.backgroundImage = `url('${fundoPerfor}')`;
        infoPerformance.style.display = 'block';
    } else {
        pecaQC_Perfor.setAttribute('src', imgPerfor_Contorno);
        conteinarPecas.style.backgroundImage = `url('${fundoPadrao}')`;
        infoPerformance.style.display = 'none';
    }
});

// Abrir modal
btn_Performance.addEventListener('click', () => {
    modalPerformance.style.display = 'block';
    escurecer.style.display        = 'block';
})
// Fechar modal
sairModalPerformance.addEventListener('click', () => {
    modalPerformance.style.display = 'none';
    escurecer.style.display        = 'none';
})


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