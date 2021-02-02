import mediaPlayer from './mediaPlayer.js'

const video = document.querySelector('video');
const button = document.querySelector('button');



//Instanciamos el player

  const player = new MediaPlayer({el:video});
  

button.addEventListener('click', function(){

  //Que cuando le demos click al boton  utilizamos esta instancia del objeto
  
  player.play()
  
 

})
