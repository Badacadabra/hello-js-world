var Person = function (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
};

Person.prototype.sayHello = function () {
    return "Hello, " + this.firstName + "!";
}

Person.prototype.toString = function () {
    return this.firstName + " " + this.lastName + ", " + this.age + " years old";
}

module.exports = Person;
