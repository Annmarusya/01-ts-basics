function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const numResult = getFirstElement<number>([1, 2, 3]);     // 1
const strResult = getFirstElement<string>(["a", "b", "c"]);     // "a"
const boolResult = getFirstElement<boolean>([true, false, true]); // true

console.log(numResult);
console.log(strResult);
console.log(boolResult);
// Завдання:

// Зроби функцію узагальненою, використовуючи тип T, щоб вона працювала з масивами будь-якого типу.
// Додай явну типізацію дженериків у виклики функцій.
// Переконайся, що тип елемента, який повертається, точно відповідає типу елементів у масиві.
// Перевір, що TypeScript не дозволяє передати масив змішаних типів без відповідного типу.