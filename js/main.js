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
};


const productos = [
    {
        id: "lava-01",
        titulo: "Lavarropas LG F1400TD",
        imagen: "../images/lgf1400td.png",
        carga: "8,5kg",
        caracteristica: "Velocidad de Centrifugado: 1400RPM",
        categoria: {
            nombre: "Lavarropas",
            id: "lavarropas"
        },
        precio: 180.000
    },
    {
        id: "lava-02",
        titulo: "Lavarropas GE GELVGE08e12",
        imagen: "../images/gelvge07e12b.png",
        carga: "7 KG",
        caracteristica: "Velocidad de Centrifugado: 1200RPM",
        categoria: {
            nombre: "Lavarropas",
            id: "lavarropas"
        },
        precio: 140.000

    },
    {
        id: "lava-03",
        titulo: "Lavarropas Candy GV108t12",
        imagen: "../images/candygv108t12.png",
        carga: "8KG",
        caracteristica: "Velocidad de Centrifugado: 1000RPM",
        categoria: {
            nombre: "Lavarropas",
            id: "lavarropas"
        },
        precio: 125.000

    },
    {
        id: "lava-04",
        titulo: "Lavarropas ELECTROLUX ELAC209W",
        imagen: "../images/electroluxelac209w.png",
        carga: "9KG",
        caracteristica: "Velocidad de Centrifugado: 750RPM",
        categoria: {
            nombre: "Lavarropas",
            id: "lavarropas"
        },
        precio: 108.200

    },
    {
        id: "lava-05",
        titulo: "Lavarropas Drean Gold Blue 8.6",
        imagen: "../images/dreangoldblue86.png",
        carga: "6KG",
        caracteristica: "Velocidad de Centrifugado: 800RPM",
        categoria: {
            nombre: "Lavarropas",
            id: "lavarropas"
        },
        precio: 135.000

    },
    {
        id: "lava-06",
        titulo: "Lavarropas Gafa Modelo 7500",
        imagen: "../images/gafa7500.png",
        carga: "6KG",
        caracteristica: "Velocidad de Centrifugado: 800RPM",
        categoria: {
            nombre: "Lavarropas",
            id: "lavarropas"
        },
        precio: 160.000

    },
    {
        id: "lavavaj-01",
        titulo: "Lavavajillas Samsung Modelo DW-FN320W",
        imagen: "../images/lavavajsamsung.png",
        carga: "12 cubiertos",
        caracteristica: "Cantidad de programas: 6",
        categoria: {
            nombre: "Lavavajillas",
            id: "lavavajillas"
        },
        precio: 190.000

    },
    {
        id: "lavavaj-02",
        titulo: "Lavavajillas Ariston LKF71",
        imagen: "../images/lavavajariston.png",
        carga: "14 cubiertos",
        caracteristica: "Cantidad de programas: 6",
        categoria: {
            nombre: "Lavavajillas",
            id: "lavavajillas"
        },
        precio: 180.000

    }
];

const productConteiner = document.querySelector(".productos");

function cargaProductos() {

    productos.foreach(producto => {

        const div = document.createElement("div");
        div.classList.add("lavarropas");
        div.innerHTML = `
        <img class="imgtienda" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="descripcion">
            <h3>${producto.titulo}</h3>
            <h3>${producto.precio}</h3>
            <ol>
                <li>${producto.carga}</li>
                <li>${producto.caracteristica}</li>
            </ol>
            <i class="cart-tienda bi bi-cart4"></i>
        </div>`;
        productConteiner.append(div);
    })
}

cargaProductos()







