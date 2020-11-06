
const images = ["img/pic1.jpg","img/pic2.jpg","img/pic3.jpg","img/pic4.jpg"];
const imageToChange = document.getElementById("image");
const documentBody = document.getElementsByTagName("body") [0];
const switchButton = document.getElementById("switch");


function changeImage() {
    console.log("Button clicked!");
    let rnd = Math.floor((Math.random()*images.length-1) +1);
    console.log(rnd);
    imageToChange.src = images[rnd];
    
}

function switchMode() {
    console.log(switchButton.innerHTML);
    if(switchButton.innerHTML === 'Night') {
    documentBody.style.background = "black";
    swichButton.innerHTML = 'Day';
    } else {
        document.style.background = "White";
        switchButton.innerHTML = 'Night';
    }

   
}