const introLogo = document.querySelector(".intro-logo");
introLogo.style.marginLeft = "0";
introLogo.style.opacity = "1";

document.querySelector(".section-intro__img").style.scale = "1";

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active ");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}
function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

// jQuery

$(function () {

  // Intro animation
  $(".intro-text__animation1").slideUp(-400).slideDown(2000);
  $(".intro-text__animation2").slideUp(-400).slideDown(3000);
  $(".section-intro__img").fadeOut(-400).fadeIn(2000);


  // Slick slider
  $(".slider").slick({
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    dots: true,
    arrows: false,
  });
});
