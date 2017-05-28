import $ from 'jquery';
import Modal from './modules/Modal';
import MobileMenu from './modules/MobileMenu';
import StickyHeader from './modules/StickyHeader';
import RevealOnScroll from './modules/RevealOnScroll';



var mobileMenu = new MobileMenu();
var modal0 = new Modal('requisites');
var modal1 = new Modal('sale');
var modal1 = new Modal('rules');
new RevealOnScroll($(".testimonials--1, .testimonials--2, .testimonials--3"),"70%"); 
var stickyHeader = new StickyHeader(); 



