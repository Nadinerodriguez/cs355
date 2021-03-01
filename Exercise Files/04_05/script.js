var a = 5/7;
var b = 18/25;

var theBiggest = function(a,b) {
  var result;
  a>b ? result = ["a", a] : result = ["b", b];
  return(result);
}

console.log(theBiggest(7/9,13/25));
