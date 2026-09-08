var btn_calcular = document.getElementById("btn")
var divResultado = document.getElementById("resultado")

btn_calcular.onclick = function() {
    var peso = parseFloat(document.getElementById("peso").value)
    var altura = parseFloat(document.getElementById("altura").value) / 100

    if(!peso || !altura) {
        divResultado.innerHTML = "<p class='erro'>Por favor, preencha todos os campos!</p>"
        return
    }

    var calculo = peso / (altura * altura)
    var imcFormatado = calculo.toFixed(1)
    var classificacao = ""

    if (calculo < 18.5) {
        classificacao = "Magreza"
    }
    else if (calculo >= 18.5 && calculo <= 24.9) {
        classificacao = "Peso Normal"
    }
    else if (calculo >= 25 && calculo <= 29.9) {
        classificacao = "Sobrepeso"
    }
    else if (calculo >= 30 && calculo <= 39.9) {
        classificacao = "Obesidade"
    }
    else if (calculo >= 40) {
        classificacao = "Obesidade Grave"
    }

    // Exibe o resultado direto na tela via innerHTML
    divResultado.innerHTML = `
        <div class="card-resultado">
            <p>Seu IMC é: <strong>${imcFormatado}</strong></p>
            <p>Classificação: <strong>${classificacao}</strong></p>
        </div>
    `

    console.log(calculo)
}