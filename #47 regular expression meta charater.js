
let reg=/harry/i;
 reg=/^h/ //Start with ^//
 reg=/e$/ //ends with //
 reg=/h.rry/ //. is use fo any singl charter at the bplace of pont value//
 reg=/h*rry/ //* is use for multiple charate place of * value//


let str="hsdsdrry isdasdasdadadasd good programmer"

let result=reg.exec(str)


console.log(result)



if (reg.test(str)) {

    console.log(` ${str} match the exprection ${reg.source} `)
    
}

else{   
     console.log(`${str} not match the exprection ${reg.source}`)


    

}
