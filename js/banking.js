document.getElementById('deposite-btn').addEventListener('click' , function(){
    const depositeInput = document.getElementById('deposite-input');
    const depositeAmount = depositeInput.value;
    console.log(depositeAmount)

    // get privious deposite amount 
    const depositeTotal = document.getElementById('deposite-total');
    const depsiteTotaltext = depositeTotal.innerText;
    depositeTotal.innerText = depositeAmount;

    // clear deposite field 
    depositeInput.value = '';

})