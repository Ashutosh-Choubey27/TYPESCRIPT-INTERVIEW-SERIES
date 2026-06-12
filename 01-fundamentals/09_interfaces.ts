/*
========================================================
                    INTERFACES
========================================================

Author : Ashutosh
Topic  : Interfaces

========================================================
                BASIC INTERFACE
========================================================
*/

interface User {
  id: number;
  name: string;
}

const user: User = {
  id: 1,
  name: "Ashutosh",
};

console.log(user);

/*
========================================================
            OPTIONAL PROPERTY
========================================================
*/

interface Product {
  title: string;
  price?: number;
}

const laptop: Product = {
  title: "MacBook",
};

console.log(laptop);

/*
========================================================
            READONLY PROPERTY
========================================================
*/

interface Employee {
  readonly employeeId: number;
  name: string;
}

const emp: Employee = {
  employeeId: 101,
  name: "Ashutosh",
};

// emp.employeeId = 102; // ERROR

console.log(emp);

/*
========================================================
            FUNCTION INTERFACE
========================================================
*/

interface AddFunction {
  (a: number, b: number): number;
}

const add: AddFunction =
  (a, b) => a + b;

console.log(add(10, 20));

/*
========================================================
            INTERFACE EXTENSION
========================================================
*/

interface Person {
  name: string;
}

interface Staff extends Person {
  employeeId: number;
}

const staff: Staff = {
  name: "Ashutosh",
  employeeId: 500,
};

console.log(staff);

/*
========================================================
            MULTIPLE EXTENSION
========================================================
*/

interface Contact {
  email: string;
}

interface EmployeeProfile
  extends Person, Contact {
  employeeId: number;
}

const profile: EmployeeProfile = {
  name: "Ashutosh",
  email: "ashu@example.com",
  employeeId: 100,
};

console.log(profile);

/*
========================================================
            HOSPITAL PROJECT EXAMPLE
========================================================
*/

interface HospitalUser {
  id: string;
  name: string;
}

interface Doctor extends HospitalUser {
  specialization: string;
}

const doctor: Doctor = {
  id: "D101",
  name: "Dr Sharma",
  specialization: "Cardiology",
};

console.log(doctor);

/*
========================================================
            DECLARATION MERGING
========================================================
*/

interface Customer {
  name: string;
}

interface Customer {
  age: number;
}

const customer: Customer = {
  name: "Ashutosh",
  age: 22,
};

console.log(customer);

/*
========================================================
                IMPORTANT NOTES
========================================================

1. Interfaces define object contracts.
2. Interfaces support extension.
3. Interfaces support declaration merging.
4. Preferred for object structures.
5. Cannot directly represent unions.

========================================================
                INTERVIEW QUESTIONS
========================================================

Q1. What is an interface?
Q2. Interface vs Type Alias?
Q3. What is declaration merging?
Q4. Can interfaces extend interfaces?
Q5. Why use interfaces for objects?

========================================================
                    END
========================================================
*/