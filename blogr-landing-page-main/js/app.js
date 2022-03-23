// Contains all the animations
function toggleNavBar(){
    const toggler = document.querySelector('.toggle__btn');
    const list = document.querySelector('.list');
    const image= document.querySelector('.image__icon')
    toggler.addEventListener('click',()=>{
        if(list.style.display===`none`){
            list.style.display=`flex`;
            image.src='images/icon-close.svg'
           
         
        }
        else {
            list.style.display=`none`;

            image.src='images/icon-hamburger.svg'
        };
        
    })

}
toggleNavBar();