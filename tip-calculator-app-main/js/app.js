// Tip Amount Person - tip + bill - bill / Number of people
//Total =   Bill * Rate / Number of  People

const bill = document.querySelector('#bill');
const buttons  =document.querySelectorAll('.tip')
let Bill_amount;
let data_ids=[];

const enableButtons = (result)=>{
    buttons.forEach((button)=>{
        if(result)
        button.disabled=false;      
        else
        button.disabled=true;
        
    })
}

const resetSelected = ()=>{
    buttons.forEach((btn)=>{
        if(btn.classList.contains("selected")){
            btn.classList.remove("selected")
        }
    })
}

const enableActiveStates=()=>{
    buttons.forEach((button)=>{
        let ids=button.getAttribute("data-id");
        data_ids.push(ids);
        
        button.addEventListener('click',(e)=>{
            console.log(e.target)
            console.log(data_ids)
            button.classList.toggle("selected")
            resetSelected();
            
        })
    })
}

bill.addEventListener('keyup',(e)=>{
    Bill_amount=e.target.value
    // Activate the buttons
    console.log(Bill_amount)
    if(Bill_amount==='')    // Activate Butotons
      enableButtons(false);    
    else{
     enableButtons(true)
     enableActiveStates();
    } 
    
})