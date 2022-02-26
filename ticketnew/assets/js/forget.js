repassword=()=>{
    // console.log("im here")
    let a = document.getElementById("newpass").value;
    let b = document.getElementById("repass").value;
    if(a !== b){
        // console.log("im in if")
        document.getElementById("nomatchpass").innerHTML="Password did not match";
        // document.getElementById("newpass").value='';
        // document.getElementById("repass").value='';
        document.getElementById("newpass").focus();
        return;
    }
    else document.getElementById("nomatchpass").innerHTML = "";

}

//function for weak passowrd
 shortpassword=()=>{
    let a = document.getElementById("newpass").value;
    var format= /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0123456789]+/;
    if(format.test(a) && a.length>7){
        document.getElementById("shortpass").innerHTML="";
    }
    else{
        document.getElementById("shortpass").innerHTML="Select a strong password";
        document.getElementById("newpass").focus();
    }
}
passwordchanged=(event)=>{
    event.preventDefault()
  //alert("Password reset Successfully")
  let a = document.getElementById("newpass").value;
  let b = document.getElementById("repass").value;
  if (a===b) {
    alert("Password reset Successfully!")
    window.location.href="logintemp.html"
  }
  else{
    alert("Password did not match")
  }
}

