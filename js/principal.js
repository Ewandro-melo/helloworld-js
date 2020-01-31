var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);
for (var i = 0; i < pacientes.length ; i++){
    console.log 
}

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;



var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alutraEhValida = true;

if (peso < 0 || peso >= 1000 ){
    console.log("Peso inválido");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido ";
}

if (altura <= 0 || altura >= 3.00) {
    console.log("Altura inválida");
    alutraEhValida = false;
    tdImc.textContent = "Altura inválida ";
}

if (alutraEhValida && pesoEhValido){    
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}
