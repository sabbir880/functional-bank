document.getElementById('deposite-btn').addEventListener('click' , function(){
    const depositeInput = document.getElementById('deposite-input');
    const depositeAmountText = depositeInput.value;
    const depositeAmount =parseFloat(depositeAmountText);
    console.log(depositeAmount)

    // get privious deposite amount 
    const depositeTotal = document.getElementById('deposite-total');
    const depsiteTotaltext = depositeTotal.innerText;
    const priviousDepositeAmount =parseFloat(depsiteTotaltext)
    depositeTotal.innerText = priviousDepositeAmount + depositeAmount;

    // updated blance 
    const balancTotal  = document.getElementById('balanc-total');
    const balanceTotalText = balancTotal.innerText;
    const priviousBalanceTotal =parseFloat(balanceTotalText);

    balancTotal.innerText = priviousBalanceTotal + depositeAmount;

    // clear deposite field 
    depositeInput.value = '';

});


// withdraw amount 
document.getElementById('Withdraw-btn').addEventListener('click' , function(){
    const WithdrawInput = document.getElementById('Withdraw-input');
    const withdrawText = WithdrawInput.value;
    const withdrawAmount = parseFloat(withdrawText);
    console.log(withdrawAmount);

    // get previuous withdrawAmount 
    const WithdrawTotal = document.getElementById('Withdraw-total');
    const withdrawTotalText = WithdrawTotal.innerText;
    const previousWtithDraw = parseFloat(withdrawTotalText);
    WithdrawTotal.innerText =  previousWtithDraw + withdrawAmount ;

    // balancTotal 
    const balancTotal  = document.getElementById('balanc-total');
    const balanceTotalText = balancTotal.innerText;
    const priviousBalanceTotal =parseFloat(balanceTotalText);
    balancTotal.innerText = priviousBalanceTotal - withdrawAmount;

    // clear withDrawInput field 
    WithdrawInput.innerText = '';
})