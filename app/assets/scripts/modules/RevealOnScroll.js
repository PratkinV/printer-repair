import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(els, offset) {
    this.itemsToReveal = els;
    this.offsetPercentage = offset;
    this.hideInitially();
    this.createWaypoints();
  }

  hideInitially() {
    this.itemsToReveal.addClass("reveal-item");
  }

  createWaypoints() {
    var that = this;
    this.itemsToReveal.each(function(i) {
      var currentItem = this;
      setTimeout(function() {

        new Waypoint({
          element: currentItem,
          handler: function() {
            $(currentItem).addClass("animated fadeIn");
          },
          offset: that.offsetPercentage
        });
      }, 500);

    });
  }
} 

export default RevealOnScroll;
