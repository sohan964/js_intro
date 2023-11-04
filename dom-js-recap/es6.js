//use of map

const numbers = [2,5,3,7];
//make double of numbers values

// const temp = numbers.map(x => x*2);
// console.log(temp);

const products = [
    {id:1, name: "laptop", price:5456},
    {id:2, name: "watch", price:5456},
    {id:3, name: "phone", price:5456}
];

//map return values
const items = products.map(product => product.name);
console.log(items);

//but forEach will not return any value with new line
products.forEach(product => console.log(product.name));


const newNumbers = [12, 5,23 , 45, 55];
//it will stor those value are >20 in the bigNums array
const bigNums = newNumbers.filter(number => number> 20);
console.log(bigNums);

//it will return only the first value which can diviable by 5
const fives = newNumbers.find(num => num % 5 ==0);
console.log(fives);

// .reduce is like accumulatorFunction use for sum of array
// need to use two para it will be like this  para1+=para2
const total = newNumbers.reduce ((para1,para2) => para1+para2, 0);
console.log(total); //140

//notation
const student = {
    marks : {
        math: 80,
        chemistry: 79,

    }
}

const chemistry = student['marks']['chemistry'];
console.log(chemistry);

const subject = "math";
const mark2 = student.marks[subject];
console.log(mark2);