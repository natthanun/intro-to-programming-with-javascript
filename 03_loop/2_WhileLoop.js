// while(condition to loop){
// do something
// break;
// }
var lottery = prompt('เลขท้าย 2 ตัว');
// var giveUpTime = prompt('แทงทั้งหมดกี่งวด');
var nguad = 1;
var result = false;
while (!result) {
  var num = Math.round(Math.random() * 100);
  result = parseInt(lottery) === num;
  console.log(`งวดที่ ${nguad} เลขที่ออก ${num}:${result ? 'คุณถูกรางวัล' : 'คุณไม่ถูกรางวัล'}`);
  if (result) break;
  nguad++;
}
var profit = (result ? 2000 : 0) - 80 * nguad;
console.log(`คุณ${profit > 0 ? 'ได้กำไร' : 'ขาดทุน'}ไป ${Math.abs(profit)} บาท`);
