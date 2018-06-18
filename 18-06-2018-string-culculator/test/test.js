
var assert = require('chai').assert;
var expect = require("chai").expect;
var calculator = require("../string-calculator")
describe("String Calculator", function () {

    it("should return the sum of to numbers passed", function () {
        expect(calculator.stringCulculation("1,2")).to.be.eql(3);
    });
    it("should return zero when a string  is passed", function () {
        expect(calculator.stringCulculation('')).to.be.eql(0);
    });

    it("should allow \\n  in the string culculator", function () {
        expect(calculator.stringCulculation("1\n2,3")).to.be.eql(6);
    });

});
