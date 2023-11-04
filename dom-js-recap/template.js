const person = 'adam sandler';
const person2 = "Ben White";
const person3 = `Dona
adam
sandler
kodu`;

console.log(person3);

//same1
const add = function ad(f1, f2){
    return f1+f2;
}
console.log(add(10,3));

//same2 it also called function or arrow function
//it will return auto
const add6 = (first, second) => first + second;
console.log(add6(2,3));

//but here for multi line code you must have to return value
const doMath = (x,y,z ) =>{
    const sum =x+y;
    const su2 = sum +z;
    return su2;
}

//spread operator 

const numbers = [12,14,30];
// it will give us the max value
const max = Math.max(2,4, 5,1);
console.log(max);

//max value from array (...) will convert the array to numbers;
//       [12,14,30] to (12,14,30)
const Larger = Math.max(...numbers);
console.log(Larger);

// pass array value to another array
//also we can add extra values
const numbers2 = [20, 1, ...numbers, 50];
console.log(numbers2);


// object
const fish = {
    name: "king hilsa",
    address: "Chandpur",
    color: "silver",
    phone: "01715642",
}

//we can create variable name of object attribute
//it's called destructuring
const {name} = fish;
console.log(name); //it will print name inside fish object

//array destructuring
const [first, another] = [40,20];

// output will be 
// first = 40
// another = 20


