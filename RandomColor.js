let btn=document.querySelector('button');
let colorName=document.querySelector('h3');
let div=document.querySelector('div');


function getRandomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

    let color=`rgb(${red},${green},${blue})`;
    return color;
}

btn.addEventListener("click",function(){
    let randomColor=getRandomColor(); 
    colorName.innerText="Color : "+randomColor;
    div.style.backgroundColor=randomColor;
});