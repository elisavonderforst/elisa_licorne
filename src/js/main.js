
document.addEventListener("scroll", function () {
  const scrollImage = document.getElementById("headerScrollImg");
  const scrollLimit = 10000;
  let scrollTop = window.scrollY;

  if (scrollTop < scrollLimit) {
    scrollImage.style.top = 50 + scrollTop + "px";
  } else {
    scrollImage.style.top = 50 + scrollLimit + "px";
  }
});
