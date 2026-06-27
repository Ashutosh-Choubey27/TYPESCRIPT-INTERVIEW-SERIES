/*
========================================================
                    ENUM TYPES
========================================================
*/

/*
========================================================
            NUMERIC ENUM
========================================================
*/

enum Role {
  Admin,
  Doctor,
  Patient,
}

const userRole: Role = Role.Doctor;

console.log(userRole); // 1

/*
========================================================
            CUSTOM NUMERIC ENUM
========================================================
*/

enum StatusCode {
  Success = 200,
  NotFound = 404,
  ServerError = 500,
}

console.log(StatusCode.Success);

/*
========================================================
            STRING ENUM
========================================================
*/

enum UserRole {
  Admin = "ADMIN",
  Doctor = "DOCTOR",
  Patient = "PATIENT",
}

const role = UserRole.Admin;

console.log(role);

/*
========================================================
            SWITCH EXAMPLE
========================================================
*/

enum Status {
  Loading,
  Success,
  Error,
}

function showMessage(status: Status): void {
  switch (status) {
    case Status.Loading:
      console.log("Loading...");
      break;

    case Status.Success:
      console.log("Success");
      break;

    case Status.Error:
      console.log("Error");
      break;
  }
}

showMessage(Status.Success);

/*
========================================================
        HOSPITAL PROJECT
========================================================
*/

enum AppointmentStatus {
  Waiting = "WAITING",
  Called = "CALLED",
  Completed = "COMPLETED",
  Cancelled = "CANCELLED",
}

const currentStatus =
  AppointmentStatus.Waiting;

console.log(currentStatus);

/*
========================================================
        REVERSE MAPPING
========================================================
*/

enum Color {
  Red,
  Green,
}

console.log(Color.Red); // 0
console.log(Color[0]);  // Red

/*
========================================================
                END
========================================================
*/