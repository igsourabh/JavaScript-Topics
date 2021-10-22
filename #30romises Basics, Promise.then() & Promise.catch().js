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
