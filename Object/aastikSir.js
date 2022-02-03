const profile = {
    name: {
      firstName: "Astik",
      lastName: "Sarathe",
    },
    graduation: [
      {
        name: "BCE",
        semister: "1",
        sgpa: 8.4,
      },
      {
        name: "BCE",
        semister: "2",
        sgpa: 8.4,
      },
      {
        name: "BCE",
        semister: "3",
        sgpa: 8.4,
      },
    ],
    number: [
      [1, 14, 64, 5, 06, 60, 94],
      [1, 44, 74, 5, 60, 36, 49],
      [1, 45, 84, 5, 61, 68, 14],
    ],
    school: [
      {
        name: "Bright School",
        class: "10",
        percentage: "83",
      },
      {
        name: "Bright School",
        class: "12",
        percentage: "73",
      },
    ],
    hobbies: ["cricket", "coding"],
    family: {
      father: {
        name: {
          firstName: "xyz",
          middleName: "",
          lastName: "Sarathe",
        },
        phoneNumber: 1234567890,
        occupation: "bussinessman",
      },
      mother: {
        name: {
          firstName: "xyz",
          middleName: "",
          lastName: "Sarathe",
        },
        phoneNumber: 1234567890,
        occupation: "bussinesswoman",
      },
    },
    multi: [
      {
        name: "astik sarathe inside multi",
        schoolName: "astik sarathe inside multi",
      },
      "mobile",
      2343,
      [12,23,24,45,10,11,23,24]
    ],
    object1 : {
        key1: profile
    }
  };
  function printObject(object) {
    for (const key of Object.keys(object)) {
      if (typeof object[key] !== "object" && !Array.isArray(object)) {
        console.log(key, " :", object[key]);
      } else if (Array.isArray(object[key])) {
        printArray(object[key]);
      } else if (typeof object[key] === "object") {
        printObject(object[key]);
      }
    }
  }
  function printArray(array) {
    for (const value of array) {
      if (typeof value === "object" && !Array.isArray(value)) {
        printObject(value);
      } else if (Array.isArray(value)) {
        printArray(value);
      } else {
        console.log("inside array function " + value);
      }
    }
  }
  
   printObject(profile);
  
//   let Name = '';
//   profile.name.firstName ? Name += profile.name.firstName + ' ' : ''
//   profile.name.middleName ? Name += profile.name.middleName + ' ' : ''
//   profile.name.lastName ? Name += profile.name.lastName + ' ' : ''
//   console.log(Name)
  
  for (const object of profile.graduation) {
      for (const iterator of Object.keys(object)) {
          console.log(iterator," :",object[iterator])
      }
  }