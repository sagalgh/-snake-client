const net = require("net");;
const name = "SHG"
const up = "Move: up"
const down = "Move: down"
const left = "Move: left"
const right = "Move: right"

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541',
  });
    conn.write(`Name: ${name}`);
    //setTimeout used to change the position of snake at diff intervals
    // setTimeout(() => {conn.write(up);}, 300);
    // setTimeout(() => {conn.write(down);}, 500)
    // setTimeout(() => {conn.write(right);}, 700)
    // setTimeout(() => {conn.write(left);}, 900)
    conn.on("connect", () => {
      console.log("Successfully connected to game server!")
  });
  conn.setEncoding("utf8");
  return conn;
};

console.log("Connecting ...");
connect();
module.exports = {connect};

// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)