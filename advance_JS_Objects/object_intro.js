const bottle = {color: 'yellow', price: 50, isCleaned:true, capacity: 1};
const keys = Object.keys(bottle);//will return array of keys which inside bottle object
console.log(keys);

// returning values
const values = Object.values(bottle);
console.log(values);

//showing like pair ['color', 'yellow']
const pair = Object.entries(bottle);
console.log(pair);

//delete key from object
delete bottle.isCleaned;
console.log(bottle);

//seal() object then property will not be delete
Object.seal(bottle);
delete bottle.color; //it will not work
bottle.price = 100; //but we can modify it
console.log(bottle);

// Object.freeze() unable to modify, add and delete
Object.freeze(bottle);
delete bottle.color;
bottle.price = 100;
//no changes
console.log(bottle);

//printing object proparties by forof
for(const v of Object.keys(bottle)){
    console.log(bottle[v]);
}

//essy way using forin loop 
for(const key in bottle){
    console.log(bottle[key]);
}

//print pair or entries using for of loop
for(const [key, value] of Object.entries(bottle)){
    console.log(key," ", value);
}

//use a method of a object use in another object
const apple ={
    name: "13pro",
    phone: function(){
        return this.name + (" apple phone");
    }
}
const pResult = apple.phone();
console.log(pResult);

const cina ={
    name:"cina 13pro",
}
//now calling function inside apple form cina object
const cResult = apple.phone.call(cina);
console.log(cResult);
//phone.apply(cina, [10, 1]); we can use insted of phone.call()

//also using bind() can called the function multple time
const cinaPhone = apple.phone.bind(cina);
console.log(cinaPhone()); //we can also pass paramiter
