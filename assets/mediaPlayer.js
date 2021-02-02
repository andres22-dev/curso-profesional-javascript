//en clase  button.onclick = video.play();
/*button.addEventListener('click', function(){

  video.play();

})*/

//Funcion Media PLayer
function MediaPlayer(config){

    this.media = config.el;
    this.plugins = config.plugins || [];
    this._initPlugins();
  }

  MediaPlayer.prototype._initPlugins = function(){
    this.plugins.forEach(plugin => {

      plugin.run(this);
    })
  }
  
    //Metodo Play que le da play al video
    MediaPlayer.prototype.play = function(){
  
  
      if(this.media.paused){
  
        this.media.play();
      }else{
  
        this.media.pause()
    
          }
      }

    MediaPlayer.prototype.mute = function(){

      this.media.muted = true;
    }

    MediaPlayer.prototype.unmute = function(){

      this.media.muted = false;
    }
    
    MediaPlayer.prototype.buttonMute = function(){

      if(this.media.muted){

        this.media.muted = false;
      }else{

        this.media.muted = true;
      }


    }
  
export default MediaPlayer;