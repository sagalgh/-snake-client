const {connect} = require("./client");
// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};
const handleUserInput = function () {
  if (key === '\u0003') {
    process.exit();
  }
};

setupInput()
console.log("Connecting ...");
connect();