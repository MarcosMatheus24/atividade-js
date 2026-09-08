var btn_calcular = document.getElementById("btn")
btn_calcular.onclick = function(){
    var peso = document.getElementById("peso").value
    var altura = document.getElementById("altura").value / 100
    var calculo = peso / (altura*altura)
    if(calculo < 18.5){
        alert("Magreza")
    }
    else if(calculo > 18.5 && calculo < 24.9){
        alert("Peso Normal")
    }
    else if(calculo > 25 && calculo < 29.9){
        alert("Sobrepeso")
    }
    else if(calculo > 30 && calculo < 39){
        alert("Obesidade")
    }
    else if(calculo > 40){
        alert("Obesidade Grave")
    }
    console.log(calculo)
}
//Abaixo de 18,5: Magreza
//Entre 18,5 e 24,9: Peso normal (adequado)
//Entre 25,0 e 29,9: Sobrepeso
//Entre 30,0 e 39,9: Obesidade
//Maior que 40,0: Obesidade grave