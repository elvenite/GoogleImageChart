var Chart = require('../GoogleImageChart.js');

var c = new Chart();
c.setData([3,2,1,2,3]);

console.log(c.generate());

process.exit();