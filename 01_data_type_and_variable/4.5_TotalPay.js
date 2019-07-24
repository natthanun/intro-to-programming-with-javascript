// คิดราคาอาหาร ลด 20 %
console.log(1.07 * 1.1 * (0.8 * 1500));
console.log(1.07 * 1.03 * (0.8 * 1500));
console.log(1.07 * 1.1 * (0.8 * 1500));
// กรอก vat กับ service charge ซ้ำไปมา
// ยังไงก็ไม่เปลี่ยน เก็บไว้สักที่

var vatFactor = 1.07;
var serviceChargeFactor = 1.1;

var price = prompt('ราคาอาหาร');
var discount = prompt('ส่วนลด');
var payment = (1 - discount / 100) * price * vatFactor * serviceChargeFactor;

console.log('pay= ' + payment + ' บาท');
