/*
========================================================
            INTRODUCTION TO TYPESCRIPT
========================================================

Author: Ashutosh
Topic : Introduction to TypeScript

========================================================
                WHAT IS TYPESCRIPT?
========================================================

TypeScript is a statically typed superset of JavaScript.

- Developed by Microsoft
- Adds static typing
- Compiles into JavaScript
- Helps catch errors early
- Improves scalability and maintainability

========================================================
            JAVASCRIPT PROBLEM EXAMPLE
========================================================
*/

/*

function addJS(a, b) {
  return a + b;
}

console.log(addJS(10, "20")); // 1020 (unexpected)

*/

/*
========================================================
            TYPESCRIPT SOLUTION
========================================================
*/

function addTS(a: number, b: number): number {
  return a + b;
}

// console.log(addTS(10, "20")); // ERROR

console.log(addTS(10, 20));

/*
========================================================
                STATIC TYPING
========================================================
*/

let username: string = "Ashutosh";

// username = 100; // ERROR

console.log(username);

/*
========================================================
                BASIC TYPES
========================================================
*/

let age: number = 22;
let isDeveloper: boolean = true;

console.log(age);
console.log(isDeveloper);

/*
========================================================
                OBJECT TYPING
========================================================
*/

type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "Ashutosh",
  age: 22,
};

console.log(user);

/*
========================================================
            FUNCTION WITH OBJECT TYPE
========================================================
*/

function printUser(user: User): void {
  console.log(`Name: ${user.name}`);
  console.log(`Age: ${user.age}`);
}

printUser(user);

/*
========================================================
            TYPESCRIPT COMPILE PROCESS
========================================================

TypeScript (.ts)
       ↓
TypeScript Compiler (tsc)
       ↓
JavaScript (.js)
       ↓
Browser Executes JS

========================================================
                IMPORTANT NOTES
========================================================

1. Browser cannot run TypeScript directly
2. TypeScript types disappear after compilation
3. TypeScript improves developer experience
4. TypeScript does NOT guarantee bug-free apps

========================================================
                INTERVIEW QUESTIONS
========================================================

Q1. What is TypeScript?
Q2. Why TypeScript over JavaScript?
Q3. What is static typing?
Q4. Can browsers run TypeScript?
Q5. What is transpilation?

========================================================
                END OF FILE
========================================================
*/