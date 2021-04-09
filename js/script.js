const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {
      slidesPerView:6
    },
    1600: {
      slidesPerView:5
    },
    1300: {
      slidesPerView:4
    },
   1100: {
      slidesPerView:3
    },
   800: {
      slidesPerView:2
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-prev',
    prevEl: '.channel-button-next',
  },
});

const swiperFood = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  slidesPerView: 6,

  // Navigation arrows
  navigation: {
    nextEl: '.channel-food-button-prev',
    prevEl: '.channel-food-button-next',
  },
});

const searchBtn = document.querySelector('.mobile-search');
const mobileSearch = document.querySelector('.search-form');

searchBtn.addEventListener('click', () => {
mobileSearch.classList.toggle('is-open')
});

if(document.documentElement.scrollWidth <= 640){
  swiper-container.destroy();
  // все 3 слайдера отключить 
}
