var precogasolina = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 3
})

var hanDecimalRMBInChina = new Intl.NumberFormat("zh-CN-u-nu-hanidec", {
    style: "currency",
    currency: "CNY"
})


// Testes de Console
console.log(precogasolina)
console.log(precogasolina.format(5.259))
console.log(hanDecimalRMBInChina.format(1314.25))