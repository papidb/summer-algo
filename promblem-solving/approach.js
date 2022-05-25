// write a function which takes in a string and returns the counts of each character in the string


charCount("aaaa") // {a:4}
charCount("hello") // {h:1, e: 1, l: 2,o: 1}
charCount("Hi there !") // {h:1, e: 1, l: 2,o: 1}

// what about when the input looks like 

// How are you doing today?

// What are the steps

// to empty inputs

// charCount("")

// to invalid inputs like numbers objects, null, undefined etc

function charCount(str) {
  // keep track of keys that are lowercase alphanumeric 
  // make object to return at end
  // loop over string for each character...
    // if char is a number/letter and is a key in object, add one to count
    // if char is a number/letter and is a key in object, add it to object and set value to 1
    // if char is something else (space, period, etc...) don't do anything
  // return object at end

  // // solution 1
  // const result = {}
  // for (let index = 0; index < str.length; index++) {
  //   const char = str[index].toLowerCase()
  //   if (/[a-z0-9]/.test(char)) {
  //     if (result[char]) {
  //       result[char]++
  //     } else {
  //       result[char] = 1
  //     }
  //   }
    
  // }
  // solution 2
  const result = {}
  for (let char of str) {
     char = char.toLowerCase()
     if (/[a-z0-9]/.test(char)) {
       result[char] = ++result[char] || 1
    }
    
  }
  console.log({result})
  return result
}

// notes
// - understand the problem 
//    - Can I restate the problem in my own words
//    - What are the inputes that goes into the problem
//    - Can the outputes be gotten from the inputs? in other words do I have enough information to solve the problem?
//    - how should i label the important piece of data, that are part of the problem 
// 
// 
// - explore examples
//    - come up with examples that can help you better understand the problem better
//    - exanokes orivudes sanity checks that helps you check that the eventual solution works as it should
//    - start with simple examples
//    - progress to complex examples
//    - explore examples with empty inputs 
//    - explore examples with invalid inputs 
// 
// 
// 
//  - break it down
//    - write psuedo code using comments
//    - ask questions as you are solving
// 
// 
// 
//  - refactor solution
//    - can the the result be gotten differently
//    - can you understand the solution at first glance
//    - can you use the result or method for some of your problem?
//    - can you improve the performance of your code
//    - can you think of other ways to refactor
//    - 
