import MediaPlayer from "../mediaPlayer";

class AutoPause {
  private threshold:number;
  player:MediaPlayer;

  constructor(){

    this.threshold = 0.25
    this.handleIntersection = this.handleIntersection.bind(this);
    this.handleVisibiltyChange = this.handleVisibiltyChange.bind(this);
  }

  run(player){
    this.player = player;

    const observer = new IntersectionObserver(this.handleIntersection, {

      threshold: this.threshold,
    })

    observer.observe(this.player.media);

    document.addEventListener("visibilitychange", this.handleVisibiltyChange);
  }


  private handleIntersection(entries: IntersectionObserverEntry[]){
    const entry = entries[0];

    const isVisible = entry.intersectionRatio >= this.threshold

    if(isVisible){

      this.player.play()

    }else{

      this.player.pause()

    }
  }


  private handleVisibiltyChange(){

    const isVisible = document.visibilityState === "visible";
    if(isVisible){
      this.player.play();
    }else{

      this.player.pause();

    }
  }

}

export default AutoPause;