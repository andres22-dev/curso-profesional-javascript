//en clase  button.onclick = video.play();
/*button.addEventListener('click', function(){

  video.play();

})*/

//Funcion Media PLayer
class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>
  constructor(config) {

    this.media = config.el;
    this.plugins = config.plugins || [];
    this.initPlugins();
  }
  private initPlugins() {
    //Ahora mismo le estamos pasando this a todos nuestros plugins
    //Pero queremos pasarle solo algunos datos, para controlar esto haremos 
    //lo siguiente
    //creamos un objeto player
   /* const player = {
      play: () => this.play(),
      pause: () => this.pause(),
      media: this.media,
      //Para crear un getter hacemos lo siguiente
      get muted() {

        return this.media.muted;
      },

      set muted(value) {

        this.media.muted = value;
      }
    }; */
    this.plugins.forEach(plugin => {

      plugin.run(this);
    });
  }
  //Metodo Play que le da play al video
  play() {
    this.media.play();
  }
  pause() {
    this.media.pause();
  }
  togglePlay() {
    if (this.media.paused) {
      this.play();
    } else {
      this.pause();
    }
  }
  mute() {

    this.media.muted = true;
  }
  unmute() {

    this.media.muted = false;
  }
  buttonMute() {

    if (this.media.muted) {

      this.media.muted = false;
    } else {

      this.media.muted = true;
    }


  }
}

  




    
  
export default MediaPlayer;