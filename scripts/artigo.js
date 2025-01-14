document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const body = document.querySelector("body"); // ou o elemento que envolve o menu
  const menuContent = document.querySelector(".menu-content");
  menuIcon.addEventListener("click", function () {
    body.classList.toggle("menu-active");
  });
});
