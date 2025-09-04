// name start
var name = prompt("Введите своё имя");
console.log("Меня зовут " + name);
// name end

//age start 
var age = prompt("Сколько вам лет?");
console.log("Мне " + age + " лет");
// age end

// examples start
let answer1 = +prompt("Решите пример 6 + 3")
console.log("Пример 1: " + "6 + 3 = " + (6 + 3) + " Ваш ответ: " + answer1);
let answer2 = +prompt("Решите пример 20 - 5")
console.log("Пример 2: " + "20 - 5 = " + (20 - 5) + " Ваш ответ: " + answer2);
let answer3 = +prompt("Решите пример 15 * 2")
console.log("Пример 3: " + "15 * 2 = " + (15 * 2) + " Ваш ответ: " + answer3);
let answer4 = +prompt("Решите пример 8 / 4")
console.log("Пример 4: " + "8 / 4 = " + (8 / 4) + " Ваш ответ: " + answer4);
let answer5 = +prompt("Решите пример 10 % 3")
console.log("Пример 5: " + "10 % 3 = " + (10 % 3) + " Ваш ответ: " + answer5);
confirm("Зайдите в консоль для просмотра")
// examples end

// numbers start

var X = +prompt("Введите первое число")
var Y = +prompt("Введите второе число")
var Z = +prompt("Введите третье число")
var res = (X + Y + Z) / 3;
alert("Ваше среднее арифметическое значение чисел цифра " + res)
// numbers end