document.getElementById("totalTip").innerHTML = 0;
document.getElementById("total").innerHTML = 0;


function calculator() {
    var bill = document.getElementById("bill").value;
    var tipPercent = document.getElementById("tipPercent").value;
    var numOfPeople = document.getElementById("numOfPeople").value;

    // founding the tip
    tipPercent /= 100;
    tipPercent *= bill;
    var tipPercentPerPerson = Number(tipPercent) / Number(numOfPeople);
    document.getElementById("totalTip").innerHTML = tipPercentPerPerson;

    // founding the total 
    var total = Number(tipPercent) + Number(bill);
    var newTotal = Number(total) / Number(numOfPeople);
    document.getElementById("total").innerHTML = newTotal;

}