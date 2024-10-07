console.log("mi primer mensaje");

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
    let misClases = document.getElementsByClassName("para");
    misClases[0].classList.add('rojo')
    console.log("NO CLIIIIIICK!!!!!!")

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