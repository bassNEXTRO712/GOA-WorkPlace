// chashenebuli modulebia events, os ....

// 1) ამჟამინდელი ფაილის სახელი
console.log('Current file name:', process.argv[1]);

// 2) Node.js-ის ამჟამინდელი ვერსია
console.log('Node.js version:', process.version);


const math = require ('./mathUtils.js');

console.log(math.add(5,10));

console.log(math.multiplay(5,10));