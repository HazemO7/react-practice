"use strict";
(function () {
    // static data types
    var userName = "hazem";
    var userAge = 40;
    var user = { name: "ahmed", age: "34" };
    var onSale = true;
    var friends = ["Hazem", "Abdelazez", "ave"];
    var numb = [23, 56, 67];
    // new data types {any, tuple, union}
    var myName = "hazem";
    var myFriends = ["hazem", 23, true];
    var myAge = 23;
    function sayHello(name) {
        return (`hello ${name}`);
    }
    sayHello("John");
}());
