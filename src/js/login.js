const loginButton = document
  .getElementById('logInButton')
  .addEventListener('click', function () {
    const mobileNumber = document.getElementById('mobile_number').value;
    const pinNumber = document.getElementById('pin_number').value;
    if(mobileNumber === '123456789' && pinNumber ==='123'){
      window.location.href='payment.html'
    }
    else{
      alert("Invalid Credentials")
    }
       
  });
