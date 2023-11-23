// //Масиви та об'єкти

// //1 Завдання

let array = [10, true, false, "name", "okten", 2023, 2222, "lecture", "object", "Home work", 112233];
// //          0    1     2       3        4       5     6      7          8           9         10

console.log(array)

//2 Завдання

let object1 = {
    title: 1984,
    pageCount: 315,
    genre: "world classic"
}

//3 Завдання

let object2 = {
    title: "mastering professional scrum",
    pageCount: 224,
    genre: "tutorial",
    authors: [
        { name: "Simon Reindle", age: 40 },
        { name: "Stephanie Aukerman", age: 45 }
    ]
};

//4 Завдання

let users = [
    { name: "Artem", username: "Marchenko", password: "123987" },
    { name: "Sergiy", username: "Melnyk", password: "11111" },
    { name: "Andriy", username: "Shevchenko", password: "12222" },
    { name: "Oleksandr", username: "Zinchenko", password: "133333" },
    { name: "Artem", username: "Dovbyk", password: "144444" },
    { name: "Viktor", username: "Tsygankov", password: "166666" },
    { name: "Anatoliy", username: "Trubin", password: "551515" },
    { name: "Mykhaylo", username: "Mudryk", password: "177777" },
    { name: "Viktor", username: "Kovalenko", password: "188888" },
    { name: "Vitaliy", username: "Mykolenko", password: "199999" }
]

console.log("Пароль користувача:", " ", users[0]["password"]);
console.log("Пароль користувача:", " ", users[1]["password"]);
console.log("Пароль користувача:", " ", users[2]["password"]);
console.log("Пароль користувача:", " ", users[3]["password"]);
console.log("Пароль користувача:", " ", users[4]["password"]);
console.log("Пароль користувача:", " ", users[5]["password"]);
console.log("Пароль користувача:", " ", users[6]["password"]);
console.log("Пароль користувача:", " ", users[7]["password"]);
console.log("Пароль користувача:", " ", users[8]["password"]);
console.log("Пароль користувача:", " ", users[9]["password"]);


//Логічні розгалуження

//1 Завдання

let x = 1;

if (x !== 0) {
    console.log('Вірно x');
} else {
    console.log('Невірно x');
}

let a = 0;

if (a !== 0) {
    console.log('Вірно a');
} else {
    console.log('Невірно a');
}

let b = -3;

if (b !== 0) {
    console.log('Вірно b');
} else {
    console.log('Невірно b');
}

//2 Завдання

let time = 27;
let quarter;

if (time >= 0 && time <= 14) {
    quarter = 1;
} else if (time >= 15 && time <= 29) {
    quarter = 2;
} else if (time >= 30 && time <= 44) {
    quarter = 3;
} else if (time >= 45 && time <= 59) {
    quarter = 4;
} else {
    console.log('Невірне значення часу');
}
console.log('Четверть години:', quarter);


//3 Завдання

let day = 27;
let decade;

if (day >= 1 && day <= 10) {
    decade = 1;
} else if (day >= 11 && day <= 20) {
    decade = 2;
} else if (day >= 21 && day <= 31) {
    decade = 3;
} else {
    console.log("Перепрошую, але ви щось вказали невірно");
}

console.log("Половина місяця:", decade);

// 4 Завдання
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let days = prompt("Введи порядковий номер дня тижня:")

switch (days) {
    case "1":
        console.log("Monday");
        break;
    case "2":
        console.log("Tuesday");
        break;
    case "3":
        console.log("Wednesday");
        break;
    case "4":
        console.log("Thursday");
        break;
    case "5":
        console.log("Friday");
        break;
    case "6":
        console.log("Saturday");
        break;
    case "7":
        console.log("Sunday");
        break;
    default:
        console.log("Введи правильний порядковий номер дня тижня від 1-7:")

}

// 5 Завдання
var number1 = prompt("Введіть перше число:");
var number2 = prompt("Введіть друге число:");

if (number1 > number2) {
    console.log("Максимальне число: " + number1);
} else if (number1 < number2) {
    console.log("Максимальне число: " + number2);
} else {
    console.log("Числа рівні");
}



//6 Завдання

let q = prompt("q = ");
if (q === false || q === 0 || q === "" || q === undefined || q == null) {
    q = "default";
}
console.log(q)







// 7 Завдання

let coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];

if (coursesAndDurationArray[0]["monthDuration"] >= 5) {
    console.log("Super")
} else {
    console.log("not supper")
}
if (coursesAndDurationArray[1]["monthDuration"] >= 5) {
    console.log("Super")
} else {
    console.log("not supper")
}
if (coursesAndDurationArray[2]["monthDuration"] >= 5) {
    console.log("Super")
} else {
    console.log("not supper")
}
if (coursesAndDurationArray[3]["monthDuration"] >= 5) {
    console.log("super")
} else {
    console.log("not supper")
}
if (coursesAndDurationArray[4]["monthDuration"] >= 5) {
    console.log("super")
} else {
    console.log("not supper")
}
if (coursesAndDurationArray[5]["monthDuration"] >= 5) {
    console.log("super")
} else {
    console.log("not supper")
}