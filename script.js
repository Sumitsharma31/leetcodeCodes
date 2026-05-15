// function  checkDisarium(num) {
//   const digits = Array.from(String(num), Number);
//   let count=0;
//   for (let i = 1; i <= digits.length; i++) {


//     count+= Number(digits[i-1])**i

//   }
// // console.log(digits);

//  return count==num?"true":"false"
// }
// let num = 175;

// let result = checkDisarium(num);
// console.log(result);



// Reverse Words in a String

// function reverseWord(s) {
//  let arr = s.split(" ")
//   filterArr = arr.filter(item => item !== '');
//   string = filterArr.reverse()
//   reverseStr = string.join(" ")
//   return reverseStr;

// }
// let str = "A Good  Example";
// let result = reverseWord(str)
// console.log(result);



// 2784. Check if Array is Good

const nums = [1, 1]
// const nums = [3, 4, 4, 1, 2, 1]
// const nums = [1, 3, 3, 2]
// const nums = [2, 1, 3]
function arrFunc(numbers) {
  console.log(numbers);

  // shorting the array elements
  const arrShorted = numbers.sort(function (a, b) { return a - b });
  console.log(arrShorted);

  // to find max element of array
  const max = Math.max(...numbers)
  console.log(max);
  if (arrShorted.length == max + 1) {

    if (arrShorted[max] == max) {
      return true;
    }
    return false

  }
  else {
    return false;
  }


}
let result = arrFunc(nums);
console.log(result);

