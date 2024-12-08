function isEmpty(obj) {
    for(let key in obj) {
        return false;
    }
    return true;  
}
console.log(isEmpty({name : "rotem"}))
console.log(isEmpty({}))
console.log(Boolean({}))



////// task 2
let salaries = {
    rotem: 10,
    matan: 50,
    daniel: "male"
}

let sum = 0;
for(let name in salaries) {
    const salary = salaries[name]
    if(typeof salary === "number") {
        sum += salary
    }
}
console.log(sum)


///

function multiplyNumeric(obj) {
    for(let key in obj) {
        const value = obj[key]
        if(typeof value === "number") {
         obj[key] *= 2   
        }
    }
}
let menu = {
    width: 200,
    height: 300,
    title: "hi"
}
console.log(menu)
multiplyNumeric(menu)
console.log(menu)





