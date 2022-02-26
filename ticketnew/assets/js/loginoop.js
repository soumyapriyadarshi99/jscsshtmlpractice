 
 var loginObj="";
 var idarray=["user123@sapient.com","user321@sapient.com"];
 var passarray=["123456789","987654321"];
 class Login{
   
    emptyemail =(a)=> {
        
        if(a.length()<1){
          return 0;
         
        }
        else{
         return 1;
        }
      } 
      loginsuccess = (a,b) => {
       
        for(let i=0; i<=this.idarray.length; i++){
        if(a===idarray[i] && b===passarray[i]){
        return 1;
         }
        else{
      return 0;
      }
    }
  
}
}

let loginFactory=()=>{
     if(loginObj===undefined){
       loginObj=new Login();
     }
     return loginObj;
}
export  {Login ,loginFactory};




