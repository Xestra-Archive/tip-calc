var bill = document.getElementById("bill").value;
var tipPercent = document.getElementById("tipPercent").value;
var numOfPeople = document.getElementById("numOfPeople").value;
var times = 0;

document.getElementById("totalTip").innerHTML = 0;
document.getElementById("total").innerHTML = 0;

function run() {
    if (times == 0) {

        calculator();
        console.log("ter");
    } else {
        calculator();
        calculator();
        console.log("tetrer");
    }
}

function calculator() {
    // founding the tip
    tipPercent /= 100;
    tipPercent *= bill;
    var tipPercentPerPerson = Number(tipPercent) / Number(numOfPeople);
    document.getElementById("totalTip").innerHTML = tipPercentPerPerson;

    // founding the total 
    var total = Number(tipPercent) + Number(bill);
    var newTotal = Number(total) / Number(numOfPeople);
    document.getElementById("total").innerHTML = newTotal;
    bill = document.getElementById("bill").value;
    tipPercent = document.getElementById("tipPercent").value;
    numOfPeople = document.getElementById("numOfPeople").value;

    times++;
}