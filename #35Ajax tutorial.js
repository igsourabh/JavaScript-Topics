// Get request 
let fetchbtn=document.getElementById("fetchbtn")
fetchbtn.addEventListener("click",buttonclickhandler)

function buttonclickhandler() {
    
const xhr= new XMLHttpRequest()
xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true)
  
//   this is for on progress
xhr.onprogress=function() {
    console.log("on progress")
    }
  
//   this is for onload
xhr.onload=function () {
    if (this.status===200) {
        
        console.log(this.responseText)
    }
    else{
        console.log("some error occured")
    }
}
xhr.send()
}

// for pot request
let fetchbtn=document.getElementById("fetchbtn")
fetchbtn.addEventListener("click",buttonclickhandler)

function buttonclickhandler() {
    
const xhr= new XMLHttpRequest()
// xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true)
xhr.open('POST','https://dummy.restapiexample.com/api/v1/create',true)
xhr.getResponseHeader('Content-type', 'application/json')

xhr.onprogress=function() {
    console.log("on progress")
    }
xhr.onload=function () {
    if (this.status===200) {
        
        console.log(this.responseText)
    }
    else{
        console.log("some error occured")
    }
}
params={"name":"test121","salary":"123","age":"23"}
xhr.send(params)
}
