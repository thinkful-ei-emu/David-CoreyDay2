/* eslint-disable no-console */
'use strict';

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
