const net = require("net");

//establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',// IP address here,
    port: 50542// PORT number here,
  });
// interpret incoming data as text
  conn.setEncoding("utf8");
  //messgae after connection to the server has been established
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: Rup");
  })

  conn.on('connect' , () => {
    setInterval( () => {
      conn.write("Move: right");    
    }, 1000)
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