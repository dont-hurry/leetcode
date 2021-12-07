/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function (digits) {
  let digitCount = new Array(10).fill(0);
  for (let digit of digits) digitCount[digit]++;

  let result = [];
  for (let num = 100; num <= 999; num += 2) {
    let requiredDigitCount = new Array(10).fill(0);

    let ones = num % 10;
    let tens = Math.floor(num / 10) % 10;
    let hundreds = Math.floor(num / 100);

    requiredDigitCount[ones]++;
    requiredDigitCount[tens]++;
    requiredDigitCount[hundreds]++;

    if (isDigitEnough(digitCount, requiredDigitCount)) result.push(num);
  }

  return result;
};

function isDigitEnough(digitCount, requiredDigitCount) {
  for (let i = 0; i < 10; i++) {
    if (digitCount[i] < requiredDigitCount[i]) return false;
  }
  return true;
}
