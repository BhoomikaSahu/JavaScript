const person = [
    {
      firstName:"Astik",
      lastName:"sarathe"
    },
    {
      firstName:"Aman",
      lastName:"sarathe"
    },
    {
      firstName:"mohan",
      lastName:"sarathe"
    },
    {
      firstName:"sohan",
      lastName:"sarathe"
    },
    {
      firstName:"rohan",
      lastName:"sarathe"
    },
  ]
  
person.filter(function(object){
    console.log(`${object.firstName} ${object.lastName}`);
})
  