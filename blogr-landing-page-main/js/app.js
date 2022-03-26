// Contains all the animations
function toggleNavBar(){
    const toggler = document.querySelector('.toggle__btn');
    const list = document.querySelector('.list');
    const image= document.querySelector('.image__icon')
    toggler.addEventListener('click',()=>{

        if(list.style.display===`none`||list.style.display===``){
            image.src='images/icon-close.svg'
            list.style.display=`flex`;
            console.log('clicked');
           
           
         
        }
        else {
            image.src='images/icon-hamburger.svg'
            list.style.display=`none`;

     
        }
        
    })

}
toggleNavBar();

// sub list toggler
function toggleSublist(){

    const subList=document.querySelector('.sub__list');
    document.querySelector('.sub').addEventListener('click',(e)=>{
        e.preventDefault();
          if(subList.style.display===`none`||subList.style.display===``){
              subList.style.display=  `block`;
          }
          else{
              subList.style.display=  `done`;
          }
    })

}
//toggleSublist();
if(window.innerWidth<799)addDarkArrows();
else addLightArrows();

window.addEventListener('resize',(e)=>{
   
    if(window.innerWidth<799){
        console.log('small')
        addDarkArrows();
       
    }
    else{
        addLightArrows();
    }
})

function addDarkArrows(){
    const arrow = document.querySelectorAll('#arrow');
    arrow.forEach((link)=>{
        link.src='images/icon-arrow-dark.svg'
    })
}
function addLightArrows(){
    const arrow = document.querySelectorAll('#arrow');
    arrow.forEach((link)=>{
        link.src='images/icon-arrow-light.svg'
    })
}