var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length ; i++){
    var paciente = pacientes[i];


    //calculo do imc 
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;



    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alutraEhValida = true;

    if (peso < 0 || peso >= 1000 ){
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido ";
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00) {
        alutraEhValida = false;
        tdImc.textContent = "Altura inválida ";
        paciente.classList.add("paciente-invalido");
    }

    if (alutraEhValida && pesoEhValido){    
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("Click",function(event){
    event.preventDefault();
    
    var from = document.querySelector("#from-adiciona");
    console.log(from.altura.value);
    console.log(from.peso.value);
});

