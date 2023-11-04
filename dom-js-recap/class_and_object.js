class text{
    name;
    designation = "programmer";
    team = "ThreeByes";
    location;
    //constructor
    constructor(name, location){
        this.name =name;
        this.location = location;
    }

    //functions
    start(time){
        console.log(`rat ${time} tay`);
    }
}

//object creating
const obj1 = new text();
obj1.name = "kader";
obj1.start("7:50");
console.log(obj1);