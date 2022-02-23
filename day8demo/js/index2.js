function f1(){
    let n1 = document.getElementById("number1").value;
    let n2 = document.getElementById("number2").value;
    let n3 = parseInt(n1) + parseInt(n2);
    document.getElementById("number3").value= n3 ;
    }

function f2(){
    let n1 = document.getElementById("number1").value;
    if(isNaN(n1)){
        document.getElementById("v1").innerHTML="Please enter numbers only";
        document.getElementById("number1").focus();
        return;
    }
}

function f3(){
    let n2 = document.getElementById("number2").value;
    if(isNaN(n2)){
        document.getElementById("v2").innerHTML="Please enter numebrs only";
        document.getElementById("number2").focus();
        return;
    }

    
}
