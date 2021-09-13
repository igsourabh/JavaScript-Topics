let a=document.links
let b="//google.com"
Array.from(a).forEach(function(elements) {
    if(elements.href.includes(b))
    console.log(elements.href)
})
