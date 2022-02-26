//Validtion Code For Inputs
const form = document.querySelector('#login_form');
const email = document.forms['form']['email'];
const password = document.forms['form']['password'];

const email_error = document.getElementById('email_error');
const pass_error = document.getElementById('pass_error');




form.addEventListener('submit', (event)=>{
    
    validated();
    
    if(isFormValid==true){
        form.submit();
    }else {
        event.preventDefault();
    }

});
const isFormValid =() =>{
    const inputContainers = form.querySelectorAll('.input-group');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });
    return result;
}



const validated =()=>{
	if (email.value.length < 9) {
		email.style.border = "1px solid red";
		email_error.style.display = "block";
		email.focus();
		return false;
		
	}
	if (password.value.length < 6) {
		password.style.border = "1px solid red";
		pass_error.style.display = "block";
		password.focus();
		return false;
	}
	

}
const email_Verify =() =>{
	if (email.value.length >= 8) {
		email.style.border = "1px solid silver";
		email_error.style.display = "none";
		return true;
		
		
	}
	
}



const pass_Verify =() =>{
	if (password.value.length >= 5) {
		password.style.border = "1px solid silver";
		pass_error.style.display = "none";
		return true;
	}
	
}
