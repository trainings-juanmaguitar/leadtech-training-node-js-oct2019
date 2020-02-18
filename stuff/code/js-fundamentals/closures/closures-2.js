function f(){
  var b = "b";
  return function(){
    return b;
  }
}
 

function(){ return b; }
>>> b
b is not defined
>>> var n = f();
>>> n();
"b"