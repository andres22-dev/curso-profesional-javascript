import mediaPlayer from './mediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'

const video = document.querySelector('video');
const button:HTMLElement = document.querySelector('#play');
const mute:HTMLElement = document.querySelector('#mute');



//Instanciamos el player

  const player = new mediaPlayer(
    {el:video,
     plugins:[new AutoPlay(), new AutoPause()]

    });
  

button.addEventListener('click', function(){

  //Que cuando le demos click al boton  utilizamos esta instancia del objeto
  
  player.play()
  
 

})

mute.addEventListener('click', function(){

  //Que cuando le demos click al boton  utilizamos esta instancia del objeto
  
  player.buttonMute()
  
 

})


if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js').catch(error=>{

    console.log(error.message);

  })
}