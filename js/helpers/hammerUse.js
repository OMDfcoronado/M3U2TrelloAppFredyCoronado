delete Hammer.defaults.cssProps.userSelect;
const APP = document.querySelector("#app"); /* se selecciona el body */

const hammerjs = new Hammer(APP);
hammerjs.on("panleft panright", (evento) => {
    if (evento.pointerType === "touch") {
        const windowWidth = window.screen.width;
        const distance = Math.floor(evento.distance) >= 50;
        const modal = document.getElementById("modalNewTask");

        if(evento.type === "panleft" && evento.center.x > windowWidth - 100 && distance){
            modal.style.display = "block"
        }

        if(evento.type === "panright" && distance){
            modal.style.display = "none";
        }
    }
});
