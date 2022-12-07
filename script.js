const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active")
    }))

const form = document.getElementById('form')
const namn = document.getElementById('namn') 
const medlemsnr = document.getElementById('medlemsnr')
const bastu = document.getElementById('bastu')
const banor = document.getElementById('banor')

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
})

function validateInputs(){
    const namnValue = namn.value.trim();
    const medlemsnrValue = medlemsnr.value.trim();
    const datumValue = datum.value.trim();
    const banorValue = banor.value.trim();

    if(namnValue == ''){
        validateError(namn, 'Du måste fylla i ditt namn')
    }
    if(medlemsnrValue == ''){
        validateError(medlemsnr, 'Du måste fylla i ditt medlemsnummer')
    }
    if(datumValue == ''){
        validateError(datum, 'Du måste välja ett bokningsdatum')
    }
    if(banorValue == ''){
        validateError(banor, 'Du måste fylla i antal banor')
    }
}

// function validateInputsBastu(){
//     const namnValue = namn.value.trim()
//     const medlemsnrValue = medlemsnr.value.trim()
//     const datumValue = datum.value.trim()

//     if(namnValue == ''){
//         validateError(namn, 'Du måste fylla i ditt namn')
//     }
//     if(medlemsnrValue == ''){
//         validateError(medlemsnr, 'Du måste fylla i ditt medlemsnummer')
//     }
//     if(datumValue == ''){
//         validateError(datum, 'Du måste välja ett bokningsdatum')
//     }
// }

function validateError(input, errorMsg){
    const inputControl = input.parentElement;
    inputControl.className = 'input-control failed';
    const small = inputControl.querySelector('small');

    small.innerText = errorMsg;
}