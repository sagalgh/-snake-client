const { connect } = require("./client");

// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
//the stdin object returned by setupInput will allow us 
//to listen for keyboard input and react to it.
const setupInput = function (conn) {
  connection=conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
//handleUserInput checks user input 
// and for the ctrl + c input to terminate the game
const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === "w"){
    connection.write("Move: up");
  }
  if (key === "a"){
    connection.write("Move: left");
  }
  if (key === "s"){
    connection.write("Move: down");
  }
  if (key === "d"){
    connection.write("Move: right");
  }
  if (key ==="m"){
    connection.write("Say: We got this!");
  }
  if (key ==="s"){
    connection.write ("Say: Si se puede!")
  }
  if (key ==="t"){
    connection.write ("Say: Haa, waan awoodnaa")
  }
};



module.exports = {setupInput}