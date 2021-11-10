//creating profile using object
const profile = {
    name: {
        firstName: "Bhoomika",
        lastName: "Sahu"
    },
    contactNumber: 8435277230,
    adress: {
        city: "Raisen",
        State: "Madhya Pradesh",
        pincode: 464551
    },
    graduation : [
        {
            collegeName: "Bansal Institute of Science and Technology",
            degree: "B.Tech",
            stream: "Information Technology",
            semester : '1st',
            cgpa: 8.39
        },
        {
            collegeName: "Bansal Institute of Science and Technology",
            degree: "B.Tech",
            stream: "Information Technology",
            semester : '1st',
            cgpa: 8.39
        },
        {
            collegeName: "Bansal Institute of Science and Technology",
            degree: "B.Tech",
            stream: "Information Technology",
            semester : '1st',
            cgpa: 8.39
        }

    ],
        
    Schooling: [{
        higherSchool: {
            name: "Saraswati Vidya Mandir",
            percentage: 79.2
        },
        highSchool: {
            name: "Saraswati Vidya Mandir",
            percentage: 84.83
        }
    }],
    hobbies : ["coding", "photography", "singing", "reading books"],
    familyDetails: {
        father:{
            name: {
                firstName: "Neelam",
                middleName: "Chand",
                lastName: "Sahu"
            },
            contactNumber: 9898989898,
        },
        mother: {
            name: {
                firstName: "Saroj",
                lastName: "Sahu"
            },
            contactNumber: 9898989898,
        }
    }
}
//console.log("I am " + profile.name.firstName + " " + profile.name.lastName);
//console.log("College Name: "+ profile.graduation[0].collegeName);
// console.log(profile.hobbies[0])

//print values of hobbies array
// for(const hobby of profile.hobbies)
//     console.log(hobby);

//print values of graduation array
// for(const object of profile.graduation)
//     for(const val of Object.keys(object))
//         console.log(val, ": ", object[val])

for(const key of Object.keys(profile.familyDetails)){
    if(typeof(key) === "object" && !Array.isArray(key))
        for(const val of Object.keys(key))
        //if(typeof(val) === "object" && !Array.isArray(val))
            console.log(val);
    // else
    //     console.log(key)
}
    //console.log(key);

    