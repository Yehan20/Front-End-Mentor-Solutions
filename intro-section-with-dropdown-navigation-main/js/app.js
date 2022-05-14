// Nav bar Toggle Effect
const nav = document.querySelector('.nav__bar');


//  Mobile view toggle functionality 

document.querySelector('#toggleBtn').addEventListener("click",()=>{
    const list  =document.querySelector('.list');
    let cross = document.querySelector('.cross');
    
    if(cross.classList.contains('no')){
      cross.src=`../images/icon-close-menu.svg`
      cross.classList.replace("no","yes");
      list.classList.add('move');
      nav.classList.add('nav__bar__toggled')
    }

    else{
        cross.src=`../images/icon-menu.svg`
        cross.classList.replace("yes","no");
        list.classList.remove('move');
        nav.classList.remove('nav__bar__toggled')
    }
})

//  Arrow changing funcionality mobile view
const dropDownFunction =(e)=>{
    e.preventDefault();

    let arrow=(e.target.lastElementChild);
    let sublist=e.target.nextElementSibling;
    if(arrow){
       if(!arrow.classList.contains("reverse")){
           arrow.src=`images/icon-arrow-up.svg`
           arrow.classList.add("reverse")
           sublist.classList.toggle("remove02");
       }
       else{
           arrow.src=`images/icon-arrow-down.svg`
           arrow.classList.remove("reverse")
              sublist.classList.toggle("remove02")
       }
    }

    if(e.target.className==='dropdown__arrow'){
       e.target.src=`images/icon-arrow-up.svg`
    }
    
}


//  Drop Down List Affect
const dropDown  = document.querySelectorAll(".dropDown");
dropDown.forEach((dropDown)=>{
     dropDown.addEventListener('click',dropDownFunction)
})

// if user uses a tablet 
if(innerWidth>767){

    dropDown.forEach((dropDown)=>{
        dropDown.removeEventListener('click',dropDownFunction)
     })
      console.log("ok")
   }



  // remove the click effect in larger screen 
window.addEventListener("resize",(e)=>{
   if(innerWidth>767){
    dropDown.forEach((dropDown)=>{
        dropDown.removeEventListener('click',dropDownFunction)
     })

     let sub = document.querySelectorAll('.sub__list');
     sub.forEach((su)=>{su.classList.add('remove01') 
                       su.classList.remove('remove02')})
   
      console.log("ok")
   }
   else{
    dropDown.forEach((dropDown)=>{
        dropDown.addEventListener('click',dropDownFunction)
   })
   }
 
})