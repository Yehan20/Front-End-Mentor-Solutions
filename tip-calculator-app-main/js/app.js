// Tip Amount Person = (tip + bill) - tip / Number of people
//Total Anmount =   Bill * Rate / Number of  People

const bill = document.querySelector('#bill');
const buttons  =document.querySelectorAll('.tip')
const peopleInput = document.querySelector('#people');
const resetBtn = document.querySelector("#reset-btn")

const tipAmount = document.querySelector('#tipAmt') // Out put tags
const totalAmount = document.querySelector("#totalTip")  // Out put tags

let Bill_amount,People_number,  Rate_values,final_amount,total_tip ,temp=true,customValue,isCustom=false; 
const custom = document.querySelector("#custom");

// Reload dom
window.addEventListener("DOMContentLoaded",()=>{
    bill.value='';
    enableButtons(false)
    peopleInput.value=''
    custom.value=''
    peopleInput.disabled=true;
    
})


// UI effects
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
            Rate_values=parseFloat(e.target.getAttribute("data-value"))
            peopleInput.disabled=false;
            custom.value='';
            button.classList.toggle("selected")    
            if(!temp){
                
               displayTipPerPereson();
               displayTotalTip();
            }    
        })
    })
}


// Event listeners

custom.addEventListener("keyup",(e)=>{
    customValue = parseFloat(e.target.value);
    console.log(customValue)
    isCustom=true;
    if(!temp){
               
     displayTipPerPereson();
     displayTotalTip();
   } 
})

bill.addEventListener('keyup',(e)=>{
   Bill_amount=e.target.value
   
   if(Bill_amount===''){    // Activate Butotons
      enableButtons(false);
   }    

   else{
    
    bill.style.outline=`2px solid hsl(172, 67%, 45%)`
    enableButtons(true)
    enableActiveStates();
       if(!temp){
       final_amount = calculatetip_person(Bill_amount,Rate_values,People_number).toFixed(2)
       tipAmount.textContent=`$${final_amount}`;

       total_tip = calculatetip_total(Bill_amount,Rate_values,People_number).toFixed(2)
       tipAmount.textContent=`$${total_tip}`;
       }
       if(!temp && isCustom){
           final_amount = calculatetip_person(Bill_amount,customValue,People_number).toFixed(2)
           tipAmount.textContent=`$${final_amount}`;

           total_tip = calculatetip_total(Bill_amount,Rate_values,People_number).toFixed(2)
           tipAmount.textContent=`$${total_tip}`;
       }
   } 
   
})

peopleInput.addEventListener("keyup",(e)=>{
   temp=false;
   People_number = e.target.value;
   if(People_number<=0){
       document.querySelector(".error").style.display="block";
       peopleInput.style.outline=`2px solid rgba(255,0,0,0.6)`
       return;
   }
   document.querySelector(".error").style.display="none";
   peopleInput.style.outline=`none`

   
   displayTipPerPereson();
   displayTotalTip();
})


resetBtn.addEventListener("click",(e)=>{
   bill.value='';
   peopleInput.value='';
   tipAmount.textContent='$0.00';
   totalAmount.textContent='$0.00';
   bill.style.outline='none'
})


// Calculations
const calculatetip_person=(bill,tipRate,noPeople)=>{
   let tip__Amount = (bill*((tipRate+100)/100) - bill) /noPeople;
   return tip__Amount;

}
const calculatetip_total=(bill,tipRate,noPeople)=>{
    let tip__Amount__total = (bill*((tipRate+100)/100)) /noPeople;
    console.log(tip__Amount__total)
    return tip__Amount__total
 
 }





// Displaying user inputs
function displayTipPerPereson(){
    if(isCustom){
        final_amount = calculatetip_person(Bill_amount,customValue,People_number).toFixed(2)
        tipAmount.textContent=`$${final_amount}`;
        return
    }
    
    final_amount = calculatetip_person(Bill_amount,Rate_values,People_number).toFixed(2)
    tipAmount.textContent=`$${final_amount}`;
}

function displayTotalTip(){
    if(isCustom){
        total_tip = calculatetip_total(Bill_amount,customValue,People_number).toFixed(2)
        totalAmount.textContent=`$${total_tip}`;
        return
    }
    
    total_tip = calculatetip_total(Bill_amount,Rate_values,People_number).toFixed(2)
    totalAmount.textContent=`$${total_tip}`;
}


