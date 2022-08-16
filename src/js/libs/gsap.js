// Официальный сайт https://greensock.com/
// Инструкция по подключению https://greensock.com/docs/v3/Installation?checked=core,scrollTrigger#modules
/** Основные методы:
 * https://greensock.com/docs/v3/GSAP/gsap.to()
 * https://greensock.com/docs/v3/GSAP/gsap.from()
 * https://greensock.com/docs/v3/GSAP/gsap.fromTo()
 * https://greensock.com/ease-visualizer/
 * https://greensock.com/cheatsheet/
**/

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { isMobile } from "../files/functions.js";
// import { CSSPlugin } from "gsap/CSSPlugin.js"
gsap.registerPlugin(ScrollTrigger);

function random(min, max) {
   return Math.random() * (max - min) + min;
}

const word = () => {
   let word = document.querySelector('.main__title');
   let out = '';
   Array.from(word.textContent).forEach((elem, i) => {
      if (elem === ' ') {
         out += ' '
      } else {
         out += `<span class="letter-${i}">${elem}</span>`;
      }
   })
   word.innerHTML = out;
   let wordLine = gsap.timeline({
      repeat: -1,
      yoyo: true,
      yoyoEase: "slow",
      defaults: {
         duration: 0.3,
         ease: "slow(0.7, 0.7, false)"
      },
   });
   for (let i = 0; i < 15; i++) {
      wordLine
         .fromTo(`.letter-${i}`, {
            opacity: 1,
            y: 0,
            color: "#fff",
         },
         {
            y: 'random(-15, 15, 2)',
            rotate: 'random(-5, 5, 1)',
            color: '#fef7da',
         })
   }   
   wordLine
   .from(`letter-0`, {
      opacity: 0.5,
      duration: 0.3
   })
}

let phoneY;
if (window.innerWidth > 1630 && window.innerWidth <= 2560) {
   phoneY = '-78%';
} else if (window.innerWidth > 1280 && window.innerWidth <= 1630) {
   phoneY = '-77.5%';
} else if (window.innerWidth > 992 && window.innerWidth <= 1280) {
   phoneY = '-79.5%';
} else if (window.innerWidth > 768 && window.innerWidth <= 992) {
   phoneY = '-79%';
}  else if (window.innerWidth > 480 && window.innerWidth <= 768) {
   phoneY = '-77%';
}  else if (window.innerWidth > 290 && window.innerWidth <= 480) {
   phoneY = '-77.3%';
} 

const sport = function() {
   let tl = gsap.timeline();
   tl
      .to('._sportsman-4', {opacity: 0, scale: 0.8, duration: 0.8})
      .to('._sportsman-5', {opacity: 0, scale: 0.8, duration: 0.8}, 0)
   setTimeout(() => {
      document.querySelector('._sportsman-4').src = 'img/main/04-1.png';
      document.querySelector('._sportsman-5').src = 'img/main/05-1.png';
   }, 800)
}

window.addEventListener('load', () => {
let tl = gsap.timeline({
   delay: 0.3,
});
tl
   .to('.main__background-color', {backgroundColor: 'transparent', duration: 6, ease: "circ.in"})
   .from('.main__city-image_1', {y: '+100%', opacity: 0, duration: 3, ease: "power1.inOut"}, 0)
   .from('.main__city-image_2', {y: '+100%', opacity: 0, duration: 3, ease: "power1.inOut"}, 0.5)
   .from('.main__city-image_3', {y: '+100%', opacity: 0, duration: 3, ease: "power1.inOut"}, 1)
   .from('.main__city-image_4', {y: '+100%', opacity: 0, duration: 2.4, ease: "power1.inOut"}, '-=6')
   .from('.main__bottom-image', {y: '-100%', opacity: 0, duration: 4, ease: "power1.inOut"}, 0)
   .from('.main__grass-image', {x: '-100%', opacity: 0, duration: 2.2, ease: "power3.out"}, 3)
   .from('._sportsman-5', {x: '-100vw', duration: 3.8, onComplete: sport}, 4)
   .from('._sportsman-4', {x: '-100vw', duration: 3.8, onComplete: sport}, 4)
   .from('.main__sun-image', {y: '+150%', duration: 5.4, scale: 0, rotate: -1080, transformOrigin: 'center'}, 4)
   .to('.main__top-image-2', {opacity: 0, duration: 4.4, ease: "power4.inOut"}, 4)
   .to('.main__top-image-2', {opacity: 1, duration: 2.4, ease: "power4.inOut"})
   .to('._sportsman-5', {opacity: 1, scale: 1, rotate: 5, duration: 1.2, ease: "power1.inOut" }, 8.8)
   .to('._sportsman-4', {opacity: 1, scale: 1, rotate: -5, duration: 1.2, ease: "power1.inOut" }, 9)
   .from('._sportsman-7', {opacity: 0, scale: 0.8, rotate: 5, duration: 1.2, ease: 'power1.inOut'}, 9.2)
   .from('._sportsman-6', {opacity: 0, scale: 0.8, rotate: -5, duration: 1.2, ease: 'power1.inOut'}, 9.4)
   .from('._sportsman-3', {opacity: 0, scale: 0.8, rotate: 5, duration: 1.2, ease: 'power1.inOut'}, 9.6)
   .from('._sportsman-2', {opacity: 0, scale: 0.8, rotate: -5, duration: 1.2, ease: 'power1.inOut'}, 10)
   .from('._sportsman-1', {opacity: 0, scale: 0.8, rotate: 5, duration: 1.2, ease: 'power1.inOut'}, 9.8)
   .from('.main__title-box', {x: '-50%', opacity: 0, duration: 0.9, ease: "circ.out", onComplete: word}, 10.2)
   .from('.header', {y: -200, opacity: 0, duration: 1.1}, '-=0.6')
   .from('._button-1', {y: 150, opacity: 0, duration: 0.4, ease: "back.out(1.7)"})
   .from('._button-2', {y: 150, opacity: 0, duration: 0.4, ease: "back.out(1.7)"}, '-=0.2')
   .from('._button-3', {y: 150, opacity: 0, duration: 0.4, ease: "back.out(1.7)"}, '-=0.2');

   gsap.to('.app__image-line', {
      scrollTrigger: {
         trigger: '.app__images',
         toggleActions: 'restart pause restart pause',
         start: 'top bottom',
      },
      y: phoneY,
      duration: 10,
      ease: "power1.out",
      yoyoEase: "power1.out",
      yoyo: true,
      repeat: -1,
   })

let globus = gsap.timeline();
globus
   .from('.app__shape-outside', {
         opacity: 0,
         scale: 0,
      x: random(-50, 50),
      y: random(-50, 50),
      z: random(-50, 50),
         duration: 0.5
      })
   .from('.app__shape-background-lines', {
      opacity: 0,
      scale: 0,
      x: random(-50, 50),
      y: random(-50, 50),
      z: random(-50, 50),
      duration: 0.5
   }, '-=0.2')
   .from('.app__shape-background', {
      opacity: 0,
      scale: 0,
      x: random(-50, 50),
      y: random(-50, 50),
      z: random(-50, 50),
      duration: 0.5
   }, '-=0.2')
   .from('.app__shape-outside-lines', {
      opacity: 0,
      scale: 0,
      duration: 0.5
   }, '-=0.2')
   .from('.app__shape-lines', {
      opacity: 0,
      scale: 0,
      duration: 0.3
   }, '-=0.1')
   .from('.app__shape-people', {
      opacity: 0,
      scale: 0,
      duration: 0.6
   }, '-=0.1')
   .to(
      '.app__shape-background-lines',
      {
         opacity: 0.6,  
         scale: 0.9,
         duration: 0.6,
         repeat: -1,
         yoyo: true,
         ease: "power4.out",
      })
   .to('.app__lines-top-bottom', {
      x: 0,
      opacity: 0.2,
      duration: 0.8,
   })
   .to('.app__lines-center', {
      x: 0,
      opacity: 0.2,
      duration: 0.8,
   })
   .to('.app__lines-bold-top-bottom', {
      x: 0,
      opacity: 0.2,
      duration: 0.8,
   })
   .to('.app__lines-top-bottom', {
      opacity: 1,
      duration: 1.2,
      repeat: -1,
      yoyo: true,
      ease: "slow(0.7, 0.7, false)",
   })
   .to('.app__lines-center', {
      opacity: 1,
      duration: 1.2,
      repeat: -1,
      yoyo: true,
      ease: "slow(0.7, 0.7, false)",
   })
   .to('.app__lines-bold-top-bottom', {
      opacity: 1,
      duration: 1.2,
      repeat: -1,
      yoyo: true,
      ease: "slow(0.7, 0.7, false)",
   }, '-=0.5')

   ScrollTrigger.create({
      animation: globus,
      trigger: '.app',
      toggleActions: 'play pause resume none'
   })

   let phone = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: {
         ease: "power1.out",
         duration: 2,
      }
   });
   phone
      .to('._phone-2', {
      opacity: 1,
   })
      .to('._phone-3', {
      opacity: 1,
   });

   ScrollTrigger.create({
      animation: phone,
      trigger: '.app__images',
      toggleActions: 'restart pause restart pause',
      start: 'top bottom',
   })

   gsap.to('.app__shape-lines', {
      scrollTrigger: {
         trigger: '.app',
         start: 'top bottom',
         end: 'bottom top',
         scrub: 0.2,
      },
      rotate: 360,
      duration: 25,
      yoyo: true,
      ease: "power2.out",
   })
   gsap.to('.app__shape-background', {
      scrollTrigger: {
         trigger: '.app',
         start: 'top bottom',
         end: 'bottom top',
         scrub: 0.2,
      },
      rotate: 360,
      duration: 25,
      yoyo: true,
      ease: "power2.out",
   }, '-=25')

   let footer = gsap.timeline();
   footer 
      .from('.footer__top', {y: '+100%', opacity: 0, duration: 1.2})
      .from('.footer__bottom', {y: '+100%', opacity: 0, duration: 1}, '-=1')
      .from('.footer__shadow', {opacity: 0, scale: 0, duration: 1.2}, '-=0.8')
      .from('.footer__inner', {scale: 0, duration: 0.8, ease: "sine.out"}, '-=0.4s');


   ScrollTrigger.create({
      animation: footer,
      trigger: '.footer',
      start: 'top bottom',
      toggleActions: 'play pause play none',
   })

   let activities = gsap.timeline();
   activities
      .from('.activities__image_1', {rotate: -20, scale: 0.8, x: '-200%', duration: 0.8})
      .from('.activities__basket', {rotate: 360, x: +500, y: -150, opacity: 0, duration: 0.8, ease: "power1.out"})
      .from('.activities__image_2', {opacity: 0, scale: 0.3, duration: 0.8}, '-=0.8')
      .from('.activities__image_3', {rotate: 20, scale: 0.8, x: '+150%', duration: 0.8}, '-=0.8')
      .from('.activities__image-tennis', {rotate: 360, x: -300, y: 200, opacity: 0, duration: 0.8, ease: "power1.out"})
      .from('.activities__image_4', {x: '-400%', duration: 1.6, ease: "power1.inOut"}, '-=0.8')
      .from('.activities__image_5', {opacity: 0, scale: 0.3, duration: 0.8})
      .from('.activities__image-ball', {rotate: 360, x: +300, opacity: 0, duration: 0.8, ease: "power1.out"})
      .from('.activities__image_6', {y: 50, duration: 0.8, ease: "power1.inOut"}, '-=0.8')

   ScrollTrigger.create({
      animation: activities,
      trigger: '.activities__body',
      start: 'top 80%'
   })
})