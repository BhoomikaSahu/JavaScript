const person = [
    [
      {
        firstName: "Astik",
        lastName: "sarathe",
      },
      {
        firstName: "Aman",
        lastName: "sarathe",
      },
      {
        firstName: "mohan",
        lastName: "sarathe",
      },
      {
        firstName: "sohan",
        lastName: "sarathe",
      },
      {
        firstName: "rohan",
        lastName: "sarathe",
      },
    ],
    [
      {
        firstName: "Bhoomika",
        lastName: "Sahu",
      },
      {
        firstName: "Aman",
        lastName: "sarathe",
      },
      {
        firstName: "mohan",
        lastName: "sarathe",
      },
      {
        firstName: "sohan",
        lastName: "sarathe",
      },
      {
        firstName: "rohan",
        lastName: "sarathe",
      },
    ],
    [
      {
        firstName: "Astik",
        lastName: "sarathe",
      },
      {
        firstName: "Aman",
        lastName: "sarathe",
      },
      {
        firstName: "mohan",
        lastName: "sarathe",
      },
      {
        firstName: "sohan",
        lastName: "sarathe",
      },
      {
        firstName: "rohan",
        lastName: "sarathe",
      },
    ],
];
  
person.forEach(function(object){
    object.forEach(function(name){
        console.log(`${name.firstName} ${name.lastName}`);
    })
})