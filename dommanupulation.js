
let ch=document.querySelector(".no")
let third=ch.nextElementSibling.nextElementSibling
third.style.color="red"
console.log(third)

// if u have three element with same class the we use this method


let cl=document.getElementsByClassName("childul")
let ele=cl[2]
ele.style.color="red"
console.log(ele)
// easy  method for select singel class 


// imp note DON'T USE THIS METHOD
// let cl=document.getElementsByClassName("childul")
// console.log(cl[2])


let id=document.getElementById("myfirst")
let name=id.children[0].children[1]
name.innerText="red"
console.log(name)

// using id


