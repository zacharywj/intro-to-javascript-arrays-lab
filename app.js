console.log("arrays and iterating")
// ARRAYS
// A data type in javascript*
// *not really

// technically an OBJECT or DATA STRUCTURE
// a LIST

// you can declare an array 

const arr = [] // don't call/name an array: "array" or "Array"

console.log(arr)

// Arrays contain ELEMENTS, separated by commas

// an ELEMENT in an array can be ANY DATA TYPE AT ALL.
// (num, str, bool, null, obj, func,)

// in practice all elements in an array are USUALLY the same data type.
// but they do not have to be 


// declare an array of strings...

//const list = ['chair', 'table', 'candle', 'couch', 'bed', 'dresser']

//... or we can use numbers

const squares = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// ARRAY NAMES SHOULD ALMOST ALWAYS BE *PLURAL*


// TYPE (quickly def a few variables)
const num = 0
const str = "word"
const type = "onomatopeia"
const bool = false

// you can check anything's data type with type of *OPERATOR*...

// USING "typeof"...:
console.log(typeof num) // number
console.log(typeof str) // "string"
console.log(typeof bool) // "boolean"

const list = ['chair', 'table', 'candle', 'couch', 'bed', 'dresser']




// uh oh...
console.log(typeof list) // arrays are not actually a data type in JS

// BUT if you want to check if something IS an array, use Array.isArray()

console.log(Array.isArray(list)) //returns a true or false value for if it is an array or not.... 
// (returned true in browser/console)


// declaring array faveFoods:
const faveFoods = ['nachos', 'sushi', 'ramen', 'pizza', 'hot dogs']

// calling our new array:
console.log(faveFoods)









//ACCESSING ELEMENTS

// all array elements have an INDEX number (number in the ordered list) that can be used to access their elements

// INDEX NUMBERS START AT 0

// to access elements in ana rrary, use square brackets [] containing the elements INDEX NUMBER after the name of the array itself 




// i.e. access "candle" in our list array 
console.log(list[2])

// returns "candle", the second element listed in our array from above, the THIRD element but again ARRAYS INDEX STARTS AT 0

console.log(list[0])
// returns FIRST element in our array, the ZERO spot of index...


 const ghostBusters = [
    "Venkman",
    "Spengler",
    "Stantz",
    "Veddermore",
    "Melnitz",
    "Barrett",
    "Tully",
 ]

// access THIRD element in ghostBuster array (number in list -1 == INDEX value so 2 = third)
console.log(ghostBusters[2])
//returns "Stantz"


// access FOURTH element (Melnitz)
console.log(ghostBusters[3])


// to check where SPECIFIC ELEMENT is within the index of the array, use "indexOf"....
console.log(ghostBusters.indexOf("Tully"))
// returns the value "6" because it is the 7th element, but started at 0 for index of course.
console.log(ghostBusters[6])
// oppositely, returns "Tully"...







/* BREAK
BREAK
BREAK */ 






// ARRAY LENGTH .length 
// there is a .length property on allarrays automatically that will tell you how many elements are in the array 

//.length property
console.log(faveFoods.length)
console.log(ghostBusters.length)

console.log([1, 2, null, Infinity, "hello", false].length)


// FUN BREAK - string interpolation with template liters (ES6)


console.log('There are ${ghostBusters.length} elements in the ghostBusters array.')


console.log("There are " + ghostBusters.length + " elements in the ghostBusters array.")





// USE AN EXPRESSION WHOSE VALUE IS A NUMBER as an Array Index
// an expression that is evaluated to a value is == to that value.


//ex without hardcoding 6, print the last element of the ghostBusters array
const final = ghostBusters.length - 1

console.log(final)

console.log(ghostBusters[final])

console.log(ghostBusters[ghostBusters.length - 1])


// CHANGING ELEMENTS IN AN ARRAY
const veggies = ['red pepper', 'corn', 'potato', 'okra', 'celery']

//you can cahnge an element by accessing it and using the assignment operator "="


// to change "corn" to "spinach"....
veggies[1] = 'spinach'

console.log(veggies)




// declaring an array uses CONST always... so cannot change the whole array, only the elements
// aka this syntax does NOT work
// veggies = []



// ex: without using 3, change the last element in the veggies array to 'brocoli


const last = veggies.length - 1
console.log(veggies[last])
// to check our work for accessing the LASt element of veggies array using new last array 

veggies[last] = 'brocoli'
console.log(veggies)

console.log(veggies[last])
//now returns the value 'brocoli'




/// MOVING MY CAR ~



//remember you can use ANY expression to access elements 
//LIST has 6 elements
console.log(list.length)
console.log(list[2 * 2])

// think: if my list has an even # of elements, how do i access the one to the right of the middle 
// hint: can write an expression to calculate that value? 

console.log(list[list.length / 2])
console.log(list.length / 2)




// ITERATING:
// using a loop to access the elements in an array in order iterating.

const kitchenSink = ['dirty spoon', 'sponge', 'messy plate', 'soap', 'water']

//let's print every item in t he array using a loop
//inside the loop:
// "i" is 0, then 1, then 2, then 3, then 4, then the loop stops (end of array)

for (let i = 0; i < kitchenSink.length; i++) {
    console.log(kitchenSink[i])
}





//examples using OTHER types of loops from notes
// for of....
for (const element of kitchenSink) {
    console.log(element)
}

//for each.... 
kitchenSink.forEach((element) => console.log(element));
// ^ the array DOT forEach() aka is an element of the array, ARROW print the element


// *************

// ARRAY METHODS:


// ONE
// .push(element) -- adds an element to the end of the array 
kitchenSink.push("faucet")
console.log(kitchenSink)
// oushing multiple items...
kitchenSink.push("bowl", "cup")
console.log(kitchenSink)

// TWO
// .pop() -- removes an element from END of an array 
kitchenSink.pop()
console.log(kitchenSink)






//THREE
// .join() -- creates and returns a new STRING concatenating all elements of the array into a string 
console.log(kitchenSink.join(" "))
// within () after .join = DELIMINATOR, what will be displayed between the elements (like a space, otherwise nothing)






// FOUR 
// .shift() -- removes an element from the BEGINNING of an array
kitchenSink.shift()
console.log(kitchenSink)

//FIVE
// .unshift() --- ADDS element to the beginning....
kitchenSink.unshift("mug")
console.log(kitchenSink)





// .splice(index to start removing, how many to remove)...............







// .indexOf (element you are looking for)....................



// ******************





//MULTI-DIMENSIONAL ARRAYS

// arrays can contain OTHER ARRAYS as elements

const pairs = [['Snoopy', 'Linus'], ['Peppermint Patty', 'Woodstock']]
console.log(pairs.length)


// print Peppermint Patty...
console.log(pairs[1] [0])



// two dimensional arrays are SUPER useful for modeling grid like data
// e.g. tic tac toe game layout

// const grod = .........................

const grid = {
    [0, 1, 2]
}












// for terminology -- you ITERATE "OVER" AN ARRAY (or sometimes "through them")




