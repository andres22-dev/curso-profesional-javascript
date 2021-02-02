//Closures

//printColor

//IIFE expresion funcional que se ejecuta inmediatamente
(function(){
    let color = 'green';

    function printColor(){
    console.log(color);
    }


printColor();
})();


//Funciones que regresan funciones
function makeColorPrinter(color){
    let colorMessage = `The color is ${color}`;
    return function(){
        console.log(colorMessage)
    }
}

let printColorGreen = makeColorPrinter('verde');
console.log(printColorGreen());
//Imprimimos la variable 
  //The color is green 


// Variables privadas 
    //Hacer que los datos no sean accesibles
   /* const counter ={
        count:3

    }*/


    function makeCounter(n){

        let count = n;

        return {

            increase: function(){
                count = count + 1;
            },
            decrease: function(){
                count = count - 1;
            },
            getCount: function(){
                return count;
            }
        }

    }

    let counter = maker(7);

    //console.log(counter.count)  no existe
    console.log('The count is', counter.getCount()); 
    counter.increase();
    console.log('The count is', counter.getCount()); 
    counter.decrease();
    counter.decrease();
    counter.decrease();
    counter.decrease();
    console.log('The count is', counter.getCount()); 
    console.log('The count is', counter.getCount()); 

    counter.count = 0; //no podriamos hacerlo ya que es una variable privada


