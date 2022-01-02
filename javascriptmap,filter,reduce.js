
let ages = [20, 40, 64, 12, 45, 7, 4, 52, 54, 75, 57, 45, 69, 45, 64, 5];
let company=[
{name: "google", startingyear: "1964", category: "productbase", endyear: "2030"},
{name: "microsoft", startingyear: "1945", category: "servicebase", endyear: "2010"},
{name: "uber", startingyear: "1925", category: "productbase", endyear: "2040"},
{name: "amazone", startingyear: "1926", category: "servicebase", endyear: "2025"},
{name: "tesla", startingyear: "1970", category: "productbase", endyear: "2025"}

]

let total=0
for(let i=0;i<ages.length;i++){
  total+=ages[i]

}
console.log(total)

let redu=ages.reduce(function(total,ages) {
    return total+ages
    
},0)
console.log(redu)
let sorted=ages.sort(function(c1,c2) {
    if (c1<c2) {
        return 1
    }
    else{
        return-1
    }
    
})
console.log(sorted)


let sorted=company.sort(function(c1,c2) {
    if (c1.startingyear<c2.startingyear) {
        return 1
    }
    else{
        return-1
    }
    
})
console.log(sorted)




let ab=company.map(function(elemebt,index) {
    return `${elemebt.name} ${index}`
})
console.log(ab)






let com=company.filter(function(company) {
    
    
        if(company.endyear<="2030")
    
        {
                return true
            }
        })
        console.log(com)
        
        
        for(let i=0;i<=ages.length;i++){
        if (ages[i]>=20) {
            console.log(ages[i])
        }
        }
        
        

        let ab = ages.filter(function (find) {
  if (find >= 20) {
    return 22;
  }
});
console.log(ab);
