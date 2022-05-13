const darkBtn = document.querySelector(".dark-btn");

const darkMode = function () {
  const body = document.querySelector("body");
  const header = document.querySelector(".main-header");
  const textoSobre = document.querySelector(".sobre-desc");
  const membros = document.querySelectorAll(".btn");
  const footer = document.querySelector("footer div");
  const navLinks = document.querySelectorAll(".nav-link");

  body.classList.toggle("body__dark");
  header.classList.toggle("main-header__dark");
  textoSobre.classList.toggle("darkMode__letters");
  membros.forEach((membro) => toggleClass(membro, "darkMode__letters"));
  navLinks.forEach((navLink) => toggleClass(navLink, "darkMode__letters"));
  footer.classList.toggle("footer__dark");
  toggleButton(darkBtn);
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
