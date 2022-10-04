# Internacionalização

O objeto ```Intl``` é o _namespace_ para a API de *Internacionalização* do ECMAScript, que oferece **comparação de strings sensíveis à linguagem, formatação de números, e formatação de datas e horas.**

## Formatação de Data e Hora
O objeto ***DateTimeFormat*** é útil para a formatação de data e hora. 

```javascript
/*
var msPorDia = 24 * 60 * 60 * 1000  Fórmula para a quantidade de milissegundos por dia
var july172014 = new Date(msPorDia * (44 * 365 + 11 + 197))
*/

let _2day = new Date()

var opcoes = {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "long" // também pode ser "short"
}

var portugueseDateTime = new Intl.DateTimeFormat("pt-BR", opcoes).format


console.log(portugueseDateTime(_2day))
```

## Formatação de Números
O objeto ***NumberFormat*** é útil para formatar números, por exemplo unidade monetária.

```javascript
var precogasolina = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 3
})

let num_a_ser_passado = 5.259

console.log(precogasolina.format(num_a_ser_passado))
```

## Collation 

O objeto ```Collator``` é usado para **comparar e ordenar strings.**

```javascript
var nomes = ["Hochberg", "Hönigswald", "Holzman"]

var phonebookAlemao = new Intl.Collator("de-DE-u-co-phonebk")
var dicionarioAlemao = new Intl.Collator("de-DE-u-co-dict");

console.log(nomes.sort(phonebookAlemao.compare).join(', ')); // Essa é no estilo normal
console.log(nomes.sort(dicionarioAlemao.compare).join(', ')); // Essa é sem acentuação
```