
    "use strict";


/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 *  > sayHello("codeup") // returns "Hello, codeup!"
 */
    function sayHello(name) {
         return "Hello, " + name +  "!";
     }
     console.log(sayHello("codeup"));
/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work

 */

     var helloMessage = sayHello("Tony");
     console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
    var myName = sayHello("Tony");
    console.log(myName);

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
// var random = Math.floor((Math.random() * 3) + 1);

    var random = Math.floor((Math.random() * 3) + 1);
/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 *  > isTwo(1) // returns false
 *  > isTwo(2) // returns true
 *  > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
    function isTwo(random){
        return random == 2;
    }

    var input = prompt ("Input a number");
    var input = isTwo(input);
    console.log(input);
/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Example:
 * > calculateTip(0.20, 20) // returns 4
 */
       function calculateTip(TipDecimal, totalBill) {
           return TipDecimal * totalBill;
        }
        console.log(calculateTip(.20,20));



/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
    var totalBill = prompt("amount of total bill?");
    var tipDecimal = prompt("Percentage Used");
    alert("Amount of tip is " + calculateTip(tipDecimal,totalBill));