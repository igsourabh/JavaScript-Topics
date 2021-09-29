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
