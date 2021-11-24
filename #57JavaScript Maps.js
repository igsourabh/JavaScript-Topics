


let mymap=new Map()
let key1="mystr",key2={},key3=function() {};
mymap.set(key1,"this is string")
mymap.set(key2,"this i objet")
mymap.set(key3,"thi is blank function")
// setting key value  
console.log(mymap)

// get the key 
let get=mymap.get(key2)
console.log(get)

// get the size of the map    
console.log(mymap.size)

// for getting key and value pairs using for loop
for(let [key,value] of mymap)
{console.log(key,value)
}


// only for getting keys 
for(let key of mymap.keys())
{console.log(key)
}

// only for getting value 
for(let value of mymap.values())
{console.log(value)
}

// get the key and value using foreach

mymap.forEach(function(value,keys) {

    console.log("key is",keys)
    console.log("value is",value)
    
})

