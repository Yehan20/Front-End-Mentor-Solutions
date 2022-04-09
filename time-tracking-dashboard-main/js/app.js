// Click links change color
const links = document.querySelectorAll(".time");
const container = document.querySelector(".container");
const header = document.querySelector(".user__profile");

// activities
const work = document.querySelector('#work .time');
const study = document.querySelector('#study .time');
const play = document.querySelector('#play .time');
const social = document.querySelector('#social .time');
const selfcare = document.querySelector('#selfcare .time');
const exercise = document.querySelector('#exercise .time');

//row
//sconst rowTime = document.querySelectorAll('.row.time');
// console.log(rowTime);



links.forEach((link)=>{
    link.addEventListener('click',(e)=>{
        e.preventDefault();
        removeLinks(links);
        link.classList.add("active");
        fetchData(link.id)

  
        
    })
 
})

function removeLinks(links){
     
    links.forEach((link)=>{
      if(link.classList.contains("active")){
           link.classList.remove("active");  
      }
             
    })
}

function fetchData(day){
    fetch("../data.json").then(res=>res.json()).then((data)=>{
        let datas;
        data.forEach((titles)=>{
     
            activityType=((Object.entries(titles)[0][1]))
          if(day==="daily"){
          
          
            datas=((Object.entries(titles.timeframes.daily)))
            console.log(datas[0][1],datas[1][1])
            // rowTime.forEach(((row)=>{
            //     row.innerHTML
            // }))
            switch(activityType){
                case "Work":
                work.innerHTML=` <h3>${datas[0][1]}hrs</h3>
                <p>Last week ${datas[0][1]}-hrs</p> `    
                break;
                
                case "Play":
                play.innerHTML=` <h3>${datas[0][1]}hrs</h3>
                <p>Last week ${datas[0][1]}-hrs</p> `    
                break;
                
                case "Study":
                study.innerHTML=` <h3>${datas[0][1]}hrs</h3>
                <p>Last week ${datas[0][1]}-hrs</p> `    
                break;
                
                case "Exercise":
                exercise.innerHTML=` <h3>${datas[0][1]}hrs</h3>
                <p>Last week ${datas[0][1]}-hrs</p> `    
                break;
                
                case "Social":
                social.innerHTML=` <h3>${datas[0][1]}hrs</h3>
                <p>Last week ${datas[0][1]}-hrs</p> `    
                break; 

                case "Self Care":
                selfcare.innerHTML=` <h3>${datas[0][1]}hrs</h3>
                <p>Last week ${datas[0][1]}-hrs</p> `    
                break; 

            }
          }
         
          
          if(day==="weekly"){
             
            datas=((Object.entries(titles.timeframes.weekly)))
          
            switch(activityType){
                case "Work":
                work.innerHTML=` <h3>${datas[0][1]}hrs</h3>
                <p>Last week ${datas[0][1]}-hrs</p> `    
                break;
                
                case "Play":
                play.innerHTML=` <h3>${datas[0][1]}hrs</h3>
                <p>Last week ${datas[0][1]}-hrs</p> `    
                break;
                
                case "Study":
                study.innerHTML=` <h3>${datas[0][1]}hrs</h3>
                <p>Last week ${datas[0][1]}-hrs</p> `    
                break;
                
                case "Exercise":
                exercise.innerHTML=` <h3>${datas[0][1]}hrs</h3>
                <p>Last week ${datas[0][1]}-hrs</p> `    
                break;
                
                case "Social":
                social.innerHTML=` <h3>${datas[0][1]}hrs</h3>
                <p>Last week ${datas[0][1]}-hrs</p> `    
                break; 

                case "Self Care":
                selfcare.innerHTML=` <h3>${datas[0][1]}hrs</h3>
                <p>Last week ${datas[0][1]}-hrs</p> `    
                break; 

            }
              
          }
           

          if(day==="monthly"){

            datas=((Object.entries(titles.timeframes.monthly)))
          
            switch(activityType){
                case "Work":
                work.innerHTML=` <h3>${datas[0][1]}hrs</h3>
                <p>Last week ${datas[0][1]}-hrs</p> `    
                break;
                
                case "Play":
                play.innerHTML=` <h3>${datas[0][1]}hrs</h3>
                <p>Last week ${datas[0][1]}-hrs</p> `    
                break;
                
                case "Study":
                study.innerHTML=` <h3>${datas[0][1]}hrs</h3>
                <p>Last week ${datas[0][1]}-hrs</p> `    
                break;
                
                case "Exercise":
                exercise.innerHTML=` <h3>${datas[0][1]}hrs</h3>
                <p>Last week ${datas[0][1]}-hrs</p> `    
                break;
                
                case "Social":
                social.innerHTML=` <h3>${datas[0][1]}hrs</h3>
                <p>Last week ${datas[0][1]}-hrs</p> `    
                break; 

                case "Self Care":
                selfcare.innerHTML=` <h3>${datas[0][1]}hrs</h3>
                <p>Last week ${datas[0][1]}-hrs</p> `    
                break; 

            }
           }
          
        })
        // console.log(datas)
       
    })
}
