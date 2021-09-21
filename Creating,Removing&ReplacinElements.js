// insert element in class

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
element.className=("myclass")
element.id=("007")
element.setAttribute("type","list")

let textNODE=document.createTextNode("this is my text node")
element.appendChild(textNODE)

let els=document.querySelector(".this")
els.appendChild(element)


// replace exist defiened element in java script


let element=document.createElement("li")
element.className=("myclass")
element.id=("007")
element.setAttribute("type","list")

let textNODE=document.createTextNode("this is my text node")
element.appendChild(textNODE)

let els=document.querySelector(".this")
els.appendChild(element)


let replace=document.createElement("h1")
element.className=("myclass1")
element.id=("07")
element.setAttribute("type","li")

let txt=document.createTextNode("this is heading")
replace.appendChild(txt)

element.replaceWith(replace)


// repalce element with id 

let element=document.createElement("li")
element.className=("myclass")
element.id=("007")
element.setAttribute("type","list")

let textNODE=document.createTextNode("this is my text node")
element.appendChild(textNODE)


let repid=document.getElementById("myul1")
repid.replaceChild(element,document.getElementById('fui'))


// ruff program



let  ele1=document.createElement("li")
ele1.className=("elem")
ele1.id=("007")
ele1.setAttribute("type","element")

let txt=document.createTextNode("Hell11sssss111o")
ele1.appendChild(txt)

let sls=document.querySelector(".this")
sls.appendChild(ele1)





let  ele=document.createElement("li")
ele.className=("elem")
ele.id=("007")
ele.setAttribute("type","element")
let txt1=document.createTextNode("Hello")
ele.appendChild(txt1)

ele1.replaceWith(ele)
