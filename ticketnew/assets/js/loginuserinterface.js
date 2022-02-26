import  {Login, loginFactory} from "./loginoop.js";

let msg=["Email cannot be empty"];
  var userlogin =()=>{
      

    let a = document.getElementById("email").value;
    let b = document.getElementById("passw").value;
    let loginObj=loginFactory();
    if (loginObj.emptyemail(a)===0)
    {
         document.getElementById("emailerror").innerHTML=msg[0];
         document.getElementById("email").autofocus;
         return
    }
    if(loginObj.loginsuccess(a,b)===1){
        alert("login unsuccessfull")
        document.getElementById("email").autofocus;
        
   }
   window.location.href="index.html";
   
}