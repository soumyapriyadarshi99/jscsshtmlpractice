function calculation (){
    let n1 = parseInt(document.getElementById("number1").value);
    if(isNaN(n1)){
        alert('Please put number only');
        return
    }
    let s1 = "<table border='1'>"
    for(i=1;i<=10;i++){
        console.log("ok");
        s1+="<tr><td>"+n1+"</td>"
        s1+="<td>"+"x"+"</td>"
        s1+="<td>"+i+"</td>"
        s1+="<td>"+"="+"</td>"
        s1+="<td>"+(i*n1)+"</td></tr>"
    }
    s1+="</table>"
    document.getElementById("result").innerHTML=s1;
}