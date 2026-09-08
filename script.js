var btn_calcular = document.getElementById("btn")
var divResultado = document.getElementById("resultado")

btn_calcular.onclick = function() {
    // Pega os valores e substitui vírgula por ponto para poder converter para número
    var pesoInput = document.getElementById("peso").value.replace(',', '.')
    var alturaInput = document.getElementById("altura").value.replace(',', '.')

    var peso = parseFloat(pesoInput)
    var altura = parseFloat(alturaInput)

    // Validação caso os campos estejam vazios ou inválidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        divResultado.innerHTML = "<p class='erro'>Por favor, digite valores válidos!</p>"
        return
    }

    // Se a altura digitada for maior que 3 (ex: 175), consideramos que foi em centímetros e dividimos por 100
    if (altura > 3) {
        altura = altura / 100
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

    // Exibe o resultado direto na tela
    divResultado.innerHTML = `
        <div class="card-resultado">
            <p>Seu IMC é: <strong>${imcFormatado}</strong></p>
            <p>Classificação: <strong>${classificacao}</strong></p>
        </div>
    `

    console.log("IMC:", calculo)
}