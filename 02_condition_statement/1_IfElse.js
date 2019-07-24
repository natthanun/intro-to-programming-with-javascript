// การตัดสินใจ เลือกบ้าน
//     - ผู้รับเหมาทำมาแล้วมากกว่า 10 โครงการ
//     - ไม่มีเสียงบ่นลูกบ้าน
//     - ราคาบ้านเกิน 2 ล้าน
//     - ถ้าเกิน 2 ล้าน พื้นที่ มากกว่า 100 ตารางเมตร
//     - กู้ผ่านหรือไม่

// Show Flowchart

var noOfContractorOwner;
var isComplain;
var price;
var area;
var isLoanApprove;

if (noOfContractorOwner > 10) {
  if (isComplain) {
    console.log('มีเสียงบ่นหว่ะ');
  } else {
    if (price > 2000000) {
      if (area > 100) {
        if (isLoanApprove) {
          console.log('ซื้อเลยจ้า');
        }
      } else {
        console.log('บ้านเล็กจุง');
      }
    } else {
      if (isLoanApprove) {
        console.log('ซื้อเลยจ้า');
      }
    }
  }
} else {
  console.log('ไม่น่าเชื่อถือ');
}
