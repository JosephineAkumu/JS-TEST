let $ = document;

let color  = $.querySelector(".color");

let btn = $.querySelector(".btn");

let view = $.querySelector(".view");

let min = 0;
let max =255;


btn.addEventListener("click",function(){
   
    setInterval(function(){
        let R = Math.random() * (max - min) + min;
        let G = Math.random() * (max - min) + min;
        let B = Math.random() * (max - min) + min;
        let gColor=`RGB(${R},${G},${B})`;
        view.textContent=gColor;
        color.style.backgroundColor = gColor;

    
    },100)

    

   
})
