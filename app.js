const math=require('./module1.js');
console.log(math.add(1,2));
console.log(math.sub(3,2));
const {add,sub}=require('./module1.js');
console.log(add(1,2));
console.log(sub(3,2));
const main=require('./module2');
console.log(main.add(1,2));
console.log(main.sub(3,2));
const {add,sub}=require('./module2');
console.log(add(1,2));
console.log(sub(3,2));

