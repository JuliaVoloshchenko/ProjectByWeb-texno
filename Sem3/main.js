// Задача 2: Получить от пользователя два числа и вывести в диалоговое окно сумму значений, 
// которые ввел пользователь, вывод должен выглядеть так (пример): Результат сложения 
// чисел 5 и 2 равен 7.

// const num1 = Number.parseInt(prompt("Введите число"));
// const num2 = +prompt("Введите число");
// alert(`результат сложения ${num1} и ${num2} равен ${num1 + num2}`);

// function sum(a,b){
//     return a + b;
// }

// Задача 4: вывести на экран в диалоговом окне текст с сообщением “Вам хорошо живется?”и 
// кнопками «ОК», «Отмена», для чего необходимо использовать confirm.- При нажатии на кнопку
//  “ОК” вывести в диалоговом окне текст с сообщением “Тогда мы идем к вам!”.- При нажатии
//   на кнопку “Отмена” вывести в диалоговом окне текст с сообщением “Ну вы держитесь там!”.
// const agreement = confirm("Вам хорошо живется?");
// if (agreement){
//     alert("Тогда мы идем к вам!");
// }
// else{
//     alert("Ну вы держитесь там!");
// }

// Задача 5: перепишите код, используя переключатель case, запрося продукт через диалоговое окно.


// const product = prompt("Введите продукт:").toLowerCase();

// switch(product) {
//     case 'мандарины':
//         alert('Мандарины стоят 100 руб/кг.');
//         break;
//     case 'бананы':
//     case 'груши':
//         alert('Бананы и груши стоят 70 руб/кг.');
//         break;
//     default:
//         alert('Нет такого продукта.');
// }

// Функция getMaxEvenElement массива с увеличенными числами, необходимо 
// реализация так, чтобы она возвращала размер большого массива, 
// который измеряет в четном индексе, включая 0.
 

// function getMaxEvenElement(arr) {
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i += 2) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max
// }  

// console.log(getMaxEvenElement([5, 7, -1, 12, 3, 0])); // 5
// console.log(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50])); // 31

// Задача с реального собеседования.
// Один покупатель старинных уникальных часов хочет приобрести для музея 
// двое часов. В магазине у хозяйки есть n разных часов с соответствующими 
// ценами [p1, ..., pn]. Покупатель хочет полностью использовать свой 
// бюджет. Необходимо выяснить получится ли это.

function f(clockArr, money) {
    for(let i = 0; i < clockArr.length-1; i++){
        for (let j = i+1; j < clockArr.length-1; j++){
            if(Math.floor((clockArr[i]+clockArr[j])*100)/100 == money){
            return true
            }
        }
    } return false
}
 
console.log(f([8.74, 3.12, 9.50, 2.35], 2.35)); // false
console.log(f([1.1, 4.2, 7.5, 0.4], 8.4)); // false
console.log(f([54.10, 20.00, 18.51, 97.75, 35.20, 76.42], 89.3)); // true