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



// ruff program set car speed name nd engien using setName
function givenCar(GivenName, GivenEnigen,GivenSpeed) {
    this.name=GivenName
    this.engien=GivenEnigen
    this.speed=GivenSpeed
    this.run=function run() {
        console.log(`${this.name} is running at ${this.speed}`)
    }
    
givenCar.prototype.setName=function(newName) {
 this.name=newName

}

givenCar.prototype.setName2=function(newEngien) {
this.engien=newEngien
   }
   givenCar.prototype.setName3=function(newSpeed) {
    this.speed=newSpeed   
   }
givenCar.prototype.getName=function() {
        return this.name     
   }
     this.analyze=function() {
        console.log(`this is  ${this.speed-180}Km/H faster then audi r8 `)
    }
}
let car=new givenCar("Mustang","v8",240)
console.log(car)
