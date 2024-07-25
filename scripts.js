let tipRate = 0;
let bill = 0;
let calcTipBtn=document.querySelector('.calcTipBtn');


calcTipBtn.addEventListener('click', function()
{
    bill = document.getElementById('billInput').value;
    tipRate = (bill >= 30 && bill <= 300) ? .15 : .20 ;
    console.log(bill);
    console.log(tipRate);
    let tip = bill * tipRate;
    let totalBill = +bill + (+bill * +tipRate);
    document.getElementById('tip-calc-display').innerHTML += ` The bill was $${bill}, the tip was $${tip}, and the total value $${totalBill}`;
    document.getElementById('tipRateDisplay').textContent = tipRate;
    

}
)

/* Funnction to retrieve bill amount from input box and call the other funtions the program needs to run    
function calcBillAmount(){
bill = document.getElementById(billInput);
console.log(bill);
calcTip(bill);
displayTipCalc(bill);
}




 function displayTipCalc(){
 {
document.getElementById('tip-calc-display').innerHTML = "The total bill is calculated by first determining the tip rate based on the bill amount. Since your bill is above 30$, but below 300$ the rate will be 15%"
}  else if (bill >= 30 && bill >= 300){document.getElementById('tip-calc-display').innerHTML = "The total bill is calculated by first determining the tip rate based on the bill amount. Since your bill is above 30$, and above 300$ the rate will be 20%"


}
} */