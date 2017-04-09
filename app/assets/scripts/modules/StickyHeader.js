import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
  constructor() {
    this.lazyImages = $('.lazyload');
    this.siteHeader = $('.site-header');
    this.headerTriggerElement = $('.large-hero__title');
    this.createHeaderWaypoint();
    this.pageSections = $('.page-section');
    this.headerLinks = $('.primary-nav a');
    this.featuresBtn = $('.large-hero__text-content a.btn');
    this.headerBtn = $('.site-header a.btn');
    this.headerLogo = $('.logo img');
    this.createPageSectionWaypoints();
    this.addSmoothScrolling();
    this.refreshWaypoints();
  }

  refreshWaypoints() {
    this.lazyImages.load(function() {
      Waypoint.refreshAll();
    });
  }

  addSmoothScrolling() {
    this.headerLinks.smoothScroll(); 
    this.featuresBtn.smoothScroll();
  }

  createHeaderWaypoint() {
    var that = this;
    new Waypoint({
      element: this.headerTriggerElement[0],
      handler: function(direction) {
        if (direction == "down") {
          that.siteHeader.addClass("site-header--light");
          that.headerLinks.addClass("scrolled");
          that.headerBtn.addClass("scrolled");
          that.headerLogo.attr("src", "assets/images/icons/svg/002-printer-2.svg");
        } else {
          that.siteHeader.removeClass("site-header--light");
          that.headerLinks.removeClass("scrolled");
          that.headerBtn.removeClass("scrolled");
          that.headerLogo.attr("src", "assets/images/icons/svg/002-printer-1.svg");
        }
      },
      offset: 146
    });
  }

  createPageSectionWaypoints() {
    var that = this;
    this.pageSections.each(function() {
      var currentPageSection = this;
      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction == "down") {
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "18%"
       });

       new Waypoint({
         element: currentPageSection,
         handler: function(direction) {
           if (direction == "up") {
             var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
             that.headerLinks.removeClass("is-current-link");
             $(matchingHeaderLink).addClass("is-current-link");
           }
         },
         offset: "-40%"
        });
    });
  } 

}

export default StickyHeader;
