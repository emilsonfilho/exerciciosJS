const input = document.querySelector('input[type="button"]')
const div = document.getElementById('res')
input.addEventListener('click', () => {
    let arr1 = document.getElementsByName('opcao')
    let arr2 = document.getElementsByName('opt')
    let value1
    let value2

    // console.log(arr1)
    // For in para cada um com verificaçõa e retorno e caso verdadeiro apenas
    // diga o novo valor e exiba os result
    for (let el in arr1) {
        if (arr1[el].checked) {
            value1 = arr1[el].value 
        }
    }

    for (let el in arr2) {
        if (arr2[el].checked) {
            value2 = arr2[el].value
        }
    }

    if (value1 === "um" && value2 === "um") {
        div.innerText = "Relação 1:1"
    } else if (value1 === "varios" && value2 === "varios") {
        div.innerText = "Relação N:M"
    } else {
        div.innerText = "Relação 1:N"
    }
})