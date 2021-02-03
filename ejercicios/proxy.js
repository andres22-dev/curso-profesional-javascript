// Proxy es parecido a getters y setters
// Usa un concepto que se llama traps: son interceptores de llamadas. A diferencia de getters, no opera sobre una propieda, si no sobre un objeto.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#Methods_of_the_handler_object

// Creemos un ejemplo donde interceptamos llamadas para leer una propiedad
// Si la propiedad existe, la regresamos
// Si no existe, entonces sugerimos una que pueda funcionar

// Para eso eso vamos a usar un algoritmo que se llama Levenshtein. (window.Levenshtein.get)
// Ejemplos de levenshtein distance (usa window.Levenshtein)


//Proxy nos va a regresar un objeto
  //Para crear un proxy debemos utilizar Proxy el cual es una clase 
   //Asi que lo instanciamos

   //Creamos un objeto que contendra colores
   const target = {
    red: 'rojo',
    green: 'verde',
    blue: 'azul'


   }

   //Si nos equivocamos buscando alguna de estas propiedades
    //Se nos ayude y escribimos el handler

   const handler = {

    //Utilizaremos los metodos del proxy en este caso el get
      //Porque queremos inspeccionar cuando se este tratando de leer un valor
    get(obj,prop){
      //Lo primero que debemos hacer es averiguar si esta propiedad existe en el objeto
      if(prop in obj){
        return obj[prop]
      }

      const suggestion = Object.keys(obj).find(key => {

        return Levenshtein.get(key, prop) < 3
      })
      if(suggestion){

        console.log(`${prop} no se encontro. Quisiste decir ${suggestion}?`)
      }

      return obj[prop];
    }
   }
    const p = new Proxy(target, handler)

