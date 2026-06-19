/*
========================================================
    OPTIONAL & DEFAULT PARAMETERS
========================================================
*/

/*
========================================================
        OPTIONAL PARAMETERS
========================================================
*/

function greet(
  name: string,
  city?: string
): void {
  console.log(`Hello ${name}`);

  if (city) {
    console.log(
      city.toUpperCase()
    );
  }
}

greet("Ashutosh");

greet(
  "Ashutosh",
  "Delhi"
);

/*
========================================================
        DEFAULT PARAMETERS
========================================================
*/

function welcome(
  name: string,
  city = "Unknown"
): void {
  console.log(
    `${name} from ${city}`
  );
}

welcome("Ashutosh");

welcome(
  "Ashutosh",
  "Ghaziabad"
);

/*
========================================================
        TAX EXAMPLE
========================================================
*/

function calculateTax(
  amount: number,
  taxRate = 18
): number {
  return amount * taxRate;
}

console.log(
  calculateTax(100)
);

console.log(
  calculateTax(100, 10)
);

/*
========================================================
    HOSPITAL PROJECT EXAMPLE
========================================================
*/

function bookAppointment(
  patientId: string,
  doctorId: string,
  notes?: string
): void {
  console.log(
    patientId,
    doctorId,
    notes
  );
}

bookAppointment(
  "P101",
  "D101"
);

bookAppointment(
  "P101",
  "D101",
  "Chest Pain"
);

/*
========================================================
        DEFAULT PRIORITY
========================================================
*/

function createToken(
  patientId: string,
  priority = "NORMAL"
): string {
  return priority;
}

console.log(
  createToken("P101")
);

console.log(
  createToken(
    "P101",
    "VIP"
  )
);

/*
========================================================
            END
========================================================
*/