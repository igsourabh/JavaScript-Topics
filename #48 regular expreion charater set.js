
let reg=/harry/i;
reg=/h[a-zA-z]rry/ //can be any from a to z//
reg=/h[aty]rry is [sb]ood [s]rogrammer/ //can be an a,t or y//
reg=/h[^aty]rry/ //can not be only at a, t , y//
reg=/h[a-zA-z]rry[0-9]/ //can be any k senstive or number//
// quentifires

reg=/har{2}y/  //r can occur exactly 2 times//
reg=/har{0,2}y/ //r can exactly 0 to 2 times//  

// groupping
reg=/(har){2}
reg=/(har){2}([0-9]r){3}/


let str="harhar1r4r5r bhai"
// let str="harry9 is good programmer" 

let result=reg.exec(str)

console.log(result)

if (reg.test(str)) {

    console.log(` ${str} match the exprection ${reg.source} `)
    
}

else{   
     console.log(`${str} not match the exprection ${reg.source}`)

}
