console.log("Hello world");

let nameFriend = "Andressa";
let ageFriend = 34;
let favoriteColorFriend = "black";
const dobFriend = "Nov 2, 1986";

console.log(nameFriend + " is " + ageFriend + " years old, he/she was born on " + dobFriend + " and his/her favourite color is " + favoriteColorFriend);
console.log(`${nameFriend} is ${ageFriend} years old, he/she was born on ${dobFriend} and his/her favourite color is ${favoriteColorFriend}`);

let nameUser = "Rafael";
let ageUser = 14;
let favoriteColorUser = "red";
const dobUser = "May 28, 2008";
console.log(`${nameUser} is ${ageUser} years old, he/she was born on ${dobUser} and his/her favourite color is ${favoriteColorUser}`);

if (ageFriend > ageUser) {
    console.log(nameFriend + " is older than " + nameUser);
} else
    console.log(nameUser + " is older than " + nameFriend);

let today = "Nov 2, 1986";
if (today === dobFriend) {
    ageFriend = ageFriend + 1;
    console.log(nameFriend + " will be " + ageFriend + " years next year ");
}

let totalofAges = ageFriend + ageUser;
console.log("Sum of  ages of " + nameFriend + " and " + nameUser + " is " + totalofAges);
console.log(`Sum of ages of ${nameFriend} and ${nameUser} is ${totalofAges}`);

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

for (let i = 0; i <= 10; i++) {
    let row = "8 * " + i + " = " + 8 * i;
    console.log(row);
}
