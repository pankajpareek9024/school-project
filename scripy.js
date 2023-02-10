let preloder = document.getElementById("preloader")

window.addEventListener("load",()=>{
    preloder.style.display="none"
})



let slide = document.getElementById("slide")

let heroimages = ['images1.jpg','images2.jpg','images3.jpg',"kids-1093758__480.jpg" ];
var i = 0;

setInterval(()=>{

    if(i==4){
        i=0;
    }
    slide.src = heroimages[i]
    i++;

},3000)