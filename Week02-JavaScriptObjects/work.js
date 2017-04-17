/**
 * Created by bcuser on 4/16/17.
 */

var person =
{
    firstName: "Ryan",
    lastName: "DelDuca",
    fullName: function()
    {
        return this.firstName + " " + this.lastName;
    }
};

DrawTitle("Person");

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName());

var calculator =
{
    operator01: -1,
    operator02: -1,
    add: function()
    {
        return this.operator01 + this.operator02;
    },
    subtract: function()
    {
        return this.operator01 - this.operator02;
    }
};

calculator.multiply = function()
{
    return this.operator01 * this.operator02;
};

calculator.operator01 = person.firstName.length;
calculator.operator02 = person.lastName.length;

DrawTitle("Calculator");

console.log("operator01 =", calculator.operator01);
console.log("operator02 =", calculator.operator02);
console.log("Add:", calculator.add());
console.log("Subtract:", calculator.subtract());
console.log("Multiply:", calculator.multiply());

function DrawTitle(title)
{
    console.log("~~~~~~~~~~~~~~~~~~~~");
    console.log(title);
    console.log("~~~~~~~~~~~~~~~~~~~~");
}