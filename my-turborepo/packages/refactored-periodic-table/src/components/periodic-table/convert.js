
var fs = require('fs');

var data = fs.readFileSync('elements.csv')
    .toString() // convert Buffer to string
    .split('\n') // split string to lines
    .map(e => e.trim()) // remove white spaces for each line
    .map(e => e.split(',').map(e => e.trim())); // split each line to array

var keys = data.shift();
console.log(keys);


data = data.map(row=>{
  var map = {};
  for(var i = 0; i < row.length; i++) {
    map[keys[i]] = row[i]
  }
  return map;
});
fs.writeFileSync('elements.json', JSON.stringify(data, null, 2))
