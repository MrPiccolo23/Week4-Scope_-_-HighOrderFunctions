// let whichGreeting = (timeofDay) => {
//   console.log(`Good ${timeofDay}`)
// }

// let greet = (time, fn) => {
//   if (time <12){
//     fn("Morning")
//   } else if (time > 12 && time < 18){
//     fn("Afternoon")
//   } else {
//     fn ("Evening")
//   }
// }

// greet(14, whichGreeting)

// let myFunction = () => {
//   return () =>{
//     console.log("hello")
//   }
// }
// console.log(myFunction())

// challenge 1
for (let counter = 1; counter <= 5; counter++) 
{
console.log("Hello Code Nation");
}

const func1 = () => {
    return ("Hello Code Nation!")
}

const repeat = (fn) => {
    for (i = 0; i < 5; i++) {
        console.log(fn)
    }
}

repeat(func1())

// challenge 2

let score = (num1,num2) => {
    return (num1 + num2)
};

let skill = (num1,num2,time,fn) => {
    let numberTotal = 0
    for (i = 0; i <(time); i++) {
        numberTotal = (fn(num1,num2) + numberTotal) }
    console.log(numberTotal)
};

skill(2,3,4,score)

// challenge 3

let array = [1, 2, 3, 4, 5];

let modifiedArray = array.map(function(element){
    return element *3;
});

console.log(modifiedArray);


// challenge 4

const multiply = (a,b) => {
    return a*b
};

const add = (a,b) => {
    return a+b
};

const divide = (a,b) => {
    return a/b
};

const subtract = (a,b) => {
    return a-b
};

const doMath = (num1) => {
    return (num2, fn) => {
        return fn(num1,num2)
    }
}

console.log(doMath(12)(11,divide));