 //function for invalid name
 invalidname=()=>{
  var a = document.getElementById("name").value;
  var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0123456789]+/;
  // var format2 = /0123456789/;
  // var str = document.getElementById("one").innerHTML;
      //   var arr  = a.split("");
      //    console.log(arr);
      if(format.test(a)||a.length<=2){
          document.getElementById("nameerror").innerHTML="Enter a valid Name";
          document.getElementById("name").focus()
          return
      }
      else document.getElementById("nameerror").innerHTML="";
      return

}
//password match function
repassword=()=>{
  // console.log("im here")
  let a = document.getElementById("passw").value;
  let b = document.getElementById("repassw").value;
  if(a !== b){
      // console.log("im in if")
      document.getElementById("repasserror").innerHTML="Password did not match";
      document.getElementById("passw").value='';
      document.getElementById("repassw").value='';
      document.getElementById("passw").focus();
      return;
  }
  else document.getElementById("repasserror").innerHTML = "";

}
//invalid mobile number
invalidnumber=()=>{
  let a =document.getElementById("mobile").value;
  if(a.length==10){
      // document.getElementById("mobileerror").innerHTML="Enter a valid number";
      // document.getElementById("mobile").focus();
      if(isNaN(a)){
      document.getElementById("mobileerror").innerHTML="Enter a valid number";
      document.getElementById("mobile").focus();
      }
  else document.getElementById("mobileerror").innerHTML="";
  }

  else {
      document.getElementById("mobileerror").innerHTML="Enter a valid number";
  document.getElementById("mobile").focus();
}
}
//function for weak passowrd
weakpass=()=>{
  let a = document.getElementById("passw").value;
  var format= /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0123456789]+/;
  if(format.test(a) && a.length>7){
      document.getElementById("passerror").innerHTML="";
  }
  else{
      document.getElementById("passerror").innerHTML="Select a strong password";
      document.getElementById("passw").focus();
  }
}

success=(event)=>{
    event.preventDefault()
    let a = document.getElementById("email").value;
    let b = document.getElementById("name").value;
    let c = document.getElementById("mobile").value;
    let d = document.getElementById("passw").value;
    if((a.length<1) ||(b.length<1) ||(c.length<1) ||(d.length<1)){
        alert("Required field empty");
    }
    else{
        alert("SignUp Successful!")
        document.myForm.submit();
        window.location.href="logintemp.html"
    }

// alert("Sign Up completed!");
}

shortEmail=()=>{
    let a = document.getElementById("email").value;
    if(a<=1){
        document.getElementById("email-error").innerHTML="Required Field";
        document.getElementById("email").focus();
    }
    else{
        document.getElementById("email-error").innerHTML="";
    }
}