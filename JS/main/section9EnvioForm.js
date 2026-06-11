// Variáveis Globais
const formContainer = document.querySelector('form');
const formBtnEnviar = document.querySelector('form button');


// Envio dos dados do form
formContainer.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(formContainer);
    formData.append("access_key", "ef9920a6-0592-45f0-a762-f63379f617a3"); // Web3Forms - Chave de acesso


    // ======== Personaliza o e-mail que chega após enviar pelo form do site ========
    
    // Pega o que o usuário digitou no campo "Nome"
    const usuarioNomeu = formData.get("Nome"); 
    // Pega o que o usuário digitou no campo "Assunto"
    const usuarioAssunto = formData.get("Assunto") || "Nova mensagem do site"; 
    // Quando receber um e-mail vindo do form do site, vai aparecer logo de cara quem enviou e o assunto da mensagem.
    formData.set("subject", `De: ${usuarioNomeu} | ${usuarioAssunto}`);
    
    // ======== FIM ========


    // Altera o texto do botão após clicar em "Enviar", desabilita o botão e só volta ao normal após fechar o alert que aparece
    const originalText = formBtnEnviar.textContent;
    formBtnEnviar.textContent = "Enviando e-mail...";
    formBtnEnviar.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("✅ E-mail enviado com sucesso!!");
            formContainer.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("⚠️ Algo deu errado ao enviar o e-mail, tente novamente.");
    } finally {
        formBtnEnviar.textContent = originalText;
        formBtnEnviar.disabled = false;
    }
});