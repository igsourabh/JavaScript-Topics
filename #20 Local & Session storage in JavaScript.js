// get locanl storage in console

localStorage.setItem('Name','Harry');
localStorage.setItem('Name2','Sir');

let nm=localStorage.getItem('Name')
console.log(nm)

// for clear entire local storage

localStorage.setItem('Name','Harry');
localStorage.setItem('Name2','Sir');
localStorage.clear()

let nm=localStorage.getItem('Name')
console.log(nm)

// for removing perticullar items
localStorage.setItem('Name','Harry');
localStorage.setItem('Name2','Sir');
localStorage.removeItem("Name")

let nm=localStorage.getItem('Name')
console.log(nm)



// convert string to array
localStorage.setItem('Name','Harry');
localStorage.setItem('Name2','Sir');
// localStorage.removeItem("Name")
let impArra=['adraq','pyaaz','bhindi']
localStorage.setItem('sabzi', JSON.stringify( impArra));

let n=JSON.parse(localStorage.getItem('sabzi'));
console.log(n)
