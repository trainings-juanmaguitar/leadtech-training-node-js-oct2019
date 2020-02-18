function f(){
  var b = "b";
  var c = function(){
    return b;
  }
  return c
}


function f(){
  var b = "b";
  return function(){
    return b;
  }
}

var a = f()
a() // "b"

function a(){
  return b;
}
