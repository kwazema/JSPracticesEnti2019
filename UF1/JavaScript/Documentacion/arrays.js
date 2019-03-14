const a = [ 1, 2, 3];
console.log("Array: ", a);

a.push(4, 5, 6);
console.log("Array: ", a);

a.pop();
console.log("Array: ", a);

const b = [ 'a', 'b', 'c'];

const c = a.concat(b);
const d = c.slice(2, 6);

console.log(c);
console.log(c[2]);
console.log(c[5]);

console.log("Subarray", d);
