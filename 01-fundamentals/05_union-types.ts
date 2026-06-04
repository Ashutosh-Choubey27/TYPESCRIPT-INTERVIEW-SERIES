/*
========================================================
                    UNION TYPES
========================================================

Author : Ashutosh
Topic  : Union Types in TypeScript

========================================================
                    BASIC UNION
========================================================
*/

let userId: string | number;

userId = 101;
userId = "USER101";

// userId = true; // ERROR

console.log(userId);

/*
========================================================
            FUNCTION PARAMETER UNION
========================================================
*/

function printId(id: string | number): void {
  console.log("ID:", id);
}

printId(101);
printId("EMP101");

/*
========================================================
                UNION WITH NARROWING
========================================================
*/

function formatId(id: string | number): string {
  if (typeof id === "string") {
    return id.toUpperCase();
  }

  return id.toFixed(2);
}

console.log(formatId("abc101"));
console.log(formatId(101));

/*
========================================================
                UNION WITH ARRAYS
========================================================
*/

// Mixed array
let mixedValues: (string | number)[] = [
  "JavaScript",
  101,
  "TypeScript",
  202,
];

console.log(mixedValues);

/*
Important:

(string | number)[] means:
array can contain both string and number.

string | number[] means:
value can be either string OR number array.
*/

let value1: string | number[];

value1 = "Hello";
value1 = [1, 2, 3];

console.log(value1);

/*
========================================================
                LITERAL UNION TYPES
========================================================
*/

type Status = "idle" | "loading" | "success" | "error";

let requestStatus: Status = "idle";

requestStatus = "loading";
requestStatus = "success";

// requestStatus = "failed"; // ERROR

console.log(requestStatus);

/*
========================================================
                ROLE EXAMPLE
========================================================
*/

type Role = "admin" | "doctor" | "patient";

function accessDashboard(role: Role): void {
  if (role === "admin") {
    console.log("Accessing admin dashboard");
  } else if (role === "doctor") {
    console.log("Accessing doctor dashboard");
  } else {
    console.log("Accessing patient dashboard");
  }
}

accessDashboard("admin");
accessDashboard("doctor");
accessDashboard("patient");

// accessDashboard("guest"); // ERROR

/*
========================================================
            UNION WITH OBJECT TYPES
========================================================
*/

type SuccessResponse = {
  status: "success";
  data: string[];
};

type ErrorResponse = {
  status: "error";
  message: string;
};

type ApiResponse = SuccessResponse | ErrorResponse;

function handleApiResponse(response: ApiResponse): void {
  if (response.status === "success") {
    console.log("Data:", response.data);
  } else {
    console.log("Error:", response.message);
  }
}

handleApiResponse({
  status: "success",
  data: ["React", "TypeScript"],
});

handleApiResponse({
  status: "error",
  message: "Something went wrong",
});

/*
========================================================
            UNION IS BETTER THAN ANY
========================================================
*/

let safeId: string | number;

safeId = 10;
safeId = "ID10";

// safeId = false; // ERROR

/*
========================================================
                IMPORTANT NOTES
========================================================

1. Union types allow multiple possible types.
2. Union uses the | symbol.
3. Always narrow before using type-specific methods.
4. Literal unions are useful for fixed values.
5. Union is safer than any.

========================================================
                INTERVIEW QUESTIONS
========================================================

Q1. What is a union type?
Q2. Difference between union and any?
Q3. Why narrowing is needed with union types?
Q4. What is literal union?
Q5. Difference between (string | number)[] and string | number[]?

========================================================
                    END
========================================================
*/