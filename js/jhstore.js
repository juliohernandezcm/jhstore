const productos = [
  {
    sku: 1,
    nombre: "Macbook Air",
    precio: 1000,
    categoria: "nuevo",
    img: "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    sku: 2,
    nombre: "iMac",
    precio: 2000,
    categoria: "popular",
    img: "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    sku: 3,
    nombre: "Cargador Iphone",
    precio: 3000,
    categoria: "nuevo",
    img: "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    sku: 4,
    nombre: "Mouse Apple",
    precio: 4000,
    categoria: "popular",
    img: "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    sku: 5,
    nombre: "Teclado iMac",
    precio: 5000,
    categoria: "nuevo",
    img: "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    sku: 6,
    nombre: "iWatch",
    precio: 600,
    categoria: "popular",
    img: "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

var listadoProductos = "";

productos.forEach(function (element) {
  listadoProductos += `<div class="col-md-4 cardProductos">
          <div class="card h-100">
            <img class="card-img-top"
              src="${element.img}"
              alt="..." />
            <div class="card-body p-4">
              <div class="text-center">
                <h5 class="fw-bolder">${element.nombre}</h5>
                ${element.precio}
              </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#" onclick="agregarAlCarrito('${element.sku}')">Agregar al carrito</a></div>
              <br>
              <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Ver especificaciones</a></div>
            </div>
          </div>
        </div>`;
});
$("#listado_productos_home").html(listadoProductos);

const carrito = [];

function agregarAlCarrito(sku) {
  productos.forEach(function (element) {
    if (sku == element.sku) {
      if (carrito.length > 0) {
        //aqui valido que el producto exista en el array de productos
        carrito.forEach(function (elementCarrito) {
          if (sku == elementCarrito.sku) {
            //aqui valido si el productos ya esta en el array carrito, si esta solo sumo la cantidad, sino, agrego el producto al carrito
            elementCarrito.cantidad = elementCarrito.cantidad + 1;
          } else {
            carrito.push({
              sku: element.sku,
              nombre: element.nombre,
              precio: element.precio,
              img: element.img,
              cantidad: 1,
            });
          }
        });
      } else {
        carrito.push({
          sku: element.sku,
          nombre: element.nombre,
          precio: element.precio,
          img: element.img,
          cantidad: 1,
        });
      }
    }
  });
}

console.log(carrito);

function traeProductosPrincipal() {
  //carga los productos en la página principal
}
