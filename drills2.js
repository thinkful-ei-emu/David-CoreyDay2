/* eslint-disable no-console */
'use strict';

function repeat(fn,n){
  for(let i=0; i < n; i++){
    fn();
  }
}

function hello(){
  console.log('Hello world');
}

function goodbye(){
  console.log('Goodbye world');
}

repeat(hello, 5);
repeat(goodbye, 5);
///////


function filter(arry, fn) {
  let newarray= [];
  for(let x =0;x<arry.length;x++){
    console.log(fn(arry[x]));
    if(fn(arry[x])){
      newarray.push(arry[x]);
    }
  }
  return newarray;
  // TASK: Define your function here
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES
/////
console.log(filter(['Rich', 'Joe', 'Bhaumik', 'Ray'],(name)=>{
  return name.length >= 4;
}));

/////////////////////

function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0;

  return (location) => {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
  };
}

const snowWarning = hazardWarningCreator('Snowfall to be more than 1 foot');
const rockWarning = hazardWarningCreator('Rocks on the road');
const heatWarning = hazardWarningCreator('Heat index over 9000');

snowWarning('Main St and Pacfic Ave');
snowWarning('South end Main street');
snowWarning('Sleater Kinny and 4th Ave');

///////////////////

