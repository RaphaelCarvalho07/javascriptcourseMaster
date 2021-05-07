/* ****************************************
* Variable and data types
*/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';
var if = 23;
*/

/*****************************************
* Variable mutation and types coercion
*/

/*var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';



alert(firstName + ' is a ' + age + ' year old ' +
job + '. Is he married? ' + isMarried);

var lastName = prompt('what is his last name?');
console.log(firstName + ' ' + lastName);
*/

/*********************************************
* Basic operators
*/

// Math operators
/*
var now, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;
var yearJohn = now - ageJohn;
var yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);



// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// type of operators
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);






/*****************************************
 * Operator precedence
 */

/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var avarage = (ageJohn + ageMark) / 2;
console.log(avarage);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6 // 8 * 4 -6 // 32 - 6 // 26
console.log(x, y);

// More operators
x *= 2; // é o mesmo que x = x*2
console.log(x);
x += 10; // é o mesmo que x = x + 10
console.log(x);
x ++; // é o mesmo que x = x + 1
console.log(x);
*/

/***********************************************
 * Coding challenge 1
 */
/* var massMark, heightMark, markBMI, massJohn, heightJohn, johnBMI;

massMark = 70;
heightMark = 1.80;
massJohn = 90;
heightJohn = 1.90;

markBMI = massMark / (heightMark * heightMark);
console.log(markBMI);

johnBMI = massJohn / (heightJohn * heightJohn);
console.log(johnBMI);

higherBMI = markBMI >= johnBMI;
console.log('is Mark\'s BMI higher than John\'s BMI?' + higherBMI);
*/

/**************************************************************
 * if / else statements
*/

/*var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}


var massMark = 70;
var heightMark = 1.80;

var massJohn = 90;
var heightJohn = 1.90;

BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
    console.log('Mark\'s BMI is higher than John\'s BMI');
} else {
    console.log('John\'s BMI is higher than Mark\'s BMI');
}*/
















/*********************************************
 * Boolean logic
 */

/*var firstName = 'John';
var age = 16;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}
*/



/*************************************
 * The Ternary Operator and Switch Statements
 */

/* var firstName = 'John';
var age = 22;

// Ternary Operator
age >= 18 ? console.log(firstName + ' drinks beer.')
    : console.log(firstName + ' drinks juice.')

var drink = age >= 18 ? 'beer' : 'juice'; */

/*if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}*/

// Switch Statement
/*var job = 'teacher';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' desigs beautiful websites.');;
        break;
    default:
        console.log(firstName + ' does something else.');
}*/


/*age = 56
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}*/



/*****************************
 * Truthy and Falsy values equality operators
 */

// falsy values: undefined, null, 0, 'emptyString', NaN 
// truthy values: NOT falsy values

// var height;

// height = 23;

// if (height || height === 0) {
//     console.log('Variable is defined');
// } else {
//     console.log('Variable has NOT been defined');
// }

// // Equality operators
// if (height == '23')  {
//     console.log('The == operator does type coercion.')
// } else {
//     console.log('The === operator does not type coercion.')
// }


/****************************************************************************
 * Coding Chalenge 2 - My Solution
 */

/*  var johnTeamScore1, johnTeamScore2, johnTeamScore3, johnTeamAVG, mikeTeamScore1, mikeTeamScore2, mikeTeamScore3, mikeTeamAVG, maryTeamScore1, maryTeamScore2, maryTeamScore3, maryTeamAVG

johnTeamScore1 = 89;
johnTeamScore2 = 120;
johnTeamScore3 = 103;
mikeTeamScore1 = 116;
mikeTeamScore2 = 94;
mikeTeamScore3 = 123;
maryTeamScore1 = 97;
maryTeamScore2 = 134;
maryTeamScore3 = 105;
johnTeamAVG = (johnTeamScore1 + johnTeamScore2 + johnTeamScore3) / 3;
console.log ('media do time da john é ' + johnTeamAVG)
mikeTeamAVG = (mikeTeamScore1 + mikeTeamScore2 + mikeTeamScore3) / 3;
console.log ('media do time da mike é ' + mikeTeamAVG)
maryTeamAVG = (maryTeamScore1 + maryTeamScore2 + maryTeamScore3) / 3;
console.log ('media do time da mary é ' + maryTeamAVG)

if (johnTeamAVG > mikeTeamAVG && johnTeamAVG > maryTeamAVG) {
    console.log('O time com maior média de pontos é o....Time do John com uma média de ' + johnTeamAVG)
}
else if (johnTeamAVG < mikeTeamAVG && maryTeamAVG < mikeTeamAVG) {
    console.log('O time com maior média de pontos é o....Time do Mike com uma média de ' + mikeTeamAVG)
}
else if (mikeTeamAVG > johnTeamAVG && maryTeamAVG > mikeTeamAVG) {
    console.log('O time com maior média de pontos é o....Time da Mary com uma média de ' + maryTeamAVG)
}
else {
    console.log('Senhoras e senhores, acreditem ou não, houve um empate técnico')
} */

/*******************************************************
 * Coding Chalenge 2 - Teacher's Solution
 */

/* var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
}
else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
}
else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary\'s team wins with ' + scoreMary + ' points');
}
else {
    console.log('There is a draw');
} */

/* if (scoreJohn > scoreMike) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
}
else if (scoreMike > scoreJohn) {
   console.log('Mike\'s team wins with ' + scoreMike + ' points');
}
else  {
   console.log('There is a draw');
} */


/*********************************************************************
* Functions
*/

/* function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    }
    else {
        console.log(firstName + ' is already retired.');
    }
}

yearUntilRetirement(1990, 'John');
yearUntilRetirement(1948, 'Mike');
yearUntilRetirement(1969, 'Jane'); */



/*********************************************************************
* Function Statements and Expressions
*/

// Function declaration
// function whatDoYouDo(job, firstName) {}

// Function expression

/* var whatDoYouDo = function (job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a car in Lisbon';
        case 'designer':
            return firstName + ' designs a beautiful websites';
        default:
            return firstName + ' does something else';    
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
 */




/************************************************
 * Arrays
 */

//   Initialize new array
/* var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate arrays data
names[1] = 'Ben';
// adiciona posição do array
names[names.length] = 'Mary';
console.log(names)

// Different data types
var john = ['John', 'Smith', 1990, 'designer', false];

// método .push, adiciona na última posição do array
john.push('blue');

// método .unshift, adiciona na primeira posição do array
john.unshift('Mr.');
console.log(john);

// método .pop, remove da última posição do array
john.pop();
john.pop();

// método .shift remove da primeira posição do array
john.shift()
console.log(john);

// método indexOF retorna a posição do argumento passado. Senão não existir
// o elemento passado, ele retorna -1. É muito útil para descobrir se existe
// determinado elemento dentro do array ou não
console.log(john.indexOf(23));

// Operador ternário.
var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer'
: 'John IS a designer';
console.log(isDesigner);
 */



/***********************************************
* Coding challenge 3 - My solution
*/

/*
var tipsAmount = [], finalPaidAmount = [];
var tip, finalAmount;
function tipCalculator(bill) {
    if (bill < 50) {
        tip = bill * 0.2
        tipsAmount.push(tip)
    }
    else if (bill >= 50 && bill <= 200) {
        tip = bill * 0.15
        tipsAmount.push(tip)
    }
    else {
        tip = bill * 0.1
        tipsAmount.push(tip)
    }
    return tip
}

var calculateFinalBill = function (bill) {

    var finalAmount = bill + tipCalculator(bill)
    finalPaidAmount.push(finalAmount)
    return finalAmount
}

calculateFinalBill(124), calculateFinalBill(48), calculateFinalBill(268) 
console.log('As três tip\s são: ' + tipsAmount + ' e os valores finais das contas sâo: ' 
+ finalPaidAmount)
*/

/*******************************************************
 * Coding Chalenge 3 - Teacher's Solution
 */

/* function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    }
    else if (bill >= 50 && bill <= 200) {
        percentage = .15;
    }
    else {
        percentage = .1;
    }
    return percentage * bill;
 }

 var bills = [124, 48, 268];
 var tips = [tipCalculator(bills[0]),
             tipCalculator(bills[1]),
             tipCalculator(bills[2])]
 var finalValues = [bills[0] + tips[0],
                    bills[1] + tips[1],
                    bills[2] + tips[2]]            
 console.log(tips, finalValues)
 */

/****************************
* Objects and properties
 */

//  Object literal
/* var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear'
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john)

// new Object syntax
var jane = new Object()
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane)
 */

/*******************************************************
 * Objects and methods
 */

/* var john = {
   firstName: 'John',
   lastName: 'Smith',
   birthYear: 1990,
   family: ['Jane', 'Mark', 'Bob', 'Emily'],
   job: 'teacher',
   isMarried: false,
   calcAge: function() {
       this.age =  2018 - this.birthYear;
   }
};


john.calcAge()
console.log(john) */

/***********************************************
* Coding challenge 4 - My solution
*/

/* var john = {
    fullName: 'John Smith',
    mass: 75,
    height: 1.85,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
    }
};

var mark = {
    fullName: 'Mark Smith',
    mass: 85,
    height: 1.90,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
    }
};
var whoHasHigherBMI = function () {
    if (john.bmi > mark.bmi) {
        return console.log(`${john.fullName} tem o maior BMI, com: ${john.bmi}`)
    }
    else if (mark.bmi > john.bmi) {
        return console.log(`${mark.fullName} tem o maior BMI, com: ${mark.bmi}`)
    }
    else {
        return console.log(`John e Mark tem o mesmo BMI, com: ${john.bmi}`)
    }
}

john.calcBMI()
mark.calcBMI()
console.log(john.bmi, mark.bmi)
whoHasHigherBMI() */

/*******************************************************
 * Coding Chalenge 4 - Teacher's Solution
 */

/* var john = {
    fullName: 'John Smith',
    mass: 110,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi;
    }
};

var mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi;
    }
};

if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
}
else if (mark.bmi > john.bmi) {
    console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
}
else {
    console.log('They have the same BMI')
} */


/**************************************************************************
* loops and iteractions
*/

//  for loop
/* for (var i = 1; i <= 20; i++) {
    console.log(i)
} */
// i = 0, 0 < 10 true, log i to console, i++ (o mesmo que i = i + 1)
// i = 1, 1 < 10 true, log i to console, i++
// ...
// i = 9, 9 < 10 true, log i to console, i++
// i = 10, 10 < 0 FALSE, exit the loop

/* var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

// While loop
var i = 0
while(i < john.length) {
    console.log(john[i]);
    i++;
} */

// continue and break statements

/* var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

// Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
} */


/*******************************************************
 * Coding Chalenge 5 - My Solution
 */

 /*
var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function () {
        this.tips = [];
        this.finalValues = [];

        for (i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = .2
            }
            else if (bill >= 50 && bill <= 200) {
                percentage = .15
            }
            else {
                percentage = .1
            }
            // Add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}
var mark = {
    fullName: 'Mark Miller',
    bills: [77, 375, 110, 45],
    calcTips: function () {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if (bill < 100) {
                percentage = .2
            }
            else if (bill >= 100 && bill <= 300) {
                percentage = .1
            }
            else {
                percentage = .25
            }
            // Add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

function calcAverage(tips) {
    var sum = 0
    for (i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length
}


// do the calculations

john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips)
mark.average = calcAverage(mark.tips);
console.log(john, mark)

if (john.average > mark.average) {
    console.log(`John's family paid the highest average with, $$${john.average}`)
}
else if (mark.average > john.average) {
    console.log(`Marks's family paid the highest average, with $$${mark.average}`)
}
else {
    console.log(`They have the same average, with $$${john.average}`)
}
*/

/*******************************************************
 * Coding Chalenge 5 - Teacher's solution
 */

/*
var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function () {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = 0.2;
            }
            else if (bill >= 50 && bill < 200) {
                percentage = .15;
            }
            else {
                percentage = .1;
            }

            // Add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

var mark = {
    fullName: 'Mark Miller',
    bills: [77, 375, 110, 45],
    calcTips: function () {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if (bill < 100) {
                percentage = 0.2;
            }
            else if (bill >= 100 && bill < 300) {
                percentage = .1;
            }
            else {
                percentage = .25;
            }

            // Add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

function calcAverage(tips) {
    var sum = 0
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length
}

// do the calculations
john.calcTips();
mark.calcTips();


john.average = calcAverage(john.tips)
mark.average = calcAverage(mark.tips);
console.log(john, mark)

if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips, with an average of $' +
        john.average)
}
else if (mark.average > john.average) {
    console.log(mark.fullName + '\'s family pays higher tips, with an average of $' +
    mark.average)
}
else {
    console.log(`They have the same average, with $${mark.average}`)
}
*/

