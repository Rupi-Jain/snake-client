const { mapping } = require('./constants')
let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
 
  if (key === '\u0003') {
    process.exit();    
  }
  if (mapping.hasOwnProperty(key)) {
    connection.write(mapping[key]);
  }
}

module.exports = {
  setupInput
}