//Nathan Keene
//Code Challenge JS-1

//set two arrays of equal length containing only numbers
var x = [1, 2, 3];
var y = [10, 10, -4];
var r = addArrays(x, y);

//sum the arrays index by index
function addArrays(x,y) {
  for (i = 0; i < 3; i ++) {
    var sums = (x[i] + y[i]);
  }
  return sums;
};

console.log(r);
