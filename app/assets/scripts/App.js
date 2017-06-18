import $ from 'jquery';
import Modal from './modules/Modal';
import MobileMenu from './modules/MobileMenu';
import StickyHeader from './modules/StickyHeader';
import RevealOnScroll from './modules/RevealOnScroll';
import SlickCarousel from './modules/SlickCarousel';

var slickSales = new SlickCarousel('slickSales');
var mobileMenu = new MobileMenu();
var modalRequisites = new Modal('requisites');
var modalSale = new Modal('sale');
var modalRules = new Modal('rules');
new RevealOnScroll($(".testimonials--1, .testimonials--2, .testimonials--3"),"70%"); 
var stickyHeader = new StickyHeader(); 

 





