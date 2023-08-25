let barras = [document.getElementById("hr1"),document.getElementById("hr2"),document.getElementById("hr3")]
let girar = true
let menu = document.getElementById("nav")

for(let i=0; i < barras.length; i++){
    barras[i].addEventListener("click", () =>{
        menu.style.transition = "0.5s"
        barras[i].style.transition="0.5s"
        barras[i].style.position="relative"
        if(girar){
        barras[i].style.transition="0.5s"
        barras[1].style.opacity="0"
        barras[0].style.transform="rotate(45deg)"
        barras[0].style.top= "5px"
        barras[2].style.transform="rotate(-45deg)"
        barras[0].style.bottom= "15px"
        barras[2].style.left="-1px"
        girar = false
        menu.style.zIndex = 2000
        menu.style.opacity = 1
    }
    })
}