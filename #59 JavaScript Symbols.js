

let a=Symbol("hello")
let b=Symbol("hello")
console.log(a,b)
// symbols are not same even they have same value


let k1=Symbol("identifier for k1")
let k2=Symbol("identifier for k2")
// this is only for symbol identifier

myobj={}
myobj[k1]=("this is java script")
myobj[k2]=("this is python")
// this is for symbols key value 
myobj["name"]=("sourabh")
console.log(myobj)


for (key in myobj){
    console.log(key,myobj[key])
}
// symbols are not showing in for in loop

console.log(JSON.stringify(myobj))
// this is for convert object into JSON




