//deposit
let depositValue = document.getElementById("deposit-input");
let depositOutput = document.getElementById('deposit-total');
//withdraw
let withdraValue = document.getElementById('withdraw-input');
let withdrawOutput = document.getElementById('total-withdraw');
//total balance
let balanceOutput = document.getElementById('total-balance');

function addMoney(currentAmount, newAmount){
    const result =Number(currentAmount) + Number(newAmount);
    return result;
}
function getMoney( currentAmount, newAmount){
    const result = currentAmount - newAmount;
    return result;
}
function deposit(){
    
    const totalDeposit= addMoney(depositValue.value, depositOutput.innerText);
    depositOutput.innerText = totalDeposit;
    const totalBalance= addMoney(balanceOutput.innerText, depositValue.value);
    balanceOutput.innerText= totalBalance;
    depositValue.value ='';   
}
function withdraw(){
    const totalWithdraw = addMoney(withdrawOutput.innerText, withdraValue.value);
    withdrawOutput.innerText = totalWithdraw;

const totalBalance = getMoney(balanceOutput.innerText, withdraValue.value);
balanceOutput.innerText= totalBalance;
   withdraValue.value ="";
}