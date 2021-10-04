
class Employee {
constructor(GivenName, GivenExperience, GivenLanguage){
   this.name=GivenName
   this.experience=GivenExperience
   this.language=GivenLanguage
}    
slogan(){
   return `${this.name} is the best employ`
}

joining(){

return ` ${this.name}Join this company   ${2021- this.experience} `

}
}
harry = new Employee('Harry',20,'Pythone')
console.log(harry)

// inheritance with class You have not need to edfiend every loggic in every class cunstructor

class Employee {
    constructor(GivenName, GivenExperience, GivenLanguage) {
        this.name = GivenName
        this.experience = GivenExperience
        this.language = GivenLanguage
    }
    slogan() {

        return `${this.name} is the best employ`
    }


    joining() {

        return 2021 - this.experience

    }

    static add(a, b) {

        return a + b;
    }

}

harry = new Employee('Harry', 20, 'Pythone')
// console.log(harry)

class Programer extends Employee {
    constructor(GivenName, GivenExperience, GivenLanguage, GivenGithub) {
        super(GivenName, GivenExperience, GivenLanguage)
        this.github = GivenGithub
    }

    favouritelanguage() {
        if (this.language == "python") {
            return "python"

        }
        else {
            return "go"
        }


    }
    static add(a, b) {
        return a + b; }
}
rohan = new Programer('rohan', 3, 'flutter', 'rohan420')

// console.log(rohan)
console.log(rohan.favouritelanguage())



