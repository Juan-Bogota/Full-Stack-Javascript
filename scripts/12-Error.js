// Manejo de errores 

//TRY CATCH FINALLY

try{
    console.log('En el try se agrega el codig a evaluar');
    noExiste; // Lanza un error variable no declarado
    console.log('Segundo mensaje en el try')
} catch(error) {
    console.log('Catch, captura cualquier error surgido o lanzado en el try');
    console.log(error);
} finally {
    console.log('El bloque finally se ejecutara siempre al final del bloque try-catch');
}

try {
    let numero = 's';
    if (isNaN(numero)){
        throw new Error(`Numero es no definido o valido`)
    }
    console.log(numero * numero);
} catch (error) {
    console.log(error);
}


// anidacion

try {
    try {
      throw new Error('oops');
    }
    catch (ex) {
      console.error('inner', ex.message);
    }
    finally {
      console.log('finally');
    }
    noExiste;
  }
  catch (ex) {
    console.error('outer', ex.message);
  }

  // example 2

  try {
    try {
      throw new Error('oops');
    }
    catch (ex) {
      console.error('inner', ex.message);
      throw ex;
    }
    finally {
      console.log('finally');
    }
  }
  catch (ex) {
    console.error('outer', ex.message);
  }