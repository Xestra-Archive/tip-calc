let bill = document.getElementById("bill").value;
let tipPercent = document.getElementById("tipPercent").value;
let numOfPeople = document.getElementById("numOfPeople").value;
let times = 0;

document.getElementById("totalTip").innerHTML = 0;
document.getElementById("total").innerHTML = 0;

function run() {
    if (times == 0) {
        calculator();
    } else {
        calculator();
        calculator();
    }
}

function calculator() {
    // founding the tip
    tipPercent /= 100;
    tipPercent *= bill;
    let tipPercentPerPerson = Number(tipPercent) / Number(numOfPeople);
    document.getElementById("totalTip").innerHTML = tipPercentPerPerson;

    // founding the total 
    let total = Number(tipPercent) + Number(bill);
    let newTotal = Number(total) / Number(numOfPeople);
    document.getElementById("total").innerHTML = newTotal;
    bill = document.getElementById("bill").value;
    tipPercent = document.getElementById("tipPercent").value;
    numOfPeople = document.getElementById("numOfPeople").value;

    times++;
}