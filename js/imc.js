const inputAltura = document.getElementById("altura");
const inputpeso = document.getElementById("peso");
const botao = document.getElementById("botao");
const numeroResultado = document.getElementById("numero_resultado")

const abaixoPeso = document.getElementById("abaixoPeso");
const pesoNormal = document.getElementById("normal");
const sobrepeso = document.getElementById("sobrepeso");
const obesidade = document.getElementById("obesidade");
const obesidadeGrave = document.getElementById("obesidadeGrave");



let altura = 0;
let peso = 0;
let imcBruto = 0;

botao.addEventListener("click", handleClick);

function handleClick(){

    
    let imcFinal = 0;

    altura = inputAltura.value;
    peso = inputpeso.value;

    imcBruto = (peso/(altura*altura))*10000;
    imcFinal = parseFloat(imcBruto.toFixed(2));
    numeroResultado.innerText = imcFinal;

    console.log(imcFinal)

    abaixoPeso.classList.remove("resultados");
    pesoNormal.classList.remove("resultados");
    sobrepeso.classList.remove("resultados");
    obesidade.classList.remove("resultados");
    obesidadeGrave.classList.remove("resultados");

    if (imcFinal<=18.5) {

        abaixoPeso.classList.toggle("resultados")

    } 
    
    if (imcFinal>18.5 && imcFinal<=24.9) {

        pesoNormal.classList.toggle("resultados")

    } 
    
    if (imcFinal>24.9 && imcFinal<=29.9) {

        sobrepeso.classList.toggle("resultados")

    }

    if (imcFinal>30 && imcFinal<=39.9) {

        obesidade.classList.toggle("resultados")

    }

    if (imcFinal>40) {

        obesidadeGrave.classList.toggle("resultados")

    }
}

