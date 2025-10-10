const campo_input = document.querySelector("#campo-input")
const form_simples = document.querySelector("#form-simples")
const Resultado = document.querySelector("#resultado")
const btn_enviar = document.querySelector("#btn-enviar")

/*
Eventos:

click, focus, input, change,
focusin, focusout, keyup
keydown
*/

function mostrar_mensagem(valorInput){
    const msg = `
        Nome do Cliente: ${valorInput}
    `;
    return Resultado.innerHTML = msg;
}

btn_enviar.addEventListener("click", (e) => {
    e.preventDefault();
    const campo_input_valor = campo_input.value
    // innerHTML => coloca informação no html
    // Resultado.innerHTML = campo_input_valor;
    mostrar_mensagem(campo_input_valor)
});