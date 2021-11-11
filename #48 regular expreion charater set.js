
let reg=/harry/i;
reg=/h[a-zA-z]rry/ //can be any from a to z//
reg=/h[aty]rry is [sb]ood [s]rogrammer/ //can be an a,t or y//
reg=/h[^aty]rry/ //can not be only at a, t , y//
reg=/h[a-zA-z]rry[0-9]/ //can be any k senstive or number//

let str="harry9 is good programmer"

let result=reg.exec(str)

console.log(result)

if (reg.test(str)) {

    console.log(` ${str} match the exprection ${reg.source} `)
    
}

else{   
     console.log(`${str} not match the exprection ${reg.source}`)

}
