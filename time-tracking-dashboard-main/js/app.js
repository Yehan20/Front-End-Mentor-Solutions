// Click links change color
const links = document.querySelectorAll(".time");

// activities
const work = document.querySelector('#work .time');
const study = document.querySelector('#study .time');
const play = document.querySelector('#play .time');
const social = document.querySelector('#social .time');
const selfcare = document.querySelector('#selfcare .time');
const exercise = document.querySelector('#exercise .time');

const library = new Library(work,play,study,exercise,social,selfcare);

links.forEach((link)=>{
    link.addEventListener('click',(e)=>{
        
        e.preventDefault();
        removeLinks(links);
        link.classList.add("active");
        library.fetchData(link.id);       
    })
 
})

function removeLinks(links){
     
    links.forEach((link)=>{
      if(link.classList.contains("active")){
           link.classList.remove("active");  
      }
             
    })
}

