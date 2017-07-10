# Lesson 5

## Primitive values

1. String
2. Number
3. Boolean
4. null
5. undefined

## Math operators

1. +
2. -
3. *
4. /
5. %

## Variables

1. assign with =
2. const
3. let
4. var

## Comparing things

1. >
2. <
3. >=
4. <=
5. ===
6. !==

## Logic flow

1. If
  1. If
  2. Else if
  3. Else
2. For

## Functions

1. Functions are a series of code that gets executed by saying a simple command.
  1. Example: Wash clothes
    1. Put clothes in machine
    2. Put detergent
    3. Press start
    4. Close lid

2. Functions:
  1. Can have a name
  2. Can have arguments
  3. Can have a return statement

Example:

```js
function isLargerThan10(num) {
  return num > 10
}
```

## Pseudo coding (15 mins)

1. Act of writing code in "english" before you write actual code
2. Can be as codefied or as english as you need to. Example of pseudo code:

```js
function scissorsPaperStone(p1, p2) {
  // Note: `and` here isn't real JavaScript code
  if (p1 === 'scissors' and p2 === 'stone') {
    return 'p1 wins'
  }

  // Another way:
  // Notice it's all plain english here. Pseudo coding is used to help you plan out how to code something
  if (p1 has scissors and p2 has stone) {
    return 'p1 wins'
  }
}
```

##  Homework

### Readings to solidify what you learned last lesson:

1. [Variable declaration with `const` and `let`](https://zellwk.com/blog/es6/#let-and-const) (just `const` and `let` will do).
2. `if` statements
3. [`for` loops](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code) (Just the for loop part will do)
4. [Functions](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions)

### Readings for next lesson (Read these too. Will help in the next class):

1. Arrays
    1. [An introduction to Arrays](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays)
    1. [Array.prototype.foreach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
    2. [Array.prototype.slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
    3. [Array.prototype.concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
2. [Callbacks in JavaScript](https://zellwk.com/blog/callbacks/)
3. [Manipulating DOM with JavaScript](https://zellwk.com/blog/js-in-dom/) (Read the entire article).
4. [Object basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)

### Optional reading:

Read [this article](https://zellwk.com/blog/js-env/) to help setup Sublime Text for better JavaScript development.

### Questions to check your understanding

Attempt all of them. Ask Tom or me questions if you get stuck.

**Q1:** Make a function that takes in an argument, `str`. This argument is a String. If `str` is `red`, change it to blue. BONUS: Create a red button. Change its color to blue.

**Q2:** You have an array of scores, `const scores = [100, 55, 89, 50, 76, 23, 87, 44]`. Make another array that contains all scores above 75 using the scores array. Count the number of items in this array. BONUS: Sort the array in descending order.

**Q3:** You have an array of scores, `const scores = [100, 55, 89, 50, 76, 23, 87, 44]`.

You have an array that contains an array of first and last names as follows:

```js
const scores = [
  ['James', 'Kingley'],
  ['Thomas', 'Edison'],
  ['Selesia', 'Bonaparte'],
  ['Ashley', 'Sebastian'],
]
```

Use a for loop. Log out the first and last names of each person in the array. BONUS: Use `Array.prototype.forEach` to do the same.