const modeSelectButton = document.querySelector("#mode-select");
const nav = document.querySelector(".container-fluid")
const footer = document.querySelector(".footer")
let estiloRiver = localStorage.getItem("modo-river")




function activarModoColor() {
    nav.classList.add("modo-river");
    footer.classList.add("modo-river");
    localStorage.setItem("modo-river", "activado");
    if (nav.classList.contains("modo-river")) {
        modeSelectButton.innerText = "Estilo Clásico";
    } else {
        modeSelectButton.innerText = "Estilo River";
    }
}

function desactivarModoColor() {
    nav.classList.remove("modo-river");
    footer.classList.remove("modo-river");
    localStorage.setItem("modo-river", "desactivado");
    if (nav.classList.contains("modo-river")) {
        modeSelectButton.innerText = "Estilo Clásico";
    } else {
        modeSelectButton.innerText = "Estilo River";
    }
}


modeSelectButton.addEventListener("click", () => {
    estiloRiver = localStorage.getItem("modo-river");

    if (estiloRiver === "activado") {
        desactivarModoColor();
    } else {
        activarModoColor();
    }
})

if (estiloRiver === "activado") {
    activarModoColor();
} else {
    desactivarModoColor();
}







