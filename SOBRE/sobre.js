const darkBtn = document.querySelector(".dark-btn")

const darkMode = function () {
    const body = document.querySelector("body")
    const header = document.querySelector(".main-header")
    const textoSobre = document.querySelector(".sobre-desc")
    const membros = document.querySelector(".btn")

    body.classList.toggle("body__dark")
    header.classList.toggle("main-header__dark")
    textoSobre.classList.toggle("darkMode__letters")
    membros.classList.toggle("darkMode__letters")
}

darkBtn.addEventListener("click", darkMode);