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

