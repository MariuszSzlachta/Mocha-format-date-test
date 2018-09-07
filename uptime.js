const os = require('os');
const formatDate = require('.');

const uptime = formatDate(os.uptime());

console.log(`Current uptime is: ${uptime}`);