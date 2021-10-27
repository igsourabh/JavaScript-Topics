async function func1() {
    console.log("1")
    let response= await fetch('https://api.github.com/users')
    console.log("2")
    let data = await response.json()
    console.log("3")

    return data

}

console.log("4")

let a= func1()
console.log("5")
console.log(a)

a.then(data=> console.log(data))
console.log("6")
// after using async/await  will no need to using .then two times
