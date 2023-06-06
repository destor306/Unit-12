class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        console.log("Beep");
    }
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year} `
    }
}

class Car extends Vehicle{
    constructor(make,model, year){
        super(make,model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine(){
        console.log("VROOM");
    }
}

class Garage{
    constructor(num_cars){
        this.capacity = num_cars;
        this.vehicles = [];
    }
    add(new_vehicle){
        if(this.capacity === this.vehicles.length){
            return "Sorry, we're full";
        }

        if(!(new_vehicle instanceof Vehicle))
        {
            return "Only vehicles are allowed in here!";
        }
        this.vehicles.push(new_vehicle);
            return "Vehicle added";
    }
}