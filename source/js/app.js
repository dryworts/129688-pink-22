const mainNavClose = document.querySelector(".main-nav__close");
const mainNavToggle = document.querySelector(".main-nav__toggle");
const mainNavList = document.querySelector(".main-nav__list");
const mainNavToggleActivated = document.querySelector(".main-nav__toggle--activated");
const LogoContainer = document.querySelector(".page-header__logo-container");



mainNavClose.addEventListener("click", function () {
  mainNavToggle.classList.toggle("main-nav__toggle--activated");
  mainNavClose.classList.toggle("visually-hidden");
  mainNavList.classList.toggle("main-nav__list--disabled");
  LogoContainer.classList.toggle("page-header__logo-container--opened");

});

mainNavToggle.addEventListener("click", function () {
  mainNavList.classList.toggle("main-nav__list--disabled");
  mainNavClose.classList.toggle("visually-hidden");
  mainNavToggle.classList.toggle("main-nav__toggle--activated");
  LogoContainer.classList.toggle("page-header__logo-container--opened");
});


