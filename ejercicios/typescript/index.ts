
//Boolean
//Para escribir una variable podemos hacerlo de manera normal como en js
  //Pero cuando tenemos tipado estricto debemos especificar que tipo de dato es
    //El que va a utilizar esa variable
let muted:boolean = true;

muted = false;

//si asignaramos la variable que tiene como tipo de dato boleano
  //daria error ya que estrictamente solicita valores con el que se le especificaron
  //muted = "callado";

//Numeros
  //asi el valor que le asignemos a una variable pertenezca a otra y este sea de un
    //tipo diferente al que se le especifico a esa variable

let age = 6;
let numerador:number = 42;
let denominador:number = age;
let resultado = numerador / denominador;

//String

let nombre: string = 'richard';
let saludo = `Me llamo ${nombre}`;

//Arreglos
  //Podemos especificar al arreglo los datos que reciba
  // Que reciba cualquier dato

  //arreglo de strings   definimos el tipo de dato que va a recibir el array
    //Luego poner los [] del array

  let people: string[] = [];
  people = ["isabel", "Nicole", "raul"]

  //Si pusieramos un tipo de dato que no recibe el array marcara el error
      //people.push(9000)

  //Para utilizar un arreglo con numeros y cadenas de texto
   //Lo hacemos con Array<string | number> con | indicamos que mas datos recibira
let peopleAndNumbers: Array<string | number> = []

peopleAndNumbers.push("hola", 1)

//Enum Tipo especial llamado enumeración

enum Color{

  Rojo =1,
  Verde = "a",
  Azul = "2",
}

//Si le asignamos algun valor de este enum a una variable este no aceptara
  //valores iguales a los que estan dentro de el
    //y tendremos que acceer a ellos con .

let colorFavorito: Color = Color.Azul;
//Si lo imprimimos imprimira la posicion del atributo de enum que le estamos asignando
  // a la variable
console.log(`${colorFavorito}`);

//Pero si el atributo tiene un valor asignado ya seria una cuestion distinta 
 //Ahora lo que imprimiriamos seria dependiendo lo que el atributo tiene definido


 //Any
  //Podremos establecer cualquier tipo de valor a una variable
 let comodin:any = "Joker"
 comodin= {type: 'Wildcard'}

  //Object
    //Podremos establecer un objeto normalmente
      //Si queremos especificar que estrictamente sera un objeto pondremos object
  let someObject: object = {type :"wildcard"}