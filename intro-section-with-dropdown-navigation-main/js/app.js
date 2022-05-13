// Nav bar Toggle Effect
const nav = document.querySelector('.nav__bar');

document.querySelector('#toggleBtn').addEventListener("click",()=>{
    const list  =document.querySelector('.list');
    let cross = document.querySelector('.cross');
    
    if(cross.classList.contains('no')){
      cross.src=`images/icon-close-menu.svg`
      cross.classList.replace("no","yes");
      list.classList.add('move');
      nav.classList.add('nav__bar__toggled')
    }

    else{
        cross.src=`images/icon-menu.svg`
        cross.classList.replace("yes","no");
        list.classList.remove('move');
        nav.classList.remove('nav__bar__toggled')
    }
})


//  Drop Down List Affect
const dropDown  = document.querySelectorAll("#dropDown");
dropDown.forEach((dropDown)=>{
     dropDown.addEventListener('click',(e)=>{
         e.preventDefault();

         let arrow=(e.target.lastElementChild);
         let sublist=e.target.nextElementSibling;
         if(arrow){
            if(!arrow.classList.contains("reverse")){
                arrow.src=`images/icon-arrow-up.svg`
                arrow.classList.add("reverse")
                sublist.style.display=`block`;
            }
            else{
                arrow.src=`images/icon-arrow-down.svg`
                arrow.classList.remove("reverse")
                sublist.style.display=`none`;
            }
         }

         if(e.target.className==='dropdown__arrow'){
            e.target.src=`images/icon-arrow-up.svg`
         }
         
     })
})