/*
========================================================
                LITERAL TYPES
========================================================

Author : Ashutosh
Topic  : Literal Types

========================================================
                BASIC LITERAL TYPE
========================================================
*/

let role: "admin";

role = "admin";

// role = "doctor"; // ERROR

console.log(role);

/*
========================================================
            NUMBER LITERAL TYPE
========================================================
*/

let rating: 5;

rating = 5;

// rating = 4; // ERROR

console.log(rating);

/*
========================================================
            BOOLEAN LITERAL TYPE
========================================================
*/

let isAdmin: true = true;

// isAdmin = false; // ERROR

console.log(isAdmin);

/*
========================================================
            LITERAL UNION TYPES
========================================================
*/

type Role =
  | "admin"
  | "doctor"
  | "patient";

let currentRole: Role;

currentRole = "admin";
currentRole = "doctor";
currentRole = "patient";

// currentRole = "guest"; // ERROR

console.log(currentRole);

/*
========================================================
            API STATUS EXAMPLE
========================================================
*/

type Status =
  | "idle"
  | "loading"
  | "success"
  | "error";

let apiStatus: Status = "idle";

apiStatus = "loading";
apiStatus = "success";

console.log(apiStatus);

/*
========================================================
            HOSPITAL PROJECT EXAMPLE
========================================================
*/

type QueueStatus =
  | "waiting"
  | "called"
  | "completed"
  | "no-show";

const patientStatus: QueueStatus =
  "waiting";

console.log(patientStatus);

/*
========================================================
            CONST INFERENCE
========================================================
*/

const role1 = "admin";

/*
Type inferred:

"admin"
*/

let role2 = "admin";

/*
Type inferred:

string
*/

console.log(role1);
console.log(role2);

/*
========================================================
            TYPE NARROWING
========================================================
*/

function accessPanel(role: Role): void {
  if (role === "admin") {
    console.log("Admin Dashboard");
  } else {
    console.log("Other Dashboard");
  }
}

accessPanel("admin");
accessPanel("doctor");

/*
========================================================
                IMPORTANT NOTES
========================================================

1. Literal types represent exact values.
2. Useful for fixed states and roles.
3. Literal unions are heavily used in React.
4. const infers literal types.
5. Improves type safety significantly.

========================================================
                INTERVIEW QUESTIONS
========================================================

Q1. What is a literal type?
Q2. Difference between string and literal string?
Q3. What is literal union?
Q4. Why use literal types?
Q5. Why does const infer literal type?

========================================================
                    END
========================================================
*/