// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

if (!(isMobile.any())) {
   window.addEventListener('scroll', () => {
      document.querySelector('.main__title').style.transform = `translateY(${window.scrollY * 0.2}px)`;
      document.querySelector('.header').style.transform = `translateY(${window.scrollY * 0.6}px)`;
   })
}

// const replacement = function() {
//    if (window.innerWidth <= 428) {
//       document.querySelector('.main__city-image_1').src = 'img/main/mobile-1.png';
//       document.querySelector('.main__city-image_2').src = 'img/main/mobile-2.png';
//       document.querySelector('.main__city-image_3').src = 'img/main/mobile-3.png';
//       document.querySelector('.main__city-image_4').src = 'img/main/mobile-4.png';
//       document.querySelector('.main__bottom-image').src = 'img/main/reflect-mobile.png';
//    } else {
//       document.querySelector('.main__city-image_1').src = 'img/main/1.png';
//       document.querySelector('.main__city-image_2').src = 'img/main/2.png';
//       document.querySelector('.main__city-image_3').src = 'img/main/3.png';
//       document.querySelector('.main__city-image_4').src = 'img/main/4.png';
//       document.querySelector('.main__bottom-image').src = 'img/main/reflect.png';
//    }
// }


// document.addEventListener('DOMContentLoaded', replacement);
// window.addEventListener('resize', replacement);
