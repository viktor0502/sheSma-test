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


