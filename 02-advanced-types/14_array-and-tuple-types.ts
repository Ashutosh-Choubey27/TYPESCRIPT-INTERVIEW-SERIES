/*
========================================================
            ARRAY & TUPLE TYPES
========================================================
*/

/*
========================================================
                ARRAY TYPES
========================================================
*/

const numbers: number[] = [
  10,
  20,
  30,
];

console.log(numbers);

const names: Array<string> = [
  "Ashutosh",
  "Anik",
];

console.log(names);

/*
========================================================
            UNION ARRAY
========================================================
*/

const mixed: (string | number)[] = [
  "Ashutosh",
  22,
];

console.log(mixed);

/*
========================================================
        ARRAY OF OBJECTS
========================================================
*/

type User = {
  id: number;
  name: string;
};

const users: User[] = [
  {
    id: 1,
    name: "Ashutosh",
  },
  {
    id: 2,
    name: "Anik",
  },
];

console.log(users);

/*
========================================================
                TUPLE
========================================================
*/

let student: [string, number];

student = [
  "Ashutosh",
  22,
];

console.log(student);

/*
========================================================
        NAMED TUPLE
========================================================
*/

type Employee = [
  id: number,
  name: string,
  isActive: boolean
];

const emp: Employee = [
  101,
  "Ashutosh",
  true,
];

console.log(emp);

/*
========================================================
        OPTIONAL TUPLE
========================================================
*/

type UserData = [
  string,
  number?
];

const u1: UserData = [
  "Ashutosh",
];

const u2: UserData = [
  "Ashutosh",
  22,
];

console.log(u1);
console.log(u2);

/*
========================================================
        TUPLE REST
========================================================
*/

type Scores = [
  string,
  ...number[]
];

const marks: Scores = [
  "Math",
  90,
  85,
  88,
];

console.log(marks);

/*
========================================================
    HOSPITAL PROJECT
========================================================
*/

type PatientRecord = [
  patientId: string,
  token: number,
  admitted: boolean
];

const patient: PatientRecord = [
  "P101",
  15,
  true,
];

console.log(patient);

/*
========================================================
                END
========================================================
*/