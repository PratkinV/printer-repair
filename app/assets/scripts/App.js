import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import StickyHeader from './modules/StickyHeader';
import RevealOnScroll from './modules/RevealOnScroll';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".testimonials .contacts__icon, .testimonials .headline--small, .testimonials p"),"70%");
new RevealOnScroll($(".feature-item__title"),"80%");
var stickyHeader = new StickyHeader();
