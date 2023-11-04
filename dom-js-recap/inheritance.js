class A{
    name;
    id;
    address;
    constructor(name, id, address){
        this.name = name;
        this.id = id;
        this.address = address;
    }
    vatija(status){
        console.log(`ki obostha vatija ${status}`);
    }
}

class B extends A{
    roll;
    constructor(name, id, address, roll){
        super(name,id,address);
        this.roll = roll;
    }
}

const b1 = new B('sohan', 23, "golmunda", 29);
console.log(b1);

b1.vatija("valo");