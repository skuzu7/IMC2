const firstDiv = document.querySelector('.first-step');
const secondDiv = document.querySelector('.second-step');
const thirdDiv = document.querySelector('.third-step');


function go(currentStep, Nextstep) {

    let dNone, dBlock;

    if (currentStep == 1) {
        dNone = firstDiv;
    }

    else if (currentStep == 2) {
        dNone = secondDiv;

    }

    else {

        dNone = thirdDiv;
    }

    dNone.style.display = 'none';


    if (Nextstep == 1) {
        dBlock = firstDiv;
    }

    else if (Nextstep == 2) {
        dBlock = secondDiv;

    }

    else {

        dBlock = thirdDiv;
    }

    dBlock.style.display = 'block';

}


function validate() {

    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');

    peso.style.border = 'none'
    altura.style.border = 'none'



    if (!peso.value || !altura.value) {

        if (!peso.value && !altura.value) {

            peso.style.border = '1px solid red'
            altura.style.border = '1px solid red'
        }
        else if (!peso.value) {

            peso.style.border = '1px solid red'


        }

        else {
            altura.style.border = '1px solid red'

        }
    }

    else {

        let imc = peso.value / (altura.value * altura.value);
        const result=document.getElementById('resultado');

        if (imc < 18.5) {

      
            result.innerHTML = 'magreza';
        }

        else if (imc >= 18.5 && imc < 25) {

            result.innerHTML = 'normal';
        }

        else if (imc >= 25 && imc < 30) {

            result.innerHTML = 'gordo';
        }

        else if (imc >= 30 && imc < 40) {

            result.innerHTML = 'muito gordo';
        }

        else if (imc > 40) {

            result.innerHTML = 'vai morrer';
        }
    go(2,3)
        
    }
    





}

  
  


