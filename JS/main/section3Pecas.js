const conteinarPecas = document.getElementById('conteinarPecas');
const fundoPadrao    = 'Imagens/Quebra-cabeça/fundoPecasPadrao.jpg';
const infoPadrao     = document.querySelectorAll('.pecaInformacao')[0];
const escurecer      = document.getElementById('escurecer');

// Resultado
// Caminhos relativos ao HTML
const pecaQC_Result      = document.getElementById('pecaQC_Result');
const infoResultado      = document.querySelectorAll('.pecaInformacao')[1];
const modalResultado     = document.querySelectorAll('.modal')[0];
const btn_resultado      = document.querySelector('#btn-resultado');
const sairModalResultado = document.querySelectorAll('.sairModal')[0];

pecaQC_Result.addEventListener('click', () => {
    // Peça Resultado
    pecaQC_Result.style.height    = '160px';
    pecaQC_Result.style.transform = 'translateX(-10px)';
    // Peça Performance
    pecaQC_Perfor.style.height    = '113px';
    pecaQC_Perfor.style.transform = 'translateY(0)';
    // Peça Interferência
    pecaQC_Interf.style.height    = '139px';
    pecaQC_Interf.style.transform = 'translateX(-32px)';

    // Conteúdo da peça clicada
    infoPadrao.style.display        = 'none';
    infoResultado.style.display     = 'block';
    infoPerformance.style.display   = 'none';
    infoInterferencia.style.display = 'none';
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
const pecaQC_Perfor        = document.getElementById('pecaQC_Perfor');
const infoPerformance      = document.querySelectorAll('.pecaInformacao')[2];
const modalPerformance     = document.querySelectorAll('.modal')[1];
const btn_Performance      = document.querySelector('#btn-performance');
const sairModalPerformance = document.querySelectorAll('.sairModal')[1];

pecaQC_Perfor.addEventListener('click', () => {
    // Peça Resultado
    pecaQC_Result.style.height    = '139px';
    pecaQC_Result.style.transform = 'translateX(-10px)';
    
    // Peça clicada
    pecaQC_Perfor.style.height   = '140px';
    pecaQC_Perfor.style.transform = 'translateY(-10px)';

    // Peça Resultado
    pecaQC_Interf.style.height    = '139px';
    pecaQC_Interf.style.transform = 'translateX(10px)';
    
    // Conteúdo da peça clicada
    infoPadrao.style.display        = 'none';
    infoResultado.style.display     = 'none';
    infoPerformance.style.display   = 'block';
    infoInterferencia.style.display = 'none';
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
const pecaQC_Interf          = document.getElementById('pecaQC_Interf');
const infoInterferencia      = document.querySelectorAll('.pecaInformacao')[3];
const modalInterferencia     = document.querySelectorAll('.modal')[2];
const btn_Interferencia      = document.querySelector('#btn-interferencia');
const sairModalInterferencia = document.querySelectorAll('.sairModal')[2];

pecaQC_Interf.addEventListener('click', () => {
    // Peça Resultado
    pecaQC_Result.style.height    = '139px';
    pecaQC_Result.style.transform = 'translateX(32px)';

    // Peça Performance
    pecaQC_Perfor.style.height    = '113px';
    pecaQC_Perfor.style.transform = 'translateY(0)';

    // Peça clicada
    pecaQC_Interf.style.height = '160px';
    pecaQC_Interf.style.transform = 'translateX(10px)';

    // Conteúdo da peça clicada
    infoPadrao.style.display        = 'none';
    infoResultado.style.display     = 'none';
    infoPerformance.style.display   = 'none';
    infoInterferencia.style.display = 'block';
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