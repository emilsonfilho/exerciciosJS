A declaração ```try...catch``` coloca um bloco de declarações em try, e especifica uma ou mais respostas para uma exceção lançada. Se uma exceção é lançada, a declaração ```try...catch``` pegá-a.

A declaração ```try...catch``` é composta por um bloco ```try```, que contém uma ou mais declarações, e zero ou mais blocos ```catch```, contendo declarações que especificam o que fazer se uma exceção é lançada no bloco ```try```. Ou seja, você deseja que o bloco ```try``` tenha sucesso, e se ele não tiver êxito, você quer o controle passado para o bloco ```catch```. Se qualquer declaração do bloco ```try``` (ou em uma função chamada dentro do bloco ```try```) lança uma exceção, o controle é imediatamente mudado para o bloco ```catch```. Se nenhuma exceção é lançada no bloco ```try```, o bloco ```catch``` é ignorado.

# Utilizando objetos de ```erro```

Dependendo do tipo de erro, você pode ser capaz de usar as propriedades:
* name _(fornece a classe geral do erro)_ **DOMException**
* message _(mensagem mais sucinta do que se poderia obter através da conversão do objeto de erro para uma string)_

# Promises

Uma Promisse assume um desses estados:

* _pending:_ estado inicial, não ```fullfilled```, ou ```rejected```
* _fullfilled:_ operação bem-sucedida
* _rejected:_ operação falha
* _settled:_ A Promise é fullfilled ou rejected, mas não pending