import '../scss/style.scss';
import * as bootstrap from 'bootstrap';

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  // slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 30,
  // loop: true,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: true,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});