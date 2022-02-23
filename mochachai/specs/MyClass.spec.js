var MyClass = require("../src/MyClass.js")
var myObj = new MyClass();
var chai = require("chai")
var expect = chai.expect;

describe("Test suit", function(){
    it("Addition function testing",function(){
        expect(myObj.add(1,2)).to.be.equal(3);
    });
});

describe("Test suit", function(){
    it("Subtraction function testing",function(){
        expect(myObj.sub(20,10)).to.be.equal(10);
    });
});

describe("Test suite", function(){
    it("Prime function check", function(){
        expect(myObj.prime(10)).to.be.equal("not prime")
    })
})