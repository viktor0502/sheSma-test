const navDropDown = document.querySelector(`.nav-dropdown`);
const dropdownList = document.querySelector(`.dropdown-list`);
navDropDown.addEventListener(`click`, () => {
  navDropDown.classList.toggle(`active`);
});
for (let i of dropdownList.children) {
  i.addEventListener(`click`, (e) => {
    if (e.target === i) {
      navDropDown.classList.remove(`active`);
    }
  });
}
// Burger-menu
const burger = document.querySelector(`.burger-btn`),
  navMenu = document.querySelector(`.nav-menu`),
  link = document.querySelectorAll(`.nav-link`),
  dropdown = document.querySelectorAll(`.dropdown-link`);
const scrollLock = () => {
    document.body.classList.add(`scroll-lock`);
  },
  scrollUnclock = () => {
    document.body.classList.remove(`scroll-lock`);
  },
  menuOpen = () => {
    navMenu.classList.add(`active`);
    scrollLock();
  },
  menuClose = () => {
    navMenu.classList.remove(`active`);
    scrollUnclock();
  };

burger.addEventListener(`click`, () => {
  burger.classList.toggle(`active`);
  if (burger.classList.contains(`active`)) {
    menuOpen();
  } else {
    menuClose();
  }
});
link.forEach((i) => {
  i.addEventListener(`click`, () => {
    if (i.parentElement.classList.contains(`nav-dropdown`) == false) {
      burger.classList.remove(`active`);
      menuClose();
    } else {
      dropdown.forEach((i) => {
        i.addEventListener(`click`, () => {
          burger.classList.remove(`active`);
          menuClose();
        });
      });
    }
  });
});


// ACCORDEON

const faqItem = document.querySelectorAll(`.faq-item`);
faqItem.forEach(i=>{
  i.addEventListener(`click`,()=>{
    i.classList.toggle(`active`)
  })
})

// Swiper
const swiper = new Swiper('.swiper-header', {
  loop: true,
  autoplay: {
      delay: 3000,
    },
  pagination: {
    el: '.swiper-pagination',
  },

});
const swiperReviews = new Swiper('.swiper-reviews', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 1,
});
