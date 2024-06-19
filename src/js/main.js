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

var toggleMenu = function toggleMenu() {
  menu.classList.toggle("is-open");
};

burger.addEventListener("click", toogleMenu);
