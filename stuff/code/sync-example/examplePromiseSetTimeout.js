var promise1 = new Promise(function(resolve) {
  setTimeout(function() {
    resolve(+new Date());
  }, 1000);
});

console.log("breakpoint 1")

promise1.then(console.log)