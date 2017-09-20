// Task 3.4.3

const avg = (...args) =>  args.reduceRight((a,b) => a + b)/args.length;

console.log(avg(1,2,3,4));
console.log(avg(4,3,2,1));
console.log(avg(4));
console.log(avg(0));
