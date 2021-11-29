
// destructoring in java script
let a, b,c;
// [a,b]=[34,564]
// console.log(a,b)


// [a,b,c,...d] = [1,2,3,4,5,6,7,8,9,10, 11, 12, 13]
// console.log(a,b,c,d)

({a,b,c,...d}={a:34,b:55,c:785,d:36,e:46})
// console.log(typeof((a,b,c)))
console.log(a,b,c,d)


const fruits=['apple','banana','mango','pinapple','grapes'];
// [a,b,c,d]=fruits
[a,b,c,...d]=fruits
console.log(a,b,c,d)

// object destrucring
const obj={
    name:"harry",
    model:"hp",
    age:"23",
    net:4555,
    start: function() {
        console.log(started)
}}
const {name,model,age,net} = obj
console.log(name,model,age,net)










