let barras = [document.getElementById("hr1"),document.getElementById("hr2"),document.getElementById("hr3")]
let girar = true
let ver = true
let menu = document.getElementById("nav")

   
//    historia.addEventListener("click", () => {
//     console.log("hola")
//     if(girar=false){
//     window.scrollY = 600
//     barras[i].style.transition="0.5s"
//     barras[1].style.opacity="1"
//     barras[0].style.transform="rotate(0deg)"
//     barras[0].style.top= "-5px"
//     barras[2].style.transform="rotate(0deg)"
//     barras[0].style.bottom= "-15px"
//     barras[2].style.left="1px"
//     girar = true
//     menu.style.zIndex = -100
//     menu.style.opacity = 0  
//    }})    


for(let i=0; i < barras.length; i++){
    barras[i].addEventListener("click", () =>{
        menu.style.transition = "0.5s"
        barras[i].style.transition="0.5s"
        barras[i].style.position="relative"
        if(girar){
        barras[i].style.transition="0.5s"
        barras[1].style.opacity="0"
        barras[0].style.transform="rotate(45deg)"
        barras[0].style.top= "40px"
        barras[2].style.transform="rotate(-45deg)"
        barras[0].style.bottom= "15px"
        barras[2].style.left="-1px"
        girar = false
        menu.style.zIndex = 2000
        menu.style.opacity = 1

       
    }
    else{
        barras[i].style.transition="0.5s"
        barras[1].style.opacity="1"
        barras[0].style.transform="rotate(0deg)"
        barras[0].style.top= "-5px"
        barras[2].style.transform="rotate(0deg)"
        barras[0].style.bottom= "-15px"
        barras[2].style.left="1px"
        girar = true
        menu.style.zIndex = -100
        menu.style.opacity = 0

    }
})}
function login(){
    if(girar==false){
    window.scroll (0,0)
    barras[1].style.opacity="1"
    barras[0].style.transform="rotate(0deg)"
    barras[0].style.top= "-5px"
    barras[2].style.transform="rotate(0deg)"
    barras[0].style.bottom= "-15px"
    barras[2].style.left="1px"
    girar = true
    menu.style.zIndex = -100
    menu.style.opacity = 0  
   }}

   function historia(){
    if(girar==false){
        window.scroll (0,700)
    barras[1].style.opacity="1"
    barras[0].style.transform="rotate(0deg)"
    barras[0].style.top= "-5px"
    barras[2].style.transform="rotate(0deg)"
    barras[0].style.bottom= "-15px"
    barras[2].style.left="1px"
    girar = true
    menu.style.zIndex = -100
    menu.style.opacity = 0  
   }}

   function realizacion(){
    if(girar==false){
        window.scroll (0,1560)
    barras[1].style.opacity="1"
    barras[0].style.transform="rotate(0deg)"
    barras[0].style.top= "-5px"
    barras[2].style.transform="rotate(0deg)"
    barras[0].style.bottom= "-15px"
    barras[2].style.left="1px"
    girar = true
    menu.style.zIndex = -100
    menu.style.opacity = 0  
   }}

   function galeria(){
    if(girar==false){
        window.scroll (0,3080)
    barras[1].style.opacity="1"
    barras[0].style.transform="rotate(0deg)"
    barras[0].style.top= "-5px"
    barras[2].style.transform="rotate(0deg)"
    barras[0].style.bottom= "-15px"
    barras[2].style.left="1px"
    girar = true
    menu.style.zIndex = -100
    menu.style.opacity = 0  
   }}
         

    
        
   
        
 