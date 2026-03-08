const priceAmount = document.querySelector("#price-amt-input");
const tipPercentAmt = document.querySelector("#tip-amt-input");
const addBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
const peopleNumber = document.querySelector("#num-of-people");
const totalPriceOutput = document.querySelector("#total-price-num");
const calculateBtn = document.querySelector("#calculate-btn");
const tipAmtOutput = document.querySelector("#tip-num");
const pricePerPerson = document.querySelector("#ppp-num");
const tipPerPerson = document.querySelector("#tpp-num");
let people = 0;
let total = 0;
let tip = 0;
let totalPerPerson = 0;
let tipPerPersonAmt = 0;
const calculateTip = (price,tipPercent) => {
    tip = price * (tipPercent/100);
}

addBtn.addEventListener("click", () => {
    people++;
    peopleNumber.textContent = people;
})

minusBtn.addEventListener("click", () => {
    people--;
    if(people >= 0){
        peopleNumber.textContent = people;
    }else{
        people = 0;
    }
})

const calculateTotal = (price, tipPercent) => {
    calculateTip(price, tipPercent);
    total = price + tip;
}

const calculatePerPerson = (price, tipPercent, people) => {
    calculateTotal(price, tipPercent);
    if(people > 0) {
        totalPerPerson = total / people;
        tipPerPersonAmt = tip / people;
    }
}

const calculateAll = () => {
    let price = Number(priceAmount.value);
    let tipPercent = Number(tipPercentAmt.value);
    if(people === 0){
        calculateTotal(price, tipPercent);
        totalPriceOutput.textContent = "$" + total.toFixed(2);
        tipAmtOutput.textContent = "$" + tip.toFixed(2);
    }else if(people > 0) {
        calculatePerPerson(price, tipPercent, people);
        totalPriceOutput.textContent = "$" + total.toFixed(2);
        tipAmtOutput.textContent = "$" + tip.toFixed(2);
        pricePerPerson.textContent = "$" + totalPerPerson.toFixed(2);
        tipPerPerson.textContent = "$" + tipPerPersonAmt.toFixed(2);
    }
}

calculateBtn.addEventListener("click", calculateAll);