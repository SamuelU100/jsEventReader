const figure = document.getElementById('figure');
const color = 'Red';
const colors = ['red','green','yellow','grey','black'];



function paintMe() {
    let rnd = Math.floor((Math.random() * colors.length-1) +1);
    figure.style.background = colors[rnd];
    
}