let idealCar = {


    Name: 'Mustang',
    Color: 'red',
    weight: 3600,
    
    myCar: function(){

    console.log("My ideal car is a " + this.Name +" with a color of " + this.Color +", but I don't want it to be over" + this.weight + "pounds.");
 } 
};

 idealCar.myCar();