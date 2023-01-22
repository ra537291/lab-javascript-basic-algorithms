// Iteration 1: Names and Input

let hacker1 = "raul"; //hacker name
console.log("The driver's name is " + hacker1);

let hacker2 = "pepito"; //navigator name
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log("The driver has the logest name, it has " + hacker1.length + " characters" );
} else if (hacker1.length === hacker2.length){
    console.log("Wow, you both have equally long names, " + hacker1.length +  "characters!");
} else{
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " character!")
};



// Iteration 3: Loops

let reName = "";

for (let i = 0; i < hacker1.length; i++){
    let charMayus = hacker1[i].toUpperCase();
    reName += charMayus;
    reName += " ";
    }

console.log(reName);


let reverseOrder = "";

for (let i = hacker2.length-1; i >= 0; i--){
    let result = hacker2[i];
    reverseOrder += result
}
console.log(reverseOrder);

for (let i = 0; i < hacker1.length; i++){
    if (hacker1[i] < hacker2[i]) console.log("The driver's name goes first.");
    else if (hacker2[i] > hacker2[i]) console.log("Yo, the navigator goes first definitely.");
    else console.log("What?! You both have the same name?");
}


