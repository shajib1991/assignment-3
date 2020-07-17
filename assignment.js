// 1. Feet to Mile conversion code
function feetToMile(feet) {
    var mile = feet * 0.000189393939;
    return mile;
}
var result = feetToMile(100);
console.log("Completed Conversion is", result, "miles");


// 2. Wood Calculation code
function woodCalculator(chair, table, bed) {
    const woodForChair = 1;
    const woodForTable = 3;
    const woodForBed = 5;

    var makeChair = chair * woodForChair;
    var makeTable = table * woodForTable;
    var makeBed = bed * woodForBed;

    var totalWood = makeChair + makeTable + makeBed;
    return totalWood;
}
var furniture = woodCalculator(5, 10, 6);
console.log("Total Woods need", furniture, "cubic Feet");

// 3. Bricks Calculation Code

function brickCalculator(numberOfStoried) {
    const bircksPerFeet = 1000;
    const fifteenFeet = 10;
    const tweleveFeet =10;
    if (numberOfStoried <= 10) {
        var totalBricks = numberOfStoried * bircksPerFeet * 15;
    }
    else if (numberOfStoried <= 20){
        var firstStep = fifteenFeet * bircksPerFeet *15;
        var secondStep = (numberOfStoried - fifteenFeet) * bircksPerFeet * 12;
        var totalBricks = firstStep + secondStep;

    }
    else if (numberOfStoried > 20){
        var firstStep = fifteenFeet * bircksPerFeet *15;
        var secondStep = tweleveFeet * bircksPerFeet * 12;
        var thirdStep = (numberOfStoried - 20) * bircksPerFeet * 10;
        var totalBricks = firstStep + secondStep + thirdStep;
    
    }
    return totalBricks;

}

var result = brickCalculator(100);
console.log("Number of bricks need for this buildings are", result, "pcs");

// 4. Tiny Friends name

function tinyFriend(name) {
    for(var i = 0; i < name.length; i++)
    var length = name[i];
    var tiny = Math.min(length);
    return length;
}

var friends = ['Shajib', 'Raju', 'Mithu', 'Bakhtiar', 'Raj'];
var result = tinyFriend(friends);
console.log("The tiny name of my friend is", result);




