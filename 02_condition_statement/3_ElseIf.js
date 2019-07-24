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

if (noOfContractorOwner <= 10) {
  console.log('ไม่น่าเชื่อถือ');
} else if (isComplain) {
  console.log('มีเสียงบ่นหว่ะ');
} else if (price > 2000000 && area < 100) {
  console.log('บ้านเล็กจุง');
} else if (isLoanApprove) {
  console.log('กู้ไม่ผ่าน');
} else {
  console.log('ซื้อเลยจ้า');
}
