//Array Problems
console.log("Array Practice Problems by using JS");

//Problem Print Ten Random numbers of three-digits and find the 2nd Smallest and 2nd Largest
let Random1 = Math.floor(Math.random() * 900 )+ 100;
console.log(Random1)
let Random2 = Math.floor(Math.random() * 900 )+ 100;
console.log(Random2)
let Random3 = Math.floor(Math.random() * 900 )+ 100;
console.log(Random3)
let Random4 = Math.floor(Math.random() * 900 )+ 100;
console.log(Random4)
let Random5 = Math.floor(Math.random() * 900 )+ 100;
console.log(Random5)
let Random6 = Math.floor(Math.random() * 900 )+ 100;
console.log(Random6)
let Random7 = Math.floor(Math.random() * 900 )+ 100;
console.log(Random7)
let Random8 = Math.floor(Math.random() * 900 )+ 100;
console.log(Random8)
let Random9 = Math.floor(Math.random() * 900 )+ 100;
console.log(Random9)
let Random10 = Math.floor(Math.random() * 900 )+ 100;
console.log(Random10)

let Numbers = [Random1,Random2,Random3,Random4,Random5,Random6,Random7,Random8,Random9,Random10];
console.log("Array of Numbers : "+Numbers);
let SortNums = Numbers.sort();
console.log("Sorted Array : "+SortNums);
console.log("The 2nd Smallest Number is : "+SortNums[1]);
console.log("The 2nd Largest Number is : "+SortNums[8]);