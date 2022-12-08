// variables
const navBar = document.querySelector('nav');
const button = document.querySelector('.toggler');


// 
button.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(e.target)
    if(e.target.classList.contains('toggler')){
        e.target.classList.toggle('close')
    }
    navBar.classList.toggle('open-nav');
})