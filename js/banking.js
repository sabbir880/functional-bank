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

})