//Array de productos //

let productos = []

let sumaTotal = document.querySelector("#total-carrito")
let totalCalculado = 0;
const productConteiner = document.querySelector(".productos");
let botonAgregarItem = document.querySelectorAll(".agregar-producto")

fetch("../js/productos.json")
    .then(response => response.json())
    .then(array =>{
        productos = array;
        cargaProductos(productos)
    })


//Estilos de pagina//
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

// Boton para abrir carrito//

let botonCarrito = document.querySelector("#carrito-icon")
let carritoTienda = document.querySelector(".carrito-tienda")

function abrirCarrito() {
    carritoTienda.classList.toggle("hidden");
}

botonCarrito.addEventListener("click", () => {
    abrirCarrito()
})



function cargaProductos(productosSeleccionados) {

    productConteiner.innerHTML = ""
    productosSeleccionados.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("lavarropas");
        div.innerHTML = `
        <img class="imgtienda" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="descripcion">
            <h3>${producto.titulo}</h3>
            <h3>$${producto.precio}</h3>
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

//Filtro de productos de la página//

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

let productosEnCarrito = JSON.parse(localStorage.getItem("Productos"));
if (!productosEnCarrito) {
    productosEnCarrito = []
}


function actualizarBotonAgregarItem() {
    botonAgregarItem = document.querySelectorAll(".agregar-producto");
    botonAgregarItem.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
};

function agregarAlCarrito(e) {
    const botonId = e.currentTarget.id;
    const productoListo = productos.find(producto => producto.id === botonId);
    productosEnCarrito.some(producto => producto.id === botonId) ? Swal.fire({
        icon: "warning",
        title: "Error",
        text: "El artefacto ya está en el carrito",
        background: `rgba(109, 39, 39, 0.9)`,
        color: `white` , 
      }) : productosEnCarrito.push(productoListo) && console.log(productosEnCarrito);
    localStorage.setItem("Productos", JSON.stringify(productosEnCarrito));
    productosEnCarrito = JSON.parse(localStorage.getItem("Productos"));
    sumarAlCarrito()

}

const carritoDeProductos = document.querySelector(".carrito-productos");
function sumarAlCarrito() {
    carritoDeProductos.innerHTML = ""
    productosEnCarrito.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("carrito-producto");
        div.innerHTML = `
        <div class="artefacto-carrito">${producto.titulo}</div>
        <div class="precio-carrito">${producto.precio}
        </div>`;
        carritoDeProductos.append(div);
    })
    sumaTotal.innerHTML = total()



}

//Boton de reset de carrito//

let botonReset = document.querySelector(".vaciar-carrito")

function resetCarrito() {
    productosEnCarrito = []
    localStorage.setItem("Productos", 0)
    carritoDeProductos.innerHTML = ""
    total()
    sumaTotal.innerHTML = "0"
    totalCalculado = 0
}

botonReset.addEventListener("click", resetCarrito)

sumarAlCarrito()

// Total //


sumaTotal.innerHTML = total()

function total() {
    totalCalculado = 0
    productosEnCarrito.map(producto => {
        totalCalculado += producto.precio
    })
    return totalCalculado

}

const checkOut = document.querySelector(".checkout-button")
checkOut.addEventListener("click", finalizarCompra)


function finalizarCompra() {
    if (productosEnCarrito.length === 0) {
        Swal.fire({
            title: "Error",
            text: "No ha seleccionado ningún producto",
            icon: "error",
            background: `rgba(109, 39, 39, 0.9)`,
            color: `white` , 
        });
    } else {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: "¿Quieres finalizar tu compra?",
            showCancelButton: true,
            confirmButtonText: "Si",
            cancelButtonText: "No",
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire({
                title: "Felicitaciones!",
                text: "Su compra se ha realizado con éxito.",
                icon: "success",
                background: `rgba(30, 113, 70, 0.9)`,
                color: `white` , 
              });
              resetCarrito()
            } else if (
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Commpra cancelada",
                text: "Se ha cancelado la compra",
                icon: "error",
                background: `rgba(109, 39, 39, 0.9)`,
                color: `white` , 
              });
            }
          });
    }
}










