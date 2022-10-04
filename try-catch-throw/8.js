function f() {
    try {
        throw "bogus";
    } catch(e) {
        console.log('captura interior "falso"');
        throw e; // essa instrução throw é suspensa até que o bloco finally seja concluído
    } finally {
        return false; // substitui "throw" anterior
    }
    // "return false" é executado agora
}
  
  try {
    f();
  } catch(e) {
    // isto nunca é executado porque o throw dentro do catch é substituído pelo return no finally
    console.log('captura exterior "falso"');
  }

  // SAIDA
  // captura interior "falso"
