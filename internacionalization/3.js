var nomes = ["Hochberg", "Hönigswald", "Holzman"]

var phonebookAlemao = new Intl.Collator("de-DE-u-co-phonebk")
var dicionarioAlemao = new Intl.Collator("de-DE-u-co-dict");

console.log(nomes.sort(phonebookAlemao.compare).join(', ')); // Essa é no estilo normal
console.log(nomes.sort(dicionarioAlemao.compare).join(', ')); // Essa é sem acentuação

