/*
========================================================
        READONLY & UTILITY TYPES
========================================================
*/

interface User {
  id: number;
  name: string;
  email: string;
}

/*
========================================================
            READONLY
========================================================
*/

const user: Readonly<User> = {
  id: 1,
  name: "Ashutosh",
  email: "ashu@gmail.com",
};

// user.name = "Ram"; // ❌ Error

console.log(user);

/*
========================================================
            PARTIAL
========================================================
*/

type UpdateUser = Partial<User>;

const update: UpdateUser = {
  email: "new@gmail.com",
};

console.log(update);

/*
========================================================
            REQUIRED
========================================================
*/

interface Product {
  title: string;
  price?: number;
}

type FullProduct = Required<Product>;

const laptop: FullProduct = {
  title: "MacBook",
  price: 150000,
};

console.log(laptop);

/*
========================================================
                PICK
========================================================
*/

type UserPreview = Pick<
  User,
  "name" | "email"
>;

const preview: UserPreview = {
  name: "Ashutosh",
  email: "ashu@gmail.com",
};

console.log(preview);

/*
========================================================
                OMIT
========================================================
*/

interface SecureUser {
  id: number;
  name: string;
  password: string;
}

type PublicUser = Omit<
  SecureUser,
  "password"
>;

const publicUser: PublicUser = {
  id: 1,
  name: "Ashutosh",
};

console.log(publicUser);

/*
========================================================
        HOSPITAL PROJECT
========================================================
*/

interface Patient {
  id: string;
  name: string;
  age: number;
  disease: string;
}

type UpdatePatient =
  Partial<Patient>;

const patientUpdate: UpdatePatient = {
  disease: "Recovered",
};

console.log(patientUpdate);

type PatientCard = Pick<
  Patient,
  "name" | "disease"
>;

const card: PatientCard = {
  name: "Ramesh",
  disease: "Fever",
};

console.log(card);

/*
========================================================
                END
========================================================
*/