const darkBtn = document.querySelector(".dark-btn")

const darkMode = function () {
    const body = document.querySelector("body")
    body.classList.toggle("body__dark")
    console.log("botao funcionando")
}

darkBtn.addEventListener("click", darkMode);