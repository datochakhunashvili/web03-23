// let numbersArray =[1,2,3,4,5,6,7,8,9,10,20,30,35,55,60,80,95,100];
// console.log(numbersArray.length);
// for (let index = 0; index < numbersArray. length; index++) {
//     console.log(numbersArray[index]);
// };

let names = ["dato","giorgi","luka","sandro","andria"];
console.log(names);
names.push("nikolozi");
console.log(names);
names.pop();
console.log(names);
names.shift();
console.log(names);
names.unshift("beqa");
console.log(names);

// let newNumbersArray = [1,2,3,4,5];
// for (let index = 0; index < newNumbersArray. length; index++) {
//     console.log(newNumbersArray [index] + 10);
//     console.log(newNumbersArray [index] *7)
// }

// let numbersAr =[1,2,3,4,5,6,7,8,9,10,20,30,35,55,60,80,95,100];
// console.log(numbersAr.length);
// for (let index = 0; index < numbersAr. length; index++) {
//     console.log(numbersAr[index]);
//     if (Number % 2 === 0) {
//         numbersAr = true;
//         console.log(numbersAr);
//     } else {
//         numbersAr = "Even";
//         console. log(numbersAr)
//     }
// }

// let texts = ["MY NAME IS JOHN"];
// for (let index = 0; index < texts. length; index++) { 
//     console. log(texts[index])
//     if (texts.length <3) {
//         let   upperCaseTexts = texts.toUpperCase();
//         console. log(upperCaseTexts);
//     }else {
//         let lowerCaseTexts = texts.toLowerCase(); 
//         console.log(lowerCaseTexts);
//     }
// }

let numbers = [];
for (let i = 0; i <= 100; i++) {
    console. log (i);
}

let index = 0;
while (index < 50) {
    console.log(index);
    index++;
}

let number = [];
for (let i = 1; i < 10000; i++) {
    number.push(i * i);
}
console.log(number);

let numbers2 = [3,6,8,20,35,60,75,95];
let sum = 0;
for (let i = 0; i < numbers2. length; i++) {
    sum = sum + numbers2 [i];
    console. log (sum);
}

const getEvenOrOdd = (number3) => {
    if (number3 %2 === 0) {
        return "true";
    } else{
        return "false";
    };
};
console. log (getEvenOrOdd(4));
console. log (getEvenOrOdd(5));

