// use npm package
const champions = require('lol-champions');

// use own module // same #include
const operation = require('./operations');
console.log('***** CHAMPIONS', champions);
console.log(operation.sum(5, 2));