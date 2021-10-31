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
  
// person.filter(function(object){
//     object.filter(function(name){
//         console.log(`${name.firstName} ${name.lastName}`);
//     })
// })

let name= person.forEach(function (element){
  for(let index=0;index<element.length;index++){
    console. log("my Name is =>",`${element[index].firstName} ${element[index].lastName} `)
  }
})