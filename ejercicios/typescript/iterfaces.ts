//Interfaces: Nos permiten declarar la forma exacta de un objeto, 
//definiendo los tipos de sus propiedades y si son opcionales o no.

enum Colore{
  Rojo = "Rojo",
  Verde = "Verde",

}
interface Rectangulo {

  ancho: number;
  alto:number;
  color: Colore;


}

//Si definieramos un nuevo objeto con los valores de nuestro primer objeto
  //Si no estan los atributos completados iguales a nuestro primer objeto dara error


let rect: Rectangulo = {

  ancho: 4,
  alto: 6,
  color: Colore.Rojo
 
}

function area(r:Rectangulo){
  return r.alto * r.ancho
}

const areaRect = area(rect)
console.log(areaRect);

rect.toString = function () {

  return `Un rectangulo ${this.color}`

}