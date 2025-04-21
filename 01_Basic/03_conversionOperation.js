let score = "121abc"

console.log(typeof score);

let scoreInNumber = Number(score) //convert string into number

console.log(typeof scoreInNumber);

//as it is storing the character with numbers, so it is NaN (not a number)
console.log(scoreInNumber); 

// "11" => 11
// "11abc" => NaN (not a number)
// true => 1, false => 0