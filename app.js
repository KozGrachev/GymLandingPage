const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('.nav-logo');
const headline = document.querySelector('.headline');
const heroLogo = document.querySelector('.logo-with-text');

const tl1 = new TimelineMax();
const tl2 = new TimelineMax();

tl1.fromTo(hero,1, {height: "0%"}, {height: "100%", ease: Power2.easeInOut})
.fromTo(hero,0.7, {filter: "blur(4px)"}, {filter: "blur(0px)", ease: Power2.easeInOut})
.fromTo(heroLogo, 1.7, {filter: "blur(50px)"}, {filter: "blur(0px)", ease: Power2.easeInOut}, "-=1.7");

// tl2.fromTo(hero, 1.5, {filter: "blur(4px"}, {filter: "blur(0px)", ease: Power2.easeInOut}); 
// .fromTo(hero, 1.2, {width: "100%", transform: "rotate(20deg)"}, {width: "80%", transform: "rotate(0deg)", ease: Power2.easeInOut});

// tl2.fromTo(hero, 1.2, {width: "100%", transform: "rotate(20deg)"}, {width: "80%", transform: "rotate(0deg)", ease: Power2.easeInOut})