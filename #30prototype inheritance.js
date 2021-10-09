

function Employe(Givenroll,Givenname,Givensalarry) {
    this.roll=Givenroll
    this.name=Givenname
    this.salarry=Givensalarry 
    
}
Employe.prototype.slogan= function() {
    return`this`
    
}

let emp=new Employe("dataAnalyst","harry",20000);

console.log(emp)

function Programme(Givenroll,Givenname,Givensalarry,GivenGit) {
    Employe.call(this,Givenroll,Givenname,Givensalarry)   
    this.git=GivenGit
}

Programme.prototype=Object.create(Employe.prototype)

rohan=new Programme("data","sharry",10000,"Git007")

console.log(rohan)
