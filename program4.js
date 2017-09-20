// Task 3.4.4

const avg = (...args) =>  args.reduceRight((a,b) => a + b)/args.length;  // Task 3.4.3

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
const gradesAvg = avg(...grades);
console.log(gradesAvg);