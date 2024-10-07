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

function colorRojo() {
    let claseRoja = document.getElementsByClassName("para");
    claseRoja[1].classList.add('rojo');

}

document.addEventListener("DOMContentLoaded", () => {
    //console.log("DOM ha sido cargado");

    let buttonNoClick = document.getElementById("no-click");
    
    //console.log(buttonNoClick);

    buttonNoClick.addEventListener('click', noClick);

    let thirdButton = document.getElementById("third");
    thirdButton.addEventListener('click', botonPersonal);

    let misClases = document.getElementsByClassName("para");
    console.log(misClases);

    misClases[2].classList.add('negrita');
    misClases[4].classList.remove('para');

    for (let index = 0; index < misClases.length; index++) {
        misClases[index].classList.add("hola");
    }

    document.getElementById("rojo").addEventListener('click', colorRojo);
    
})