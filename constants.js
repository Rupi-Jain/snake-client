const IP =  '135.23.223.133'// IP address here,
const PORT = 50542// PORT number here,
const mapping = {
  '\u0077': 'Move: up',
  '\u0061': 'Move: left',
  '\u0073': 'Move: down',
  '\u0064': 'Move: right',
  '\u0071': 'Say: Hey'
}

module.exports = {
  IP,
  PORT,
  mapping
};