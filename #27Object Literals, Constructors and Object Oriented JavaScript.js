// create object using funtion

function genralCar(givenName, givenSpeed, givenEngien) {
    this.name=givenName
    this.speed=givenSpeed
    this.engine=givenEngien
    this.run= function run() {
        console.log(`${this.name} is running`)
        return"hello"
    }
}
let car = new genralCar('Mustang GT',180,"v8")
console.log(car)

// analyze function compare car
function genralCar(givenName, givenSpeed, givenEngien) {
    this.name=givenName
    this.speed=givenSpeed
    this.engine=givenEngien
    this.run= function run() {
        console.log(`${this.name} is running`)
    }
    this.analyze=function() {
     console.log(`this car is faster then ${500-this.speed}km/H  meredese`)
        
    }
}
car = new genralCar('Mustang GT',280,"v8")
console.log(car)
