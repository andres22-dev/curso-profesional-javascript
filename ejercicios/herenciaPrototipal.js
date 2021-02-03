function Hero(name){

  this.name = name;
}

Hero.prototype.saludar = function(){

  console.log(`Hola, soy ${this.name}`);
}

const zelda = new Hero('zelda');


//Propiedades de la instancia
  console.log('Name: ', zelda.name)

//Propieadades de la clase
console.log('Saludar', zelda.saludar)

//Propiedades heradadas ej: toString
console.log('toString', zelda.toString)

//hasOwnProperty (de dónde ale toString o esto? )
  //sirve para inspeccionar si algo le pertenece directamente a un objeto
    //O si lo toma prestado atraves de herencia
  
    console.log('zela.hasOwnProperty("name")', zelda.hasOwnProperty("saludar"))
    //dara false ya que nuestra objeto Hero no tiene ningun atributo llamado saludar

    //Nos regresa el prototipo

    const prototypeOfZelda =  Object.getPrototypeOf(zelda);

    prototypeOfZelda === Hero.prototype //true

    //Es true porque el proptotipo con el que lo comparamos es igual al de la variable
      //Pero no solo califica que tiene el mismo contenido si no tambien el mismo objeto
    
    //Agregamos un metodo nuevo a nuestro prototipo

    Hero.prototype.fight = function(){

      console.log('fight')
    }

    zelda.fight();

    Object

    //Buscamos la propiedad bestFrien con  el metodo hasOwnProperty
    Object.hasOwnProperty("bestFriend")

    const prototypeOfObject = Object.getPrototypeOf(Object.prototype)
    //undefined
      //si no hay un prototipo en donde buscar entonces no esta definido 
        //la busqueda se detiene
