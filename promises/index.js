const pobj1 = new Promise((resolve,reject)=>{
    // setTimeout(()=>{
    //     let rollno = [1,2,3,4,5];
    //     resolve(rollno)
    //     reject("Error in communicating")
    // },2000)
    let rollno = [1,2,3,4,5];
    //resolve(rollno)
    reject("Error in communicating")
})
pobj1.then((rollno)=>{
    console.log(rollno)
}).catch((error)=>{
    console.log(error)
})