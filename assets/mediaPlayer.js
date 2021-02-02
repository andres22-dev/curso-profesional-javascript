//en clase  button.onclick = video.play();
/*button.addEventListener('click', function(){

  video.play();

})*/

//Funcion Media PLayer
function MediaPlayer(config){

    this.media = config.el
  }
  
    //Metodo Play que le da play al video
    MediaPlayer.prototype.play = function(){
  
  
      if(this.media.paused){
  
        this.media.play();
      }else{
  
        this.media.pause()
    
          }
      }
    
  
export default MediaPlayer;