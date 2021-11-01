
let ge=/harry/g;
// g for global sope
// i for k sensitive
let a="this is harry and harry is good boy"

// it will show the index of word
let sec=ge.exec(a)

if (sec) {
    
    console.log(sec)
}

// this is for test it will give true and false in input
let sec2=ge.test(a)
console.log(sec2)


// this is for search
let sec3=a.match(ge)
if (sec3) {
    console.log(sec3)
}

// for search it will give 2 and -1 in input
let sec4=a.search(ge)
console.log(sec4)


// for replacing
let sec5=a.replace(ge,"shubham")
console.log(sec5)
