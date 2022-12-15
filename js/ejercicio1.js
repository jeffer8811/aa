//query... selecionando una clase 
let carrusel = document.querySelector(".listas");

//scroll maximo
let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth
let intervalo = null;
//aplicamos la velocidad
let step = 1 ;

// creamos los intervalos
// crear un intervalo setInterval propio de javaScript
const start = () => {
  intervalo = setInterval(function()  {
    carrusel.scrollLeft = carrusel.scrollLeft + step;
    //Hará que la imagen retroceda
    if (carrusel.scrollLeft === maxScrollLeft) {
      step = step * -1;
    } else if (carrusel.scrollLeft === 0) {
      step = step * -1;
    }

  },10)//INTERVALO DE TIEMPO
}

const stop = () =>  {
  clearInterval(intervalo);
}

// creamos el metodo que al pasar el mouse se detenga
carrusel.addEventListener("mouseover",() => {
  stop();
})

carrusel.addEventListener("mouseout",() =>  {
  start();
})

// ejecute automaticamenete 
start();