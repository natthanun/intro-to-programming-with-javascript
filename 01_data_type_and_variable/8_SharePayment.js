var a = 50;
var b = 45;
var c = 62;
var water = 20;
var snack = 150;

var discountFood = 10; // %
var serviceChargeFactor = 1.1;
var vatFactor = 1.07;

var foodAmount = a + b + c + snack;
var foodAmountAfterDisscount = (1 - discountFood / 100) * foodAmount;
var total = foodAmountAfterDisscount + water;
var pay = total * serviceChargeFactor * vatFactor;

var share = (snack * (1 - discountFood / 100) + water) / 3;
var aPay = (a * (1 - discountFood / 100) + share) * serviceChargeFactor * vatFactor;
var bPay = (b * (1 - discountFood / 100) + share) * serviceChargeFactor * vatFactor;
var cPay = (c * (1 - discountFood / 100) + share) * serviceChargeFactor * vatFactor;

console.log(aPay);
console.log(bPay);
console.log(cPay);
console.log(aPay + bPay + cPay);
console.log(pay);
