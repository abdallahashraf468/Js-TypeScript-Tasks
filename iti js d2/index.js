
// const inputString = prompt("Enter a string:");

// let eCount = 0;

// for (let i = 0; i < inputString.length; i++) {
   
//     if (inputString[i] == 'e') {
//         eCount++;
//     }
// }

// console.log(`The number of 'e' characters is: ${eCount}`);





// Function to check if a string is a palindrome



// /s الل هيا المسافه 
// /g  كل النتائج سواء كابيتل او اسمول

const caseSensitive = prompt("Do you want the comparison to be case-sensitive? Enter 'yes' for case-sensitive or 'no' for case-insensitive.");

if (caseSensitive.toLowerCase() === 'yes') {
    const inputString = prompt("Enter a string:");
    const str = inputString.split(" ");
    const str2 = str.slice().reverse(); 
    const str3 = str2.join("");

    if (inputString === str3) {
        alert("The entered string is a palindrome.");
    } else {
        alert("The entered string is not a palindrome.");
    }
} else {
    const inputString = prompt("Enter a string:");
    const st = inputString.toUpperCase();
    const str = st.split(" ");
    const str2 = str.slice().reverse(); 
    const str3 = str2.join("");
    const str4 = str3.toUpperCase();

    if (inputString === str4) {
        alert("The entered string is a palindrome.");
    } else {
        alert("The entered string is not a palindrome.");
    }
}




// const numbers = [];
// for (let i = 0; i < 3; i++) {
//     const number = parseFloat(prompt(`Enter number ${i + 1}:`));
//     numbers.push(number);
// }


// const sum = numbers[0] + numbers[1] + numbers[2];
// const mult = numbers[0] * numbers[1] * numbers[2];
// const division = numbers[0] / numbers[1] / numbers[2];


// const output = `
//   Sum: ${numbers[0]} + ${numbers[1]} + ${numbers[2]} = ${sum}
//   mult: ${numbers[0]} * ${numbers[1]} * ${numbers[2]} = ${mult}
//   Division: ${numbers[0]} / ${numbers[1]} / ${numbers[2]} = ${division}`;


// console.log(output);





// const numbers = [];
// for (let i = 0; i < 5; i++) {                               // بيقبل كسور 
//     const number = parseFloat(prompt(`Enter number ${i + 1}:`));
//     numbers.push(number);
// }


// const asOrder = numbers.sort((a, b) => a - b);
// const desOrder = numbers.sort((a, b) => b - a);












// const radius = parseFloat(prompt("Enter the value of the circle's radius:"));


// const area = Math.PI * radius * radius;

// const output = `Radius: ${radius} Area: ${area.toFixed(2)}`;


// console.log(output);




// //    الجزر التربيعي بيتاع الرقم 


// const inputValue = parseFloat(prompt("Enter a value:"));


// const squareRoot = Math.sqrt(inputValue);


// alert(`The square root of ${inputValue} is ${squareRoot.toFixed(2)}`);




//                             //    math.pi = 3.14


// const angleDegrees = parseFloat(prompt("Enter an angle in degrees:"));


// const angleRadians = (angleDegrees * Math.PI) / 180;


// const cosValue = Math.cos(angleRadians);


// const output = ` Angle: ${angleDegrees} degrees Cosine Value: ${cosValue.toFixed(2)}`;


// console.log(output);

