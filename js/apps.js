document.getElementById('submit-btn').addEventListener('click' ,function(){

    // get user email 
    const emailField = document.getElementById('email-field');
    const userEmail = emailField.value;
    // console.log(userEmail)
    emailField.value = ' ';

    // get user password 
    const passField = document.getElementById('pass-field');
    const userPass =passField.value;
    // console.log(userPass)
    passField.value ='';

    // login confirum 
    if( userEmail == 'sabbir@gmail.com' && userPass == '1234' ){
        // console.log('continue')
        window.location.href ='banking.html';

    }
    else{
        const p =document.getElementById('error-massage');
        p.innerText ='Account didn`t find'
    }
})