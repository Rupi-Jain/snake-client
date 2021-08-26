const net = require("net");
const { IP, PORT } = require("./constants");

//establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT// PORT number here,
  });
// interpret incoming data as text
  conn.setEncoding("utf8");
  //messgae after connection to the server has been established
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: Rup");
  })
  // interpret incoming data from server as text
  conn.on("data", (data) => {
    console.log(data);
  })

  return conn;
};
module.exports = {
  connect
}