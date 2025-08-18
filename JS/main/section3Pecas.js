const conteinarPecas = document.getElementById('conteinarPecas');
const fundoPadrao    = 'Imagens/Quebra-cabeça/fundoPecasPadrao.jpg';
const infoPadrao     = document.querySelectorAll('.pecaInformacao')[0];
const escurecer      = document.getElementById('escurecer');

// Media query
const tela_459_598 = window.matchMedia('(min-width: 459px) and (max-width: 598px)');
const tela_390_458 = window.matchMedia('(min-width: 390px) and (max-width: 458px)');
const tela_389     = window.matchMedia('(max-width: 389px)');


// Resultado
// Caminhos relativos ao HTML
const pecaQC_Result      = document.getElementById('pecaQC_Result');
const infoResultado      = document.querySelectorAll('.pecaInformacao')[1];
const modalResultado     = document.querySelectorAll('.modal')[0];
const btn_resultado      = document.querySelector('#btn-resultado');
const sairModalResultado = document.querySelectorAll('.sairModal')[0];

pecaQC_Result.addEventListener('click', () => {
    // Tela entre 459px - 598px
    if(tela_459_598.matches){
        if(pecaQC_Result.offsetHeight === 139){
            // Sombra da caixa
            conteinarPecas.style.boxShadow = '0 0 20px 5px #030D0F';

            // Peça Resultado
            pecaQC_Result.style.height    = '159px';
            pecaQC_Result.style.transform = 'translateX(-5px)';
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
        }   else{
                // Sombra da caixa
                conteinarPecas.style.boxShadow = '0 0 20px 0 #8aa4a7';

                // Peça Resultado
                pecaQC_Result.style.height    = '139px';
                pecaQC_Result.style.transform = 'translateX(33px)';

                // Conteúdo da peça clicada
                infoPadrao.style.display        = 'block';
                infoResultado.style.display     = 'none';
                infoPerformance.style.display   = 'none';
                infoInterferencia.style.display = 'none';
            }
    }
    // Tela entre 390px - 458px
    else if(tela_390_458.matches){
        if(pecaQC_Result.offsetHeight === 118){
            // Sombra da caixa
            conteinarPecas.style.boxShadow = '0 0 20px 5px #030D0F';

            // Peça Resultado
            pecaQC_Result.style.height    = '139px';
            pecaQC_Result.style.transform = 'translateX(-5px)';
            // Peça Performance
            pecaQC_Perfor.style.height    = '95px';
            pecaQC_Perfor.style.transform = 'translateY(0)';
            // Peça Interferência
            pecaQC_Interf.style.height    = '118px';
            pecaQC_Interf.style.transform = 'translateX(-32px)';

            // Conteúdo da peça clicada
            infoPadrao.style.display        = 'none';
            infoResultado.style.display     = 'block';
            infoPerformance.style.display   = 'none';
            infoInterferencia.style.display = 'none';
        }   else{
                // Sombra da caixa
                conteinarPecas.style.boxShadow = '0 0 20px 0 #8aa4a7';

                // Peça Resultado
                pecaQC_Result.style.height    = '118px';
                pecaQC_Result.style.transform = 'translateX(28px)';

                // Conteúdo da peça clicada
                infoPadrao.style.display        = 'block';
                infoResultado.style.display     = 'none';
                infoPerformance.style.display   = 'none';
                infoInterferencia.style.display = 'none';
            }
    }
    // Tela de no máximo 389px
    else if(tela_389.matches){
        if(pecaQC_Result.offsetHeight === 90){
            // Sombra da caixa
            conteinarPecas.style.boxShadow = '0 0 20px 5px #030D0F';

            // Peça Resultado
            pecaQC_Result.style.height    = '100px';
            pecaQC_Result.style.transform = 'translateX(0)';
            // Peça Performance
            pecaQC_Perfor.style.height    = '73px';
            pecaQC_Perfor.style.transform = 'translateY(0)';
            // Peça Interferência
            pecaQC_Interf.style.height    = '90px';
            pecaQC_Interf.style.transform = 'translateX(-22px)';

            // Conteúdo da peça clicada
            infoPadrao.style.display        = 'none';
            infoResultado.style.display     = 'block';
            infoPerformance.style.display   = 'none';
            infoInterferencia.style.display = 'none';
        }   else{
                // Sombra da caixa
                conteinarPecas.style.boxShadow = '0 0 20px 0 #8aa4a7';

                // Peça Resultado
                pecaQC_Result.style.height    = '90px';
                pecaQC_Result.style.transform = 'translateX(22px)';

                // Conteúdo da peça clicada
                infoPadrao.style.display        = 'block';
                infoResultado.style.display     = 'none';
                infoPerformance.style.display   = 'none';
                infoInterferencia.style.display = 'none';
            }
    }
    // Telas de no mínimo 599px
    else{
        // Ao clicar na peça, irá mostrar seu conetúdo e esconder os demais caso tenha sido clicado em outra peça antes dessa
        if(pecaQC_Result.offsetHeight === 179){
            // Sombra da caixa
            conteinarPecas.style.boxShadow = '0 0 20px 5px #030D0F';

            // Peça Resultado
            pecaQC_Result.style.height    = '189px';
            pecaQC_Result.style.transform = 'translateX(-10px)';
            // Peça Performance
            pecaQC_Perfor.style.height    = '145px';
            pecaQC_Perfor.style.transform = 'translateY(0)';
            // Peça Interferência
            pecaQC_Interf.style.height    = '179px';
            pecaQC_Interf.style.transform = 'translateX(-42px)';

            // Conteúdo da peça clicada
            infoPadrao.style.display        = 'none';
            infoResultado.style.display     = 'block';
            infoPerformance.style.display   = 'none';
            infoInterferencia.style.display = 'none';
        } 
        // Serve para quando clicar novamente na peça, voltar para o conteúdo default
        else{
            // Sombra da caixa
            conteinarPecas.style.boxShadow = '0 0 20px 0 #8aa4a7';

            // Peça Resultado
            pecaQC_Result.style.height    = '179px';
            pecaQC_Result.style.transform = 'translateX(42px)';

            // Conteúdo da peça clicada
            infoPadrao.style.display        = 'block';
            infoResultado.style.display     = 'none';
            infoPerformance.style.display   = 'none';
            infoInterferencia.style.display = 'none';
        }
    }
});

// Performance
// Caminhos relativos ao HTML
const pecaQC_Perfor        = document.getElementById('pecaQC_Perfor');
const infoPerformance      = document.querySelectorAll('.pecaInformacao')[2];
const modalPerformance     = document.querySelectorAll('.modal')[1];
const btn_Performance      = document.querySelector('#btn-performance');
const sairModalPerformance = document.querySelectorAll('.sairModal')[1];

pecaQC_Perfor.addEventListener('click', () => {
    // Tela entre 459px - 598px
    if(tela_459_598.matches){
        if(pecaQC_Perfor.offsetHeight === 113){
            // Sombra da caixa
            conteinarPecas.style.boxShadow = '0 0 20px 5px #11BCE8';

            // Peça Resultado
            pecaQC_Result.style.height    = '139px';
            pecaQC_Result.style.transform = 'translateX(-10px)';
            // Peça Performance
            pecaQC_Perfor.style.height    = '133px';
            pecaQC_Perfor.style.transform = 'translateY(-15px)';
            // Peça Interferência
            pecaQC_Interf.style.height    = '139px';
            pecaQC_Interf.style.transform = 'translateX(10px)';

            // Conteúdo da peça clicada
            infoPadrao.style.display        = 'none';
            infoResultado.style.display     = 'none';
            infoPerformance.style.display   = 'block';
            infoInterferencia.style.display = 'none';
        }   else{
                // Sombra da caixa
                conteinarPecas.style.boxShadow = '0 0 20px 5px #8aa4a7';

                // Peça Resultado
                pecaQC_Result.style.transform = 'translateX(33px)';
                // Peça Performance
                pecaQC_Perfor.style.height    = '113px';
                pecaQC_Perfor.style.transform = 'translateY(0)';
                // Peça Interferência
                pecaQC_Interf.style.transform = 'translateX(-33px)';

                // Conteúdo da peça clicada
                infoPadrao.style.display        = 'block';
                infoResultado.style.display     = 'none';
                infoPerformance.style.display   = 'none';
                infoInterferencia.style.display = 'none';
            }
    } 
    // Tela entre 390px - 458px
    else if(tela_390_458.matches){
        if(pecaQC_Perfor.offsetHeight === 95){
            // Sombra da caixa
            conteinarPecas.style.boxShadow = '0 0 20px 5px #11BCE8';

            // Peça Resultado
            pecaQC_Result.style.height    = '118px';
            pecaQC_Result.style.transform = 'translateX(-5px)';
            // Peça Performance
            pecaQC_Perfor.style.height    = '106px';
            pecaQC_Perfor.style.transform = 'translateY(-15px)';
            // Peça Interferência
            pecaQC_Interf.style.height    = '118px';
            pecaQC_Interf.style.transform = 'translateX(5px)';

            // Conteúdo da peça clicada
            infoPadrao.style.display        = 'none';
            infoResultado.style.display     = 'none';
            infoPerformance.style.display   = 'block';
            infoInterferencia.style.display = 'none';
        }   else{
                // Sombra da caixa
                conteinarPecas.style.boxShadow = '0 0 20px 5px #8aa4a7';

                // Peça Resultado
                pecaQC_Result.style.transform = 'translateX(28px)';
                // Peça Performance
                pecaQC_Perfor.style.height    = '95px';
                pecaQC_Perfor.style.transform = 'translateY(0)';
                // Peça Interferência
                pecaQC_Interf.style.transform = 'translateX(-28px)';

                // Conteúdo da peça clicada
                infoPadrao.style.display        = 'block';
                infoResultado.style.display     = 'none';
                infoPerformance.style.display   = 'none';
                infoInterferencia.style.display = 'none';
            }
    }
    // Tela de no máximo 389px
    else if(tela_389.matches){
        if(pecaQC_Perfor.offsetHeight === 73){
            // Sombra da caixa
            conteinarPecas.style.boxShadow = '0 0 20px 5px #11BCE8';

            // Peça Resultado
            pecaQC_Result.style.height    = '90px';
            pecaQC_Result.style.transform = 'translateX(0)';
            // Peça Performance
            pecaQC_Perfor.style.height    = '80px';
            pecaQC_Perfor.style.transform = 'translateY(-15px)';
            // Peça Interferência
            pecaQC_Interf.style.height    = '90px';
            pecaQC_Interf.style.transform = 'translateX(0)';

            // Conteúdo da peça clicada
            infoPadrao.style.display        = 'none';
            infoResultado.style.display     = 'none';
            infoPerformance.style.display   = 'block';
            infoInterferencia.style.display = 'none';
        }   else{
                // Sombra da caixa
                conteinarPecas.style.boxShadow = '0 0 20px 5px #8aa4a7';

                // Peça Resultado
                pecaQC_Result.style.transform = 'translateX(22px)';
                // Peça Performance
                pecaQC_Perfor.style.height    = '73px';
                pecaQC_Perfor.style.transform = 'translateY(0)';
                // Peça Interferência
                pecaQC_Interf.style.transform = 'translateX(-22px)';

                // Conteúdo da peça clicada
                infoPadrao.style.display        = 'block';
                infoResultado.style.display     = 'none';
                infoPerformance.style.display   = 'none';
                infoInterferencia.style.display = 'none';
        }
    }
    // Telas de no mínimo 599px
    else{
        // Ao clicar na peça, irá mostrar seu conetúdo e esconder os demais caso tenha sido clicado em outra peça antes dessa
        if(pecaQC_Perfor.offsetHeight === 145){
            // Sombra da caixa
            conteinarPecas.style.boxShadow = '0 0 20px 5px #11BCE8';
    
            // Peça Resultado
            pecaQC_Result.style.height    = '179px';
            pecaQC_Result.style.transform = 'translateX(-10px)';
            
            // Peça clicada
            pecaQC_Perfor.style.height   = '150px';
            pecaQC_Perfor.style.transform = 'translateY(-10px)';
    
            // Peça Resultado
            pecaQC_Interf.style.height    = '179px';
            pecaQC_Interf.style.transform = 'translateX(10px)';
            
            // Conteúdo da peça clicada
            infoPadrao.style.display        = 'none';
            infoResultado.style.display     = 'none';
            infoPerformance.style.display   = 'block';
            infoInterferencia.style.display = 'none';
        }
        // Serve para quando clicar novamente na peça, voltar para o conteúdo default
        else{
            // Sombra da caixa
            conteinarPecas.style.boxShadow = '0 0 20px 0 #8aa4a7';

            // Peça clicada
            pecaQC_Perfor.style.height   = '145px';
            pecaQC_Result.style.transform = 'translateX(42px)';
            pecaQC_Perfor.style.transform = 'translateY(0px)';
            pecaQC_Interf.style.transform = 'translateX(-42px)';

            // Conteúdo da peça clicada
            infoPadrao.style.display        = 'block';
            infoResultado.style.display     = 'none';
            infoPerformance.style.display   = 'none';
            infoInterferencia.style.display = 'none';
        }
    }
});

// Interferência
// Caminhos relativos ao HTML
const pecaQC_Interf          = document.getElementById('pecaQC_Interf');
const infoInterferencia      = document.querySelectorAll('.pecaInformacao')[3];
const modalInterferencia     = document.querySelectorAll('.modal')[2];
const btn_Interferencia      = document.querySelector('#btn-interferencia');
const modal_Interferencia    = document.querySelector('#modal-Interferencia')
const sairModalInterferencia = document.querySelectorAll('.sairModal')[2];


pecaQC_Interf.addEventListener('click', () => {
    // Tela entre 459px - 598px
    if(tela_459_598.matches){
        if(pecaQC_Interf.offsetHeight === 139){
            // Sombra da caixa
            conteinarPecas.style.boxShadow = '0 0 20px 5px #C32224';

            // Peça Resultado
            pecaQC_Result.style.height    = '139px';
            pecaQC_Result.style.transform = 'translateX(32px)';

            // Peça Performance
            pecaQC_Perfor.style.height    = '113px';
            pecaQC_Perfor.style.transform = 'translateY(0)';

            // Peça clicada
            pecaQC_Interf.style.height = '159px';
            pecaQC_Interf.style.transform = 'translateX(5px)';

            // Conteúdo da peça clicada
            infoPadrao.style.display        = 'none';
            infoResultado.style.display     = 'none';
            infoPerformance.style.display   = 'none';
            infoInterferencia.style.display = 'block';
        }   else{
                // Sombra da caixa
                conteinarPecas.style.boxShadow = '0 0 20px 5px #8aa4a7';

                // Peça Resultado
                pecaQC_Interf.style.height    = '139px';
                pecaQC_Interf.style.transform = 'translateX(-32px)';

                // Conteúdo da peça clicada
                infoPadrao.style.display        = 'block';
                infoResultado.style.display     = 'none';
                infoPerformance.style.display   = 'none';
                infoInterferencia.style.display = 'none';
            }
    }
    // Tela entre 390px - 458px
    else if(tela_390_458.matches){
        if(pecaQC_Interf.offsetHeight === 118){
            // Sombra da caixa
            conteinarPecas.style.boxShadow = '0 0 20px 5px #C32224';

            // Peça Resultado
            pecaQC_Result.style.height    = '118px';
            pecaQC_Result.style.transform = 'translateX(32px)';

            // Peça Performance
            pecaQC_Perfor.style.height    = '95px';
            pecaQC_Perfor.style.transform = 'translateY(0)';

            // Peça clicada
            pecaQC_Interf.style.height = '139px';
            pecaQC_Interf.style.transform = 'translateX(5px)';

            // Conteúdo da peça clicada
            infoPadrao.style.display        = 'none';
            infoResultado.style.display     = 'none';
            infoPerformance.style.display   = 'none';
            infoInterferencia.style.display = 'block';
        }   else{
            // Sombra da caixa
            conteinarPecas.style.boxShadow = '0 0 20px 5px #8aa4a7';

            // Peça Resultado
            pecaQC_Interf.style.height    = '118px';
            pecaQC_Interf.style.transform = 'translateX(-32px)';

            // Conteúdo da peça clicada
            infoPadrao.style.display        = 'block';
            infoResultado.style.display     = 'none';
            infoPerformance.style.display   = 'none';
            infoInterferencia.style.display = 'none';
        }
    } 
    // Tela de no máximo 389px
    else if(tela_389.matches){
        btn_Interferencia.addEventListener('click', () => { conteinarPecas.style.height = '420px' });

        if(pecaQC_Interf.offsetHeight === 90){
            // Sombra da caixa
            conteinarPecas.style.boxShadow = '0 0 20px 5px #C32224';

            // Peça Resultado
            pecaQC_Result.style.height    = '90px';
            pecaQC_Result.style.transform = 'translateX(22px)';

            // Peça Performance
            pecaQC_Perfor.style.height    = '73px';
            pecaQC_Perfor.style.transform = 'translateY(0)';

            // Peça clicada
            pecaQC_Interf.style.height = '100px';
            pecaQC_Interf.style.transform = 'translateX(0)';

            // Conteúdo da peça clicada
            infoPadrao.style.display        = 'none';
            infoResultado.style.display     = 'none';
            infoPerformance.style.display   = 'none';
            infoInterferencia.style.display = 'block';
        }   else{
            // Sombra da caixa
            conteinarPecas.style.boxShadow = '0 0 20px 5px #8aa4a7';

            // Peça Resultado
            pecaQC_Interf.style.height    = '90px';
            pecaQC_Interf.style.transform = 'translateX(-22px)';

            // Conteúdo da peça clicada
            infoPadrao.style.display        = 'block';
            infoResultado.style.display     = 'none';
            infoPerformance.style.display   = 'none';
            infoInterferencia.style.display = 'none';
            }
    }
    // Telas de no mínimo 599px
    else{
        // Ao clicar na peça, irá mostrar seu conetúdo e esconder os demais caso tenha sido clicado em outra peça antes dessa
        if(pecaQC_Interf.offsetHeight === 179){
            // Sombra da caixa
            conteinarPecas.style.boxShadow = '0 0 20px 5px #C32224';
    
            // Peça Resultado
            pecaQC_Result.style.height    = '179px';
            pecaQC_Result.style.transform = 'translateX(42px)';
    
            // Peça Performance
            pecaQC_Perfor.style.height    = '145px';
            pecaQC_Perfor.style.transform = 'translateY(0)';
    
            // Peça clicada
            pecaQC_Interf.style.height = '189px';
            pecaQC_Interf.style.transform = 'translateX(10px)';
    
            // Conteúdo da peça clicada
            infoPadrao.style.display        = 'none';
            infoResultado.style.display     = 'none';
            infoPerformance.style.display   = 'none';
            infoInterferencia.style.display = 'block';
        } 
        // Serve para quando clicar novamente na peça, voltar para o conteúdo default
        else{
            // Sombra da caixa
            conteinarPecas.style.boxShadow = '0 0 20px 0 #8aa4a7';

            // Peça clicada
            pecaQC_Interf.style.height    = '179px';
            pecaQC_Interf.style.transform = 'translateX(-42px)';

            // Conteúdo da peça clicada
            infoPadrao.style.display        = 'block';
            infoResultado.style.display     = 'none';
            infoPerformance.style.display   = 'none';
            infoInterferencia.style.display = 'none';
        }
    }
});


// Parte para Abrir/Fechar modal
const tabAbrirModal = document.querySelectorAll('.containerInfo button');
const tabModals     = document.querySelectorAll('.modal');
const tabSairModal  = document.querySelectorAll('.sairModal');

// Abrir o modal
function abrirModal(index){
    // Abre o modal respectivo ao botão "Saiba Mais" clicado
    tabModals[index].classList.add('abrirModal');

    // Coloca um fundo preto por trás do modal aberto
    escurecer.style.display = 'block';
}

// Chama a função ao clicar no botão "Saiba Mais", que é o item de navegação 
tabAbrirModal.forEach((button, index) => {  // O argumento index é referente ao index de cada butão (item de navegação) 
    button.addEventListener('click', () => { abrirModal(index); });
});

// Fechar o modal
function fecharModal(index){
    // Fecha o modal respectivo ao botão "Sair" clicado
    tabModals[index].classList.remove('abrirModal');

    // Coloca um fundo preto por trás do modal aberto
    escurecer.style.display = 'none';
}

// Chama a função ao clicar no botão "Sair" do modal, que é o item de navegação
tabSairModal.forEach((btnSair, index) => {  // O argumento index é referente ao index de cada butão (item de navegação) 
    btnSair.addEventListener('click', () => {fecharModal(index); });
});