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

var openMenu = document.querySelector(".menu-button");
var closeMenu = document.querySelector(".menu-button-closemenu");
var blockMenu = document.querySelector(".menu-hidden");
var burgerMenu = document.getElementById("burgerMenu");

var openCloseMenu = function openCloseMenu() {
  blockMenu.classList.toggle("is-open");
};

openMenu.addEventListener("click", openCloseMenu);
closeMenu.addEventListener("click", openCloseMenu);
