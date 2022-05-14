const darkBtn = document.querySelector(".dark-btn");

const darkMode = function () {
  const body = document.querySelector("body");
  const footer = document.querySelector("footer div");
  const container = document.querySelector(".container");
  const header = document.querySelector(".main-header");
  const cardsTexto1 = document.querySelectorAll(".card-text1");
  const cards = document.querySelectorAll(".card");
  const cardsTexto = document.querySelectorAll(".card-text");
  const navLinks = document.querySelectorAll(".nav-link");
  const cardsTitle = document.querySelectorAll(".card-title");

  body.classList.toggle("body__dark");
  header.classList.toggle("main-header__dark");
  container.classList.toggle("container__dark");
  cards.forEach((card) => toggleClass(card, "card__dark"));
  cardsTexto1.forEach((card) => toggleClass(card, "darkMode__letters"));
  cardsTexto.forEach((card) => toggleClass(card, "darkMode__letters"));
  navLinks.forEach((navLink) => toggleClass(navLink, "darkMode__letters"));
  footer.classList.toggle("footer__dark");
  cardsTitle.forEach((cardTitle) =>
    toggleClass(cardTitle, "darkMode__letters")
  );
  console.log("botao funcionando");
  toggleButton(darkBtn);
};

darkBtn.addEventListener("click", darkMode);

function toggleButton(el) {
  if (el.innerHTML == "Modo escuro") {
    el.innerHTML = "Modo claro";
  } else if (el.innerHTML == "Modo claro") {
    el.innerHTML = "Modo escuro";
  }
}
function toggleClass(el, classe) {
  el.classList.toggle(classe);
}
