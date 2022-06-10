// Tip Amount Person = (tip + bill) - tip / Number of people
//Total Anmount =   Bill * Rate / Number of  People

const bill = document.querySelector('#bill');
const buttons  =document.querySelectorAll('.tip')


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

        
        button.addEventListener('click',(e)=>{
            resetSelected();
            let values=parseFloat(e.target.getAttribute("data-value"))
            console.log("values",values)
            let final_amount =calculatetiperson(Bill_amount,values)
            console.log("final",final_amount)

            button.classList.toggle("selected")
            
        })
    })
}


const calculatetiperson=(bill,typeamount)=>{
   let tip__Amount = bill*((typeamount+100)/100) -bill;
   return tip__Amount;

}

bill.addEventListener('keyup',(e)=>{
    Bill_amount=e.target.value
    // Activate the buttons
   //console.log(Bill_amount)
    if(Bill_amount==='')    // Activate Butotons
      enableButtons(false);    
    else{
     enableButtons(true)
     enableActiveStates();
    } 
    
})