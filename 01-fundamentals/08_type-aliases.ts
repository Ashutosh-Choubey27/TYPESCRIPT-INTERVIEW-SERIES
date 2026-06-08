/*
========================================================
                TYPE ALIASES
========================================================

Author : Ashutosh
Topic  : Type Aliases

========================================================
                BASIC TYPE ALIAS
========================================================
*/

type User = {
  id: number;
  name: string;
  email: string;
};

const user: User = {
  id: 1,
  name: "Ashutosh",
  email: "ashu@example.com",
};

console.log(user);

/*
========================================================
            PRIMITIVE TYPE ALIAS
========================================================
*/

type Username = string;

let username: Username =
  "Ashutosh";

console.log(username);

/*
========================================================
            UNION TYPE ALIAS
========================================================
*/

type Status =
  | "loading"
  | "success"
  | "error";

let apiStatus: Status =
  "loading";

console.log(apiStatus);

/*
========================================================
            FUNCTION TYPE ALIAS
========================================================
*/

type AddFunction =
  (a: number, b: number) => number;

const add: AddFunction =
  (a, b) => a + b;

console.log(add(10, 20));

/*
========================================================
                ARRAY ALIAS
========================================================
*/

type StringArray = string[];

const skills: StringArray = [
  "React",
  "TypeScript",
  "Node.js",
];

console.log(skills);

/*
========================================================
            NESTED TYPE ALIAS
========================================================
*/

type Address = {
  city: string;
  pincode: number;
};

type UserProfile = {
  name: string;
  address: Address;
};

const profile: UserProfile = {
  name: "Ashutosh",
  address: {
    city: "Ghaziabad",
    pincode: 201001,
  },
};

console.log(profile);

/*
========================================================
            INTERSECTION WITH ALIAS
========================================================
*/

type Patient = {
  patientId: string;
};

type Appointment = {
  slotTime: string;
};

type PatientAppointment =
  Patient &
  Appointment;

const booking: PatientAppointment = {
  patientId: "P101",
  slotTime: "09:30 AM",
};

console.log(booking);

/*
========================================================
                IMPORTANT NOTES
========================================================

1. Type aliases create reusable types.
2. Can represent primitives.
3. Can represent functions.
4. Can represent unions.
5. Improve readability and maintainability.

========================================================
                INTERVIEW QUESTIONS
========================================================

Q1. What is a Type Alias?
Q2. Why use Type Aliases?
Q3. Can aliases represent functions?
Q4. Can aliases represent primitive types?
Q5. Difference between alias and interface?

========================================================
                    END
========================================================
*/