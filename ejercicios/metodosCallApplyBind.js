// Establece `this` usando `call`

  function saludar(name){

    console.log(`Hola, soy ${this.name} ${this.apellido}`)
  }

  //Establecemos el valor de this para nuestra funcion
  const richard = {

      name: "Richard",
      apellido: "Kaufman López"

  }
  //Utilizamos nuestra funcion con el metodo call y le pasamos nuestro objeto
  saludar.call(richard)

  // Establece `this` usando `call` y pasar argumentos a la función

  function caminar(metros, direccion){

    console.log(`${this.name} camina ${metros} metros hacia ${direccion}.`);

  }
  //Usaremos el metodo call para pasar el contexto de this y ademas pasar los argumentos
   //Que recibe la funcion
  caminar.call(richard, 400, "norte");

  //Metodo Apply
    //Primer argumento es el this el cual es richard
      //Pero en ves de pasar los parametro que recibe la funcion caminar
        //Los pasamos como un arreglo
  const valores = [800, "noreste"];
  caminar.apply(richard, valores);


  /*No confundir call con apply
  
    Call - comma
    Apply - arreglo
  
  */
  
  // Metodo Bind

  const daniel = {name: "Daniel", apellido:"Sanchez"}
  
  //Utilizamos bind con la funcion saludar que establecemos anteriormente
    //Solo pasamos el argumento del this que en este caso es daniel
      //Para obtener el resultado tenemos que ejecutarlo como una funcion

  const danielSaluda = saludar.bind(daniel);

  danielSaluda();

  const danielCamina = caminar.bind(daniel, 2000, 'sur');
  //podremos añadir los parametro que requiere nuestra funcion en la asignacion de esta
   // cuando utilizamos bind y tambien podremos agregarlos directamente en ella
    //Tambien podremos añadir uno solamente en uno y otro desde la invocacion de la funcion
  //danielCamina(1000, 'este');



  //NodeList
   //nos dira que forEach no es una funcion ya que lo que recibe botones es un
    //nodelist y con este tipo de dato solo podremos trabajar con cosas como lenght

  const botones = document.getElementsByClassName('btn');
  /*botones.forEach(boton =>{

    boton.addEventListener('click', function(){

        alert('me duele xd');
    })
  })*/

  //Cambiaremos el contexto del forEach
    //Lo que hacemos es llamar la funcion usando los elementos que 
     //obtenemos como contexto, como this.


  Array.prototype.forEach.call(botones, boton =>{

    boton.addEventListener('click', function(){

      alert('me duele xd');

    })

  })