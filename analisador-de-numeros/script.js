let txtNumber = document.getElementById('txtNumber')
let addNumber = document.getElementById('addButton')
let selectField = document.getElementById('selectField')
let finalButton = document.getElementById('finalButton')
let resDiv = document.getElementsByClassName('resField')[0]

let number = [] // Array


addNumber.addEventListener('click', addValues)
finalButton.addEventListener('click', finalValue)


function addValues(){

    console.log(number)
    resDiv.innerHTML = ''

    let valueNumber = Number(txtNumber.value) 

    if(valueNumber > 100 || valueNumber < 0 || number.indexOf(valueNumber) != -1){
        alert('Numero já adicionado ou fora do espectro de 0 -- 100')
    }else{
        number.push(valueNumber)
        let item = document.createElement('option')
        item.text = valueNumber
        selectField.appendChild(item)

       for(let i = 0; i < number.length; i++){
        selectField.setAttribute('size',i)
       }
    }
}

function finalValue(){
    let maiorNumber = null
    let menorNumber = number[0]
    let soma = null

    for(let i = 0; i < number.length; i++){
        if(maiorNumber <= number[i]){
            maiorNumber = number[i]

        }else{
            menorNumber <= number[i]?console.log('Continua o Mesmo'):menorNumber = number[i]
        }
    }
    for(i=0;i<number.length;i++){
        soma += number[i] 
    }
    let divisao = soma/number.length
    resDiv.innerHTML = `No total foram adicionados ${number.length} Valores <br> O maior numero é: ${maiorNumber} <br> O menor numero é: ${menorNumber} <br> A soma total é de: ${soma} <br> && a média final é de: ` + divisao.toFixed(2)
}

    // // Script para adicionar valores ao array
    // if(valueNumber > 100 || valueNumber < 0 ){
    //     alert('[Error], Numero maior que 100 ou menor que 0.')

    // }else{
    //     for(let i = 0;i<number.length;i++){
    //         if(valueNumber == number[i]){
    //             alert('Numero já digitado.')
    //         }else{
    //             alert('Numero Adicionado.')

    //         }
    //     }
    // }
    // return number.push(valueNumber)
// else{
//     // Retorna ao Array o valor
//     return number.push(valueNumber)
// }