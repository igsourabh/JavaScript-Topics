function func1() {

    return new Promise(function(resolve,reject){
 setTimeout(() => {
     const error=true;
     if (!error) {
         console.log("Thanks for resolve")
     resolve()
        }
         else{console.log("not resolved")
         reject()
     }
 }, 2000);       
    })
    
}

func1().then(function() {
console.log("thanks")

    
}).catch(function() {
    console.log("not been resolved")
    
})

// promiss using call back 



let students = [
        {name: "harry", subject: "JavaScript"},
        {name: "Rohan", subject: "Machine Learning"}
     ]



     function enrollStudent(student) {
         return new Promise(function(resolve,reject) {
             
              setTimeout(() => {
                   students.push(student) 
                  console.log("student has been enrolled")
                  const err=true
                  if (!err) {
                      resolve()
                  }

                  else{
                reject()
                  }
                }, 5000);
           
    })
         
     }
 
     function getstudents() {
         setTimeout(() => {
             let str="";
            students.forEach(function(student) {
                str+= `<li>${student.name}</li>`
                
            });
            document.getElementById("students").innerHTML=str;
            console.log("student has benn fetched")
            }, 2000);
         
     }
         let newstudent = {name: "Sourabh", subject: "Learning"}    

enrollStudent(newstudent).then(getstudents).catch(function() {console.log("some error occur")
    
})
// getstudents()
