var a = 10;
var b = 12;
console.log('Before Swap a = ', a ,'b = ',b);
var temp = a;
a = b; 
b = temp;
console.log('After swap a = ', a , 'b = ',b);

var x = 15;
var  y = 20;
x = x + y;
y = x - y;
x = x - y;

console.log('After swap x = ', x , 'y = ',y);

var p = 2;
var q = 4;
[p,q] = [q,p];
console.log('After swap p = ', p , 'q = ',q);
