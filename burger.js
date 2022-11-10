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
