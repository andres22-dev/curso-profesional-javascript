// Un objeto común y corriente 
  /*
  const zelda = {

    name: "zelda"
  }

  zelda.saludar = function(){
    console.log(`Hola soy ${this.name}`);
  }

  zelda.saludar();


  const link = {

    name: "Link"
  }

  link.saludar = function(){
    console.log(`Hola soy ${this.name}`);
  }

  link.saludar(); */

  //Refactorizando el codigo para que sea mas eficiente

  /*
  function Hero(name){

    const hero = {

      name:name

    }

    hero.saludar = function(){
      console.log(`Hola soy ${this.name}`);
    }

    return hero
  }

  //Instanciamos la funcion hero en una variable
  const zelda = Hero('Zelda');
  //Utilizamos la instancia junto con la funcion saludar que establecimos en la funcion

  zelda.saludar();

  const link = Hero('Link');

  link.saludar();
  */

  //Aun podemos mejorar mas y evitar tener crear la misma función cada vez
 /*
  const heroMethods = {

    saludar: function(){
      console.log(`Me llamo ${this.name}`);
    },


  }
  function Hero(name){

    const hero = {

      name:name,

    }

    hero.saludar = heroMethods.saludar;
    return hero
  }

  //Instanciamos la funcion hero en una variable
  const zelda = Hero('Zelda');
  //Utilizamos la instancia junto con la funcion saludar que establecimos en la funcion

  zelda.saludar();

  const link = Hero('Link');

  link.saludar(); */


  // Metodo object.create que mejorara aun mas nuestro desarrollo
   //recibira un objeto como parametro lo que hara es crear un nuevo objeto
    //const nuevoObjeto = Object.create(objeto)

  /*
  const heroMethods = {

    saludar: function(){
      console.log(`Soy super heroe ${this.name}`);
    },


  }
  function Hero(name){

    const hero = Object.create(heroMethods)
    hero.name = name
    return hero
  }

  const zelda = Hero('Zelda');

  zelda.saludar();

  const link = Hero('Link');

  link.saludar();

  //Creamos una instancia de mi heroe creando un nuevo objeto al cual
   //le pasamos por argumento heroMethod que es un objeto el cual ya teniamos definido
    //El cual tiene la funcion saludar 
  const newHero = Object.create(heroMethods);

  newHero.saludar; */


  //Los metodos de hero dentro de Hero

  /* const heroMethods = {

    saludar: function(){
      console.log(`Soy super heroe ${this.name}`);
    },


  } */



  /*
  function Hero(name){

    const hero = Object.create(Hero.prototype)
    hero.name = name
    return hero
  }

  //para agregar el metodo que teniamos establecido por fuera de 
   //nuestra funcion ahora lo pondremos dentro de ella con un objeto
     //El cual cuentan todas las funciones y es prototype
      //Inicialmente prototype es un objeto vacio :)
  Hero.prototype.saludar= function(){
    console.log(`Soy super heroeina! ${this.name}`);
  };


  const zelda = Hero('Zelda');

  zelda.saludar();

  const link = Hero('Link');

  link.saludar();  */

  
  //new es un atajo (azucar sintactica) para llevar Hero.prototype al objeto

  function Hero(name){

    //El atajo que hace new es crear nuestros prototipos automaticamente
      //const hero = Object.create(Hero.prototype)
        //La regla es que siempre lo va a sacar del prototype de lo 
          //que sea el constructor
           //Si despues de new esta nuestra funcion lo que sucedera es el 
             //prototipo que le establecimos
    //Esto en ves de guardarlo en hero como lo haciamos anteriormente
      //Lo guardara en this

    this.name = name
    //return this  es algo que ocurre implicitamente no hay que hacerlo
  }

  Hero.prototype.saludar= function(){
    console.log(`Soy super heroeina! ${this.name}`);
  };


  const zelda = new Hero('Zelda');

  zelda.saludar();

  const link = new Hero('Link');

  link.saludar(); 