const task1 = function(a, b, c) {
  a = a + 1;
  b = b + 2;
  c = c + 3;
return a * b + c;
};

//2 A function that takes no arguments and returns something 
const task2 = function(){
  return 25;
};



//3 A function that takes arguments, does something but does not return anything

const task3 = function (a, b){
  var c = a + b;
};

//4

const task4 = function (string1, string2, string3) {
  if (string1.length > string2.length && string1.length > string3.length) {
    return string1;
  } else if (string2.length > string3.length && sttring.length2 > string1.length){
    return string2;
  } else {
    return string3;
  }
};

//5

const task5 = function (a, b) {
  if (a === b) {
    return 0;
  }else if (a > b){
    return 1;
  }else {
    return -1;
  }
};

//6

const multiply = function(a, b) {
  return a * b;
};

//7

const devision = function(a, b) {
  return a / b;
};

//8
const triangleArea = function(base, height) {
  console.log(devision(multiply(base,height),2));
};

//9
const numLength = function (a){
const z = "" + a;
return z;
};

//10

const task10 = function (string1, string2, number1){
  if ((string1 + string2).length > number1){
    return 1;
  }else{
    return -1;
  }
}

//11
const runStaff = function (number1, number2, string1)
{
  if (string1 === 'rectangle'){
  return (number1 * number2);
}
else if(string1 === 'triangle'){
  return (number1 * number2 / 2);
  }
  else{
    return -1;
  }
}

//task1
console.log(task1(5, 6, 7));
//task2
console.log(task2());
//task3
console.log(task3());
//task4
console.log(task4('programming', 'dog', 'guitar'));
//task5
console.log (task5 (5, 6));
//multioply
console.log(multiply(2,5));
//devision
console.log(devision(12,2));
//Triangle Area
console.log(devision(multiply(8,4),2));
//task9
console.log(numLength.length);
//task10
console.log (task10('apple','piano', 6));
//task11
console.log(runStaff(5, 8, 'triangle'));