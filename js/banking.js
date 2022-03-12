function getInputValue (id){
    const depositeInput = document.getElementById(id);
    const depositeAmountText = depositeInput.value;
    const depositeAmount =parseFloat(depositeAmountText);

     // clear deposite field 
     depositeInput.value = '';

    return depositeAmount;
};



document.getElementById('deposite-btn').addEventListener('click' , function(){

      const depositeAmount =getInputValue('deposite-input');

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

});


// withdraw amount 
document.getElementById('Withdraw-btn').addEventListener('click' , function(){

    const withdrawAmount =getInputValue('Withdraw-input');

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

})