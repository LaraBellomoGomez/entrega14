const ele = document.getElementById("ele1");

// color por defecto: green
function pintar(elemento, color = 'green') {
  elemento.style.backgroundColor = color;
}

// al hacer click se pasa amarillo
ele.addEventListener("click", function () {
  pintar(ele, 'yellow');
});


