/* eslint-disable no-console */
'use strict';
let log = (msg)=> console.log(msg);
var testArray = [1,2,3,23,4,5,6];
function max(numbers){
  let big;
  let x = 0;
  big = numbers[0];
  while (x < numbers.length){
    if(numbers[x] > big){
      big = numbers[x];
    }
    x++;
  }
  return big;
}
console.log(max([1,2,3,23,4,5]));

function min(numbers){
  let small;
  let x = 0;
  small = numbers[0];
  while (x < numbers.length){
    if(numbers[x] < small){
      small = numbers[x];
    }
    x++;
  }
  return small;
}
console.log(min([1,2,3,23,4,5]));

function average(numbers){
  let total=0;
  numbers.forEach((element) =>  total += element);
  return total/numbers.length;

}
//
console.log(average(testArray));

// 3/'fizz'
// 5/'buzz'

function fizzBuzz(countTo){
  let arry = [];
  
  for(let i=0; i < countTo; i++){
    arry[i] = i+1;
  }
  arry.forEach(function(element){
    if(element % 3 === 0 && element % 5 === 0){
      arry[element-1] = 'fizzbuzz';
    }else if(element % 3 === 0){
      arry[element-1]= 'fizz';
    }
    else if(element % 5 === 0){
      arry[element-1] = 'buzz';
    }
  });
  return arry.toString();
}
log(fizzBuzz(15));