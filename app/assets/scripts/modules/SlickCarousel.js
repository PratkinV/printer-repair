import $ from 'jquery';
import 'slick-carousel'; 


class SlickCarousel {
  constructor(els) {
    this.carouselItem = $('.' + els);
    this.createCarousel();
  }
  
  createCarousel() {
    this.carouselItem.slick({
      dots: true  
    });
  } 
}

export default SlickCarousel;