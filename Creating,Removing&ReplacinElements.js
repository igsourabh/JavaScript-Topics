// insert element in id

let ss=document.createElement("li")

ss.className=("dj")
ss.id=("007")
ss.setAttribute("type","list")
ss.innerText=("Pythons")

let ne=document.getElementsByClassName("no")[2]
ne.appendChild(ss)
console.log(ne)

// insert element in id

let ss=document.createElement("li")

ss.className=("dj")
ss.id=("007")
ss.setAttribute("type","list")
ss.innerText=("Pythons")

let ne=document.getElementById("myfirst")
ne.appendChild(ss)
console.log(ne)

// same in querryselector


// insert text node in element
let element=document.createElement("li")
element.className=("class1")
element.id=("Django")
element.setAttribute("type","list")

let text=document.createTextNode('Python')
element.appendChild(text)

let out=document.querySelector(".this")
out.appendChild(element)
console.log(out)




