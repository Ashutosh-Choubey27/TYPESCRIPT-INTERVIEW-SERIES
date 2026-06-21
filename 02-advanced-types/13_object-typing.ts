/*
========================================================
                OBJECT TYPING
========================================================
*/

/*
========================================================
            BASIC OBJECT
========================================================
*/

const user: {
  name: string;
  age: number;
} = {
  name: "Ashutosh",
  age: 22,
};

console.log(user);

/*
========================================================
            NESTED OBJECT
========================================================
*/

const profile: {
  name: string;
  address: {
    city: string;
    pincode: number;
  };
} = {
  name: "Ashutosh",
  address: {
    city: "Ghaziabad",
    pincode: 201001,
  },
};

console.log(profile);

/*
========================================================
        OPTIONAL PROPERTY
========================================================
*/

const product: {
  title: string;
  price?: number;
} = {
  title: "Laptop",
};

console.log(product);

/*
========================================================
        READONLY PROPERTY
========================================================
*/

const employee: {
  readonly id: number;
  name: string;
} = {
  id: 101,
  name: "Ashutosh",
};

console.log(employee);

/*
========================================================
            OBJECT METHOD
========================================================
*/

const person: {
  name: string;
  getName: () => string;
} = {
  name: "Ashutosh",

  getName() {
    return this.name;
  },
};

console.log(person.getName());

/*
========================================================
        FUNCTION PARAMETER
========================================================
*/

type User = {
  name: string;
  age: number;
};

function createUser(user: User): void {
  console.log(user);
}

createUser({
  name: "Ashutosh",
  age: 22,
});

/*
========================================================
    HOSPITAL PROJECT EXAMPLE
========================================================
*/

type Patient = {
  patientId: string;
  name: string;
  age: number;
  admitted: boolean;
};

const patient: Patient = {
  patientId: "P101",
  name: "Ramesh",
  age: 45,
  admitted: true,
};

console.log(patient);

/*
========================================================
                    END
========================================================
*/