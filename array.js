//write a program that prints all the even numbers in an array
let arr = [2, 3, 4, 5, 6, 7, 8, 12, 14, 15, 16, 18];
let numbers = arr.length;

for (let i = 0; i < numbers; i++) {
  if (arr[i] % 2 == 0) {
    console.log(arr[i]);
  }
}
