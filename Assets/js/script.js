const form = document.querySelector(".form");
const valorImc = document.querySelector('.valor');
const info = document.querySelector('.info');
const spanText = document.querySelector(".texto");

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    calcularIMC();
})

function calcularIMC(){
const peso = document.getElementById('peso').value;
const altura = parseFloat(document.getElementById('altura').value);
const imc = (peso / (altura * altura)).toFixed(2)
    if(imc < 18.5){
         valorImc.textContent = imc.replace('.', ',');
         info.style.display = "block"
         spanText.textContent =  `Cuidado você esta Abaixo do Peso!`
    }else if(imc >= 18.5 && imc <= 24.9){
         valorImc.textContent = imc.replace('.', ',');
         info.style.display = "block"
         spanText.textContent =  `Parebéns você esta no Peso ideal!`
    }else if(imc > 24.9 && imc <=30){
         valorImc.textContent = imc.replace('.', ',');
         info.style.display = "block"
         spanText.textContent =  `Cuidado você esta com do SobrePeso!`
   }else if(imc >30 && imc <=35){
         valorImc.textContent = imc.replace('.', ',');
         info.style.display = "block"
         spanText.textContent =  `Cuidado você esta com do Obesidade grau 1!`
    }else if(imc>35 && imc <=40){
         valorImc.textContent = imc.replace('.', ',');
         info.style.display = "block"
         spanText.textContent =  `Cuidado você esta com do Obesidade grau 2!`
    }else if(imc>35 && imc <=40){
        valorImc.textContent = imc.replace('.', ',');
        info.style.display = "block"
        spanText.textContent =  `Cuidado você esta com do Obesidade grau 3!`
    }else{
        valorImc.textContent = imc.replace('.', ',');
        info.style.display = "block"
        spanText.textContent =  `Cuidado você esta com do Obesidade Morbida!`
}
}

function limparDados(){
    info.style.display = "none"
    form.reset();
}