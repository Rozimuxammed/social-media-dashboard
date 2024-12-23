const darkMode = document.querySelector(".nav-toogle-btn")
const header = document.querySelector("header")
const textH1 = document.querySelectorAll(".logo-text")
const textP = document.querySelector(".total-followers")
const modeText = document.querySelector(".dark-mode-text")
const button = document.querySelector(".nav-toogle-btn")
const buttonCircle = document.querySelector(".nav-toogle-btn-circle")
const main = document.querySelector("main")
const card = document.querySelectorAll(".card")
const cardInfoText = document.querySelectorAll(".card-info-text")

let isDarkMode = false

darkMode.addEventListener("click", () => {
    if (isDarkMode) {
        header.style.backgroundColor = "#F7F9FF";
        textH1.forEach(item =>{
            item.style.color = "#1D1F29";
        })
        textP.style.color = "#63687D";
        modeText.style.color = "#63687D";
        modeText.textContent = "LIGHT MODE";
        button.style.background = "#AEB3CB";
        buttonCircle.style.transform = "translateX(22px)";
        buttonCircle.style.background = "#F1F3FA"
        main.style.backgroundColor = "#ffffff";
        card.forEach(item =>{
            item.style.backgroundColor = "#F1F3FA"
        })
        cardInfoText.forEach(item =>{
            item.style.color = "#63687D"
        })
    } else {
        header.style.backgroundColor = "#20222F";
        textH1.forEach(item =>{
            item.style.color = "#FFFFFF";
        })
        textP.style.color = "#8C98C6";
        modeText.style.color = "#8C98C6";
        modeText.textContent = "Dark Mode";
        button.style.background = "linear-gradient(#40DB82, #388FE7)";
        buttonCircle.style.transform = "translateX(0)"
        buttonCircle.style.background = "#252B42"
        main.style.backgroundColor = "#1d1f29";
        card.forEach(item =>{
            item.style.backgroundColor = "#252B42"
        })
        cardInfoText.forEach(item =>{
            item.style.color = "#8C98C6"
        })
    }
    isDarkMode = !isDarkMode;
});