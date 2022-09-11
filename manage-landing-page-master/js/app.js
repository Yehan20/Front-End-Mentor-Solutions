// Button
const button = document.querySelector('.toggle-btn');
const navBar=document.querySelector('nav');
button.addEventListener('click',(e)=>{
     navBar.classList.toggle('show')
     document.body.classList.toggle('change-clr')
     button.classList.toggle('change-state')
})

// Email validation regex
const input = document.querySelector('.input-box input');
const goBtn = document.querySelector('.input-box button');

goBtn.addEventListener('click',(e)=>{
     let regex=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
     if(regex.test(input.value)){
        alert('Thank you for suscribing')
        input.value=''
         
     }
     else{
          console.log('email not valid');
          document.querySelector('.error').style.display='inline';
          input.classList.add('change-focus');
          setTimeout(()=>{
               document.querySelector('.error').style.display='none';
               input.classList.remove('change-focus');
            },2000)
     }
})