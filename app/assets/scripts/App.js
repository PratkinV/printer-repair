import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import StickyHeader from './modules/StickyHeader';
import RevealOnScroll from './modules/RevealOnScroll';


var mobileMenu = new MobileMenu();
new RevealOnScroll($(".testimonials--1, .testimonials--2, .testimonials--3"),"70%");
var stickyHeader = new StickyHeader();


