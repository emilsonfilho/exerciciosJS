function myFunction(param1, ...moreParams){
    console.log(param1);
    console.log(moreParams);
}
myFunction(2,3,4,5,6);// vai imprimir a saida abaixo
// 2
//[3,4,5,6]
function myFuncTwo(...params){
    console.log(params)
}
myFuncTwo(1,2,3,4); // retorna [1,2,3,4]