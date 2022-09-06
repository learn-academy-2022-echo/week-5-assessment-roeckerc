// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

const { fail } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.
   describe("coder", () =>{
        it("take in a string of leters, splits the letters up and turn it into an array, uses a loop to iterate and see if any values in array match the coded letters a e i o and if so changes them for a number if not keeps the original value", () => {
            expect(coder(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
            expect(coder(secretCodeWord2)).toEqual("G0bbl3dyg00k")
            expect(coder(secretCodeWord3)).toEqual("3cc3ntr1c")
        });
   });

//     GOOD FAIL:
//    Test Suites: 1 failed, 1 total
//     Tests:       1 failed, 1 total
//     Snapshots:   0 total
//     Time:        0.87 s
//     Ran all test suites.
// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// b) Create the function that makes the test pass.
  
// psuedo: create a function "coder" that takes in a string
const coder = (string) => {
        // create a variable sacrafice that takes in the string and uses.split to make an array of seperate letters
    sacrafice = string.split("")
        // create a varibale newArr with an empty array to take in the letters
    let newArr = []
        // create a for loop that iterates through the array and if the value matches "coded letters" change it to its corresponding number else it just keeps its value. the outputs will be pushed into the newArr
    for (let i = 0; i<sacrafice.length; i++){
        if (sacrafice[i] === "a" || sacrafice[i] === "A"){
            newArr.push("4")
        }else if (sacrafice[i] === "i" || sacrafice[i] === "I"){
            newArr.push("1")
        } else if (sacrafice[i] === "o" || sacrafice[i] === "O"){
            newArr.push("0")
        } else if (sacrafice[i] === "e" || sacrafice[i] === "E"){
            newArr.push("3")
        }
        else {
            newArr.push(sacrafice[i])
        }
    } 
    //return the newArr but use .join('') to make it back into a string.
    return newArr.join('')
}


// i had a fail, i checked my output with console.log and the letters were seperated with a , because i use .join() instead of .join('')
// good pass
    // Test Suites: 1 passed, 1 total
    // Tests:       1 passed, 1 total
    // Snapshots:   0 total
    // Time:        0.605 s
    // just to be sure it was testing all of them i made each of the different lines fail by adding in incorrect letters to the solution. 
// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.
describe("finder", () =>{
    const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
    const letterA = "a"
    const letterE = "e"
    it("take in a array of words, and a string containing 1 letter and returns an array of alll the words containing the single letter regardless of capitalization ", () => {
        expect(finder(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect(finder(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    });
});


// good fail, utitilized fdescribe to focus my test
// Test Suites: 1 failed, 1 total
    // Tests:       1 failed, 1 skipped, 2 total
    // Snapshots:   0 total
    // Time:        0.598 s, estimated 1 s
    // Ran all test suites.
// b) Create the function that makes the test pass.
// pseudo code
// create a function, finder, that takes in 2 variables, an array and a string
const finder = (array, string) => {
    // create an empty array to store the output of the function
    let newArr = []
    // iterate through the array checking to see if the string at each index contains the letter string
    // also utilizing .toUpperCase to see if the capital version of the letter string is in the indexed strings
    for (let i = 0; i < array.length; i++) {
        if (array[i].includes(string)||array[i].includes(string.toUpperCase()))
            newArr.push(array[i])
        
    }
    return newArr
}
// good pass, utitilized fdescribe to focus my test
// Test Suites: 1 passed, 1 total
// Tests:       1 skipped, 1 passed, 2 total
// Snapshots:   0 total
// Time:        0.622 s, estimated 1 s
// Ran all test suites.

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

fdescribe("fullHouse", () =>{
    const hand1 = [5, 5, 5, 3, 3]

    const hand2 = [5, 5, 3, 3, 4]
    // Expected output: false
    const hand3 = [5, 5, 5, 5, 4]
    // Expected output: false
    const hand4 = [7, 2, 7, 2, 7]
    // Expected output: true
    it("take in a array of numbers,  and determines if it is a full house", () => {
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
        expect(fullHouse(hand4)).toEqual(true)
        
    });
});
// good fail, utilized fdescribe to focus testing
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 skipped, 3 total
// Snapshots:   0 total
// Time:        1.104 s

// b) Create the function that makes the test pass.
// create a function, fullHouse, that takes in an array.
const fullHouse = (array) => {
    // utilize the built in method .sort to organize the numbers from smallest to largest.
    let sorted = array.sort()
    console.log(sorted)
    // write and if statement checking for if i[0]===i[2]&& i[3]===i[4] && i[0]!==i[4] returning true
    if ((sorted[0] === sorted[2])&&(sorted[3]===sorted[4])&&(sorted[0]!==sorted[4])){
    return true
    } 
    // write and if statement checking for if i[0]===i[1]&& i[2]===i[4] && i[0]!==i[4]returning true
    else if((sorted[0] === sorted[1])&&(sorted[2]===sorted[4])&&(sorted[0]!==sorted[4])) {
        return true
     //else return false
    } else {return false}           
 }
//  good pass utilized fdescribe to skip the other test and focus my testing
    //  Test Suites: 1 passed, 1 total
    //  Tests:       2 skipped, 1 passed, 3 total
    //  Snapshots:   0 total
    //  Time:        0.837 s, estimated 1 s

// ran all tests and all passed
    // Test Suites: 1 passed, 1 total
    // Tests:       3 passed, 3 total
    // Snapshots:   0 total
    // Time:        0.694 s, estimated 1 s