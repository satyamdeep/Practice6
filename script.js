//Objective
//Create an array to store companies: "Amazon","Microsoft","Uber","Google","Bloomberg","IBM","TCS"

//A. Remove the first company from the array.
//With for shift method

const companies =["Bloomberg","Microsoft","Uber","Google","Amazon","IBM","TCS" ]
companies.shift()
console.log(companies);

//B. Remove Uber & Add Ola in its place
// Using splice method

companies.splice(1,1,"Ola");
console.log(companies);

//C. Add Amazon at the end
//Using push method

companies.push("Amazon")
console.log(companies);
