
// can be use in Object, string, array
console.log("***********for in loop************")

let obj={
    name: "harry",
    subject:"Python",
    salarry:"5000000"
}
obj="hary is my brother"

 obj=["one","two","three"]

for(let key in obj){
    console.log(obj[key])
}

// can be use in only string, array

console.log("***********for of loop************")
let abhi={
    name: "harry",
    subject:"Python",
    salarry:"5000000"
}
 abhi=["one","two","three"]
abhi="hary is my brother"

for(let name of abhi){
    console.log(name)
}


