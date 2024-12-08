// let key = "something asfadsrandom";

const user = {
    name: "rotem",
    age: 32,
    car: 'seat',
    "new-car":20,
    [key]: {
        x: 10,
        y: 20
    }
}


function getNewUser(name = "rotem", age = 32) {
    return {
        name,
        age,
        car: "tesla",
        0: 10
    };

}
const newUser = getNewUser("rotem", 222);

// let keyChoosed = prompt("what key do u want to check if exists");

// console.log(keyChoosed in newUser)
for(let key in newUser){
    console.log(key,"=", newUser[key])
}