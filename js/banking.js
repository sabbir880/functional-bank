function getInputValue (InputId){
    const inputField = document.getElementById(InputId);
    const inputFieldText = inputField.value;
    const inputAmount =parseFloat(inputFieldText);
    // clear deposite field 
    inputField.value = '';
    return inputAmount;
};
function updateInputValue(Total ,amount){
    const totalElement = document.getElementById(Total);
    const totalAmountText = totalElement.innerText;
    const priviousDepositeAmount =parseFloat(totalAmountText)
    totalElement.innerText = priviousDepositeAmount + amount;
}
function currrentBalance(){
    const balancTotal  = document.getElementById('balanc-total');
    const balanceTotalText = balancTotal.innerText;
    const priviousBalanceTotal =parseFloat(balanceTotalText);
    return priviousBalanceTotal;
}
function updatedBalance(amount, issAdd){
    const balancTotal  = document.getElementById('balanc-total');
    const priviousBalanceTotal = currrentBalance()
    if(issAdd == true){
        balancTotal.innerText = priviousBalanceTotal + amount;
    }
    else{
        balancTotal.innerText = priviousBalanceTotal - amount;
    }
}
// deposite
document.getElementById('deposite-btn').addEventListener('click' , function(){
    const depositeAmount = getInputValue('deposite-input');
    if(depositeAmount > 0){
        updateInputValue('deposite-total' , depositeAmount)
        updatedBalance(depositeAmount , true);
    }
});
// withdraw amount 
document.getElementById('Withdraw-btn').addEventListener('click' , function(){

    const withdrawAmount = getInputValue('Withdraw-input');
    const currrentBalanc = currrentBalance();
    if(withdrawAmount > 0 && withdrawAmount < currrentBalanc){
        updateInputValue('Withdraw-total' , withdrawAmount)
        updatedBalance(withdrawAmount , false);
    }
})