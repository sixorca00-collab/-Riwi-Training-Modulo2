const Bienvenido = "Bienvenido a nuestra pagina."
//alert()
const btn = document.getElementById("btn");
const contacto = document.getElementById("contacto");

btn.addEventListener("click", () => {
    contacto.classList.toggle("modo-noche");
});
