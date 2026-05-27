/*
========================================================
                TYPE INFERENCE
========================================================

Author : Ashutosh
Topic  : Type Inference in TypeScript

========================================================
                BASIC INFERENCE
========================================================
*/

let username = "Ashutosh";
let age = 22;
let isDeveloper = true;

console.log(username);
console.log(age);
console.log(isDeveloper);

/*
TypeScript inferred:

username -> string
age -> number
isDeveloper -> boolean
*/

/*
========================================================
            FUNCTION RETURN INFERENCE
========================================================
*/

function sum(a: number, b: number) {
  return a + b;
}

/*
Return type inferred as:
number
*/

console.log(sum(10, 20));

/*
========================================================
                ARRAY INFERENCE
========================================================
*/

// let numbers = [1, 2, 3, 4];
let skills = ["JavaScript", "TypeScript", "React"];

console.log(numbers);
console.log(skills);

/*
numbers -> number[]
skills -> string[]
*/

/*
========================================================
                OBJECT INFERENCE
========================================================
*/

let user = {
  name: "Ashutosh",
  age: 22,
};

console.log(user);

/*
Type inferred:

{
  name: string;
  age: number;
}
*/

/*
========================================================
            LET VS CONST INFERENCE
========================================================
*/

let role1 = "admin";
/*
Inferred:
string
*/

const role2 = "admin";
/*
Inferred:
"admin" (literal type)
*/

console.log(role1);
console.log(role2);

/*
========================================================
                    WIDENING
========================================================
*/

let language = "TypeScript";

/*
"TypeScript"
   ↓
string

This is widening.
*/

/*
========================================================
                EMPTY ARRAY TRAP
========================================================
*/

let arr = [];

/*
Type inferred:
any[]

Dangerous in large applications.
*/

arr.push(10);
arr.push("Hello");

console.log(arr);

/*
========================================================
            BETTER APPROACH
========================================================
*/

let safeNumbers: number[] = [];

safeNumbers.push(1);
safeNumbers.push(2);

// safeNumbers.push("Hello"); // ERROR

console.log(safeNumbers);

/*
========================================================
                NULL EXAMPLE
========================================================
*/

let data: string | null = null;

data = "Fetched Successfully";

console.log(data);

/*
========================================================
                IMPORTANT NOTES
========================================================

1. TypeScript can automatically infer types
2. Inference reduces unnecessary annotations
3. Function parameters should usually be annotated
4. Avoid trusting inference for complex structures
5. const creates more specific literal inference

========================================================
                INTERVIEW QUESTIONS
========================================================

Q1. What is type inference?
Q2. Difference between inference and annotation?
Q3. What is widening?
Q4. Difference between let and const inference?
Q5. Why avoid over-annotation?

========================================================
                    END
========================================================
*/