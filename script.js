let rgb = document.querySelector('h4');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let body = document.querySelector('body');

let hexColor = rgb.textContent = `${color1.value}  ${color2.value}`;

function setColor(){
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    hexColor+= rgb.textContent = `${color1.value}  ${color2.value}`;
}

color1.addEventListener('input', setColor);

color2.addEventListener('input', setColor);

