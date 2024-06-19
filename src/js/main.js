document.addEventListener("DOMContentLoaded", function () {
  const burgerMenuButton = document.querySelector(".menu-button");
  const profilMenu = document.querySelector(".header-profil-and-shop");
  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    const currentScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
      burgerMenuButton.classList.add("hidden-scroll");
      profilMenu.classList.add("hidden-scroll");
    } else {
      burgerMenuButton.classList.remove("hidden-scroll");
      profilMenu.classList.remove("hidden-scroll");
    }

    lastScrollTop = currentScrollTop;
  });
});

var burger = document.querySelector(".menu-button-openmenu");
var menu = document.querySelector(".menu-hidden");
var closeBurger = document.querySelector(".menu-button-closemenu");
var overlay = document.querySelector(".menu-overlay");
var body = document.body;

var toggleMenu = function toggleMenu() {
  console.log("menu ouvert");
  menu.classList.toggle("is-open");
  body.classList.toggle("no-scroll");
  overlay.classList.toggle("is-visible");
};

var toggleMenuClose = function toggleMenuClose() {
  console.log("menu fermer");
  menu.classList.remove("is-open");
  overlay.classList.remove("is-visible");
  body.classList.remove("no-scroll");
};

burger.addEventListener("click", toggleMenu);
closeBurger.addEventListener("click", toggleMenuClose);
// overlay.addEventListener("click", toggleMenu);
