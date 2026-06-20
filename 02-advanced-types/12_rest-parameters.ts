/*
========================================================
                REST PARAMETERS
========================================================
*/

/*
========================================================
                BASIC EXAMPLE
========================================================
*/

function sum(
  ...numbers: number[]
): number {
  return numbers.reduce(
    (total, num) => total + num,
    0
  );
}

console.log(
  sum(10, 20)
);

console.log(
  sum(10, 20, 30)
);

/*
========================================================
            STRING EXAMPLE
========================================================
*/

function printSkills(
  ...skills: string[]
): void {
  console.log(skills);
}

printSkills(
  "React",
  "TypeScript",
  "Node.js"
);

/*
========================================================
        REQUIRED + REST
========================================================
*/

function introduce(
  name: string,
  ...skills: string[]
): void {
  console.log(name);
  console.log(skills);
}

introduce(
  "Ashutosh",
  "React",
  "AWS",
  "Docker"
);

/*
========================================================
            ARROW FUNCTION
========================================================
*/

const multiplyAll = (
  ...numbers: number[]
): number => {
  return numbers.reduce(
    (total, num) => total * num,
    1
  );
};

console.log(
  multiplyAll(
    2,
    3,
    4
  )
);

/*
========================================================
        HOSPITAL PROJECT EXAMPLE
========================================================
*/

function registerSymptoms(
  patientId: string,
  ...symptoms: string[]
): void {
  console.log(
    patientId,
    symptoms
  );
}

registerSymptoms(
  "P101",
  "Fever",
  "Headache",
  "Cough"
);

/*
========================================================
        TUPLE REST EXAMPLE
========================================================
*/

function createUser(
  ...data: [string, number]
): void {
  const [name, age] = data;

  console.log(name);
  console.log(age);
}

createUser(
  "Ashutosh",
  22
);

/*
========================================================
                END
========================================================
*/