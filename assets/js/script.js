precio = 400000;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;
let span = document.querySelector(".valor-total");
let boton = document.querySelector("button");
let botonMinus = document.querySelector("#btnMinus");

boton.addEventListener("click", () => {
  span.innerHTML = parseInt(span.innerHTML) + 400000;
});

botonMinus.addEventListener("click", () => {
    span.innerHTML = parseInt(span.innerHTML) - 400000;
  });