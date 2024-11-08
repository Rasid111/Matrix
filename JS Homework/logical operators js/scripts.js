//task 1

const payPerHour = 3;

const productOne = {
    products: ['bread', 'water', 'oil'],
    cost: 10
}
const productTwo = {
    products: ['onion', 'milk', 'egg'],
    cost: 20
}
const productThree = {
    products: ['meat', 'cola', 'fruits', 'fish'],
    cost: 40
}
const productFour = {
    products: [...productOne.products, ...productTwo.products],
    cost: 70
}
const productFive = {
    products: [...productTwo.products, ...productThree.products],
    cost: 120
}

let input1 = document.querySelector("#hours");
let result1 = document.querySelector("#result1");

input1.addEventListener("input", (ev) =>{
    let hours = parseInt(ev.target.value);

    //solution 1

    // if(isNaN(hours)){
    //     result1.innerText = "Enter a proper value";
    // } else{
    //     money = hours * payPerHour;
    //     if(money < productOne.cost)
    //         result1.innerText = "You cannot buy anything";
    //     else if(money < productTwo.cost){
    //         result1.innerText = `You can buy ${[productOne.products]}`;
    //     }
    //     else if(money < productThree.cost){
    //         result1.innerText = `You can buy ${[productTwo.products]}`;
    //     }
    //     else if(money < productFour.cost){
    //         result1.innerText = `You can buy ${[productThree.products]}`;
    //     }
    //     else if(money < productFive.cost){
    //         result1.innerText = `You can buy ${[productFour.products]}`;
    //     }
    //     else{
    //         result1.innerText = `You can buy ${[productFive.products]}`;
    //     }
    // }

    //solution 2

    // switch (true) {
    //     case isNaN(hours):
    //         result1.innerText = "Enter a proper value";
    //         break;
    //     case hours * payPerHour < productOne.cost:
    //         result1.innerText = "You cannot buy anything";
    //         break;
    //     case hours * payPerHour < productTwo.cost:
    //         result1.innerText = `You can buy ${[productOne.products]}`;
    //         break;
    //     case hours * payPerHour < productThree.cost:
    //         result1.innerText = `You can buy ${[productTwo.products]}`;
    //         break;
    //     case hours * payPerHour < productFour.cost:
    //         result1.innerText = `You can buy ${[productThree.products]}`;
    //         break;
    //     case hours * payPerHour < productFive.cost:
    //         result1.innerText = `You can buy ${[productFour.products]}`;
    //         break;
    //     default:
    //         result1.innerText = `You can buy ${[productFive.products]}`;
    // }

    //solution 3

    result1.innerText = isNaN(hours) ? "Enter a proper value" : 
                        hours * payPerHour < productOne.cost ? "You cannot buy anything":
                        hours * payPerHour < productTwo.cost ? `You can buy ${[productOne.products]}`:
                        hours * payPerHour < productThree.cost ? `You can buy ${[productTwo.products]}`:
                        hours * payPerHour < productFour.cost ? `You can buy ${[productThree.products]}`:
                        hours * payPerHour < productFive.cost ? `You can buy ${[productFour.products]}`:
                        `You can buy ${[productFive.products]}`;
});

//task 2

const korpe = 3;
const usaq = 13;
const yeniyetme = 18;
const genc = 35;
const ortaYasli = 55;
const yasli = 90;
const mermer = Infinity

let input2 = document.querySelector("#age");
let result2 = document.querySelector("#result2");

input2.addEventListener("input", (ev) =>{
    let age = parseInt(ev.target.value);

    //solution 1

    // if(isNaN(age) || age < 0){
    //     result2.innerText = "Enter a proper value";
    // } else if(age < korpe)
    //     result2.innerText = "korpe";
    //     else if(age < usaq)
    //         result2.innerText = "usaq";
    //     else if(age < yeniyetme)
    //         result2.innerText = "yeniyetme";
    //     else if(age < genc)
    //         result2.innerText = "genc";
    //     else if(age < ortaYasli)
    //         result2.innerText = "ortaYasli";
    //     else if(age < yasli)
    //         result2.innerText = "yasli";
    //     else
    //         result2.innerText = "mermer";

    //solution 2

    // switch (true) {
    //     case isNaN(age) || age < 0:
    //         result2.innerText = "Enter a proper value";
    //         break;
    //     case age < korpe:
    //         result2.innerText = "korpe";
    //         break;
    //     case age < usaq:
    //         result2.innerText = "usaq";
    //         break;
    //     case age < yeniyetme:
    //         result2.innerText = "yeniyetme";
    //         break;
    //     case age < genc:
    //         result2.innerText = "genc";
    //         break;
    //     case age < ortaYasli:
    //         result2.innerText = "ortaYasli";
    //         break;
    //     case age < yasli:
    //         result2.innerText = "yasli";
    //         break;
    //     default:
    //         result2.innerText = "mermer";
    // }

    //solution 3

    result2.innerText = isNaN(age) || age < 0 ? "Enter a proper value" : 
                        age < korpe ? "korpe":
                        age < usaq ? "usaq":
                        age < yeniyetme ? "yeniyetme":
                        age < genc ? "genc":
                        age < ortaYasli ? "ortaYasli":
                        age < yasli ? "yasli":
                        "mermer";

});