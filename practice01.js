console.log("Hello world");

let nameAdm = "Andressa";
let ageAdm = 34;
let favoritecolorAdm = "black";

const dobAdm = "Nov 2, 1986";

console.log(nameAdm + " is " + ageAdm + " years old, she was born on " + dobAdm + " and her favourite color is " + favoritecolorAdm);
console.log(`${nameAdm} is ${ageAdm} years old, she was born on ${dobAdm} and her favourite color is ${favoritecolorAdm}`);

let nameUser = "Rafael";
let ageUser = 14;
let favoritecolorUser = "red";

const dobUser = "May 28, 2008";

if (ageAdm > ageUser) {
    console.log(nameAdm + " is older than " + nameUser);
} else
    console.log(nameUser + " is older than " + nameAdm);

let today = "Nov 2, 1986";
if (today === dobAdm) {
    ageAdm = ageAdm + 1;
    console.log(nameAdm + " will be " + ageAdm + " years next year ");
}

let totalofAges = ageAdm + ageUser;
console.log("Sum of  ages of " + nameAdm + " and " + nameUser + " is " + totalofAges);
console.log(`Sum of ages of ${nameAdm} and ${nameUser} is ${totalofAges}`);

let number = 10;
if (number % 2 === 0) {
    console.log("Even number!");
} else
    console.log("odd number!");

let a = 5;
let b = 10;
if (a === 5) {
    let a = 4;
    let b = 1;
    console.log(a);
    console.log(b);
}
console.log(a);
console.log(b);

for (let i = 1; i <= 10; i++) {
    let row = "8 * " + i + " = " + 8 * i;
    console.log(row);
}
