
var assert = require('chai').assert;
var expect = require("chai").expect;
var calculator=require("../string-calculator")
describe("String Calculator", function () {
    // var calculator;

    it("should return the sum of to numbers passed", function () {
        expect(typeof "abc").to.be.eql("string");
    });
    it("should return the sum of to numbers passed", function () {
        expect(calculator.addString("1,2")).to.be.eql(3);
    });
});
// 0, 1 or 2 numbers, and will return their sum (for an empty string it will return 0) for example “” or “1” or “1,2”