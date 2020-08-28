// Number sums
const add = 5 + 5;

console.log(add);

var numb1 = 2;

const numSum = (numb1 += 5);

console.log(numSum);

// Functions:
function fullName() {
    const firstName = "Julian";
    const lastName = "Sharma";
  return firstName + " " + lastName + "!";
}

console.log(fullName());

// Arrays:
const arr = ["a", "b", "c"];
arr.push("d");
console.log(arr);

// Array Pop:
console.log(arr.pop());
console.log(arr);

// Array Join:
console.log(arr.join(""));

// Array shift:
console.log(arr.shift());
console.log(arr);

// For Loops:

const blankArr = [];

for (let i = 0; i < 5; i++) {
  console.log(blankArr.push(i));
}

const loopArr = ['a', 'b', 'c', 'd'];

for (let i = 0; i < loopArr.length; i++) {
  console.log(i);
}

// Date:

const todayDate = new Date();
console.log(todayDate.toDateString());

// Higher Order Functions & Arrays:

const companies = [
  {name: "Company One", category: "Finance", start: "1981", end: "2003"},
  {name: "Company Two", category: "Retail", start: "1992", end: "2008"},
  {name: "Company Three", category: "Auto", start: "1999", end: "2007"},
  {name: "Company Four", category: "Retail", start: "1989", end: "2010"},
  {name: "Company Five", category: "Technology", start: "2009", end: "2014"},
  {name: "Company Six", category: "Finance", start: "1987", end: "2010"},
  {name: "Company Seven", category: "Auto", start: "1986", end: "1996"},
  {name: "Company Eight", category: "Technology", start: "2011", end: "2016"},
  {name: "Company Nine", category: "Retail", start: "1981", end: "1989"},
];


// Fitler Array:
const retailCompanies = companies.filter(company => company.category === 'Retail');

console.log(retailCompanies);

// Map Array:
const companyNames = companies.map(company => company.name);

console.log(companyNames);

// Companies Long than 10 years: (Map Array)

const tenYearCompanies = companies.map(company => `${company.name} ${company.start} - ${company.end}`);

console.log(tenYearCompanies);

