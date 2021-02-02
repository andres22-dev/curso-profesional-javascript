import mediaPlayer from './mediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector('video');
const button = document.querySelector('#play');
const mute = document.querySelector('#mute');



//Instanciamos el player

  const player = new mediaPlayer(
    {el:video,
     plugins:[//new AutoPlay()
      
     ]
    });
  

button.addEventListener('click', function(){

  //Que cuando le demos click al boton  utilizamos esta instancia del objeto
  
  player.play()
  
 

})

mute.addEventListener('click', function(){

  //Que cuando le demos click al boton  utilizamos esta instancia del objeto
  
  player.buttonMute()
  
 

})