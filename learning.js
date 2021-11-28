// This is a comment, it won't do anything.

// Variables, because they can "VARY"
var x = 5;

// Conditional logic
// Make a program, where if a child is aged 15+ they get cake, otherwise they get broccoli.
var hasCake = false; // 'true' a boolean type, boolean types only true and false.
var childAge = 10; // is fixed, it's likely we want to accept any input from other people.

if (childAge > 15 ) {
    hasCake = true;
}

// Functions! Functions are like in math, and the easiest way to think about them is:
// a function takes an input and produces an output.
// function sum(a, b) -> a+b
// function square(x) -> x*x;
// function hello() -> print("Hello")
// function board() -> draw a board;
// functino we_dont_produce_output(a, b) -> print("Hello, I'm a and I'm b");

function getCake(age) {
    if (age > 15) {
        return true;
    }

    return false;
}

// POSITIONS START AT 0!
var animals = ["Dog", "Cat", "Tiger", "Turtle"]
var length = animals.length;  // HOW MANY ELEMENTS: 4
var tiger = animals[2]; //"TIGER" // WHAT POSITION IN THE LIST IS "TIGER": 2
var turtle = animals[3];// WHAT POSITION IN THE LIST IS "TURTLE": 3
var monkey = animals[4]; // ERROR 
animals[4] = "Monkey" // ADD A MONKEY IN THE LIST, WHAT POSITION CAN WE ADD THE MONKEY IN: 4
// animals = {"Dog", "Cat", "Tiger", "Turtle", "Monkey"}

animals[1]  = "Lion"// WE WANT TO REPLACE CAT WITH LION: we change element (1)

// console.log(animals[1]) // print "Lion"
// console.log(tiger);

// PRINT EVERY ANIMAL USING CONSOLE.LOG
console.log(animals[0]) // DOG
console.log(animals[1]) // Lion
console.log(animals[2]) // Tiger
console.log(animals[3]) // Turtle
console.log(animals[4]) // Monkey
// List has 50 animals?
// When i == 50, we don't run
for(i = 0; i < animals.length; i = i+1) {
    console.log(animals[i]);
}
// i = 0
// 2D Lists
// [1, 2, 3]

// 2d = [
// pos: 0,     pos: 1
// [1, 2, 3], [4,5,6]
// ]
// console.log(animals[i]) -> animals[i] is a word, or a string.
// console.log(2d[i]) -> 2d[i] is a list
//                      nestedList = 2d[i];
//                      nestedList[0] = 

/*

3 x 3 grid
     col col col
    +-- +--+--+
row + 1 +  +  +
    +--+--+--+
row + 2 +  +  +
    +--+--+--+
row +  +  +  +
    +--+--+--+

2d[0][1]
  [ 
    0   2   4
[   1,  3,  5 ]
    2   4   6
  ] 

  2d = [[0,1,2], [2,3,4], [4,5,6]]
  2d array:
+--+---+----+
| 0 | 1 | 2 |
------------+
| 2 | 3 | 4 |
------------+
| 4 | 5 | 6 |
+---+---+---+

console.log(2d[0][0]) // will be 0
console.log(2d[0][1]) // will be 1
console.log(2d[0][2]) // will be 2
console.log(2d[1][0]] // will be 2
console.log(2d[1][1]) // will be 3
console.log(2d[1][2]) // will be 4
console.log(2d[2][0]) // will be 4
console.log(2d[2][1]) // will be 5
console.log(2d[2][2]) // will be 6


for(row = 0; row < 2d.length; row++) {
    for(col = 0; col < 2d[row].length; col++) {
        console.log(2d[row][col]);
    }
}

Add me to git:
Optional: git status // see status
git add .
git commit -m "Added file with examples"
Optional: git log // see all commits
git push origin main

*/