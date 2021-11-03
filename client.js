const net = require("net");;
const name = "TLK"
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541',
  });
 
  conn.on("connect", () => {
    console.log("Successfully connected to game server!")
    conn.write(`Name: ${name}`);
  });

  conn.setEncoding("utf8");
  return conn;
};

console.log("Connecting ...");
connect();
module.exports = {connect};