import '../css/style.css'
const photosArray = ['../src/img/hideo1.jpg','../src/img/hideo2.jpg','../src/img/hideo3.jpg',
    '../src/img/hideo4.jpg','../src/img/hideo5.jpg','../src/img/hideo6.jpg'];
import { DOM } from "./dom";


class myGallery {

    constructor(photosArray) {
        this.photos = photosArray
        this.counter = 0
        DOM.img.src = this.photos[this.counter]
    }

    setNextPhoto = () => {
        this.stopSlideShow()
        this.slidePhoto()
    }

    setPrevPhoto = () => {
        this.stopSlideShow()
        this.counter--
        this.setCurrentPhoto()
    }


    slidePhoto = () => {
        this.counter++
        this.setCurrentPhoto()
    }

    setCurrentPhoto = () => {
        this.counter = (this.counter + this.photos.length) % this.photos.length
        DOM.img.src = this.photos[this.counter];
    }

    playButton = () => {
        if (!this.newInterval) this.startSlideShow();
        else this.stopSlideShow();
    }

    stopSlideShow = () => {
        DOM.play.setAttribute("src", "../src/img/play.png");
        clearInterval(this.newInterval);
        this.newInterval = null
    }

    startSlideShow = () => {
        DOM.play.setAttribute("src", "../src/img/pause.png");
        if (!this.newInterval) {
            this.newInterval = setInterval(this.slidePhoto, 1000);
        }
    }
}

const slideShow = new myGallery(photosArray)

DOM.play.addEventListener('click', slideShow.playButton)
DOM.prev.addEventListener('click', slideShow.setPrevPhoto)
DOM.next.addEventListener('click', slideShow.setNextPhoto)
