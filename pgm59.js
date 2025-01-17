let car = {
    name: 'Innova',
    model: 'SUV',
    manufacturer: 'Toyota',
    price: 2700000
}

//1) display car name and manufacturer
// car name is innova and manufacturer is toyota
//2) check 'model' key is present or not , if present print model
//3) add variant(manual or automatic ) to the car
//4) add color key with values, black, white, silver

console.log(`Car name is ${car.name} and manufacturer is ${car.manufacturer}`);
if ("model" in car) {
    console.log(`Car model is ${car.model}`)
}
car.variant =['automatic', 'manual']
console.log(car)

car.color = ['black','white','silver']
console.log(car)
car.type={
    sample1:'petrol',
    sample2:'diesel'
}
console.log(car)


const allkeys=Object.keys(car);
console.log(allkeys)