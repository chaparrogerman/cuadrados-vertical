const horizontal = document.querySelector("#horizontal");
const vertical = document.querySelector("#vertical");
const cuadrados = document.querySelector(".cuadrados");

horizontal.addEventListener("click", () => {
    
    cuadrados.classList.remove("verticales");

})

vertical.addEventListener("click", () => {
    
    cuadrados.classList.add("verticales");

})