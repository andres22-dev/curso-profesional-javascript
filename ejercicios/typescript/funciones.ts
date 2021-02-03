//Funciones 
    //Tendremos que especificar que tipos de datos recibira mi funcion
      //Tambien implicitamente sabremos que regresara nuestra funcion pero si lo queremos especificar
        // Lo podremos hacer despues de poner el parentesis de cierre de los parametros
function add(a: number, b:number):number{
    return a + b;
}

const  sum = add(4,6)

function createAdder(a:number): (number) => number{
  return function(b:number){
    return b + a
  }
}

const addFour = createAdder(1)

const fourPlus6 = addFour(6)

function fullName(firstName: string, lastName?:string): string{

  return `${firstName} ${lastName}`

}

//Cuando invocamos la funcion nos pide todos los parametros
  //si queremos que eso sea opcional le pondre al parametro ? antes de especificar
    // que tipo de dato es
      // Tambien podremos en ves de que sea obligatorio poner el parametro o ponerlo opcional
         //Con ? podres inicializar el parametro  lastName:string = "pinchao"

const richard = fullName("Richard")