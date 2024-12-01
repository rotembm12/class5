
function promptUserAgeAndValidate(message) {
    let age = prompt(message);
    let numberedAge = Number(age);
    if(isNaN(numberedAge)) {
        alert("you are messing with me")
    } else {
        alert("your fine")
    }    
}

promptUserAgeAndValidate("What is your age buddy")
 

let shopName = prompt("Please enter the name", "Default")