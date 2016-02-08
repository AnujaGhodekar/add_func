function add() {
  var sum = Array.prototype.reduce.call(arguments, function(a, b) {
    return a + b
  }, 0);

  var fn = function() {
    var addend = Array.prototype.reduce.call(arguments, function(a, b) {
      return a + b
    }, 0);
    return add(sum + addend);
  };

  fn.valueOf = function() {
    return sum;
  };

  return fn;
}

