/*
========================================================
                FUNCTION TYPING
========================================================
*/

function greet(name: string): void {
  console.log(`Hello ${name}`);
}

greet("Ashutosh");

/*
========================================================
            RETURN TYPE
========================================================
*/

function add(
  a: number,
  b: number
): number {
  return a + b;
}

console.log(add(10, 20));

/*
========================================================
            ARROW FUNCTION
========================================================
*/

const multiply = (
  a: number,
  b: number
): number => {
  return a * b;
};

console.log(multiply(5, 4));

/*
========================================================
        FUNCTION TYPE VARIABLE
========================================================
*/

let calculate:
(a: number, b: number) => number;

calculate = (x, y) => x + y;

console.log(calculate(5, 10));

/*
========================================================
        TYPE ALIAS FUNCTION
========================================================
*/

type AddFunction =
(a: number, b: number) => number;

const subtract: AddFunction =
(a, b) => a - b;

console.log(subtract(20, 10));

/*
========================================================
        HOSPITAL PROJECT EXAMPLE
========================================================
*/

type BookAppointment =
(
  patientId: string,
  slotTime: string
) => boolean;

const bookAppointment:
BookAppointment =
(patientId, slotTime) => {
  return true;
};

console.log(
  bookAppointment(
    "P101",
    "09:30 AM"
  )
);

/*
========================================================
                    END
========================================================
*/