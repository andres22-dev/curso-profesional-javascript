//this en el global scope 
 //se refiere al objeto global window cuando lo ejecutamos en el context global
    console.log(`this: ${this}`);

    //this en el scope de la funcion
    //Tambien retorna el objeto global ya que es una funcion la cual no esta 
     //amarrada a ningun contexto y como directamente la ejecutamos esta hara referencia
       // a window que es el objeto global  
    function whoIsThis(){

        return this;
    }

    console.log(`whoIsThis(): ${whoIsThis()}`);

    //this en el scope de una funcion en strict mode

    //"use stric"; //Nos ayuda evitar errores comunes que nos ayudara en nuestro desarrollo

    //this se refiere a un objeto ese objeto es el que en ese momento esta ejecutando
      //un pedazo de codigo

    function whoIsThisStric(){

      return this;
  }

  console.log(`whoIsThisStrict(): ${whoIsThisStric()}`);

  //this en el contexto de un objeto

  const person = {

    name: 'Gabriel',
    saludar: function(){
      console.log(`Hola soy ${this.name}`)
    }


  }

  person.saludar();

  //this cuando sacamos a una funcion de un objeto

  const accion = person.saludar;
  accion();

  //this en el contexto de una clase
  function Person(name){
    //this = {}
    this.name = name;


  }

  Person.prototype.saludar = function(){

    console.log(`This name: ${this.name}`)

  }

  const angela = new Person("angela");

  angela.saludar();

