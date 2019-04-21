document.getElementById("totalTip").innerHTML = 0;
document.getElementById("total").innerHTML = 0;


function calculator() {
    var bill = document.getElementById("bill").value;
    var tipPercent = document.getElementById("tipPercent").value;
    var numOfPeople = document.getElementById("numOfPeople").value;

    // founding the tip
    tipPercent /= 100;
    tipPercent *= bill;
    var tipPercent = Number(tipPercent) / Number(numOfPeople)
    document.getElementById("totalTip").innerHTML = tipPercent;

    // founding the total 
    var total = Number(tipPercent) + Number(bill);
    var total = Number(total) / Number(numOfPeople);
    document.getElementById("total").innerHTML = total;

}