/*
========================================================
        ANY vs UNKNOWN vs NEVER
========================================================

Author : Ashutosh
Topic  : any vs unknown vs never

========================================================
                    ANY TYPE
========================================================
*/

let data: any = "Ashutosh";

data = 100;
data = true;
data = {};

console.log(data);

/*
'any' disables TypeScript safety.
Avoid excessive usage.
*/

/*
========================================================
                ANY DANGER
========================================================
*/

let value: any = "Hello";

console.log(value.toUpperCase());

value = 100;

// Runtime Error Possible
// console.log(value.toUpperCase());

/*
========================================================
                UNKNOWN TYPE
========================================================
*/

let userInput: unknown = "TypeScript";

// console.log(userInput.toUpperCase()); // ERROR

/*
Need type narrowing first
*/

if (typeof userInput === "string") {
  console.log(userInput.toUpperCase());
}

/*
========================================================
            UNKNOWN WITH FUNCTION
========================================================
*/

function fetchData(): unknown {
  return "API Response";
}

const response = fetchData();

if (typeof response === "string") {
  console.log(response.toUpperCase());
}

/*
========================================================
                    NEVER TYPE
========================================================
*/

function throwError(message: string): never {
  throw new Error(message);
}

/*
This function never successfully returns.
*/

/*
========================================================
                INFINITE LOOP
========================================================
*/

function infiniteLoop(): never {
  while (true) {}
}

/*
========================================================
                VOID vs NEVER
========================================================
*/

function logMessage(): void {
  console.log("Hello");
}

/*
void -> function completes
*/

function crash(): never {
  throw new Error("Application Crashed");
}

/*
never -> function never completes
*/

/*
========================================================
            EXHAUSTIVE CHECKING
========================================================
*/

type Shape = "circle" | "square";

function getShape(shape: Shape) {
  switch (shape) {
    case "circle":
      return "Circle";

    case "square":
      return "Square";

    default:
      const neverValue: never = shape;
      return neverValue;
  }
}

/*
========================================================
                IMPORTANT NOTES
========================================================

1. Avoid overusing 'any'
2. Prefer 'unknown' for dynamic data
3. 'unknown' requires type checking
4. 'never' represents impossible situations
5. 'void' and 'never' are different

========================================================
                INTERVIEW QUESTIONS
========================================================

Q1. Difference between any and unknown?
Q2. Why avoid any?
Q3. What is never type?
Q4. Difference between void and never?
Q5. When should unknown be used?

========================================================
                    END
========================================================
*/