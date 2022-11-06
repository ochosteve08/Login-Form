//email validation
const email= document.getElementById("mail");
email.addEventListener("input",(event)=>{
    if(email.validity.typeMismatch){
         // If the field doesn't contain an email address
        // display the following error message.
        email.setCustomValidity("I am expecting an e-mail address!");
        email.reportValidity();
    }
    else{
        email.setCustomValidity("");
    } 
})
//password validation

let myForm= document.regForm

myForm.onsubmit=  function matchpass(){  
    let password1= document.regForm.password.value;  
    let password2=document.regForm.password2.value;  
      
    if(password1==password2){  
    return true;  
    }  
    else{  
    alert("password must be same!");  
    return false;  
    }  
    }  