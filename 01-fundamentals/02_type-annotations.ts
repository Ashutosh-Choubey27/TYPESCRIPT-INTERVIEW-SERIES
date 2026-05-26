/*
========================================================
                TYPE ANNOTATIONS
========================================================

Author : Ashutosh
Topic  : Type Annotations in TypeScript

========================================================
                BASIC ANNOTATIONS
========================================================
*/

/*
let username: string = "Ashutosh";
let age: number = 22;
let isDeveloper: boolean = true;

console.log(username);
console.log(age);
console.log(isDeveloper);

*/
/*
========================================================
                FUNCTION ANNOTATIONS
========================================================
*/

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(10, 20));

/*
========================================================
                    VOID TYPE
========================================================
*/

function printMessage(message: string): void {
  console.log(message);
}

printMessage("Hello TypeScript");

/*
========================================================
                ARRAY ANNOTATIONS
========================================================
*/

let numbers: number[] = [1, 2, 3, 4];

let technologies: string[] = [
  "JavaScript",
  "TypeScript",
  "React",
];

console.log(numbers);
console.log(technologies);

/*
========================================================
                OBJECT ANNOTATIONS
========================================================
*/

/*

let user: {
  name: string;
  age: number;
  isAdmin: boolean;
} = {
  name: "Ashutosh",
  age: 22,
  isAdmin: false,
};

console.log(user);

*/

/*
========================================================
            OPTIONAL PROPERTIES
========================================================
*/

let product: {
  title: string;
  price?: number;
} = {
  title: "Laptop",
};

console.log(product);

/*
========================================================
                NESTED OBJECTS
========================================================
*/

let employee: {
  name: string;
  address: {
    city: string;
    pincode: number;
  };
} = {
  name: "Ashutosh",
  address: {
    city: "Delhi",
    pincode: 110001,
  },
};

console.log(employee);

/*
========================================================
            ARROW FUNCTION ANNOTATIONS
========================================================
*/

const subtract = (
  a: number,
  b: number
): number => {
  return a - b;
};

console.log(subtract(20, 5));

/*
========================================================
                TYPE ALIAS EXAMPLE
========================================================
*/

/*
type User = {
  id: number;
  username: string;
  isAdmin: boolean;
};

const user1: User = {
  id: 1,
  username: "Ashutosh",
  isAdmin: false,
};

console.log(user1);

*/

/*
========================================================
                IMPORTANT NOTES
========================================================

1. Type annotations provide type safety
2. They help catch errors early
3. Avoid overusing 'any'
4. Function parameter annotations are important
5. Return types improve readability

========================================================
                INTERVIEW QUESTIONS
========================================================

Q1. What are type annotations?
Q2. Why use type annotations?
Q3. Difference between annotation and inference?
Q4. Difference between annotation and assertion?
Q5. What is void type?

========================================================
                    END
========================================================
*/