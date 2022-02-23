let a =10,b=11, c=8;
//console.log(findBiggest(a,b,c));

function findBiggest(x,y,z){
    if ((x>y) && (y>z))
        return x;
    else if ((y>x) && (z>y))
        return z;
    else
        return y;
}
///////////////////////////////////////

let user1 = {
    name:"soumya",
    password : "12345",
    admin : "Yes"
}
//console.log(login("soumya", "12345"))

function login(username,password){
    if(username === user1.name && password === user1.password)
        return user1.admin;
    else
        return "Invalid User !!";
}
//////////////////////////////////

// let i =0;
// while (i++<10)
//     console.log(i);
//////////////////////////////////
for(let i=0;i<10;i++){
    if (i==7)
        break;
    else
        console.log(i);
}

/////////////////////////////////