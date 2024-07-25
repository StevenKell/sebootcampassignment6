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
    document.getElementById('tip-calc-display').innerHTML += `<br>The bill was $${bill}, the tip was $${tip}, <br> and the total value $${totalBill}`;
    document.getElementById('tipRateDisplay').textContent = tipRate;
    

}
)
