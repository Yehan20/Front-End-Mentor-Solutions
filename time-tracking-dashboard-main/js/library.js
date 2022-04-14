class Library{
    
    constructor(work,play,study,exercise,social,selfcare){
        this.work =work;
        this.play =play;
        this.study =study;
        this.exercise =exercise;
        this.social =social;
        this.selfcare =selfcare;

    }


    fetchData(day){
        fetch("../data.json").then(res=>res.json()).then((data)=>{
            let datas;
            let activityType;
            data.forEach((titles)=>{
                activityType=((Object.entries(titles)[0][1])) // get the activities each loop different activity

              if(day==="daily"){ 
              
                datas=((Object.entries(titles.timeframes.daily))) // get the data per each time each loop new set added

                this.addData(datas,activityType); // each loop this method is called , new set of data is added depending on activity type
              }
             
              
              if(day==="weekly"){
                 
                datas=((Object.entries(titles.timeframes.weekly)))    
                this.addData(datas,activityType);
                  
              }
               
    
              if(day==="monthly"){
    
                datas=((Object.entries(titles.timeframes.monthly)))     
                this.addData(datas,activityType);
               }
              
            })
           
        })
    }


    addData(data,type){
       console.log(data)
      switch(type){
          case "Work":
          work.innerHTML=` <h3>${data[0][1]}hrs</h3>
          <p>Last week ${data[1][1]}-hrs</p> `    
          break;
          
          case "Play":
          play.innerHTML=` <h3>${data[0][1]}hrs</h3>
          <p>Last week ${data[1][1]}-hrs</p> `    
          break;
          
          case "Study":
          study.innerHTML=` <h3>${data[0][1]}hrs</h3>
          <p>Last week ${data[1][1]}-hrs</p> `    
          break;
          
          case "Exercise":
          exercise.innerHTML=` <h3>${data[0][1]}hrs</h3>
          <p>Last week ${data[1][1]}-hrs</p> `    
          break;
          
          case "Social":
          social.innerHTML=` <h3>${data[0][1]}hrs</h3>
          <p>Last week ${data[1][1]}-hrs</p> `    
          break; 
  
          case "Self Care":
          selfcare.innerHTML=` <h3>${data[0][1]}hrs</h3>
          <p>Last week ${data[1][1]}-hrs</p> `    
          break; 
  
       }
   }   
}