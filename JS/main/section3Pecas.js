const escurecer      = document.getElementById('escurecer');
const conteinarPecas = document.getElementById('conteinarPecas');
const fundoPadrao    = 'Imagens/Quebra-cabeça/fundoPecasPadrao.png';

// Resultado
// Caminhos relativos ao HTML
const pecaQC_Result = document.getElementById('pecaQC_Result');
const imgResult_Contorno = 'Imagens/Quebra-cabeça/peçaResult-Contorno.png';
const imgResult_Clicada  = 'Imagens/Quebra-cabeça/peçaResult-Clicada.png';
const fundoResult        = 'Imagens/Quebra-cabeça/QC-Resultado_resized.png';
const infoResultado      = document.querySelectorAll('.pecaInformacao')[0];
const modalResultado     = document.querySelectorAll('.modal')[0];
const btn_resultado      = document.querySelector('#btn-resultado');
const sairModalResultado = document.querySelectorAll('.sairModal')[0];

pecaQC_Result.addEventListener('click', () => {
    const imgPresente = pecaQC_Result.getAttribute('src');
    
    if (imgPresente === imgResult_Contorno) {
        // Imagem da peça do quebra-cabeça
        pecaQC_Result.setAttribute('src', imgResult_Clicada);
        pecaQC_Perfor.setAttribute('src', imgPerfor_Contorno);
        pecaQC_Interf.setAttribute('src', imgInterf_Contorno);

        // Imagem de fundo
        conteinarPecas.style.backgroundImage = `url('${fundoResult}')`;

        // Conteúdo da peça clicada
        infoResultado.style.display     = 'block';
        infoPerformance.style.display   = 'none';
        infoInterferencia.style.display = 'none';
    } else {
        // Ao clicar na peça do quebra-cabeça que está acionada/ativa, ela e a imagem de fundo votlam para a imagem da peça padrão e a caixa do conteúdo da imagem desaparece.
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
const fundoPerfor        = 'Imagens/Quebra-cabeça/QC-Performance_resized.png';
const infoPerformance      = document.querySelectorAll('.pecaInformacao')[1];
const modalPerformance     = document.querySelectorAll('.modal')[1];
const btn_Performance      = document.querySelector('#btn-performance');
const sairModalPerformance = document.querySelectorAll('.sairModal')[1];

pecaQC_Perfor.addEventListener('click', () => {
    const imgAtual = pecaQC_Perfor.getAttribute('src');
    
    if (imgAtual === imgPerfor_Contorno) {
        // Imagem da peça do quebra-cabeça
        pecaQC_Result.setAttribute('src', imgResult_Contorno);
        pecaQC_Perfor.setAttribute('src', imgPerfor_Clicada);
        pecaQC_Interf.setAttribute('src', imgInterf_Contorno);

        // Imagem de fundo
        conteinarPecas.style.backgroundImage = `url('${fundoPerfor}')`;

        // Conteúdo da peça clicada
        infoResultado.style.display     = 'none';
        infoPerformance.style.display   = 'block';
        infoInterferencia.style.display = 'none';
    } else {
        // Ao clicar na peça do quebra-cabeça que está acionada/ativa, ela e a imagem de fundo votlam para a imagem da peça padrão e a caixa do conteúdo da imagem desaparece.
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
const fundoInterf        = 'Imagens/Quebra-cabeça/QC-Interferencia_resized.png';
const infoInterferencia      = document.querySelectorAll('.pecaInformacao')[2];
const modalInterferencia     = document.querySelectorAll('.modal')[2];
const btn_Interferencia      = document.querySelector('#btn-interferencia');
const sairModalInterferencia = document.querySelectorAll('.sairModal')[2];

pecaQC_Interf.addEventListener('click', () => {
    const imgAgora = pecaQC_Interf.getAttribute('src');
    
    if (imgAgora === imgInterf_Contorno) {
        // Imagem da peça do quebra-cabeça
        pecaQC_Result.setAttribute('src', imgResult_Contorno);
        pecaQC_Perfor.setAttribute('src', imgPerfor_Contorno);
        pecaQC_Interf.setAttribute('src', imgInterf_Clicada);

        // Imagem de fundo
        conteinarPecas.style.backgroundImage = `url('${fundoInterf}')`;

        // Conteúdo da peça clicada
        infoResultado.style.display     = 'none';
        infoPerformance.style.display   = 'none';
        infoInterferencia.style.display = 'block';
    } else {
        // Ao clicar na peça do quebra-cabeça que está acionada/ativa, ela e a imagem de fundo votlam para a imagem da peça padrão e a caixa do conteúdo da imagem desaparece.
        pecaQC_Interf.setAttribute('src', imgInterf_Contorno);
        conteinarPecas.style.backgroundImage = `url('${fundoPadrao}')`;
        infoInterferencia.style.display = 'none';
    }
});

// Abrir modal
btn_Interferencia.addEventListener('click', () => {
    modalInterferencia.style.display = 'block';
    escurecer.style.display        = 'block';
})
// Fechar modal
sairModalInterferencia.addEventListener('click', () => {
    modalInterferencia.style.display = 'none';
    escurecer.style.display        = 'none';
})