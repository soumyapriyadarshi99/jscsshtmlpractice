// import {username,idarray,passarray} from "./userdata.js";

 myFunction = ()=> {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

 emptyemail = () =>{
  let a = document.getElementById("email").value;
  if(a.length<1){
    document.getElementById("emailerror").innerHTML = "Required field";
    document.getElementById("email").focus();
  }
  else{
    document.getElementById("emailerror").innerHTML = "";
  }
}

 loginsuccess = (event) =>{
  event.preventDefault()
  let idarray = ["user123@sapient.com","user321@sapient.com"]
  let passarray = ["123456789","987654321"];
  let a = document.getElementById("email").value;
  let b = document.getElementById("passw").value;
  for(let i=0; i<=idarray.length; i++){
    if(a===idarray[i] && b===passarray[i]){
      alert("Login Successful!");
      window.location.href="loggedinindex.html"
      break;
    }
    else{
      alert("Invalid Credentials.");
      break;
    }
  }
  
  nextPage();
}

