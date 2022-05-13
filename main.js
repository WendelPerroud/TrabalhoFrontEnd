const darkBtn = document.querySelector(".dark-btn");

const darkMode = function () {
  const body = document.querySelector("body");
  const header = document.querySelector(".main-header");
  const navLinks = document.querySelectorAll(".nav-link");
  const container = document.querySelector(".container");
  const cards = document.querySelectorAll(".card");
  const cardsTexto = document.querySelectorAll(".card-text");
  const cardsTitle = document.querySelectorAll(".card-title");
  const footer = document.querySelector("footer div");

  body.classList.toggle("body__dark");
  header.classList.toggle("main-header__dark");
  container.classList.toggle("container__dark");
  navLinks.forEach((navLink) => toggleClass(navLink, "darkMode__letters"));
  cards.forEach((card) => toggleClass(card, "card__dark"));
  cardsTexto.forEach((card) => toggleClass(card, "darkMode__letters"));
  cardsTitle.forEach((cardTitle) =>
    toggleClass(cardTitle, "darkMode__letters")
  );
  footer.classList.toggle("footer__dark");
  toggleButton(darkBtn);

  console.log("botao funcionando");
};

darkBtn.addEventListener("click", darkMode);

function toggleClass(el, classe) {
  el.classList.toggle(classe);
}

function toggleButton(el) {
  if (el.innerHTML == "Modo escuro") {
    el.innerHTML = "Modo claro";
  } else if (el.innerHTML == "Modo claro") {
    el.innerHTML = "Modo escuro";
  }
}
