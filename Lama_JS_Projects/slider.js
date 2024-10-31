let left=document.querySelector('.left');
let right=document.querySelector('.right');
let slider=document.querySelector('.slider');
let images=document.querySelectorAll('.image');

let slideNumber=1;
left.addEventListener('click',()=>{
   if(slideNumber<images.length){
      slider.style.transform=`translate(-${slideNumber*500}px)`
   slideNumber++;
   }
   else{
      slider.style.transform=`translate(0px)`
      slideNumber=1;
   }
   
})
