const lodash=require('lodash');
const arr=[1,[2,[3,[4]]]];
const arr1=lodash.flattenDeep(arr);
console.log(arr1);