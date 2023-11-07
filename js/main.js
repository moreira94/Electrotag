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

let botonCarrito = document.querySelector("#carrito-icon")
let carritoTienda = document.querySelector(".carrito-tienda")

function abrirCarrito() {
    carritoTienda.classList.toggle("hidden");
}

botonCarrito.addEventListener("click", () => {
    abrirCarrito()
})

const productos = [
    {
        id: "seca-01",
        titulo: "Secarropas Ariston AQCF 852 BU",
        imagen: "../images/seca-ariston.webp",
        carga: "8Kg",
        caracteristica: "Secado por condensación",
        categoria: {
            nombre: "Secarropas",
            id: "secarropas"
        },
        precio: "$280.000",
    },
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
        precio: "$320.000",
    },
    {
        id: "lavavaj-01",
        titulo: "Lavavajillas Whirlpool WLF12AB",
        imagen: "../images/lavavaj-whirlpool.webp",
        carga: "12 Cubiertos",
        caracteristica: "Cantidad de programas: 8",
        categoria: {
            nombre: "Lavavajillas",
            id: "lavavajillas"
        },
        precio: "$290.000",
    },
    {
        id: "lava-02",
        titulo: "Lavarropas GE GELVGE08e12",
        imagen: "../images/gelvge07e12b.png",
        carga: "7Kg",
        caracteristica: "Velocidad de Centrifugado: 1200RPM",
        categoria: {
            nombre: "Lavarropas",
            id: "lavarropas"
        },
        precio: "$220.000",

    },
    {
        id: "lava-03",
        titulo: "Lavarropas Candy GV108t12",
        imagen: "../images/candygv108t12.png",
        carga: "8Kg",
        caracteristica: "Velocidad de Centrifugado: 1000RPM",
        categoria: {
            nombre: "Lavarropas",
            id: "lavarropas"
        },
        precio: "$190.000",

    },
    {
        id: "lavavaj-02",
        titulo: "Lavavajillas Samsung Modelo DW-FN320W",
        imagen: "../images/lavavajsamsung.png",
        carga: "12 cubiertos",
        caracteristica: "Cantidad de programas: 6",
        categoria: {
            nombre: "Lavavajillas",
            id: "lavavajillas"
        },
        precio: "$420.000",

    },
    {
        id: "lava-04",
        titulo: "Lavarropas ELECTROLUX ELAC209W",
        imagen: "../images/electroluxelac209w.png",
        carga: "9Kg",
        caracteristica: "Velocidad de Centrifugado: 750RPM",
        categoria: {
            nombre: "Lavarropas",
            id: "lavarropas"
        },
        precio: "$210.000",

    },
    {
        id: "lava-05",
        titulo: "Lavarropas Drean Gold Blue 8.6",
        imagen: "../images/dreangoldblue86.png",
        carga: "6Kg",
        caracteristica: "Velocidad de Centrifugado: 800RPM",
        categoria: {
            nombre: "Lavarropas",
            id: "lavarropas"
        },
        precio: "$170.000",

    },
    {
        id: "lava-06",
        titulo: "Lavarropas Gafa Modelo 7500",
        imagen: "../images/gafa7500.png",
        carga: "6Kg",
        caracteristica: "Velocidad de Centrifugado: 800RPM",
        categoria: {
            nombre: "Lavarropas",
            id: "lavarropas"
        },
        precio: "$230.000",

    },
    {
        id: "lavavaj-03",
        titulo: "Lavavajillas Ariston LKF71",
        imagen: "../images/lavavajariston.png",
        carga: "14 cubiertos",
        caracteristica: "Cantidad de programas: 6",
        categoria: {
            nombre: "Lavavajillas",
            id: "lavavajillas"
        },
        precio: "$380.000,"

    }
];

console.log(productos)

const productConteiner = document.querySelector(".productos");
let botonAgregarItem = document.querySelectorAll(".agregar-producto")


function cargaProductos(productosSeleccionados) {

    productConteiner.innerHTML = ""
    productosSeleccionados.forEach(producto => {

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
            <i id=${producto.id} class="cart-tienda bi bi-cart4 agregar-producto"></i>
        </div>`;
        productConteiner.append(div);
    })
    actualizarBotonAgregarItem()
}

cargaProductos(productos)

const lavarropas = document.querySelector("#lavarropas")
const lavavajillas = document.querySelector("#lavavajillas")
const botonFiltro = document.querySelectorAll(".filter-button")

botonFiltro.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonFiltro.forEach(boton => boton.classList.remove("active"))
        e.currentTarget.classList.add("active")

        if (e.currentTarget.id != "todos") {
            const productosSeleccion = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargaProductos(productosSeleccion)
        } else {
            cargaProductos(productos)
        }

    })
})

let productosEnCarrito = [];
const carritoDeProductos = document.querySelector(".carrito-productos");


function actualizarBotonAgregarItem() {
    botonAgregarItem = document.querySelectorAll(".agregar-producto");
    botonAgregarItem.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
};

function agregarAlCarrito(e) {
    const botonId = e.currentTarget.id;
    const productoListo = productos.find(producto => producto.id === botonId);
    let productosCarriteados = JSON.parse(localStorage.getItem("Productos"));
    productosCarriteados.some(producto => producto.id === botonId) ? alert("El producto ya esta en el carrito") : productosEnCarrito.push(productoListo) && console.log(productosEnCarrito);
    localStorage.setItem("Productos", JSON.stringify(productosEnCarrito));
    productosEnCarrito = JSON.parse(localStorage.getItem("Productos"))
}










