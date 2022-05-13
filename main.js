const darkBtn = document.querySelector(".dark-btn")

const darkMode = function () {
    const body = document.querySelector("body")
    const header = document.querySelector(".main-header")
    header.classList.toggle("main-header__dark")
    body.classList.toggle("body__dark")
    console.log("botao funcionando")
}

darkBtn.addEventListener("click", darkMode);