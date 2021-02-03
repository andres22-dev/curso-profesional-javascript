//Los generaores son funciones de las que se puede salir y volver a entrar
// Su contexto (asociación de variables) será conservado entre ñas reentradas
// Cada vez que llamamo next, la ejecucion del generador va a continuar hasta 
    //el proximo yiel
/*
    //Para declarar un generator le ponemos a la funcion * junto a su nombre
    function* simpleGenerator(){
      console.log('generator start');
      //Para tener un valor definido del generador utilizamos yield
      yield 1;
      yield 2;
      yield 3;
      console.log('generator end')


    }
    //const gen = simpleGenerator();

    //Podemos hacer generaores infinitos.

    function* idMaker() {

      let id = 1;
      //Esto ocasiona un bucle infinito
        //Si utilizamos un yield dentro podremos parar su ejecucion
      while(true){

        yield id
        id+= 1;


      }
    }

    //Cuando llamamos next también podemos pasar valores que la función recibe.
    function* idMakor2() {

      let id = 1;
      let reset;
      while(true){
        reset = yield id;
        if(reset){
          id = 1;
        }else{
        
        id+= 1;
        }
    }
  }
    //Ahora hagamos un ejemplo un poco más complejo: la secuencia fibonacci

    function* fibonacci(){

      let a = 1;
      let b = 1;
      while(true){

        const nextNumber = a + b;
        a = b;
        b = nextNumber;
        yield nextNumber;
      }
    }
     

    */