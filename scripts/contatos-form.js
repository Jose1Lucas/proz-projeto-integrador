  // ------------------------ Validação (Funções de estilo)--------------------------//
  function estilizarIncorreto(input, helper, mensagem) {
    input.classList.add("error");
    input.classList.remove("correct");
    helper.innerText = mensagem;
    helper.classList.add("visible");
  }
  
  function estilizarCorreto(input, helper) {
    input.classList.remove("error");
    input.classList.add("correct");
    helper.innerText = "";
    helper.classList.remove("visible");
  }
  
  // ------------------------ Validação do campo Nome --------------------------//
  const nomeInput = document.getElementById("nome");
  const nomeHelper = document.getElementById("nome-helper");
  
  nomeInput.addEventListener("input", (e) => {
    const valor = e.target.value;
  
    if (valor.length < 3) {
      estilizarIncorreto(
        nomeInput,
        nomeHelper,
        "O nome deverá conter pelo menos 3 caracteres"
      );
    } else {
      estilizarCorreto(nomeInput, nomeHelper);
    }
  });
  
  // ------------------------ Validação do campo E-mail --------------------------//
  const emailInput = document.getElementById("email");
  const emailHelper = document.getElementById("email-helper");
  
  emailInput.addEventListener("input", (e) => {
    const valor = e.target.value;
  
    if (!valor.includes("@") || valor.length < 5) {
      estilizarIncorreto(emailInput, emailHelper, "Digite um e-mail válido");
    } else {
      estilizarCorreto(emailInput, emailHelper);
    }
  });
  
 // ------------------------ Validação do campo Mensagem --------------------------//
  const mensagemInput = document.getElementById("mensagem");
  const mensagemHelper = document.getElementById("mensagem-helper");
  
  mensagemInput.addEventListener("input", (e) => {
    const valor = e.target.value;
  
    if (valor.length < 50 || valor.length > 500) {
      estilizarIncorreto(
        mensagemInput,
        mensagemHelper,
        "Sua mensagem não pode conter menos de 50 caracteres e não pode ultrapassar 500"
      );
    } else {
      estilizarCorreto(mensagemInput, mensagemHelper);
    }
  });
  
// ------------------------ Envio do formulário --------------------------//
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); // Para evitar o envio do formulário padrão

  // ------------------------ Verificação de erros dos campos --------------------------//
  const nomeValido = !nomeInput.classList.contains("error") && nomeInput.value.trim().length >= 3;
  const emailValido = !emailInput.classList.contains("error") && emailInput.value.includes("@");
  const mensagemValida =
    !mensagemInput.classList.contains("error") &&
    mensagemInput.value.trim().length >= 50 &&
    mensagemInput.value.trim().length <= 500;

  if (nomeValido && emailValido && mensagemValida) {
    // ------------------------ Mostra a mensagem de Sucesso --------------------------//
    alert("Formulário enviado com sucesso");

    // ------------------------ Limpa os campos manualmente --------------------------//
    nomeInput.value = "";
    emailInput.value = "";
    mensagemInput.value = "";

    // ------------------------ Remove os estilos --------------------------//
    [nomeInput, emailInput, mensagemInput].forEach((input) => {
      input.classList.remove("correct", "error");
    });

    // ------------------------ Remove as mensagens de ajuda --------------------------//
    [nomeHelper, emailHelper, mensagemHelper].forEach((helper) => {
      helper.innerText = "";
      helper.classList.remove("visible");
    });
  } else {
    // ------------------------ Mostra as mensagens de erro --------------------------//
    alert("Erro! Preencha todos os campos corretamente antes de enviar.");
  }
});