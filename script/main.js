console.log("mi primer mensaje");
// alert("nomeseasmaricon");

function miBoton(){
    console.error("Has pinchado en el boton, maquina");
}

function noClick() {
    console.log("NO CLIIIIIICK!!!!!!")
}

function botonPersonal() {
    alert("Aquí no se pincha, imbécil");
}

document.addEventListener("DOMContentLoaded", () => {
    //console.log("DOM ha sido cargado");

    let buttonNoClick = document.getElementById("no-click");
    
    //console.log(buttonNoClick);

    buttonNoClick.addEventListener('click', noClick);

    let thirdButton = document.getElementById("third");

    thirdButton.addEventListener('click', botonPersonal);
})