class Cow {
    constructor() {
        this.milkPerDay = 1;
        this.milkCost = 3;
    }
    get profitPerDay() {
        return this.milkPerDay * this.milkCost;
    }
    static cowCost = 300;
}

class Farmer {
    constructor() {
        this.cows = [new Cow];
        this.money = 0;
        this.milkPerDay = 0;
        this.profitPerDay = 0;
        this.totalMilkSold = 0;
        this.totalGain = 0;
        this.totalWorkedDays = 0;
        this.updateMilkPerDay();
        this.updateProfitPerDay();
    }
    updateMilkPerDay() {
        this.milkPerDay = 0;
        this.cows.forEach((cow) => {
            this.milkPerDay += cow.milkPerDay;
        })
        return this.milkPerDay;
    }
    updateProfitPerDay() {
        this.profitPerDay = 0;
        this.cows.forEach((cow) => {
            this.profitPerDay += cow.profitPerDay;
        })
        return this.profitPerDay;
    }
    runOneDay() {
        this.money += this.profitPerDay;
        this.totalMilkSold += this.milkPerDay;
        this.totalGain += this.profitPerDay;
        this.totalWorkedDays ++;
        if (this.money >= Cow.cowCost) {
            this.cows.push(new Cow());
            this.updateMilkPerDay();
            this.updateProfitPerDay();
            this.money -= Cow.cowCost;
        }
    }
    work(daysCount) {
        for (let i = 0; i < daysCount; i++) {
            this.runOneDay();
        }
        let stats = document.querySelector("#stats");
        stats.innerHTML = "";
        for (const key in this) {
            let p = document.createElement("p");
            p.innerText = `${key}: ${key === "cows" ? this[key].length : this[key]}`;
            stats.appendChild(p)
        }
    }

}

let farmer = new Farmer();
let daysCount = 0;
farmer.work(daysCount);
let errorMessage = document.querySelector("#error");
document.querySelector("#daysCount").addEventListener("input", (ev) => {
    daysCount = parseInt(ev.target.value);
    if (isNaN(daysCount))
        errorMessage.style.display = "block";
    else
        errorMessage.style.display = "none";
})
document.querySelector("#work").addEventListener("click", () => farmer.work(daysCount));



// const milkCost = 3;
// const milkPerCow = 1;
// const cowsCost = 300;

// function work(daysCount){
//     let cowsCount = 1;
//     let money = 0;
//     let totalGain = 0;
//     let totalMilkSold = 0;
//     let totalWorkedDays = 0;
//     let milkPerDay = milkPerCow * cowsCount;
//     let profitPerDay = milkCost * milkPerDay;

//     for (let i = 0; i < daysCount; i++) {
//         money += profitPerDay;
//         totalMilkSold += milkPerDay;
//         totalGain += profitPerDay;
//         totalWorkedDays++;
//         if (money >= 300) {
//             money -= 300;
//             cowsCount++;
//             milkPerDay = milkPerCow * cowsCount;
//             profitPerDay = milkCost * milkPerDay;
//         }
        
//     }

//     console.log("cowsCount:", cowsCount);
//     console.log("money:", money);
//     console.log("milkPerDay:", milkPerDay);
//     console.log("profitPerDay:", profitPerDay);
//     console.log("totalMilkSold:", totalMilkSold);
//     console.log("totalGain:", totalGain);
//     console.log("totalWorkedDays:", totalWorkedDays);
// }

// let daysCount = prompt("Days count");

// work(daysCount);