class MyClass {
    constructor(){
        console.log("Im inside constructor")
    }
    add = (args1,args2)=>{
        var result = args1+args2;
        return result;
    }
    sub = (args1,args2)=>{
        var result = args1-args2;
        return result;
    }
    prime = (num)=>{
        for(let i=2;i<=num/2;i++){
            if(num%i==0)
                return "not prime"
        }
        return "prime";
    }
}
module.exports = MyClass;