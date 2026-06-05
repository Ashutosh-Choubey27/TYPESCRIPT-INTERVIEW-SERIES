/*
========================================================
                INTERSECTION TYPES
========================================================

Author : Ashutosh
Topic  : Intersection Types

========================================================
                BASIC EXAMPLE
========================================================
*/

type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type Staff = Person & Employee;

const staff: Staff = {
  name: "Ashutosh",
  employeeId: 101,
};

console.log(staff);

/*
========================================================
            HOSPITAL PROJECT EXAMPLE
========================================================
*/

type User = {
  id: string;
  name: string;
};

type Doctor = {
  specialization: string;
};

type DoctorProfile = User & Doctor;

const doctor: DoctorProfile = {
  id: "D101",
  name: "Dr Sharma",
  specialization: "Cardiologist",
};

console.log(doctor);

/*
========================================================
            MULTIPLE INTERSECTIONS
========================================================
*/

type A = {
  a: string;
};

type B = {
  b: string;
};

type C = {
  c: string;
};

type Combined = A & B & C;

const obj: Combined = {
  a: "A",
  b: "B",
  c: "C",
};

console.log(obj);

/*
========================================================
            INTERFACE INTERSECTION
========================================================
*/

interface PersonInfo {
  name: string;
}

interface EmployeeInfo {
  employeeId: number;
}

type EmployeeDetails =
  PersonInfo &
  EmployeeInfo;

const emp: EmployeeDetails = {
  name: "Ashutosh",
  employeeId: 500,
};

console.log(emp);

/*
========================================================
            PROPERTY CONFLICT
========================================================
*/

type Type1 = {
  age: string;
};

type Type2 = {
  age: number;
};

/*
type Invalid = Type1 & Type2;

Result:

{
  age: never
}

Impossible type
*/

/*
========================================================
                REACT-LIKE EXAMPLE
========================================================
*/

type UserProps = {
  name: string;
};

type ThemeProps = {
  darkMode: boolean;
};

type DashboardProps =
  UserProps &
  ThemeProps;

const dashboardData: DashboardProps = {
  name: "Ashutosh",
  darkMode: true,
};

console.log(dashboardData);

/*
========================================================
                IMPORTANT NOTES
========================================================

1. Intersection means AND.
2. All properties are required.
3. Uses & operator.
4. Useful for object composition.
5. Property conflicts can produce never.

========================================================
                INTERVIEW QUESTIONS
========================================================

Q1. What is an intersection type?
Q2. Difference between union and intersection?
Q3. What happens when properties conflict?
Q4. Why use intersections?
Q5. Can interfaces be intersected?

========================================================
                    END
========================================================
*/